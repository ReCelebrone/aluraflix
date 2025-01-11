import "./VideoDestacado.css";

const VideoDestacado = () => {
  const video = {
    link: "https://youtu.be/c8mVlakBESE",
    categoria: "Front End",
    titulo: "SEO com React",
    descripcion: "Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo."
  };

  const convertToEmbedLink = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === "www.youtube.com" && urlObj.pathname === "/embed") {
      return url;
    } else if (
      urlObj.hostname === "www.youtube.com" &&
      urlObj.pathname === "/watch"
    ) {
      const videoId = urlObj.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
      }
    } else if (urlObj.hostname === "youtu.be") {
      const videoId = urlObj.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    }
    return url;
  };

  const getThumbnailUrl = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === "www.youtube.com" && urlObj.pathname === "/watch") {
      const videoId = urlObj.searchParams.get("v");
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    } else if (urlObj.hostname === "youtu.be") {
      const videoId = urlObj.pathname.slice(1);
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return "";
  };

  return (
    <section className="destacado">
      <div className="descricao-destacado-video">
        <p className="categoria">{video.categoria}</p>
        <h1 className="titulo-video">{video.titulo}</h1>
        <p className="descricao-video">{video.descripcion}</p>
      </div>
      <div className="video-destacado">
        <a href={convertToEmbedLink(video.link)} target="_blank" rel="noopener noreferrer">
          <img src={getThumbnailUrl(video.link)} alt={video.titulo} className="video-imagem" />
        </a>
      </div>
    </section>
  );
};

export default VideoDestacado;
