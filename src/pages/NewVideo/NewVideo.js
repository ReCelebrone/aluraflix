import React, { useState } from 'react';
import './NewVideo.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NewVideo = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        video: '',
        descricao: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Vídeo adicionado:', data);
            navigate('/'); // Redireciona para a página inicial após salvar
        })
        .catch(error => console.error('Erro ao adicionar vídeo:', error));
    };

    const handleBackClick = () => {
        navigate('/'); // Navega para a home ao clicar no botão Voltar
    };

    return (
        <div className="new-video">
            <Header />
            <button className="botao-voltar" onClick={handleBackClick}>
                <i className="fas fa-arrow-left"></i> Voltar
            </button>
            <div className="newvideo-conteudo">
                <h2>Novo Vídeo</h2>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Título:
                        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Digite o título do vídeo" required />
                    </label>
                    <label>
                        Categoria:
                        <select name="categoria" value={formData.categoria} onChange={handleChange} required>
                            <option value="Frontend">FrontEnd</option>
                            <option value="Backend">BackEnd</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                    </label>
                    <label>
                        Imagem:
                        <input type="text" name="imagem" value={formData.imagem} onChange={handleChange} placeholder="Link da imagem (obrigatório)" required />
                        <span className="campo-obrigatorio">O link é obrigatório</span>
                    </label>
                    <label>
                        Vídeo:
                        <input type="text" name="video" value={formData.video} onChange={handleChange} placeholder="Digite o link do vídeo" required />
                    </label>
                    <label>
                        Descrição:
                        <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Sobre o que é esse vídeo?"></textarea>
                    </label>
                    <div className="newvideo-botoes">
                        <button className="botao-limpar" type="button" onClick={() => setFormData({ titulo: '', categoria: '', imagem: '', video: '', descricao: '' })}>Limpar</button>
                        <button className="botao-salvar" type="submit">Salvar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default NewVideo;
