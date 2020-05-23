import React from "react";
import { TwoColumnHero } from "./../components/TwoColumnHero";

export default {
  title: "Two Column Hero",
  component: TwoColumnHero,
};

export const Default = () => <TwoColumnHero />;

export const FullImage = () => <TwoColumnHero fullImage={true} />;
