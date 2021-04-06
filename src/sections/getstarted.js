/* hi */
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";
import Signupform from "../signupform";
class GetStarted extends Component {
  render() {
    return (
      <Grid
        item
        container
        direction="column"
        style={{ ...Styles.padding5, ...Styles.blueBG, ...Styles.highZ,padding:'10% 5%' }}
        alignItems="center"
        justify="center"
        className="top"
      >
        <Grid item>
          <Typography
            variant="h3"
            style={{ ...Styles.colorYellow, ...{ textAlign: "center" } }}
          >
            Prioritize your health today
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ ...Styles.colorWhite, textAlign: "center" }}
          >
            Sign up with us to manage your diabetes better & take a step towards
            a better life.
          </Typography>
          <hr />
        </Grid>
        <Grid
          item
          style={{ ...Styles.padding5, marginBottom: Styles.spacing(8) }}
        >
          <Signupform />
        </Grid>
      </Grid>
    );
  }
}

export default GetStarted;
