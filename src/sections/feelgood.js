import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";
import customTxt from "./customTxt.json";
class Feelgood extends Component {
  render() {
    return (
      <Grid
        item
        container
        style={{
          ...Styles.section01,
          ...Styles.highZ,
          ...Styles.blueBG,
          padding: "10% 5%",
        }}
        className="top"
      >
        <Grid
          item
          container
          style={{
            ...Styles.whiteBG,
            ...Styles.padding10,
            ...Styles.feildRadius,
          }}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <Typography
              variant="h3"
              style={{ ...Styles.colorBlack, marginBottom: Styles.spacing(1) }}
            >
              {customTxt.feelgoodPageTxt.mainHeading[0]}
              <span style={Styles.colorPrimary}>
                {customTxt.feelgoodPageTxt.mainHeading[1]}
              </span>
              {customTxt.feelgoodPageTxt.mainHeading[2]}
              <span style={Styles.colorPrimary}>
                {customTxt.feelgoodPageTxt.mainHeading[3]}{" "}
              </span>
              {customTxt.feelgoodPageTxt.mainHeading[4]}
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Typography
              variant="h4"
              style={{ ...Styles.leftTxt,color:'rgb(170 170 190)' }}
            >
              <br></br>
              <span style={{ ...Styles.colorGrey }}>
                {customTxt.feelgoodPageTxt.subHeading}
                <br></br>
                {customTxt.feelgoodPageTxt.subHeading1}
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Feelgood;
