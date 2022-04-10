import React from "react";
import "../style/listTime.scss";

function timelist() {
  function myFunction(target) {
    var popup = document.querySelector(`#${target}`);
    popup.classList.toggle("show");
    setTimeout(() => {
      window.location.replace("http://localhost:3000/land");
    }, 2500);
  }
  return (
    <div className="ColumnTime" id="mob">
      <div className="mobrow">
        <button class="popup button6" onClick={() => myFunction("myPopup")}>
          8 : 00 h
          <span class="popuptext" id="myPopup">
            Uspješna rezervacija!
          </span>
        </button>
        <button class="popup button6" onClick={() => myFunction("myPopup9")}>
          9 : 00 h
          <span class="popuptext" id="myPopup9">
            Uspješna rezervacija!
          </span>
        </button>
        <button class="popup button6" onClick={() => myFunction("myPopup2")}>
          10 : 00 h
          <span class="popuptext" id="myPopup2">
            Uspješna rezervacija!
          </span>
        </button>
      </div>
      <div className="mobrow">
        <button class="popup button6" onClick={() => myFunction("myPopup3")}>
          12 : 20 h
          <span class="popuptext" id="myPopup3">
            Uspješna rezervacija!
          </span>
        </button>
        <button class="popup button6" onClick={() => myFunction("myPopup3")}>
          15 : 35 h
          <span class="popuptext" id="myPopup3">
            Uspješna rezervacija!
          </span>
        </button>
        <button class="popup button6" onClick={() => myFunction("myPopup5")}>
          17 : 35 h
          <span class="popuptext" id="myPopup5">
            Uspješna rezervacija!
          </span>
        </button>
      </div>
      <div className="mobrow2">
        <button class="popup button6" onClick={() => myFunction("myPopup4")}>
          18 : 35 h
          <span class="popuptext" id="myPopup4">
            Uspješna rezervacija!
          </span>
        </button>
      </div>
    </div>
  );
}

export default timelist;
