import React from "react";
import { Header } from "../components/Header";

export default {
  title: "Header",
  component: Header,
};

const logo = <a href="#">logo</a>;

export const WithNav = () => (
  <Header logo={logo}>
    <a href="#">Item 1</a>
    <a href="#" className="active">
      Item 2
    </a>
    <a href="#">Item 3</a>
    <a href="#">Item 4</a>
  </Header>
);

export const WithoutNav = () => <Header logo={logo} />;
