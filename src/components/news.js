import React from "react";
import "../style/News.scss";
function myFunction(target) {
  var element = document.getElementById(`${target}`);
  element.classList.toggle("show");
}

function news() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <form action="#">
                <div class="form-group d-flex search-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Potraži pojmove "
                  />
                  <button type="submit" class="btn btn-primary ml-3">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="faq-block card-body">
                  <div class="container-fluid py-2">
                    <h5 class="mb-0">Pitanja o rezervaciji</h5>
                  </div>
                  <div id="accordion-1" class="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <a
                            onClick={() => myFunction("collapseOne")}
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Kako mogu rezervirati svoj termin?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          <p class="mb-0">
                            Prijavom preko e-građanina i klikom na botun ZAKAŽI
                            TERMIN otvoriti će se stranica s opcijom odabira
                            lječnika i njegovim/njezinim kalendarom.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <a
                            onClick={() => myFunction("collapseTwo")}
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Mogu li odabrati s kojim liječnikom razgovaram?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          <p class="mb-0">
                            Da, na početnoj stranici birate doktora/doktoricu
                            obiteljske medicine s kojim bi pričali. Možete
                            birate svoga lječnika obiteljske medicine ili
                            lječnika iz privatnog sektora.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <a
                            onClick={() => myFunction("collapseThree")}
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Mogu li razgovarati sa svojim obiteljskim
                            liječnikom?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          <p class="mb-0">
                            Da, spojeni ste s vašim osobnim doktorom.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="faq-block card-body">
                  <div class="container-fluid py-2"></div>
                  <div id="accordion-3" class="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne-3">
                        <h5 class="mb-0">
                          <a
                            onClick={() => myFunction("collapseOne-3")}
                            data-toggle="collapse"
                            data-target="#collapseOne-3"
                            aria-expanded="true"
                            aria-controls="collapseOne-3"
                          >
                            Kako funkcionira aplikacija ?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne-3"
                        class="collapse show"
                        aria-labelledby="headingOne-3"
                        data-parent="#accordion-3"
                      >
                        <div class="card-body">
                          <p class="mb-0">
                            U slučaju da imate sastanak s vašim osobnim
                            doktorom, sastanak je besplatan. U slučaju da imate
                            sasanak s privatnim lječnikom, sastanak se plaća
                            ovisno o cijeni.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo-3">
                        <h5 class="mb-0">
                          <a
                            onClick={() => myFunction("collapseTwo-3")}
                            data-toggle="collapse"
                            data-target="#collapseTwo-3"
                            aria-expanded="false"
                            aria-controls="collapseTwo-3"
                          >
                            Kako mogu dobiti recept?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo-3"
                        class="collapse"
                        aria-labelledby="headingTwo-3"
                        data-parent="#accordion-3"
                      >
                        <div class="card-body">
                          <p class="mb-0">
                            Da, možete zatražti recept online. Moći će te ga
                            skiniti tako da kliknete na svoje dokumente.
                            Ljekarne imaju dužnost prihvatiti online pripisane
                            recepte.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree-3">
                        <h5 class="mb-0">
                          <a
                            onClick={() => myFunction("collapseThree-3")}
                            data-toggle="collapse"
                            data-target="#collapseThree-3"
                            aria-expanded="false"
                            aria-controls="collapseThree-3"
                          >
                            Hoće li ga moja ljekarna prihvatiti?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree-3"
                        class="collapse"
                        aria-labelledby="headingThree-3"
                        data-parent="#accordion-3"
                      >
                        <div class="card-body">
                          <p class="mb-0">
                            Da, na aplikaciju se prijavljuje preko e-građanina
                            koji je osiguran najvišim levelom autentikacije.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default news;
