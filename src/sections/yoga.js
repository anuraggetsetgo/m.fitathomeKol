import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import customTxt from "./customTxt.json";
class Yoga extends Component {
  render() {
    return (
      <Grid
        container
        item
        style={{
          ...Styles.whiteBG,
          ...Styles.highZ,
          padding: "10% 5%",
        }}
        direction="column"
        alignItems="center"
        justify="space-evenly"
        className="top"
      >
        <Grid
          item
          container
          style={{
            ...Styles.blueBG,
            ...Styles.padding10,
            ...Styles.feildRadius,
          }}
          alignItems="flex-start"
          justify="center"
          direction="column"
        >
          <Typography
            variant="h3"
            style={{ ...Styles.colorWhite, marginBottom: Styles.spacing(3) }}
          >
            {customTxt.yogaPageTxt.mainHeading[0]}
            <span style={Styles.colorYellow}>
              {customTxt.yogaPageTxt.mainHeading[1]}{" "}
            </span>
            {customTxt.yogaPageTxt.mainHeading[2]}
          </Typography>
          <Typography
            variant="h5"
            style={{ ...Styles.colorWhite }}
          >
            <ul>
              {customTxt.yogaPageTxt.contentList.map((val) => {
                return (
                  <>
                    <li style={{...Styles.blueBG,listStyle:'square'}}>{val}</li>
                  </>
                );
              })}
            </ul>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Yoga;
