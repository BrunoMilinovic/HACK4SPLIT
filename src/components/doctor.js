import React from "react";
import "../style/DoctorCard.scss";
function doctor() {
  function myFunction() {
    window.location.replace("/login");
  }
  return (
    <div className="container">
      <div className="container2">
        <div>
          <img src="https://media.istockphoto.com/photos/portrait-of-confident-young-medical-doctor-on-blue-background-picture-id1161336374?k=20&m=1161336374&s=612x612&w=0&h=ER2Gs06udn4kBPUy8SwLQR2su0GsRWe0kRHZvDbcQCc=" />
        </div>
        <div>
          <h1>Zakaži točan termin s doktorom opće prakse</h1>
          <p>
            Kako ojačati imunitet i zaštititi zdravlje prije cijepljenja protiv
            koronavirusa? Što je dugi COVID i kako povratiti energiju nakon
            infekcije? Kako se pravilno hraniti i koji vitamini su neophodni?
            Kako trebaju vježbati trudnice, a kako oboljeli od kardiovaskularnih
            bolesti? Vodeći liječnici prvi put u Hrvatskoj odgovaraju na
            najčešća pitanja s kojima su se susreli u svojoj kliničkoj praksi!
          </p>
          <button class="button31" onClick={() => myFunction()}>
            ZAKAŽI TERMIN
          </button>
          <div className="container4">
            <div className="icon">
              <p>
                {" "}
                <i class="fa fa-user-md" aria-hidden="true"></i>Pristupačnost
              </p>
            </div>
            <div className="icon">
              <p>
                {" "}
                <i class="fa fa-clock-o" aria-hidden="true"></i>U pravo Vrijeme
              </p>
            </div>
            <div className="icon">
              <p>
                <i class="fa fa-heart" aria-hidden="true"></i>Sigurnost
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default doctor;
