import styles from "./Contact.module.css";
import * as emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  return (
    <div className={styles.contactMain}>
      <div className={styles.textContent}>
        <h3>FEEL FREE TO </h3>
        <h1>Contact Us</h1>
      </div>
      <ContactContent />
    </div>
  );
}

function ContactContent() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setlastName] = useState("");
  function handleClick(e) {
    e.preventDefault();
    var data = {
      email_id: email,
      from_name: name,
      message: msg,
      phone_number: phone,
      last_name: lastName,
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
    setMsg("");
    setName("");
    setPhone("");
    setlastName("");
  }
  return (
    <div className={styles.contactContent}>
      <div className={styles.leftContent}>
        <div className={styles.imageContact}>
          <a href="https://www.facebook.com/BigfootPublicationsIndia">
            <img src="/highlights/instaFacebookPost.png" alt="" />
          </a>
        </div>
      </div>
      <form className={styles.rightContent} onSubmit={(e) => handleClick(e)}>
        <div className={styles.nameInfo}>
          <input
            type="text"
            value={name}
            placeholder="First Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(event) => setlastName(event.target.value)}
          />
        </div>
        <div className={styles.nameInfo}>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="tel"
            value={phone}
            placeholder="Phone"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <textarea
          className={styles.msgBox}
          type="text"
          value={msg}
          placeholder="Your Message"
          onChange={(event) => setMsg(event.target.value)}
        ></textarea>
        <button className={styles.btnCon} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Contact;
