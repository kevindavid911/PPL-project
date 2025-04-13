import React from "react";
import "./styles.css";

const TensesPPC = () => {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">PRESENT CONTINUOUS TENSE</h1>
        <h2 className="subtitle">Waktu Sekarang Sedang Berlangsung</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Definisi</h3>
        <p className="section-description">
          Present Continuous Tense adalah bentuk kata kerja yang digunakan untuk menyatakan tindakan yang sedang berlangsung saat ini, kejadian sementara, rencana masa depan, atau perubahan.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Fungsi dan Penggunaan</h4>
          <div className="sub-content custom-bg-2">
            <ul>
              <li><strong>Kejadian yang sedang terjadi:</strong> She is reading a book now.</li>
              <li><strong>Kejadian sementara:</strong> He is working in Jakarta for a few months.</li>
              <li><strong>Rencana masa depan:</strong> We are traveling to Bali next weekend.</li>
              <li><strong>Perubahan atau tren:</strong> The climate is getting hotter.</li>
              <li><strong>Tindakan mengganggu (dengan "always"):</strong> He is always complaining about his job.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Pola Kalimat</h4>
          <div className="sub-content custom-bg-1">
            <h5>Kalimat Positif</h5>
            <p>Subjek + to be (am/is/are) + Verb-ing</p>
            <ul>
              <li>I am studying English.</li>
              <li>They are playing football.</li>
            </ul>

            <h5>Kalimat Negatif</h5>
            <p>Subjek + to be + not + Verb-ing</p>
            <ul>
              <li>She is not watching TV.</li>
              <li>They are not playing football.</li>
            </ul>

            <h5>Kalimat Interogatif</h5>
            <p>To be + Subjek + Verb-ing?</p>
            <ul>
              <li>Are you studying English?</li>
              <li>Is she watching TV now?</li>
            </ul>

            <h5>Jawaban Singkat</h5>
            <ul>
              <li>Yes, I am. / No, I’m not.</li>
              <li>Yes, she is. / No, she isn’t.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Keterangan Waktu Umum</h4>
          <div className="sub-content custom-bg-2">
            <ul>
              <li>Now, At the moment, Right now</li>
              <li>Today, This week/month/year</li>
              <li>Always (untuk kebiasaan yang mengganggu)</li>
            </ul>
            <p><strong>Contoh:</strong> She is cooking dinner right now. / He is always forgetting his keys.</p>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Perbedaan dengan Simple Present</h4>
          <div className="sub-content custom-bg-1">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Simple Present</th>
                  <th>Present Continuous</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>She works every day.</td>
                  <td>She is working right now.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Kesalahan Umum</h4>
          <div className="sub-content custom-bg-2">
            <ul>
              <li>❌ She is watch TV → ✅ She is watching TV</li>
              <li>❌ They playing football → ✅ They are playing football</li>
              <li>❌ He is knowing the answer → ✅ He knows the answer</li>
            </ul>
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button">
            <span className="arrow">&lt;</span> Previous
          </button>
          <button className="nav-button">
            <a href="https://www.w3schools.com/quiztest/quiztest.asp?qtest=TENSES_PRESENT_CONT" className="nav-link">
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

export default TensesPPC;
