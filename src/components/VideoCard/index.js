import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, onEdit, onDelete, categoria }) => {
    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:3000/videos/${video.id}`, { method: 'DELETE' });
            onDelete(video.id);
        } catch (error) {
            console.error('Erro ao deletar o vídeo:', error);
        }
    };

    return (
        <div className="cartao-video">
            <img
                src={video.capa}
                alt={video.titulo}
                className={`imagem-video ${categoria}`}
                onClick={() => window.open(video.link, "_blank")}
                style={{ cursor: 'pointer' }}  // Adiciona um cursor de ponteiro
            />
            <div className="info-video">
                <h3 className="titulo-video">{video.titulo}</h3>
                <div className="acoes-video">
                    <button className="botao-editar" onClick={() => onEdit(video)}>
                        <i className="fas fa-edit"></i> Editar {/* Ícone de Editar */}
                    </button>
                    <button className="botao-deletar" onClick={handleDelete}>
                        <i className="fas fa-trash-alt"></i> Deletar {/* Ícone de Deletar */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
