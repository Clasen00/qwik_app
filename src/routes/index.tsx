import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";
import { TeacherHeader } from "~/components/teacher-header/teacher-header";
import About from "~/routes/components/about/about";
import Services from "~/routes/components/services/services";
import Footer from "~/routes/components/footer/footer";
import Classroom from "~/routes/components/classroom/classroom";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <TeacherHeader />

      <About />

      <Services />

      <Classroom />

      {/*<Form/>*/}
      <Footer />
    </>
  );
});
