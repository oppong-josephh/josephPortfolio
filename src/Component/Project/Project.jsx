import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Container } from "react-bootstrap";
import "./Project.css";

import Ayed from "../../assets/ayed.png";
import Dashboard from "../../assets/Dashboard.png";
import Juice from "../../assets/Local-Juice.png";
import Hensive from "../../assets/Hensive.png";
import CharmCity from "../../assets/CharmCity.png";
import Construction from "../../assets/construction.png";
import Holisctic from "../../assets/Holisctic.png";
import PortfolioUI from "../../assets/portfolio.png";

const Project = () => {
  return (
    <Container fluid className="project-warapper">
      <div className="portfolio text-center mb-5">
        <span>Recent Projects</span>
        <br />
        <span>Portfolio</span>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={Ayed} alt="AYED-IMG" />
          <div className="overlay">
            <p> AYED-GHANA <br /> <br /> <button><a href="https://www.ayedghana.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize">View site</a></button> </p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={Hensive} alt="HENSVIE-IMG" />
          <div className="overlay">
          <p> HOSPITAL MANAGEMENT SYSTEM <br /> <br /> <button><a href="https://www.figma.com/proto/ZT2Syyly082gGq00v0ApkB/Hensive?type=design&node-id=1-391&t=CXL0nF3bcEwoO1ns-1&scaling=scale-down-width&page-id=1%3A326&starting-point-node-id=1%3A391&mode=design" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize">View uI</a></button> </p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={Juice} alt="JUICE-IMG" />
          <div className="overlay">
            <p> LOCAL JUICE CENTER <br /> <br /> <button><a href="https://cheery-alfajores-211c72.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize">View site</a></button> </p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={Dashboard} alt="DASHBOARD-IMG" />
          <div className="overlay">
            <p> DASHBOARD-UI <br /> <br /> <button><a href="https://www.figma.com/proto/cWcCG6C2VQeuFbTRWUWMlD/first-UI%2FUX-Design?type=design&node-id=12-52&t=3PY7ZzFer4ZOjSWs-0&scaling=scale-down&page-id=12%3A51" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize">View UI</a></button> </p>
          </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={CharmCity} alt="CHARMCITY-IMG" />
          <div className="overlay">
            <p> MOVIE SITE <br /> <br /> <button><a href="https://magenta-sprite-e26f56.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize">View site</a></button> </p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={Construction} alt="CONSTRUCTION-IMG" />
          <div className="overlay">
            <p> CONSTRUCTION- UI<br /> <br /> <button><a href="https://www.figma.com/proto/0ztM5OQJIFDdhVyyxO4zX8/First-Web-Design?type=design&node-id=118-59&t=gR0F8mpHyNy8wMdB-1&scaling=scale-down&page-id=118%3A7&starting-point-node-id=118%3A59&mode=design" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize p-btn">View UI</a></button> </p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={Holisctic} alt="HOLISTIC-IMG" />
          <div className="overlay">
            <p> HOLISTIC COUNSELLING<br /> <br /> <button><a href="https://holisticcounsellingconsult.org/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize">View site</a></button> </p>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide-content">
        <img src={PortfolioUI} alt="PORTFOLIO-IMG" />
          <div className="overlay">
            <p> PORTFOLIO SITE <br /> <br /> <button><a href="https://www.figma.com/proto/KA43dWBk4fhwhXOokaLe48/My-Portfolio?node-id=1-2&mode=design&t=Mj2R70SkVApm5KrE-1" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white text-capitalize">View UI</a></button> </p>
          </div>
        </div>
        </SwiperSlide>

      </Swiper>
    </Container>
  );
};

export default Project;
