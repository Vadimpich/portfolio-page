import {Col, Container, Row} from "react-bootstrap";
import './Footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={'footer'}>
            <div className='footer-image'>
                <Container className="h-100 d-flex align-items-center">
                    <Row className="w-100 align-items-center">
                        <Col sm={6}>
                            <p>&#34;Создаю уникальные решения, которые говорят за меня.&#34;</p>
                        </Col>
                        <Col sm={6} className="text-center text-sm-end">
                            <p>© {year} Пичурин Вадим. Все права защищены.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}