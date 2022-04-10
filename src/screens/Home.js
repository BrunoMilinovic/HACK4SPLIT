import React from "react";
import Navbar from "../components/navbar";
import Calendar from "../components/calendar";
import Doctor2 from "../components/doctor2";
import TimeList from "../components/timelist";
import Footer from "../components/footer";
import "../style/Home.scss";
function Home() {
  return (
    <div>
      <Navbar />
      <Doctor2 />
      <div className="columns">
        <div className="row2">
          <iframe
            className="karta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.906060212016!2d15.968646315250744!3d45.81313971811339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e2d997afd7%3A0x63f08175237cc6ac!2sIlica%2033%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1649553802785!5m2!1sen!2shr"
            width="700"
            height="370"
            allowfullscreen=""
            loading="lazy"
            title="hi"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row2" id="row22">
          <Calendar />
          <TimeList />
        </div>
      </div>
      <div className="fos">
        <div>
          <p>Ilica 33, 10000, Zagreb</p>
        </div>
        <div>
          <p>Saturday: Closed</p>
        </div>
        <div>
          <p>+385975172721</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
