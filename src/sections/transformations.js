import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors, retrievePathMobile } from "../services";
import PreloadImage from "../helpers/preloadimg";

class Transformations extends Component {
  render() {
    return (
      <Grid
        item
        container
        style={{
          ...Styles.highZ,
          ...Styles.blueBG,
          padding: "10% 5%",
        }}
        alignItems="flex-start"
        justify="center"
        className="top"
      >
        <Grid item >
          <Typography variant="h2" style={{ ...Styles.colorWhite,...Styles.centerTxt }}>
            More than<br></br> <span style={Styles.colorYellow}>20000 people</span><br></br>have
            learned a<br></br><span style={Styles.colorYellow}>new way of life</span>{" "}
            with us
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              textAlign: "center",
              color: colors.grey,
              margin: "20px 0",
            }}
          >
            They have realised that getting fit is just a by-product of
            following a simple, happy regime
          </Typography>
        </Grid>
        <Grid item>
          <PreloadImage
            src={`${retrievePathMobile()}transformations.jpg`}
            alt="Simple, macro-calculated recipes"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Transformations;
