import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { retrievePathMobile, docHt } from "../services";
import Signupform from "../signupform";
import PreloadImage from "../helpers/preloadimg";
import Arrow from "./downarrow";
import "../App.css";
import customTxt from "./customTxt.json";
class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid
          item
          container
          style={{
            ...Styles.banner,
            ...Styles.padding5,
            //ANVbackground: `linear-gradient(0deg, rgba(0,0,0,0.3981967787114846) 21%, rgba(0,0,0,0.4) 66%), url('./img/Website_Image.jpg')`,
            background: `url('./img/Website_Image.jpg')`,
            backgroundPosition: "left",
            backgroundSize: "cover",
          }}
          alignItems="center"
          justify="center"
          direction="column"
          className="fixed"
        >
          {/* <PreloadImage
            src={`${retrievePathMobile()}banner.jpg`}
            style={Styles.bgImg}
          /> */}
          <Grid
            id="homePageHeading"
            item
            container
            alignItems="center"
            justify="center"
            style={{ ...Styles.translucentContainer,marginTop:'15%',background:'rgb(6 4 29 / 20%)' }}
          >
            <Typography variant="h2" style={{ ...Styles.colorWhite }}>
              {customTxt.bannerPageTxt.mainHeading}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ ...Styles.colorWhite, ...Styles.marginTop }}
            >
            <strong>  {customTxt.bannerPageTxt.subHeading}</strong>
            </Typography>
          </Grid>
          <Arrow />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          className="top"
          style={{
            padding: "20% 5%",
            ...Styles.highZ,
            ...Styles.fullHt,
            ...Styles.relative,
          }}
        >
          <Grid
            item
            container
            style={{
              ...Styles.translucentContainer,
              ...Styles.feildRadius,
              padding: "20px",
              background: "rgb(101 97 141 / 70%)",
            }}
          >
            <Grid item>
              <Typography style={{ ...Styles.colorWhite }} variant="h5">
                <span style={{ ...Styles.colorYellow }}>Sign up with us </span>
                to manage your
                <span style={{ ...Styles.colorYellow }}> Diabetes</span> better
                & take a step towards a
                <span style={{ ...Styles.colorYellow }}> Better Life</span>
              </Typography>
              <hr />
            </Grid>
            <Grid
              item
              container
              style={{ minHeight: `${docHt() / 2.5}px` }}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Signupform />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Banner;
