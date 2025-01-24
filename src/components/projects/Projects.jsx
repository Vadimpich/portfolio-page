import {Col, Container, Row} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectCoverflow, Parallax, Autoplay} from 'swiper/modules';
import 'swiper/css/bundle';

import './Projects.css'
import {ArrowRightCircle} from "react-bootstrap-icons";
import * as motion from "motion/react-client"
import {ProjectsData} from "./projectsData.js";
import {useInView} from "react-intersection-observer";

export const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="projects" id="projects">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: {opacity: 0, y: 200},
                    visible: {opacity: 1, y: 0},
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                <Container className={'projects-bx'}>
                    <Row className={'align-items-center'}>
                        <Col xs={12} sm={12} className="align-items-center">
                            <h1>Проекты</h1>
                            <p>Мои проекты — это не просто код, а результат упорной работы и творчества.</p>
                            <Swiper
                                modules={[Navigation, Pagination, EffectCoverflow, Parallax, Autoplay]}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView="auto"
                                spaceBetween={100}
                                parallax={true}
                                effect={"coverflow"}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,

                                }}
                                navigation
                                pagination={{clickable: true}}
                                style={{
                                    width: '80%',
                                    borderRadius: '32px'
                                }}
                                autoplay={{delay: 7000}}
                                className="mb-5"
                            >
                                {ProjectsData.map((item) => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <Row className="align-items-center h-100">
                                                <Col xs={12} md={6} xl={6} className={'align-items-center'}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <a href={item.link}>
                                                        <button>Перейти на сайт <ArrowRightCircle size={24}/></button>
                                                    </a>
                                                </Col>
                                                <Col xs={12} md={6} xl={6} className={'align-items-center'}>
                                                    <img src={item.image} className={'slide-img'} alt="123"/>
                                                </Col>
                                            </Row>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </section>
)
}