import { component$ } from "@builder.io/qwik";
import * as React from "React";

interface MyFormValues {
  firstName: string;
}

export default component$(() => {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <section id="contact">
      <div className="container">
        <h1>Контакты</h1>
        <div className="block" />
        <form>
          <div className="row">
            <div className="six columns">
              <label for="name">
                Имя
                <input className="u-full-width" id="name" type="text" />
              </label>
            </div>
            <div className="six columns">
              <label for="email">
                Электронный адрес
                <input className="u-full-width" id="email" type="email" />
              </label>
            </div>
          </div>
          <div className="row">
            <label for="message">
              Что вас интересует
              <textarea className="u-full-width" id="message" />
            </label>
            <input className="button-primary" type="submit" value="Отправить" />
          </div>
        </form>
      </div>
    </section>
  );
});
