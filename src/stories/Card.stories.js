import React from "react";
import { Card } from "../components/Card";

export default {
  title: "Card",
  component: Card,
};

export const Default = () => <Card noText={true} />;

export const WithText = () => <Card btnText="Purchase" />;
