import React from "react";
import backIcon from '../../assets/images/icons/back.svg';
import logoGlobo from "../../assets/images/logobranco.png";
import { getTweets, approveTweet } from "../../actions/tweets";
import { connect } from 'react-redux';
import { routes } from "../Router";
import { push } from "connected-react-router";
import "./styles.css";


export class AdministratorScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hashTag: "#"
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("accessToken")

    if (token === null) {
      alert("Você precisa fazer o login");
      this.props.goToLoginScreen();
    } else {
      this.countdown = setInterval(this.setState.hashTag, 1000)
    }
  }

  handleInputChange = (event) => {
    this.setState({ hashTag: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getTweets(this.state.hashTag);
  }

  approveTweet = (id, user_tweet, content_tweet, tag) => {
    this.props.approveTweet(id, user_tweet, content_tweet, tag);
  }


  render() {
    return (
      <div id="page-approve-tweet" className="container">
        <header className="page-header">
          <div className="top-bar-container">
            <span>
              <img
                onClick={this.props.goToHomePage}
                src={backIcon} alt="Voltar"
              />
            </span>
            <img src={logoGlobo} alt="Globo" />
          </div>

          <div className="header-content">
            <strong>Painel para aprovar os tweets.</strong>
            <form onSubmit={this.handleSubmit} id="search-tweets">
              <div className="input-block">
                <label htmlFor="subject">Insira aqui sua hashtag:</label>
                <input
                  type="text"
                  id="week_day"
                  onChange={this.handleInputChange}
                  value={this.state.hashTag}
                />
              </div>
            </form>
          </div>
        </header>



        <main>
          {this.props.tweets &&
            this.props.tweets.map((tweet) => {
              return (
                <article className="tweet-item" key={tweet.id}>
                  <header>
                    <img src="https://logodownload.org/wp-content/uploads/2013/12/rede-globo-logo-4.png" alt="Logo Globo" />
                    <div>
                      <strong> <i>@{tweet.username}</i></strong>
                    </div>
                  </header>
                  <p>
                    {tweet.tweet}
                  </p>

                  <footer>
                    <button
                      onClick={() => this.approveTweet(tweet.id, tweet.username, tweet.tweet, this.state.hashTag)}
                      type="button"
                      className="btn-approve">
                      ACEITAR
                    </button>
                  </footer>
                </article>
              )
            })}

        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets.tweets
})

const mapDispatchToProps = dispatch => {
  return {
    goToLoginScreen: () => dispatch(push(routes.loginPage)),
    getTweets: (hashTag) => dispatch(getTweets(hashTag)),
    goToHomePage: () => dispatch(push(routes.root)),
    approveTweet: (id, user_tweet, content_tweet, tag) => dispatch(approveTweet(id, user_tweet, content_tweet, tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministratorScreen);
