import React from "react";
import backIcon from '../../assets/images/icons/back.svg';
import logoGlobo from "../../assets/images/logobranco.png";
import { getTweets } from "../../actions/tweets";
import { connect } from 'react-redux';
import { routes } from "../Router";
import { push } from "connected-react-router";
import "./styles.css";


export class AdministratorScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hashTag: ""
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("accessToken")

    if (token === null) {
      alert("Você precisa fazer o login")
      this.props.goToLoginScreen();
    }
  }

  handleInputChange = (event) => {
    this.setState({ hashTag: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getTweets(this.state.hashTag)
  }


  render() {
    return (
      <div id="page-approve-tweet" className="container">
        <header className="page-header">
          <div className="top-bar-container">
            <span>
              <img src={backIcon} alt="Voltar" />
            </span>
            <img src={logoGlobo} alt="Globo" />
          </div>

          <div className="header-content">
            <strong>Painel para aprovar os tweets disponíveis.</strong>
            <form onSubmit={this.handleSubmit} id="search-tweets">
              <div className="input-block">
                <label htmlFor="subject">Pesquise sua hashtag :</label>
                <input
                  type="text"
                  id="week_day"
                  onChange={this.handleInputChange}
                  value={this.state.hashTag}
                />
              </div>
              <button type="submit">PESQUISAR</button>
            </form>
          </div>
        </header>



        <main>
          {this.props.tweets &&
            this.props.tweets.map((tweet) => {
              return (
                <article className="tweet-item" key={tweet.id}>
                  <header>
                    {/* <img src="https://avatars2.githubusercontent.com/u/56797122?s=460&u=cd8c24f112522c9ae9222d3e7947bbb11d04d7b5&v=4" alt="Igor Delesposti" /> */}
                    <div>
                      <strong> <i>@{tweet.username}</i></strong>
                    </div>
                  </header>
                  <p>
                    {tweet.tweet}
                  </p>

                  <footer>
                    <button type="button" className="btn-reject">
                      EXCLUIR
                    </button>
                    <button type="button" className="btn-approve">
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
    getTweets: (hashTag) => dispatch(getTweets(hashTag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministratorScreen);
