import { QwikCity } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { QwikPartytown } from "~/components/partytown/partytown";

export default component$(() => {
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown forward={["dataLayer.push"]} />;
        <link
          rel="stylesheet"
          type="text/partytown"
          href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.8/typicons.min.css"
        />
        ;
      </head>
      <body lang="en"></body>
    </QwikCity>
  );
});
