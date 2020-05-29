import React from "react";
import { Card } from "../components/Card";

export default {
  title: "Card",
  component: Card,
};

export const WithText = () => <Card btnText="Purchase" />;

export const WithoutText = () => <Card noText />;
