import React from "react";
import Navbar from "../components/navbar";
import DoctorCard from "../components/doctor";
import News from "../components/news";
import Footer from "../components/footer";
function Landing() {
  return (
    <div>
      <Navbar />

      <DoctorCard />
      <News />
      <Footer />
    </div>
  );
}

export default Landing;
