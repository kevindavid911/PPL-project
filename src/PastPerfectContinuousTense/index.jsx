import React from "react";
import "./styles.css";

const PastPerfectContinuousTense = () => {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">PAST PERFECT CONTINUOUS TENSE</h1>
        <h2 className="subtitle">Waktu Lampau Sempurna Sedang Berlangsung</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Past Perfect Continuous Tense adalah bentuk kata kerja yang digunakan untuk
          menyatakan suatu aksi yang telah berlangsung selama periode waktu tertentu di masa
          lalu sebelum kejadian lain terjadi. Tense ini menekankan durasi suatu kejadian sebelum
          suatu titik waktu di masa lalu.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Fungsi dan Penggunaan</h4>
          <ul className="section-description">
            <li>Menunjukkan aksi yang berlangsung sebelum kejadian lain di masa lalu</li>
            <li>Menyatakan durasi aktivitas di masa lalu</li>
            <li>Menunjukkan penyebab dari kejadian di masa lalu</li>
          </ul>
          <div className="sub-content custom-bg-1">
            <p><strong>Contoh:</strong></p>
            <ul>
              <li>I had been studying for three hours before my friend arrived.</li>
              <li>She had been waiting for the bus for 30 minutes before it finally arrived.</li>
              <li>They had been working on the project for months before they submitted it.</li>
              <li>He had been running for an hour before he stopped to rest.</li>
              <li>She was tired because she had been working all day.</li>
              <li>He failed the test because he had not been studying properly.</li>
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
                <td>Subjek + had been + Verb-ing</td>
                <td>I had been reading a book for two hours before my friend called me.</td>
              </tr>
              <tr>
                <td>Negatif</td>
                <td>Subjek + had not (hadn’t) been + Verb-ing</td>
                <td>I hadn’t been sleeping when he knocked on the door.</td>
              </tr>
              <tr>
                <td>Interogatif</td>
                <td>Had + Subjek + been + Verb-ing?</td>
                <td>Had she been working there for five years before she resigned?</td>
              </tr>
            </tbody>
          </table>
          <p className="section-description"><strong>Jawaban Singkat:</strong></p>
          <ul className="section-description">
            <li>Had she been studying before the exam? → Yes, she had. / No, she hadn’t.</li>
            <li>Had they been waiting for long? → Yes, they had. / No, they hadn’t.</li>
          </ul>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Keterangan Waktu Umum</h4>
          <ul className="section-description">
            <li>For (selama)</li>
            <li>Since (sejak)</li>
            <li>Before (sebelum)</li>
            <li>Until (hingga)</li>
            <li>By the time (pada saat)</li>
          </ul>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Perbandingan dengan Tense Lainnya</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Past Perfect Continuous</th>
                <th>Past Perfect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Menunjukkan aksi yang berlangsung dalam durasi waktu tertentu sebelum kejadian lain</td>
                <td>Menunjukkan aksi yang selesai sebelum kejadian lain</td>
              </tr>
              <tr>
                <td>Had been + Verb-ing</td>
                <td>Had + Verb 3</td>
              </tr>
              <tr>
                <td>I had been working for two hours before she arrived.</td>
                <td>I had worked before she arrived.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Kesalahan Umum</h4>
          <ul className="section-description">
            <li>❌ I had been study for two hours → ✅ I had been studying for two hours</li>
            <li>❌ He had been running → ✅ He had been running for an hour before he stopped to rest</li>
            <li>❌ I was studying for two hours before my friend came → ✅ I had been studying for two hours before my friend came</li>
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

export default PastPerfectContinuousTense;
