import React from 'react';
import logoGlobo from "../../assets/images/logobranco.png";
import twitterIcon from "../../assets/images/icons/twitter-64.ico";
import adminIcon from "../../assets/images/icons/administrator-64.ico";
import landingImg from "../../assets/images/landing.svg";
import './styles.css';

function HomePage() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoGlobo} alt="Globo" />
                    <h2>Plataforma para seleção de Tweets</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">

                    <button className="study">
                        <img src={adminIcon} alt="Estudar" />
                        Admin
                    </button>
                    <button className="give-classes">
                        <img src={twitterIcon} alt="Dar aulas" />
                        Tweets
                    </button>
                </div>

                <span className="total-connections">
                    &copy; 2020 Igor Delesposti
                </span>
            </div>
        </div>
    );
}

export default HomePage;