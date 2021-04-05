import React from "react";
import { Button, Grid } from "@material-ui/core";
import Styles from "../app-style";
import { colors } from "../services";
export default function () {
  return (
    <React.Fragment>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          ...Styles.highZ,
          position: "absolute",
          bottom: "7vh",
          textAlign: "center",
        }}
      >
        {/* {" "}
        <Grid item>
          <Button
            onClick={Styles.handleScroll}
            style={{ ...Styles.colorWhite, ...Styles.colorTransparent }}
          >
            Scroll Down
          </Button>
          <br></br>
        </Grid> */}
        <Grid item>
          <Button
            onClick={Styles.handleScroll}
            style={{ ...Styles.colorWhite, ...Styles.colorTransparent }}
          >
            <span
              className="material-icons"
              style={{
                fontSize: "4rem",
                color: colors.secondary,
                lineHeight: 0,
              }}
            >
              keyboard_arrow_down
            </span>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
