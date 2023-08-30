import React from 'react';
import Slider from "react-slick";
import '../App.css';


const Mobile: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 20000
    };

return (
    <Slider {...settings}>
    <div className='Introduce_1' >
        <div style={{ marginRight: "30px" }}>
            {/* <img src="image/web1.png" alt="web1" /><br/><br/> */}
            제작중<br/>
            <a href="https://github.com/veblen1/ssafy-public/tree/main/2%ED%95%99%EA%B8%B0%20%ED%8A%B9%ED%99%94%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8" target="_blank" rel="noopener noreferrer">
                GitHub 바로가기
            </a>
        </div>
    </div>
    </Slider>
);
}

export default Mobile;
