import React from "react";
import { NavigationBar } from "../components/NavigationBar";

export default {
  title: "Navigation Bar",
  component: NavigationBar,
};

export const Default = () => (
  <NavigationBar>
    <a href="#">Logo</a>
    <a href="#">Item 1</a>
    <a href="#" className="is-active">
      Item 2
    </a>
    <a href="#">Item 3</a>
    <a href="#">Item 4</a>
  </NavigationBar>
);
