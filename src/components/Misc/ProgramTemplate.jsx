import github from "../../icons/github.svg";
import { EffectCoverflow, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Back } from "./Links"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const ProgramTemplate = ({ link, title, githubLink, description, programStack, images }) => {
    return (
        <div>
            <div className="ProgramHeader">
                <Back link={link} />
                <h1>{title}</h1>
                <div className="programLink">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={github} alt="GithubLogo" />
                    </a>
                </div>
            </div>
            <article id="ContentContainer">
                <div className="programInfo">
                    <div className="programDescription">
                        <div>
                            <h4>Description</h4>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className="programStack">
                        <div>
                            <h4>Stack</h4>
                        </div>
                        {programStack}
                    </div>
                </div>
                <div className="programImage">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        {
                            images != null ?
                                images.length > 0 ?
                                    images.map(image => (
                                        <SwiperSlide className="swiperSlide">
                                            {image}
                                        </SwiperSlide>
                                    ))
                                    : <></>
                                : <></>
                        }

                    </Swiper>
                </div>
            </article>
        </div>
    )
}

export default ProgramTemplate