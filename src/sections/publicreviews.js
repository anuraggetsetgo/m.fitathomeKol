import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";

class Publicreviews extends Component {
  render() {
    return (
      <Grid
        item
        container
        style={{
          ...Styles.highZ,
          ...Styles.spacingVertical,
          ...Styles.whiteBG,
          padding: "20% 5%",
        }}
        direction="column"
        alignItems="center"
        justify="center"
        className="top"
      >
        <Grid item style={{ ...Styles.marginBottom }}>
          <Typography
            variant="h2"
            style={{...Styles.centerTxt }}
          >
            Like they say - <span style={{  ...Styles.colorPrimary,...Styles.centerTxt }}> Client is the King
          </span>
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: colors.grey, ...Styles.centerTxt }}
          >
            This is what kings and queens are saying about us
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          style={{ ...Styles.padding5, ...Styles.marginBottom }}
          spacing={1}
        >
          <Grid
            item
            xs={6}
            style={{
              ...{ borderRight: "1px solid #fff" },
              ...Styles.centerTxt,
            }}
          >
            <Typography
              variant="h2"
              style={{ ...Styles.colorPrimary, ...Styles.centerTxt }}
            >
              4.8/5
            </Typography>
            <Typography
              variant="subtitle2"
              style={{...Styles.colorPrimary,...Styles.centerTxt }}
            >
              Rating on Facebook
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h2"
              style={{ ...Styles.colorPrimary, ...Styles.centerTxt }}
            >
              4.8/5
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ ...Styles.colorPrimary, ...Styles.centerTxt }}
            >
              Rating on Google
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={Styles.centerTxt}>
          <Grid item className="speech-bubble">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcharan.panjwani.3%2Fposts%2F229774871476080&width=500"
              width="300"
              height="220"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss Facebook testimonial"
            ></iframe>
          </Grid>
          <Grid item className="speech-bubble">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faashu.luthra/posts/10159555067681995&width=500"
              width="300"
              height="310"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss Facebook testimonial"
            ></iframe>
          </Grid>
          <Grid item className="speech-bubble">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fabhishek.maurya.98/posts/10213407272911439&width=500"
              width="300"
              height="220"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss Facebook testimonial"
            ></iframe>
          </Grid>
          <Grid item className="speech-bubble">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Farchi.anu%2Fposts%2F1828319153947684&width=500"
              width="300"
              height="380"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss Facebook testimonial"
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Publicreviews;
