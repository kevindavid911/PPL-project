import React from "react";
import "./styles.css";

const Pronouns = () => {
  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">PRONOUNS</h1>
        <h2 className="subtitle">Kata Ganti</h2>
      </div>

      <div className="content-container">
        <h3 className="section-title">Definisi</h3>
        <p className="section-description">
          Kata yang digunakan untuk menggantikan kata benda sehingga kata benda yang sama tidak digunakan berulang-ulang.
        </p>

        <div className="sub-section">
          <h4 className="sub-section-title">Jenis - Jenis Pronouns</h4>
          <div className="sub-content custom-bg-2">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Jenis</th>
                  <th>Singular</th>
                  <th>Plural</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subjective Pronoun</td>
                  <td>I, you, he, she, it</td>
                  <td>we, you, they</td>
                </tr>
                <tr>
                  <td>Possessive Adjective</td>
                  <td>my, your, his, her, its</td>
                  <td>our, your, their</td>
                </tr>
                <tr>
                  <td>Possessive Pronoun</td>
                  <td>mine, yours, his, hers, its</td>
                  <td>ours, yours, theirs</td>
                </tr>
                <tr>
                  <td>Object Pronoun</td>
                  <td>me, you, him, her, it</td>
                  <td>us, you, them</td>
                </tr>
                <tr>
                  <td>Reflexive Pronoun</td>
                  <td>myself, yourself, himself, herself, itself</td>
                  <td>ourselves, yourselves, themselves</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="sub-section">
          <h4 className="sub-section-title">Indefinite dan Demonstrative Pronouns</h4>
          <div className="sub-content custom-bg-1">
            <h5>Indefinite Pronouns</h5>
            <p>Digunakan untuk menunjukkan seseorang atau sesuatu yang tidak diketahui secara pasti.</p>
            <ul>
              <li><strong>-one / -body:</strong> someone, anyone, everyone, no one</li>
              <li><strong>-thing:</strong> something, anything, everything, nothing</li>
            </ul>
            <h5>Demonstrative Pronouns</h5>
            <p>Menunjukkan sesuatu secara spesifik, digunakan sebagai subjek atau objek.</p>
            <ul>
              <li>This, That, These, Those</li>
            </ul>
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="nav-button">
            <span className="arrow">&lt;</span> Previous
          </button>
          <button className="nav-button">
            <a href="https://www.w3schools.com/quiztest/quiztest.asp?qtest=PRONOUNS" className="nav-link">
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
