import React from "react";
import Card from "../components/Card";

export default {
  title: "Card",
  component: Card,
};

const cardData = {
  title: "Somewhat long title",
  description:
    "Aliquam dictum massa vitae orci interdum consectetur. Ut id justo efficitur.",
  image: "https://picsum.photos/id/237/300/500",
  tag: "August",
};

export const Default = () => <Card data={cardData} noText={true}></Card>;

export const WithText = () => <Card data={cardData}></Card>;
