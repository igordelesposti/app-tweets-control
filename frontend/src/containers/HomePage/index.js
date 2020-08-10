import React from 'react';
import logoGlobo from "../../assets/images/logobranco.png";
import twitterIcon from "../../assets/images/icons/twitter-64.ico";
import adminIcon from "../../assets/images/icons/administrator-64.ico";
import landingImg from "../../assets/images/landing.svg";
import { connect } from 'react-redux';
import { routes } from "../Router";
import { push } from "connected-react-router";
import './styles.css';

export class HomePage extends React.Component {
    render() {
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


                        <button
                            onClick={this.props.goToApprovedTweets}
                            className="tweets"
                        >
                            <img src={twitterIcon} alt="ApprovedTweets" />
                        Tweets
                        </button>

                        <button
                            className="admin"
                            onClick={this.props.goToAdministratorScreen}
                        >
                            <img src={adminIcon} alt="AdministratorScreen" />
                        Admin
                        </button>
                    </div>

                    <span className="total-connections">
                        &copy; 2020 Igor Delesposti
                </span>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToAdministratorScreen: () => dispatch(push(routes.administratorScreen)),
        goToApprovedTweets: () => dispatch(push(routes.approvedTweets))
    }
}
export default connect(null, mapDispatchToProps)(HomePage);