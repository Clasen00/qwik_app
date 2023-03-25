import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export const TeacherHeader = component$(() => {
  useStyles$(styles);
  //https://codepen.io/jeffbredenkamp/pen/edNzVZ
  return (
    <header id="header">
      <div className="main_nav">
        <div className="mobile-toggle">
          <span /> <span /> <span />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">Обо мне</a>
            </li>
            <li>
              <a href="#skills">Услуги</a>
            </li>
            <li>
              <a href="#footer">Контакты</a>
            </li>
            <li>
              <a href="tel:+79024880303">Позвоните нам!!! +7 902 488 03 03 </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
