import React from "react";
import "./styles.css";

const Pronouns = () => {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">FUTURE CONTINUOUS TENSE</h1>
        <h2 className="subtitle">Waktu Yang Akan Datang Sedang Berlangsung</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Future Continuous Tense adalah bentuk kata kerja yang digunakan untuk menyatakan
          suatu tindakan yang akan sedang berlangsung pada waktu tertentu di masa depan.
          Tense ini sering digunakan untuk menggambarkan kejadian yang terjadi dalam jangka
          waktu tertentu atau membayangkan situasi yang sedang terjadi di masa depan.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Fungsi dan Penggunaan</h4>
          <ul className="section-description">
            <li>Menyatakan kejadian yang akan sedang berlangsung di masa depan</li>
            <li>Menyatakan rencana atau jadwal yang sudah pasti akan terjadi</li>
            <li>Menunjukkan kejadian yang berlangsung bersamaan dengan kejadian lain</li>
            <li>Menunjukkan dugaan/perkiraan tentang kejadian di masa depan</li>
          </ul>
          <div className="sub-content custom-bg-1">
            <h5>Contoh Kalimat:</h5>
            <ul>
              <li>This time tomorrow, I will be traveling to Bali.</li>
              <li>At 8 PM tonight, she will be studying for the exam.</li>
              <li>We will be meeting the manager at 3 PM tomorrow.</li>
              <li>When you arrive at the airport, I will be waiting for you.</li>
              <li>Don’t call her now. She will be working.</li>
              <li>By this time next week, they will be enjoying their vacation.</li>
            </ul>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Pola Kalimat</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Struktur</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Positif</td>
                <td>Subjek + will be + Verb-ing</td>
                <td>She will be watching a movie at 9 PM.</td>
              </tr>
              <tr>
                <td>Negatif</td>
                <td>Subjek + will not (won’t) be + Verb-ing</td>
                <td>I won’t be sleeping at 10 PM.</td>
              </tr>
              <tr>
                <td>Interogatif</td>
                <td>Will + Subjek + be + Verb-ing?</td>
                <td>Will she be working at this time tomorrow?</td>
              </tr>
            </tbody>
          </table>

          <p className="section-description"><strong>Jawaban Singkat:</strong></p>
          <ul className="section-description">
            <li>Will she be studying tonight? → Yes, she will. / No, she won’t.</li>
            <li>Will they be traveling next month? → Yes, they will. / No, they won’t.</li>
          </ul>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Keterangan Waktu Umum</h4>
          <ul className="section-description">
            <li>This time tomorrow</li>
            <li>At this moment next week</li>
            <li>By this time next year</li>
            <li>At 10 PM tonight</li>
          </ul>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Perbedaan dengan Tense Lain</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Future Continuous</th>
                <th>Simple Future</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Menunjukkan tindakan yang sedang berlangsung di masa depan</td>
                <td>Menunjukkan tindakan yang akan terjadi di masa depan</td>
              </tr>
              <tr>
                <td>At 8 PM, I will be studying.</td>
                <td>I will study at 8 PM.</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table className="styled-table">
            <thead>
              <tr>
                <th>Future Continuous</th>
                <th>Present Continuous (Future Meaning)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Untuk tindakan yang berlangsung dalam periode waktu tertentu di masa depan</td>
                <td>Untuk rencana yang sudah pasti terjadi di masa depan</td>
              </tr>
              <tr>
                <td>At 9 AM, she will be working.</td>
                <td>She is working tomorrow.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Kesalahan Umum</h4>
          <ul className="section-description">
            <li>❌ I will be go to school tomorrow → ✅ I will be going to school tomorrow</li>
            <li>❌ The train will be arriving at 10 AM → ✅ The train will arrive at 10 AM</li>
            <li>❌ I will be helping you with your homework → ✅ I will help you with your homework</li>
          </ul>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button">
            <span className="arrow">&lt;</span> Previous
          </button>
          <button className="nav-button">
            <a href="https://www.w3schools.com/" className="nav-link">
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

export default Pronouns;
