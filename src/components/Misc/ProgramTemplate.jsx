import {Link} from "react-router-dom";
import github from "../../icons/github.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import back from "../../icons/back.svg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProgramTemplate = ({link, title, githubLink, description, programStack, firstImage, secondImage, thirdImage}) => {
    return(
        <div>
            <div className="ProgramHeader">
                <div className="programButton">
                    <Link
                        to={link} 
                        state={"portfolio"}
                    >
                        <img className="logo" src={back} alt="Back" />
                    </Link>
                </div>
                <h1>{title}</h1>
                <div className="programLink">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"> 
                        <img className="logo" src={github} alt="GithubLogo"/> 
                    </a>
                </div>
            </div>
            <article id="ContentContainer">               
                <div className="programInfo">
                    <div className="programDescription">
                        <div className="ProjectHeader">
                            <h4>Description</h4>
                        </div>
                        <p>{description}</p>
                    </div>
                    {programStack}
                </div>
                <div className="programImage">
                    <Swiper
                        modules={[Navigation, A11y, Pagination, Scrollbar]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                    >
                        <SwiperSlide>
                            {firstImage}
                        </SwiperSlide>
                        <SwiperSlide>
                            {secondImage}
                        </SwiperSlide>
                        <SwiperSlide>
                            {thirdImage}
                        </SwiperSlide>
                    
                    </Swiper>
                </div>          
            </article>
        </div>
    )
}

export default ProgramTemplate