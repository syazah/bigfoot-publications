import { useEffect, useState } from "react";
import styles from "./Popup.module.css";
import * as emailjs from "emailjs-com";
import { useAnimate, motion } from "framer-motion";

function Popup() {
  const [popupOpen, setPopupOpen] = useState(true);
  const [scope, anim] = useAnimate();
  function handleAnimate() {
    anim(scope.current, { y: [-100, 100, 0], opacity: [0, 1] }, { delay: 6 });
  }

  useEffect(() => {
    handleAnimate();
  }, []);

  if (popupOpen) {
    return (
      <div className={styles.main}>
        <div ref={scope} className={styles.popupcontainer}>
          <div className={styles.close}>
            <button onClick={() => setPopupOpen(!popupOpen)}>❌</button>
          </div>
          <video autoPlay muted loop src="newsletter.mp4" />
          <h1>BIGFOOT PUBLICATIONS</h1>
          <h3>JOIN US</h3>
          <Form popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </div>
      </div>
    );
  } else {
    return;
  }
}
function Form({ popupOpen, setPopupOpen }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    var data = {
      email_id: email,
      from_name: "",
      message: "",
      phone_number: phone,
      last_name: "",
    };

    emailjs
      .send("service_lmqompe", "template_lj2v0hx", data, "pb1q_60WKGGV4lqrV")
      .then(
        function (response) {
          console.log(response.status, response.text);
        },
        function (err) {
          console.log(err);
        }
      );
    setEmail("");
    setPhone("");

    setPopupOpen(!popupOpen);
  }
  return (
    <form className={styles.popform} onSubmit={(e) => handleSubmit(e)}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="DROP YOUR EMAIL"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="number"
        required
        placeholder="DROP YOUR NUMBER"
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Popup;
