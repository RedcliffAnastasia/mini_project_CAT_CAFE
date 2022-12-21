import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <Title size={TitleSize.BIG}>Первое в Украине котокафе</Title>
        <p className="about__text">
          Крупнейшее котокафе Украины, в котором живёт 50 кошек и котов, и
          каждый из них ищет новый дом. Животных можно гладить, фотографировать,
          играть с ними.
        </p>
        <p className="about__work-time">Рабочее время с 8:00 до 23:00</p>
        <p className="about__address">Киев, набережная Оболонь, дом 25</p>
      </div>
    </section>
  );
}

export default About;
