import React from "react";
import { Grid } from "./../components/Grid";
import { Card } from "./../components/Card";

export default {
  title: "Grid",
  component: Grid,
};

export const TwoCols = () => (
  <Grid colClass="two-col">
    <Card noText={true} />
    <Card noText={true} />
    <Card noText={true} />
    <Card noText={true} />
    <Card noText={true} />
  </Grid>
);

export const ThreeCols = () => (
  <Grid colClass="three-col">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Grid>
);
