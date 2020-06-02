import React from "react";
import { BgHero } from "../components/BgHero";

export default {
  title: "Bg Hero",
  component: BgHero,
};

const heroLayout = (
  <div>
    <div
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Hero Title</h1>
      <img src="https://picsum.photos/id/237/300/300" alt="" />
    </div>
  </div>
);

export const Default = () => <BgHero>{heroLayout}</BgHero>;
