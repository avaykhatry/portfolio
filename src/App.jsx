import Footer from './components/layout/Footer';
import About from './sections/About';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Footer />
        </>
    )
}

export default Home;