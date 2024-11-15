// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import './styles/index.css';
import NavBar from "./Components/Navbar/NavBar.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import GamePage from './Components/Portfolio/Game/GamePage.jsx';
import Education from "./Components/Education/Education.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
    const [selectedGame, setSelectedGame] = useState(null);

    // Crea i riferimenti per ciascuna sezione della pagina
    const aboutMeRef = useRef(null);
    const portfolioRef = useRef(null);
    const educationRef = useRef(null);

    const handleCardClick = (game) => {
        setSelectedGame(game); // Salva l'ID del gioco selezionato
    };

    const handleGoBack = () => {
        setSelectedGame(null); // Rimuove il gioco selezionato e torna al Portfolio
    };

    return (
        <div className={"bg-indigo-950 min-h-screen w-full mt-0"}>
            {/* Passiamo i riferimenti a NavBar */}
            <NavBar
                aboutRef={aboutMeRef}
                portfolioRef={portfolioRef}
                educationRef={educationRef}

            />
            {/* Sezioni della pagina con i riferimenti */}
            <section ref={aboutMeRef}>
                <AboutMe/>
            </section>
            <section ref={portfolioRef}>
                {/* Mostra la GamePage se un gioco è selezionato, altrimenti il Portfolio */}
                {selectedGame ? (
                    <GamePage game={selectedGame} onGoBack={handleGoBack} gameId={selectedGame}/>
                ) : (
                    <Portfolio onCardClick={handleCardClick}/>

                )}
                    </section>
                <section ref={educationRef}>
                    <Education/>
                </section>
                <Skills/>
                <Footer/>
        </div>
);
}

export default App;
