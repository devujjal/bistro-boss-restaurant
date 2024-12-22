import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {


    return (
        <section>
            <Carousel
                className="z-0"
                showThumbs={true} // Enable thumbnails
            >
                <div>
                    <img src="https://i.ibb.co.com/sg3Nssh/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/crjZZrD/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/KqhG4Vz/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/D5VY9Vw/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/8PdgnvF/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/LRpHg4m/06.png" />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;