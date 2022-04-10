import React from "react";
import "../style/Registartion.scss";

function Registation() {
  return (
    <div className="body2">
      <div id="main-wrapper" class="container ">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="card border-0">
              <div class="card-body p-0">
                <div class="row no-gutters">
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="mb-2">
                        <h3 class="h4 font-weight-bold text-theme">
                          Registriraj se
                        </h3>
                      </div>

                      <p class="text-muted mt-2 mb-1">
                        Dobijte savjet stručnjaka, plan liječenja i recepte ako
                        je potrebno.
                      </p>
                      <form>
                        <div class="form-group">
                          <label for="yourName">OIB</label>
                          <input
                            type="password"
                            class="form-control"
                            id="yourName"
                            placeholder="XXX-XXX-XXXX"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">MBO</label>
                          <input
                            type="password"
                            class="form-control"
                            id="yourName"
                            placeholder="XXX-XXX-XXXX"
                          />
                        </div>
                        <div class="form-group ">
                          <label for="exampleInputPassword1">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="example@gmail.com"
                          />
                        </div>
                        <div class="form-group mb-5">
                          <label for="exampleInputPassword2">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword2"
                            placeholder="Password"
                          />
                          <button class="button24" role="button">
                            e-gradanin
                          </button>
                          <div className="privatepolicy">
                            <input
                              type="checkbox"
                              class="btn-check"
                              id="btn-check-outlined"
                              autocomplete="off"
                            />

                            <label
                              style={{
                                width: 40 + "px",
                                height: 40 + "px",
                                marginTop: 0 + "px",
                              }}
                              class="btn btn-outline-primary"
                              for="btn-check-outlined"
                            >
                              <i
                                style={{
                                  width: 20 + "px",
                                  height: 20 + "px",
                                  paddingRight: 10 + "px",
                                }}
                                class="fa fa-check"
                                aria-hidden="true"
                              ></i>
                            </label>

                            <label
                              for="exampleInputPassword3"
                              className="private"
                              style={{ marginLeft: 10 + "px" }}
                            >
                              By clicking "Continue", you are agreeing to the
                              PlushCare{" "}
                              <em className="emlink">
                                Terms of use, Privacy Policy
                              </em>{" "}
                              &
                              <em className="emlink">
                                Telehealth Consemt Policy.
                              </em>
                            </label>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-theme">
                          <a
                            href="/doctor"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {" "}
                            Register
                          </a>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-none d-lg-inline-block">
                    <div class="account-block rounded-right">
                      <div class="overlay rounded-right"></div>
                      <div class="account-testimonial">
                        <h4 class="text-white mb-4">
                          This beautiful theme yours!
                        </h4>
                        <p class="lead text-white">
                          "Best investment i made for a long time. Can only
                          recommend it for other users."
                        </p>
                        <p>- Admin User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-muted text-center mt-3 mb-0">
              Already have an account?{" "}
              <a href="login.html" class="text-primary ml-1">
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registation;
