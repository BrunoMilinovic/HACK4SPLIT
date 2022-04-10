import React from "react";
import "../style/ListaDoktora.scss";
function listadoktora() {
  return (
    <main>
      <div class="card">
        <div class="card-left">
          <div class="card-img"></div>
        </div>
        <div class="card-right">
          <div class="card-title fw-7">
            Tvoj Doktor opće prakse - DE. Gloria Fong
          </div>
          <div class="card-text fw-5">
            Primary Care, Family Medicine,
            <br />
            Location: Newark DE,
            <br /> 41 years od experince
          </div>
          <button class="button22" role="button">
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              {" "}
              Zakažite termin
            </a>
          </button>
          <div class="card-right-body">
            <div class="card-rb-1">
              <img
                src="https://rvs-article-preview-component.netlify.app/images/avatar-michelle.jpg"
                alt=""
              />
            </div>

            <div class="card-rb-2">
              <div class="card-rb-2-title fw-7">DR. Gloria Fong</div>
              <div class="card-rb-2-text fw-5">28 Jun 20109</div>
              <div>
                <span class="fa fa-star " style={{ color: "red" }}></span>
                <span class="fa fa-star " style={{ color: "red" }}></span>
                <span class="fa fa-star " style={{ color: "red" }}></span>
                <span class="fa fa-star " style={{ color: "red" }}></span>
                <span class="fa fa-star"></span> &nbsp;1112 ratings
              </div>
            </div>
            <div class="card-rb-3">
              <div class="card-rb-3-inner"></div>
              <div class="card-rb-3-inner-before">
                <div class="before-1">SHARE</div>
                <div class="before-2">
                  <img
                    src="https://rvs-article-preview-component.netlify.app/images/icon-facebook.svg"
                    alt=""
                  />
                </div>
                <div class="before-3">
                  <img
                    src="https://rvs-article-preview-component.netlify.app/images/icon-twitter.svg"
                    alt=""
                  />
                </div>
                <div class="before-4">
                  <img
                    src="https://rvs-article-preview-component.netlify.app/images/icon-pinterest.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default listadoktora;
