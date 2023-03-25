import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Учитель немецкого языка во Владивостоке!💫 Курсы немецкого языка!",
  links: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.8/typicons.min.css",
      rel: "stylesheet",
    },
  ],
  meta: [
    {
      name: "keywords",
      content:
        "Немецкий, язык, немецкий язык, курсы, лучшие курсы, недорогие курсы, немецкого",
    },
    {
      name: "description",
      content:
        "Школа Hello приглашает всех желающих на курсы немецкого языка! Лучшие и недорогие курсы немецкого языка во Владивосток. Курсы немецкого для всех желающих, подготовка к экзаменам по немецкому языку",
    },
    {
      name: "og:description",
      content:
        "Лучшие и недорогие курсы немецкого языка во Владивосток. Курсы немецкого для всех желающих, подготовка к экзаменам по немецкому языку",
    },
    {
      name: "og:keywords",
      content:
        "Немецкий, язык, немецкий язык, курсы, лучшие курсы, недорогие курсы, немецкого",
    },
  ],
};
