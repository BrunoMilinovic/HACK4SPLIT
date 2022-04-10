import React from "react";
import Docotrlist from "../components/listadoktora";
import OstaliDoktori from "../components/Ostalidoktori";
import Navigations from "../components/navbar";
import Footer from "../components/footer";
import "../style/Listdoctorscreen.scss";
function DoctorList() {
  return (
    <div>
      <Navigations />
      <div>
        <div className="col1">
          <h2 id="naslov">Tvoj Doktor Opće prakse</h2>
        </div>
        <div className="col2" id="col22">
          <Docotrlist />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.9062469138385!2d15.96864631569419!3d45.813135979106676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e2d997afd7%3A0x63f08175237cc6ac!2sIlica%2033%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1649571320553!5m2!1sen!2shr"
            width="500"
            height="400"
            allowfullscreen=""
            title="hi"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col2" id="podnaslov2">
          <h2>Doktori opće prakse</h2>
        </div>
        <OstaliDoktori />;
      </div>
      <Footer />
    </div>
  );
}

export default DoctorList;
