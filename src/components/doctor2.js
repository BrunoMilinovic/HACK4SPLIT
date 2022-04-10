import React from "react";
import "../style/DoctorCard.scss";
function doctor() {
  return (
    <div className="container">
      <div className="container2">
        <div>
          <img src="https://media.istockphoto.com/photos/portrait-of-confident-young-medical-doctor-on-blue-background-picture-id1161336374?k=20&m=1161336374&s=612x612&w=0&h=ER2Gs06udn4kBPUy8SwLQR2su0GsRWe0kRHZvDbcQCc=" />
        </div>
        <div>
          <h1>Odabrani doktor - Dr. Allan Marks </h1>
          <p>
            Dr. Allan Marks diplomirao je na Medicinskom i stomatološkom
            fakultetu Sveučilišta u Rochesteru 1980. godine i završio
            specijalizaciju u Medicinskom centru Sveučilišta Stanford. Kad ne
            radi, uživa u igranju tenisa, planinarenju i druženju sa suprugom i
            njihovo troje djece.
          </p>

          <div className="container4">
            <div className="icon">
              <p>
                {" "}
                <i class="fa fa-phone" aria-hidden="true"></i>+3859557821
              </p>
            </div>
            <div className="icon">
              <p style={{ marginTop: 20 + "px" }}>
                {" "}
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <br /> Ruder Boškovića 10 , Split
              </p>
            </div>
            <div className="icon">
              <p>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                dr.adm@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default doctor;
