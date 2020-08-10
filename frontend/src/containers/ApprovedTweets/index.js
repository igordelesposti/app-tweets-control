import React from "react";
import backIcon from '../../assets/images/icons/back.svg';
import logoGlobo from "../../assets/images/logobranco.png";
import "./styles.css";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";


export class ApprovedTweets extends React.Component {
  render() {
    return (
      <div id="page-approve-tweet" className="container">
        <header className="page-header">
          <div className="top-bar-container">
            <span>
              <img onClick={this.props.goToHomePage}
              src={backIcon} alt="Voltar" />
            </span>
            <img src={logoGlobo} alt="Globo" />
          </div>

          <div className="header-content">
            <strong>Tweets aprovados.</strong>
          </div>
        </header>

        <main>
          <article className="tweet-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/56797122?s=460&u=cd8c24f112522c9ae9222d3e7947bbb11d04d7b5&v=4" alt="Igor Delesposti" />
              <div>
                <strong>@igordelesposti</strong>
              </div>
            </header>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <i>#loremipsum</i>
            </p>


          </article>
          <article className="tweet-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/56797122?s=460&u=cd8c24f112522c9ae9222d3e7947bbb11d04d7b5&v=4" alt="Igor Delesposti" />
              <div>
                <strong>@igordelesposti</strong>
              </div>
            </header>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <i>#loremipsum</i>
            </p>


          </article>
          <article className="tweet-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/56797122?s=460&u=cd8c24f112522c9ae9222d3e7947bbb11d04d7b5&v=4" alt="Igor Delesposti" />
              <div>
                <strong>@igordelesposti</strong>
              </div>
            </header>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <i>#loremipsum</i>
            </p>

          </article>
        </main>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToHomePage: () => dispatch(push(routes.root))
  }
}


export default connect(null, mapDispatchToProps)(ApprovedTweets);