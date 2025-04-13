import React from "react";
import "./styles.css";

const HelpingVerbs = () => {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">HELPING VERBS</h1>
        <h2 className="subtitle">Kata Kerja Bantu</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Definisi</h3>
        <p className="section-description">
          Kata kerja bantu (auxiliary verbs) digunakan bersama kata kerja utama untuk membentuk berbagai bentuk waktu (tenses), suara (voice), dan suasana (mood) dalam bahasa Inggris.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Bentuk-Bentuk "To Be"</h4>
          <div className="sub-content custom-bg-2">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Bentuk</th>
                  <th>Penggunaan</th>
                  <th>Contoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>am, is, are</td>
                  <td>Present Tense</td>
                  <td>I am studying. / She is happy. / They are here.</td>
                </tr>
                <tr>
                  <td>was, were</td>
                  <td>Past Tense</td>
                  <td>He was late. / They were excited.</td>
                </tr>
                <tr>
                  <td>being</td>
                  <td>Present Participle</td>
                  <td>She is being honest.</td>
                </tr>
                <tr>
                  <td>been</td>
                  <td>Past Participle</td>
                  <td>He has been to Japan.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">To Be + Adjective / Prepositional Phrase</h4>
          <div className="sub-content custom-bg-1">
            <h5>To Be + Adjective</h5>
            <p>Digunakan untuk menggambarkan sifat atau keadaan.</p>
            <ul>
              <li>She is beautiful.</li>
              <li>They are tired.</li>
              <li>The weather was cold.</li>
            </ul>

            <h5>To Be + Prepositional Phrase</h5>
            <p>Digunakan untuk menunjukkan lokasi atau posisi.</p>
            <ul>
              <li>The book is on the table.</li>
              <li>He is at home.</li>
              <li>They were in the park.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Bentuk Negatif dan Interogatif</h4>
          <div className="sub-content custom-bg-2">
            <h5>Bentuk Negatif</h5>
            <ul>
              <li>I am not happy.</li>
              <li>She is not here.</li>
              <li>They were not hungry.</li>
            </ul>

            <h5>Bentuk Interogatif</h5>
            <ul>
              <li>Am I late?</li>
              <li>Is she your sister?</li>
              <li>Were they in the meeting?</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Struktur Tambahan</h4>
          <div className="sub-content custom-bg-1">
            <h5>Used to + Kata Benda / Kata Kerja-ing</h5>
            <ul>
              <li>She used to be a teacher.</li>
              <li>I am used to waking up early.</li>
            </ul>

            <h5>There is / There are</h5>
            <ul>
              <li>There is a book on the table.</li>
              <li>There are many students in the class.</li>
              <li>Is there a problem?</li>
              <li>There are not many people here.</li>
            </ul>
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button">
            <span className="arrow">&lt;</span> Previous
          </button>
          <button className="nav-button">
            <a href="https://www.w3schools.com/quiztest/quiztest.asp?qtest=AUXILIARY_VERBS" className="nav-link">
              Kuis
            </a>
          </button>
          <button className="nav-button">
            Next <span className="arrow">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpingVerbs;