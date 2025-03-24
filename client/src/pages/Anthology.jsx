import styles from "./Anthology.module.css";
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/PreLoader/PreLoader";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import * as emailjs from "emailjs-com";
import { Link2 } from "react-feather";
function Anthology() {
  return (
    <div>
      <Preloader />
      <Navbar />
      <AnthologyHeader />
      <GoingAnth />
      <Benefits />
      <Footer />
    </div>
  );
}

function AnthologyHeader() {
  const [openForm, setOpenForm] = useState(false);
  const [vidOpen, setVidOpen] = useState(false);
  function handleOpenForm() {
    setVidOpen(false);
    setOpenForm(!openForm);
  }
  return (
    <div className={styles.AnthologyHeader}>
      <h3>BECOME A WRITER.</h3>
      <h1>PARTICIPATE IN OUR ANTHOLOGY</h1>
      <div className={styles.anthoRow}>
        <div className={styles.anthotext}>
          <div className={styles.anthohead}>
            <h3>WHAT IS AN ANTHOLOGY?</h3>
            <p>
              Anthology means a book that contains pieces of writing or poems,
              often on the same subject, by different authors.
            </p>
          </div>
          <ul>
            <h4>Information To Submit</h4>
            <li>
              <h6>WRITE UP</h6>
              <p>&bull; &nbsp; For short stories: Not exceeding 5000 words.</p>
              <p>
                &bull; &nbsp; For Poetry: Not more than 2 poems in 1000 words
                each.
              </p>
            </li>
            <li>
              <h6>AUTHOR'S BIO</h6>
              <p>
                &bull; &nbsp; Shall be written in third person not exceeding 200
                words.
              </p>
            </li>
            <li>
              <h6>AUTHOR'S PICTURE</h6>
              <p>
                &bull; &nbsp; High quality image in png format with 1000x1000
                dimension.
              </p>
              <p>&bull; &nbsp; Email Picture to info@bigfootpublications.in</p>
              <p>
                &bull; &nbsp; Email Subject: Anthology Author's Picture and your
                name.
              </p>
            </li>
            <li>
              <h6>TRANSACTION ID OF PAYMENT</h6>
              <p> &bull; &nbsp; Rs.250/ Per Submission.</p>
              <p>&bull; &nbsp; UPI ID: bigfootpublications@oksbi</p>
              <a href="/transacid.jpg" download>
                SEE SAMPLE OF TRANSACTION ID <Link2 />
              </a>
            </li>
          </ul>
          <button onClick={handleOpenForm}>
            {!openForm ? `Apply Now` : `Go Back`}
          </button>
        </div>
        <div className={styles.anthoimg}>
          {!vidOpen ? (
            openForm ? (
              <SubmitForm vidOpen={vidOpen} setVidOpen={setVidOpen} />
            ) : (
              <img src="/ANTHO/anthohead.png" />
            )
          ) : (
            <video controls muted loop src="/HEADSLIDES/ANTHO.mp4" />
          )}
        </div>
      </div>
    </div>
  );
}

function SubmitForm({ vidOpen, setVidOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [cityName, setCityName] = useState("");
  const [langu, setLanguage] = useState("");
  const [abou, setAbout] = useState("");
  const [anth, setAntho] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    var data = {
      from_email: email,
      from_name: name,
      to_name: "Bigfoot",
      language: langu,
      phone_number: number,
      anthology: anth,
      city: cityName,
    };

    emailjs
      .send("service_vpfy7la", "template_0st7rum", data, "OH72tJ6IoRnBRrUxC")
      .then(
        function (response) {
          console.log(response.status, response.text);
        },
        function (err) {
          console.log(err);
        }
      );

    setName("");
    setNumber("");
    setEmail("");
    setCityName("");
    setLanguage("");
    setAbout("");
    setAntho("");
    setVidOpen(!vidOpen);
  }

  return (
    <form className={styles.mainForm} onSubmit={(e) => handleFormSubmit(e)}>
      <div className={styles.mainInput}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          type="email"
        />
      </div>
      <div className={styles.mainInput}>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          placeholder="Whatsapp Number"
          type="number"
        />
        <input
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          required
          placeholder="Transaction Id"
          type="text"
        />
      </div>
      <div className={styles.mainInput}>
        <label>Select Language</label>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="">---------</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className={styles.mainInput}>
        <textarea
          value={abou}
          onChange={(e) => setAbout(e.target.value)}
          rows={5}
          cols={10}
          placeholder="Author's Bio"
        />
      </div>
      <div className={styles.mainInput}>
        <textarea
          rows={10}
          cols={10}
          value={anth}
          onChange={(e) => setAntho(e.target.value)}
          placeholder="Give A Brief Description Of Your Anthology"
        />
      </div>
      <button>SUBMIT</button>
    </form>
  );
}
function GoingAnth() {
  const [lang, setLang] = useState(1);
  function handleLanguageChange(id) {
    setLang(id);
  }
  return (
    <div className={styles.goinganthcontainer}>
      <div className={styles.goinganth}>
        <h1>ON GOING ANTHOLOGIES</h1>{" "}
      </div>
      <div className={styles.selectRow}>
        <h2>Select Your Language</h2>
        <select onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value={1}>English</option>
          <option value={2}>Hindi</option>
        </select>
      </div>
      <div className={styles.cardRow}>
        {lang == 1 ? <English /> : <Hindi />}
      </div>
    </div>
  );
}

function English() {
  return (
    <>
      <div className={styles.card}>
        <h2>SHORT STORY IN ENGLISH</h2>
        <h3>20 SLOTS AVAILABLE</h3>
      </div>
      <div className={styles.card}>
        <h2>SHORT POEM IN ENGLISH</h2>
        <h3>50 SLOTS AVAILABLE</h3>
      </div>
    </>
  );
}
function Hindi() {
  return (
    <>
      <div className={styles.card}>
        <h2>SHORT STORY IN HINDI</h2>
        <h3>20 SLOTS AVAILABLE</h3>
      </div>
      <div className={styles.card}>
        <h2>SHORT POEM IN HINDI</h2>
        <h3>50 SLOTS AVAILABLE</h3>
      </div>
    </>
  );
}

function Benefits() {
  return (
    <div className={styles.textanth}>
      <ul>
        <div className={styles.benHead}>BENEFITS:</div>

        <li> &bull; &nbsp; FREE PUBLISHING CERTIFICATE.</li>
        <li>
          &bull; &nbsp; LIFETIME AVAILABILITY OF BOOK ON AMAZON AN FLIPKART
        </li>
        <li> &bull; &nbsp; FREE E-BOOK </li>
        <li>
          &bull; &nbsp; 20% FLAT DISCOUNT ON PUBLISHING YOUR SOLO BOOK WITH
          BIGFOOT PUBLICATIONS
        </li>
      </ul>
    </div>
  );
}

export default Anthology;
