import React from "react";

function myFunction() {
  var element = document.getElementById("navbarTogglerDemo01");
  element.classList.toggle("show");
}
function login() {
  window.location.replace("/login");
}
function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid" style={{ marginLeft: 55 + "px" }}>
        <button
          class="navbar-toggler"
          type="button"
          onClick={() => myFunction()}
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        &nbsp;
        <a class="navbar-brand" href="#">
          Health<em style={{ color: "red" }}>+</em>
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <img src="../img/Screenshot.png" alt="" />
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Rezervirajte Termin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Dostupne Bolnice
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Darujte Krv
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Online Sastanak</a>
            </li>
          </ul>
          <button
            class="btn btn-outline-success"
            style={{ marginRight: 70 + "px" }}
            onClick={() => login()}
          >
            Logiraj se
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
