import React from "react";
import style from "./About.module.css";

export function About() {
  return (
    <div className={style.container}>
      <div className={style.aboutus}>
        <div className={style.left}>
          <img
            src="https://media.licdn.com/dms/image/D4D22AQEGo_9jSXCy_Q/feedshare-shrink_800/0/1688108681334?e=1694649600&v=beta&t=CSL0nYHu-1aAP39ct4UfdyFALQx6yb7OnoSL-X6ITsU"
            alt="Ambula Logo"
            className={style.image}
          />
        </div>

        <div className={style.right}>
          <h2>About us</h2>

          <p className={style.p}>
            Ambula is an App based on UHI (Unified Health Interface), popularly
            known as the 'Ayushman Bharat Digital Mission,' envisioned by our
            honorable Prime Minister. It connects patients in real-time with the
            unified health network across India to fulfill all healthcare needs.
            Ambula is committed to bridging the communication gaps prevalent in
            healthcare delivery, and we are dedicated to contributing to this
            noble vision.
          </p>
          <button
            className={style.btn}
            onClick={() => alert("Clicked for AboutUs Section")}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className={style.aboutus}>
        <div className={style.right}>
          <h2>Our Mission</h2>

          <p className={style.p}>
            At Ambula, we are deeply committed to the belief that every person
            deserves access to high-quality healthcare services. We believe in a
            democratic approach to health, and through the use of technology, we
            strive to make emergency and trauma care assistance more
            transparent, easily accessible, and user-friendly for all
            individuals in India. By bridging the communication gap in
            healthcare delivery, we hope to empower individuals to take control
            of their health and well-being.
          </p>
        </div>

        <div className={style.left}>
          <img
            src="https://media.licdn.com/dms/image/D4D22AQEXlZJw9b2xkw/feedshare-shrink_800/0/1688108678440?e=1694649600&v=beta&t=jVncWKImnI52YLLhJ6yu3iF8_0vbCasREZ7tUT5Kmao"
            alt="Mission Image"
            className={style.image}
          />
        </div>
      </div>
    </div>
  );
}
