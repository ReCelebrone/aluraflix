import './Banner.css';
import VideoDestacado from '../VideoDestacado';

const Banner = ({ img, }) => {
    return (
        <div className="container-banner">
            <div className="banner">
                <VideoDestacado />
            </div>
        </div>
    );
};

export default Banner;
