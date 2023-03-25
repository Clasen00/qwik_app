import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <section id="about">
      <div className="container about-container">
        <div className="row">
          <h1>
            Школа Hello приглашает всех желающих на курсы немецкого языка!
          </h1>
          <div className="block" />
          <p>
            Приветствую всех на моём сайте! Меня зовут Ангелина и я
            преподаватель немецкого языка во Владивостоке 💞 <br /> У меня
            большой опыт преподавания немецкого и со мной вы освоете немецкий
            язык на новом уровне✨ <br /> Обучалась немецкому и жила в Германии!
            Объездила Нидерланды на велосипеде и вернулась во Владивосток, чтобы
            помочь вам лучше понять немецкий язык!
          </p>
        </div>
        <div className="row">
          <div className="six columns">
            <h3>
              <span className="typcn typcn-device-desktop icon" />
              Как обучаю
            </h3>
            <p>
              Провожу индивидуальные и групповые занятия. На моих лекциях не
              скучно и подход всегда разнооразен.
            </p>
          </div>
          <div className="six columns">
            <h3>
              <span className="typcn typcn-pen icon" />
              Мой подход
            </h3>
            <p>
              Я применяю современные педагогические методики при обучении. Могу
              составить индивидуальный план обучения, если сочту необходимым или
              по просьбе студента. Карточки, презентации, разговорная практика -
              это мой конёк.
            </p>
          </div>
          <div className="row">
            <div className="six columns">
              <h3>
                <span className="typcn typcn-cog-outline icon" />
                Моя цель
              </h3>
              <p>
                Я уверенно довожу своих учеников до уровня B2 или C1 по желанию.
                Готовлю к сдаче экзаменов, переезду в Германию и путешествиям по
                всей Европе!
              </p>
            </div>
            <div className="six columns">
              <h3>
                <span className="typcn typcn-lightbulb icon" />
                Моя миссия
              </h3>
              <p>
                Со мной вы осознаете немецкий язык как свой родной. Научитесь
                разговаривать на нём, думать и понимать его совершенно иначе. Я
                хочу преподнести вам совершенно новый, ранее неизвестный для вас
                мир немецкого языка и Германии!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
