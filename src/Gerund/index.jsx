import React from "react";
import "./styles.css";

const Gerund = () => {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">GERUND</h1>
        <h2 className="subtitle">Kata Kerja Berakhiran -ing sebagai Kata Benda</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Pengertian</h3>
        <p className="section-description">
          Gerund adalah bentuk kata kerja (verb) yang berakhiran <strong>-ing</strong>, tetapi berfungsi sebagai <strong>kata benda</strong> (noun) dalam suatu kalimat. Dapat digunakan sebagai subjek, objek, atau pelengkap.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">1. Fungsi Gerund dalam Kalimat</h4>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">a. Sebagai Subjek Kalimat</h5>
            <p className="section-description">
              <ul>
                <li>Swimming is my favorite sport.</li>
                <li>Reading improves your knowledge.</li>
              </ul>
            </p>
          </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">b. Sebagai Objek Kata Kerja</h5>
            <p className="section-description">
              Digunakan setelah beberapa kata kerja tertentu:
              <ul>
                <li>She enjoys singing.</li>
                <li>They avoid talking about politics.</li>
              </ul>
              <strong>Kata kerja umum:</strong> enjoy, avoid, consider, admit, suggest, deny, finish, practice, keep, mind, miss
            </p>
          </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">c. Sebagai Objek dari Preposisi</h5>
            <p className="section-description">
              <ul>
                <li>She is good at painting.</li>
                <li>He is interested in learning new languages.</li>
              </ul>
              <strong>Preposisi umum:</strong> about, after, before, by, in, on, of, without
            </p>
          </div>

          <div className="sub-sub-section">
            <h5 className="sub-section-title">d. Sebagai Pelengkap</h5>
            <p className="section-description">
              <ul>
                <li>His hobby is cycling.</li>
                <li>The most difficult part of learning English is speaking fluently.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">2. Gerund vs. Infinitive</h4>
          <p className="section-description">
            Beberapa kata kerja bisa diikuti oleh gerund atau infinitive dengan <strong>makna berbeda</strong>.
            <ul>
              <li>I stopped smoking. (Berhenti merokok)</li>
              <li>I stopped to smoke. (Berhenti sejenak untuk merokok)</li>
              <li>I remember locking the door. (Ingat telah mengunci)</li>
              <li>I remembered to lock the door. (Ingat untuk mengunci)</li>
            </ul>
            <strong>Kata kerja umum:</strong> stop, remember, forget, try, regret, need
          </p>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">3. Gerund dalam Ekspresi Khusus</h4>
          <p className="section-description">
            Ungkapan yang selalu diikuti oleh gerund:
            <ul>
              <li>I can’t help laughing.</li>
              <li>This book is worth reading.</li>
              <li>She has difficulty understanding the lesson.</li>
              <li>It's no use crying over spilled milk.</li>
            </ul>
          </p>
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

export default Gerund;
