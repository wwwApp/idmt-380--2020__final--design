import React from "react";
import { TwoColumnHero } from "./../components/TwoColumnHero";

export default {
  title: "Two Column Hero",
  component: TwoColumnHero,
};

export const Default = () => <TwoColumnHero btnText="More Info" />;

export const FullImage = () => <TwoColumnHero fullImage={true} />;
