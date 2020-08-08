import React from "react";
import backIcon from '../../assets/images/icons/back.svg';
import logoGlobo from "../../assets/images/logobranco.png";
import checkIcon from "../../assets/images/icons/check-64.ico"
import "./styles.css";




function AdministratorScreen() {
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
          <form id="search-tweets">
            <div className="input-block">
              <label htmlFor="subject">Pesquise sua hashtag :</label>
              <input type="text" id="week_day" />
            </div>
          </form>
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

          <footer>
            <button type="button" className="btn-reject">
              EXCLUIR
            </button>
            <button type="button" className="btn-approve">
              ACEITAR
            </button>
          </footer>
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

          <footer>
            <button type="button" className="btn-reject">
              EXCLUIR
            </button>
            <button type="button" className="btn-approve">
              ACEITAR
            </button>
          </footer>
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

          <footer>
            <button type="button" className="btn-reject">
              EXCLUIR
            </button>
            <button type="button" className="btn-approve">
              ACEITAR
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default AdministratorScreen;
