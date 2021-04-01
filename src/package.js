import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  docHt,
  get,
  callAPI,
  getURL,
  updateLoc,
  retrievePath,
  colors,
} from "./services";
import { Typography, Button, Fade, Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import Styles from "./app-style";
import PreloadImage from "./helpers/preloadimg";
import GetDiscount from "./sections/getdiscount";
import { Link } from "react-router-dom";

let baseurl = "https://getsetgo.fitness";
class Package extends Component {
  constructor(props) {
    super(props);
    if (!get("products")) {
      updateLoc();
    }
    let products = JSON.parse(get("products"));
    this.state = {
      currency: products.currency,
      amount: products.amount,
      offerAmount: products.offer,
      userData: true,
      bored: true,
      discountDetails: false,
      discountActivated: false,
      activatingDiscount: false,
      products: null,
    };
  }

  createOrder(product, index) {
    let userDetails = JSON.parse(get("userDetails"));
    console.log("index", index);
    let package_id = product.service_id;
    let campaign_id = get("campaign_id") === null ? 1 : get("campaign_id");
    let affiliate_id = get("affiliate_id") === null ? 1 : get("affiliate_id");
    this.setState({ bored: false });
    if (!userDetails) this.setState({ userData: false });
    else {
      //callAPI(getURL('create_order'),'post',(data)=>{this.orderCreated(data)},(err)=>{this.errorOrderCreated(err)}, {"orderNote":`KOL ${index+1} people`,"package_id":package_id,"customer_name":userDetails.name,"customer_email":userDetails.email, "customer_phone":`${userDetails.country}-${userDetails.mobile}`, "redirect_url":baseurl+"/thank_you"})
      callAPI(
        getURL("campaign_create_order"),
        "post",
        (data) => {
          this.orderCreated(data);
        },
        (err) => {
          this.errorOrderCreated(err);
        },
        {
          orderNote: `KOL ${index + 1} people`,
          package_id: package_id,
          customer_name: userDetails.name,
          customer_email: userDetails.email,
          customer_phone: `${userDetails.country}-${userDetails.mobile}`,
          affiliate_id: affiliate_id,
          redirect_url: baseurl + "/thank_you",
          campaign_id: campaign_id,
        }
      );
      console.log(affiliate_id);
    }
  }
  orderCreated(data) {
    window.location.replace(data.data.paymentLink);
  }
  errorOrderCreated(err) {
    this.setState({ bored: true });
    console.log(err);
  }
  hideDetails = () => {
    this.setState({
      discountDetails: false,
    });
    this.props.freezeScroll(false);
  };
  showDiscount = () => {
    this.setState({
      discountDetails: true,
    });
    this.props.freezeScroll(true);
  };
  activateDiscount = () => {
    this.setState({
      activatingDiscount: true,
    });
    setTimeout(() => {
      this.setState({
        discountActivated: true,
        activatingDiscount: false,
      });
    }, 10000);
    this.hideDetails();
  };
  setProducts=(data)=>{  
    console.log("DATA FETCHED!!")      
    var services = data.data.services;
    console.log(services);
    //setServices(services);
    baseurl = data.data.redirect_base_url;
    this.setState({ products: services });
    let row=[], fields = [];
    let desc
      services.map((product)=>{
          desc = JSON.parse(product.pack_des);
         row.push(desc); 
         for (const key in desc) {
          row.push(desc);
        }
        })
        var uniqueRow = [...new Set(row)]; 
        console.log("UNIQUE ROW -->>", uniqueRow);
        this.setState({serviceInclusions:uniqueRow});

  }
  getproducts = () => {
    let currency = this.state.currency;
    let campaign_id = get("campaign_id") === null ? 1 : get("campaign_id");
    let currencytext =
      (currency === "₹" ? "INR" : currency) ||
      (currency === "$" ? "USD" : currency) ||
      (currency === "aed" ? "AED" : currency);
    callAPI(
      "https://api.getsetgo.fitness/base_ind/API/v1/fetch_services",
      "post",
      (data) => {this.setProducts(data)},
      (err) => {
        console.log(err);
      },
      {
        campaign_id: campaign_id,
        currency: currencytext,
      }
    );
  };
  returnCurrencySymbol = (currency)=>{
    switch (currency){
      case 'INR':
        return "₹";
        case 'AED':
          return 'aed';
        default: 
        return '$';
    }
  }
  renderVal=(text)=>{
    var element;
    switch (text) {
      case 'Yes':
          return <span className="material-icons" style={{color: 'green', fontSize: '1.5rem', fontWeight: 'bold'}}>add</span>
        break;
        case 'No':
          return <span className="material-icons" style={{color: 'red', fontSize: '1.5rem', fontWeight: 'bold'}}>remove</span>
        break;
      default:
        return <Typography variant="body2">{text}</Typography>
        break;
      
    }
    return element;

  }
  componentDidMount() {
    this.getproducts();
  }

  render() {
    let {
      amount,
      products,
      currency,
      userData,
      bored,
      offerAmount,
      discountDetails,
      discountActivated,
      activatingDiscount,
      serviceInclusions,
    } = this.state;
    let desc = [
      "Stranded alone at home? Well, no more. Join thousands of others and turn it into a great at-home-staycation for you!",
      "Running out of ideas about things to do together? Tired of binge-watching series and movies? How about getting fit together?",
      "They say the more the merrier. We can tell you it's true! Join with your complete family. It doesn't get better than this.",
    ];
    let imgs = [
      `${retrievePath()}boredMan.jpg`,
      `${retrievePath()}boredCouple.jpg`,
      `${retrievePath()}boredFamily.jpg`,
    ];
    let imgsHappy = [
      `${retrievePath()}happyMan.jpg`,
      `${retrievePath()}happyCouple.jpg`,
      `${retrievePath()}happyFamily.jpg`,
    ];
    console.log("PRODUCTS -->>", serviceInclusions)
    return (
      <Grid
        container
        style={{
          minHeight: `${docHt() - 100}px`,
          paddingTop: Styles.spacing(10),
          ...Styles.blueBG,
        }}
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        {!userData && (
          <Grid item style={{ padding: "0 50px", textAlign: "center" }}>
            <Typography variant="h2" style={Styles.colorWhite}>
              Uh oh, we don't have your user details. Please go back to home and
              fill your details
            </Typography>
            <Link to="/">
              <Button variant="contained" color="primary">
                <Typography variant="subtitle1" style={Styles.colorWhite}>
                  Click here to go to home
                </Typography>
              </Button>
            </Link>
          </Grid>
        )}
        {userData && (
          <React.Fragment>
            <Grid item>
              <Typography
                variant="h2"
                style={{
                  ...Styles.colorWhite,
                  ...Styles.centerTxt,
                }}
              >
                Get started today! Your health is worth it
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  ...Styles.colorWhite,
                  ...Styles.centerTxt,
                }}
              >
                All our plans are meticulously crafted to ensure you adopt a healthy lifestyle and enjoy freedom with moderation. 
              </Typography>
            </Grid>
            {!products && (
              <Grid
                item
                style={{
                  ...Styles.colorWhite,
                  ...Styles.centerTxt,
                  ...Styles.marginBottom,
                }}
              >
                Loading services. Please wait ...
              </Grid>
            )}

            {products && (
              <Grid
                item
                container
                alignItems="center"
                justify="center"
                //style={{ ...Styles.marginTop }}
              >
                {
                  //Object.keys(this.state.amount).map((key, indx)=>
                  // products &&
                  //   products.map((product, index) => {
                  //     return (
                        <TableContainer component={Paper} style={{width: '50%', padding: '1vw', borderRadius: '20px',minWidth:'94vw',marginBottom:"10vh"}}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><div style={{background: colors.yellow, borderRadius: '20px', padding: '12px'}}><Typography variant="subtitle2">Plans</Typography></div></TableCell>
            {products.map(el=>(
              <TableCell align="center"><div style={{background: colors.primary, borderRadius: '20px', padding: '14px', color: colors.secondary}}>
                <Typography variant="h6">{el.service_caption}</Typography></div></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {products.map((product) => (
            <TableRow key={product.name}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.calories}</TableCell>
              <TableCell align="right">{product.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          {serviceInclusions && Object.keys(serviceInclusions[0]).map((key, indx)=>(
            <TableRow key={`${key}-${indx}`}>
              <TableCell component="td" scope="row"><Typography variant="body2">{key}</Typography></TableCell>
              {serviceInclusions.map(el=>(
                <TableCell align="center" component="td" scope="row">
                  <Typography variant="body2">{this.renderVal(el[key])}</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
          <TableCell align="left" component="td" scope="row">&nbsp;</TableCell>
          {products.map(el=>(<TableCell align="center" component="td" scope="row"><Grid container direction="column">
            <Grid item><Typography variant="body1">{this.returnCurrencySymbol(el.pack_currency)} {el.pack_price}</Typography></Grid><Grid item><Typography variant="body2" style={{color: colors.grey}}>{"12 weeks"}</Typography></Grid></Grid></TableCell>))}
          </TableRow>
          <TableRow>
          <TableCell align="left" component="td" scope="row"></TableCell>
          {products.map((product, indx)=>(
            <TableCell align="center" component="td" scope="row">
            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => this.createOrder(product, indx)}
                                disabled={!bored}
                                style={{width: '100%'}}
                              >
                                <Typography
                                  variant="body2"
                                  style={{...Styles.colorWhite}}
                                >
                                  {!bored ? "Please wait ..." : "Sign up"}
                                </Typography>
                              </Button>
            </TableCell>
          ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
                        // <Grid
                        //   item
                        //   xs={4}
                        //   style={{
                        //     ...Styles.centerTxt,
                        //     ...{ padding: "0 50px" },
                        //     boxShadow: '0px 0px 19px -3px rgba(0,0,0,0.36)',
                        //     background: 'rgb(255, 255, 255)',
                        //     border :'5px soild'
                        //   }}
                        //   key={index}
                        // >
                            
                        //       <PreloadImage
                        //         src={imgs[index]}
                        //         alt="Diabetes special plan"
                        //         style={{ width: "100%", minHeight: "100px" }}
                        //       />
                            
                          
                        //   <Typography style={{ ...Styles.colorGrey }}>
                        //     (Cost: {currency} {product.pack_price} per person)
                        //   </Typography>
                        //   <Typography
                        //     variant="subtitle2"
                        //     style={{
                        //       ...Styles.colorPrimary,
                        //       ...Styles.marginTop,
                              
                        //     }}
                        //   >
                        //     <strong>{product.service_caption}</strong>
                        //     {/* //product.pack_des} */}
                        //   </Typography>
                        //   <Divider style={{height:'4px'}} />
                        //   {serviceInclusions && serviceInclusions.map((feature,index)=>(<Grid>
                        //     <Typography variant="h6" style={{...Styles.colorPrimary}}>
                        //       Feature: {feature}
                        //       </Typography>
                        //   <Typography variant="subtitle2">{this.setIcons(JSON.parse(product.pack_des)[feature])}</Typography>
                        //   </Grid>
                        //   ))}
                        //   <Grid item>
                        //     <Styles.ColorButton
                        //       variant="contained"
                        //       color="primary"
                        //       onClick={() => this.createOrder(product, index)}
                        //       disabled={!bored}
                        //     >
                        //       <Typography
                        //         variant="subtitle1"
                        //         style={Styles.colorWhite}
                        //       >
                        //         {!bored ? "Please wait ..." : "Buy now"}
                        //       </Typography>
                        //     </Styles.ColorButton>
                        //   </Grid>
                        // </Grid>
                      // );
                    // })
                }
               {/* {products&&(
                  <Grid xs={8}><ProductTable products={products}/></Grid>
              )
  } */}
  </Grid>
            )}
            <GetDiscount
              discountDetails={discountDetails}
              hideDetails={this.hideDetails}
              activateDiscount={this.activateDiscount}
            />
          </React.Fragment>
        )}
      </Grid>
    );
  }
}
export default Package;
