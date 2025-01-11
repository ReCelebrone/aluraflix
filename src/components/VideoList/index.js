import React, { useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import Modal from '../Modal/Modal';

const VideoList = ({ videos, setVideos }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = (video) => {
        setSelectedVideo(video);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };

    const handleSaveVideo = (updatedVideo) => {
        setVideos(prevVideos => 
            prevVideos.map(video => 
                video.id === updatedVideo.id ? updatedVideo : video
            )
        );
        setIsModalOpen(false);
    };

    return (
        <div>
            {videos.map(video => (
                <VideoCard 
                    key={video.id}
                    video={video}
                    onEdit={handleEditClick}
                    onDelete={(videoId) => setVideos(videos.filter(v => v.id !== videoId))}
                />
            ))}

            {isModalOpen && (
                <Modal 
                    video={selectedVideo} 
                    onClose={handleCloseModal} 
                    onSave={handleSaveVideo}
                />
            )}
        </div>
    );
};

export default VideoList;
