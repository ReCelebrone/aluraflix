import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CategorySection from '../../components/CategorySection';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import './Home.css';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        console.log("Fetching videos...");
        fetch('http://localhost:3000/videos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Videos fetched:", data);
                setVideos(data);
            })
            .catch(error => console.error('Erro ao obter vídeos:', error));
    }, []);

    const handleEdit = (video) => {
        console.log("Editing video:", video);
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const handleSave = (updatedVideo) => {
        console.log("Saving video:", updatedVideo);
        setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
        setIsModalOpen(false); // Fecha a modal após salvar
    };

    const handleDelete = (videoId) => {
        console.log("Deleting video ID:", videoId);
        setVideos(videos.filter(video => video.id !== videoId));
    };

    const frontendVideos = videos.filter(video => video.categoria === 'FrontEnd');
    const backendVideos = videos.filter(video => video.categoria === 'BackEnd');
    const mobileVideos = videos.filter(video => video.categoria === 'Mobile');

    return (
        <div className="home">
            <Header />
            <Banner />
            <CategorySection titulo="FrontEnd" videos={frontendVideos} onEdit={handleEdit} onDelete={handleDelete} categoria="frontend" />
            <CategorySection titulo="BackEnd" videos={backendVideos} onEdit={handleEdit} onDelete={handleDelete} categoria="backend" />
            <CategorySection titulo="Mobile" videos={mobileVideos} onEdit={handleEdit} onDelete={handleDelete} categoria="mobile" />
            <Footer />
            {isModalOpen && <Modal video={selectedVideo} onClose={() => setIsModalOpen(false)} onSave={handleSave} />}
        </div>
    );
};

export default Home;
