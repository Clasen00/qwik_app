import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <footer id="footer">
      <div className="container">
        <div className="nine columns">
          <p>Наши контакты и социальные сети.</p>
        </div>
        <div className="three columns">
          <a href="https://instagram.com/hellovladivostok" target="_blank">
            <span className="typcn typcn-social-instagram-circular socialIcons" />
          </a>
          <a
            href="https://vk.com/hellovdk"
            style="margin-top: 10px"
            target="_blank"
          >
            <span
              className="iconify-inline"
              data-icon="simple-line-icons:social-vkontakte"
              style="color: rgba(255, 255, 255, 0.7); vertical-align: -5px;"
              data-width="34"
            />
          </a>
        </div>
      </div>
    </footer>
  );
});
