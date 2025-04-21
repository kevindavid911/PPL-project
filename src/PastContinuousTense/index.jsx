import React from "react";
import "./styles.css";

const PastContinuousTense = () => {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">PAST CONTINUOUS TENSE</h1>
        <h2 className="subtitle">Waktu Lampau Sedang Berlangsung</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian Past Continuous Tense</h3>
        <p className="section-description">
          Past Continuous Tense adalah bentuk kata kerja yang digunakan untuk menyatakan
          suatu kejadian yang sedang berlangsung pada waktu tertentu di masa lalu. Tense ini
          sering digunakan untuk menunjukkan suatu aksi yang sedang terjadi ketika aksi lain
          terjadi.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Fungsi dan Penggunaan</h4>
          <div className="sub-section custom-bg-1">
          <ul className="section-description">
            <li>Menyatakan kejadian yang sedang terjadi di masa lalu</li>
            <li>Menyatakan dua kejadian yang terjadi bersamaan di masa lalu</li>
            <li>Menyatakan kejadian yang sedang terjadi ketika kejadian lain terjadi</li>
            <li>Menunjukkan peristiwa yang terjadi dalam periode waktu tertentu</li>
            <li>Mengungkapkan sikap atau kebiasaan yang mengganggu di masa lalu</li>
          </ul>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Contoh Penggunaan</h4>
          <div className="sub-section custom-bg-2">
          <ul className="section-description">
            <li>At 8 PM last night, I was studying.</li>
            <li>She was cooking when I arrived.</li>
            <li>While I was watching TV, my brother was playing video games.</li>
            <li>I was sleeping when the phone rang.</li>
            <li>He was working on his project all day yesterday.</li>
            <li>She was constantly talking during the meeting.</li>
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
                <td>Subjek + was/were + Verb-ing</td>
                <td>I was reading a book at 7 PM.</td>
              </tr>
              <tr>
                <td>Negatif</td>
                <td>Subjek + was/were + not + Verb-ing</td>
                <td>I wasn’t reading a book at 7 PM.</td>
              </tr>
              <tr>
                <td>Interogatif</td>
                <td>Was/Were + Subjek + Verb-ing?</td>
                <td>Was she watching TV last night?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Keterangan Waktu Umum</h4>
          <div className="sub-section custom-bg-1">
          <ul className="section-description">
            <li>At this time yesterday</li>
            <li>At 7 PM last night</li>
            <li>While</li>
            <li>When</li>
            <li>All day yesterday</li>
            <li>All night</li>
          </ul>
        </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Perbandingan dengan Simple Past</h4>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Past Continuous</th>
                <th>Simple Past</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Menunjukkan aksi yang sedang berlangsung</td>
                <td>Menunjukkan aksi yang sudah selesai</td>
              </tr>
              <tr>
                <td>Was/were + Verb-ing</td>
                <td>Verb 2</td>
              </tr>
              <tr>
                <td>I was watching TV when she called.</td>
                <td>I watched TV last night.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Kesalahan Umum</h4>
          <div className="sub-section custom-bg-2">
          <ul className="section-description">
            <li>❌ I was read a book → ✅ I was reading a book</li>
            <li>❌ He was knowing the answer → ✅ He knew the answer</li>
          </ul>
        </div>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button">
            <span className="arrow">&lt;</span> Previous
          </button>
          <button className="nav-button">
            <a href="https://www.w3schools.com/quiztest/quiztest.asp?qtest=QZWHX" className="nav-link">
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

export default PastContinuousTense;