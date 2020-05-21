import React from "react";
import TwoColumnHero from "./../components/TwoColumnHero";

export default {
  title: "Two Column Hero",
  component: TwoColumnHero,
};

const tchData = {
  title: "Somewhat long title",
  description:
    "Aliquam dictum massa vitae orci interdum consectetur. Ut id justo efficitur.",
  image: "https://picsum.photos/id/237/300/500",
};

export const Default = () => <TwoColumnHero data={tchData}></TwoColumnHero>;

export const FullImage = () => (
  <TwoColumnHero data={tchData} fullImage={true}></TwoColumnHero>
);
