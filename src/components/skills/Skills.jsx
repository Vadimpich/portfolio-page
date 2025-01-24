import {Card, Col, Container, Row, Tab, Nav} from "react-bootstrap";
import './Skills.css'
import * as motion from "motion/react-client"
import {SkillsData} from "./skillsData.js";
import {useInView} from "react-intersection-observer";

export const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className={"skills"} id={"skills"}>
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
                <Container className={'skills-bx'}>
                    <h1 className={'text-center'}>Технологии</h1>
                    <p>Навыки, которые помогают мне превращать идеи в работающие решения.</p>
                    <Tab.Container defaultActiveKey={'framework'}>
                        <Nav variant="pills" className="mb-3 justify-content-center">
                            <Nav.Item>
                                <Nav.Link eventKey="framework">Фреймворки</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="hard">Хард-скиллы</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="soft">Софт-скиллы</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            {['framework', 'hard', 'soft'].map((tab) => {
                                return (
                                    <Tab.Pane eventKey={tab} key={tab}>
                                        <Col xs={12} className={"skills-section"}>
                                            <Row className={'justify-content-center'}>
                                                {SkillsData.filter(skill => skill.tab === tab).map((skill, index) => {
                                                    return (
                                                        <motion.div
                                                            ref={ref}
                                                            key={index}
                                                            initial="hidden"
                                                            animate={inView ? 'visible' : 'hidden'}
                                                            variants={{
                                                                hidden: {opacity: 0},
                                                                visible: {opacity: 1},
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: 0.7 + index * 0.2,
                                                            }}
                                                            className={'skill-card'}
                                                        >
                                                            <motion.div
                                                                whileHover={{scale: 1.05}}
                                                                transition={{
                                                                    type: "spring",
                                                                    stiffness: 200,
                                                                    damping: 10
                                                                }}
                                                            >
                                                                <Card className={'skill-card'}>
                                                                    <Card.Img src={skill.image} alt={skill.name}/>
                                                                    <Card.Body>
                                                                        <h4>{skill.name}</h4>
                                                                    </Card.Body>
                                                                </Card>
                                                            </motion.div>

                                                        </motion.div>
                                                    )
                                                })}
                                            </Row>
                                        </Col>
                                    </Tab.Pane>
                                )

                            })}
                        </Tab.Content>
                    </Tab.Container>
                    <Row className={'align-items-center'}>
                    </Row>
                </Container>
            </motion.div>
        </section>
    )
}