import React from "react";
import { Footer } from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
};

export const WithNewsletter = () => (
  <Footer
    title="Subscribe to our newsletter!"
    description="Make sure you subscribe and receive latest information on upcoming
              festivals and perks!"
    btnText="Subscribe"
  />
);

export const WithoutNewsletter = () => (
  <Footer
    noNewsletter
    title="Subscribe to our newsletter!"
    description="Make sure you subscribe and receive latest information on upcoming
              festivals and perks!"
    btnText="Subscribe"
  />
);
