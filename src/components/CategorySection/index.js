import React from 'react';
import VideoCard from '../VideoCard';
import './CategorySection.css';

const CategorySection = ({ titulo, videos, onEdit, onDelete, categoria }) => {
    return (
        <section className={`secao-categoria ${categoria}`}>
            <h2 className={`titulo-categoria ${categoria}`}>{titulo}</h2>
            <div className="cartoes-videos">
                {videos.map(video => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        categoria={categoria} // Passa a categoria para VideoCard
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
