import React from "react";
import backIcon from '../../assets/images/icons/back.svg';
import logoGlobo from "../../assets/images/logobranco.png";
import "./styles.css";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { getApprovedTweets } from "../../actions/tweets"


export class ApprovedTweets extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getApprovedTweets();
    }, 5000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  
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
          {this.props.approvedTweets &&
            this.props.approvedTweets.map((tweet) => {
              return (
                <article className="tweet-item" key={tweet.id}>
                  <header>
                    <img src="https://logodownload.org/wp-content/uploads/2013/12/rede-globo-logo-4.png" alt="Logo Globo" />
                    <div>
                      <strong><i>@{tweet.user_tweet}</i></strong>
                    </div>
                  </header>

                  <p>
                    {tweet.content_tweet}
                  </p>
                </article>
              )
            })}

        </main>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  approvedTweets: state.tweets.approvedTweets
})

const mapDispatchToProps = dispatch => {
  return {
    getApprovedTweets: () => dispatch(getApprovedTweets()),
    goToHomePage: () => dispatch(push(routes.root))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ApprovedTweets);