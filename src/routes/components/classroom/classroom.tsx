import { component$, useStore, useStyles$, $ } from "@builder.io/qwik";
import { Viewer } from "~/components/viewer";
import styles from "./styles.css?inline";

import * as teacherLoaded from "./images/teacher.jpg"
import * as deskLoaded from "./images/desk.jpg"
import * as tableLoaded from "./images/table.jpg"
import * as booksLoaded from "./images/books.jpg"

export default component$(() => {
  useStyles$(styles);

  const store = useStore({
    isImageShowed: false,
    photo: "",
  });

  const images = [
    {
      title: "Ваша будущая учительница💖",
      description:
        "Сейчас вы ещё не знаете, что это за книга у меня в руках, но после моих уроков вы сможете прочесть её сами!",
      alt: "Фотография, на ней молодая учительница с учебником немецкого в руках",
      src: teacherLoaded.default,
    },
    {
      title: "Стол преподавателя",
      description: "Всё вижу, всё слышу😊",
      alt: "Фотография, на ней стол для преподавателя и телевизор для интерактивных занятий",
      src: deskLoaded.default,
    },
    {
      title: "Диван и кофе-машина",
      description: "Чтобы мультики смотреть",
      alt: 'Фотография, на ней овальный стол для занятий и кофе-машина"',
      src: tableLoaded.default,
    },
    {
      title: "Обучающие материалы",
      description:
        "В моём распоряжении десятки способов, как позволить вам лучше узнать немецкий и не заскучать!",
      alt: "Фотография, на ней шкаф с учебниками и настольными играми",
      src: booksLoaded.default,
    },
  ];

  const showImg = $((photo: string) => {
    store.photo = photo;
    store.isImageShowed = !store.isImageShowed;
  });

  const handleClose = $(() => {
    store.photo = "";
    store.isImageShowed = false;
  });

  return (
    <>
      <section id="team">
        <div className="container">
          <div className="row">
            <h2>Классное место</h2>
            <div className="block" />
            <p>
              Класс для студентов оборудован самыми современными гаджетами и
              девайсами для изучения нового изыка. В нём есть и телевизор для
              интерактивных занятий и кофемашина для приятного отдыха после
              уроков и диван, чтобы можно было просто поболтать.
            </p>
          </div>
          <div className="row">
            {images.map((image) => (
              <div className="three columns">
                <img
                  className="classroom-image"
                  onClick$={() => showImg(image.src)}
                  src={image.src}
                  width="220"
                  height="220"
                  alt={image.alt}
                />
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Viewer
        isShowed={store.isImageShowed}
        photo={store.photo}
        onClose$={() => handleClose()}
      />
    </>
  );
});
