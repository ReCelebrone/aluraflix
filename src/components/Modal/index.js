import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ video, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...video });

    useEffect(() => {
        setFormData({ ...video });
    }, [video]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/videos/${video.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            onSave(data);
            onClose();
        })
        .catch(error => console.error('Erro ao editar vídeo:', error));
    };

    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose(); // Chama a função onClose ao clicar fora do modal
        }
    };

    return (
        <div className="modal" onClick={handleBackgroundClick}>
            <div className="modal-conteudo" onClick={e => e.stopPropagation()}>
                <h2>Editar Vídeo</h2>
                <p>Complete o formulário para editar o card de vídeo.</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Título:
                        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Digite o título do vídeo" required />
                    </label>
                    <label>
                        Categoria:
                        <select name="categoria" value={formData.categoria} onChange={handleChange} required>
                            <option value="FrontEnd">FrontEnd</option>
                            <option value="BackEnd">BackEnd</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                    </label>
                    <label>
                        Imagem:
                        <input type="text" name="capa" value={formData.capa} onChange={handleChange} placeholder="Link da imagem (obrigatório)" required />
                        <span className="campo-obrigatorio">O link é obrigatório</span>
                    </label>
                    <label>
                        Vídeo:
                        <input type="text" name="link" value={formData.link} onChange={handleChange} placeholder="Digite o link do vídeo" required />
                    </label>
                    <label>
                        Descrição:
                        <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Sobre o que é esse vídeo?"></textarea>
                    </label>
                    <div className="modal-botoes">
                        <button className="botao-limpar" type="button" onClick={() => setFormData({ titulo: '', categoria: '', capa: '', link: '', descricao: '' })}>Limpar</button>
                        <button className="botao-salvar" type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
