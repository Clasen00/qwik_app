import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="skills">
      <div className="container">
        <h1>Услуги</h1>
        <div className="block" />
        <div className="row">
          <div className="one-third column">
            <h3>Уроки</h3>
            <p>Занятия в моем уютном классе.</p>
          </div>
          <div className="one-third column">
            <h3>One-to-one</h3>
            <p>
              Индивидуальные занятия в классе или удаленно, пишите, обсудим.
            </p>
          </div>
          <div className="one-third column">
            <h3>Переводы</h3>
            <p>Могу оказать услуги по переводам.</p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            <div className="progressBar">
              <h4>Уроки</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-90" />
              </div>
            </div>
            <div className="progressBar">
              <h4>Индивидуальные занятия</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-80" />
              </div>
            </div>
            <div className="progressBar">
              <h4>Переводы</h4>
              <div className="progressBarContainer">
                <div className="progressBarValue value-30" />
              </div>
            </div>
          </div>
          <div className="four columns">
            <p>
              Занятия в группе преподчительней, однако для вас я могу
              организовать индивидуальные занятия или помочь вам с переводом,
              если работа меня заинтересует.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
