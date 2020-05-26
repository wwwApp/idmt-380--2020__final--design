import React from "react";
import { Slideshow } from "../components/Slideshow";
import { TwoColumnHero } from "../components/TwoColumnHero";

export default {
  title: "Slideshow",
  component: Slideshow,
};

export const Default = () => (
  <Slideshow>
    <TwoColumnHero />
    <TwoColumnHero fullImage={true} />
    <TwoColumnHero />
    <TwoColumnHero />
  </Slideshow>
);

// export const WithControls = () => (
//   <Slideshow showControls={true}>
//     <TwoColumnHero />
//     <TwoColumnHero />
//     <TwoColumnHero />
//     <TwoColumnHero />
//   </Slideshow>
// );
