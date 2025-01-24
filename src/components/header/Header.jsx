import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import './Header.css'
import telegramLogo from '../../assets/images/telegram.png'
import vkLogo from '../../assets/images/vk.png'
import githubLogo from '../../assets/images/github.png'
import * as motion from "motion/react-client"

const sections = [
    {id: 'bio', label: 'Биография'},
    {id: 'skills', label: 'Технологии'},
    {id: 'projects', label: 'Проекты'},
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Получаем элементы для наблюдения
        const targets = sections.map((section) => document.getElementById(section.id));
        targets.forEach((target) => {
            if (target) observer.observe(target);
        });

        return () => {
            targets.forEach((target) => {
                if (target) observer.unobserve(target);
            });
        };
    }, []);

    return (
        <motion.div
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
            }}
        >
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href="#">
                        <h3>Pichurin Vadim</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto nav-links">
                            {sections.map((section) => (
                                <Nav.Link
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className={activeSection === section.id ? 'active-link nav-link' : 'nav-link'}
                                >
                                    {section.label}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/Vadimpich" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GH Icon"/>
                            </a>
                            <a href="https://t.me/vadimpich" target="_blank" rel="noopener noreferrer">
                                <img src={telegramLogo} alt="TG Icon"/>
                            </a>
                            <a href="https://vk.com/vadimpi4" target="_blank" rel="noopener noreferrer">
                                <img src={vkLogo} alt="VK Icon"/>
                            </a>
                        </div>
                    </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    );
}

