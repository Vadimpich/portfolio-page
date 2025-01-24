import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import './Bio.css'
import photo from '../../assets/images/photo.png'
import * as motion from "motion/react-client"

export const Bio = ({ openModal }) => {
    return (
        <section className={"bio"} id={"bio"}>
            <Container>
                <Row className={'align-items-center'}>

                    <Col xs={12} md={6} xl={7}>
                        <motion.div
                            initial={{x: -50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <h1>{'Привет, я Вадим'}</h1>
                            <span className={'tagline'}>Fullstack Веб-разработчик</span>
                            <p>Занимаюсь веб-разработкой с 2022 года</p>
                            <p>Студент МГТУ им. Баумана, факультет &#34;Информатика и системы управления&#34;</p>
                            <button onClick={openModal}>Связаться! <ArrowRightCircle size={24}/></button>
                        </motion.div>
                    </Col>


                    <Col xs={12} md={6} xl={5}>
                        <motion.div
                            initial={{x: 50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                <img src={photo} alt="Photo"/>
                            </motion.div>
                        </motion.div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}