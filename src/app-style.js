import Ordersummary from "./ordersummary";
import { colors } from "./services";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

let docHt = document.documentElement.clientHeight;

const ColorButton = withStyles((theme) => ({
  root: {
    color: colors.blue,
    backgroundColor: colors.yellow,
    border: `1px solid ${colors.yellow}`,
    "&:hover": {
      backgroundColor: colors.transparent,
      border: `1px solid ${colors.yellow}`,
      color: colors.yellow,
    },
  },
}))(Button);

const handleScroll = () => {
  window.scroll({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
};

export default {
  handleScroll,
  ColorButton,
  cardRadius: {
    borderRadius: "5px",
  },
  feildRadius: {
    borderRadius: "5px",
  },
  colorWhite: {
    color: colors.secondary,
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorYellow: {
    color: colors.yellow,
  },
  colorGrey: {
    color: colors.grey,
  },
  colorBlack: {
    color: "black",
  },
  colorBlue: {
    color: colors.blue,
  },
  colorTransparent: {
    background: colors.transparent,
  },
  blackBG: {
    background: "#000",
  },
  greyBG: {
    background: "#111",
  },
  blueBG: {
    background: "#3e4e6d",
  },
  whiteBG: {
    background: "#fff",
  },
  bgImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  marginTop: {
    marginTop: "10px",
  },
  padding5: {
    padding: "5%",
  },
  padding10: {
    padding: "10%",
  },
  paddingRight5: {
    paddingRight: "5px",
  },
  spacingVertical: {
    padding: "100px 0",
  },
  lftTxt: {
    textAlign: "left",
  },
  centerTxt: {
    textAlign: "center",
  },
  banner: {
    height: `${docHt}px`,
    zIndex: 1000,
    overflow: "hidden",
  },
  fixed: {
    position: "-webkit-sticky",
    position: "sticky",
    top: 0,
  },
  relative: {
    position: "relative",
  },
  spacing: (value) => `${value * 8}px`,
  section01: {
    color: colors.secondary,
  },
  // section03:{
  //   background: `url(${homewo})`,
  //   backgroundSize: '100%',
  //   backgroundRepeat: 'none',
  // },
  marginBottom: {
    marginBottom: "50px",
  },
  section02: {
    background: "#111",
    padding: "0 5%",
    minHeight: `${docHt}px`,
  },
  translucentContainer: {
    background: colors.translucentBG,
    padding: "20px",
  },
  fullHt: {
    minHeight: `${docHt}px`,
    background: "#fff",
  },
  fullHtNoBG: { height: `${docHt}px` },
  highZ: {
    zIndex: 10000,
  },
  imgWidth: {
    width: "100%",
  },

  italicTxt: {
    fontStyle: "italic",
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    padding: "20px",
    background: "rgb(100 116 166 / 44%)",
    zIndex: 20000,
  },
  footer: {
    padding: "0.2rem",
    background: "#fff",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    paddingTop: "120px",
    width: "100%",
    background: "#000",
  },
  //form styles
  formFieldContainer: {
    height: "85px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  whiteColor: { color: colors.secondary },
  err: { color: colors.err },
  err2: { color: colors.err, marginLeft: "45px" },
  special: { display: "inline-block", width: "5%", textAlign: "center" },
  countryContainer: { display: "inline-block", width: "15%" },
  mobileContainer: { display: "inline-block", width: "75%" },
  ordersummarySuccessMsg: { marginBottom: "80px", marginTop: "100px" },
  footerfont: { fontSize: "0.6rem" },
};
