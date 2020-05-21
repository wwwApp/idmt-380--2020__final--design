import React from "react";
import Grid from "./../components/Grid";
import Card from "./../components/Card";

export default {
  title: "Grid",
  component: Grid,
};

const cardData = {
  title: "Somewhat long title",
  description:
    "Aliquam dictum massa vitae orci interdum consectetur. Ut id justo efficitur.",
  image: "https://picsum.photos/id/237/300/500",
  tag: "August",
};

export const TwoCols = () => (
  <Grid colClass="two-col">
    <Card data={cardData} noText={true}></Card>
    <Card data={cardData} noText={true}></Card>
    <Card data={cardData} noText={true}></Card>
    <Card data={cardData} noText={true}></Card>
    <Card data={cardData} noText={true}></Card>
  </Grid>
);

export const ThreeCols = () => (
  <Grid colClass="three-col">
    <Card data={cardData}></Card>
    <Card data={cardData}></Card>
    <Card data={cardData}></Card>
    <Card data={cardData}></Card>
    <Card data={cardData}></Card>
  </Grid>
);
