import React from "react";
import { Button, Card, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles((theme) => ({
  card_spacing: {
    padding: 20,
    width: "20rem",
    boxShadow: "none",
    background: theme.palette.secondary.light,
    [theme.breakpoints.down("md")]: {
      width: "14rem",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "18rem",
      margin: "auto",
      marginBottom: 40,
    },
  },
  title_2: {
    color: theme.palette.primary.light,
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "12px!important",
    },
  },
  title: {
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 17,
    },
  },
  Headerlist: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price_box: {
    border: "0px solid",
    borderRadius: 10,
    padding: 4,
    paddingLeft: 20,
    paddingRight: 20,
    background: theme.palette.primary.lightgray,
    [theme.breakpoints.between("sm", "md")]: {
      padding: 2,
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  listing_order: {
    display: "flex!important",
    flexDirection: "column!important",
    background: theme.palette.primary.lightgray,
    display: "block!important",
  },
  btn_styles: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  inside_btn: {
    width: "100%",
    padding: 12,
    paddingTop: "14px!important",
    paddingBottom: "14px!important",
    textTransform: "capitalize",
    background: "#7073BE!important",
    textTransform: "none!important",
  },
  lables: {
    lineHeight: 2.4,
    color: theme.palette.primary.dark,
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 10,
    },
  },
  listitems: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));
function CardContentComponent({ item,index }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card_spacing}
      style={{
        backgroundColor: item.backgroundColor,
        height: item.height,
        color: item.color,
      }}
    >
      <Box className={classes.changecard}>
        <Box className={classes.Headerlist}>
          <Box>
            <h5 className={classes.title}>{item.HeaderContent.title}</h5>
            <Typography className={classes.title_2}>
              {item.HeaderContent.subtitle}
            </Typography>
          </Box>
          <Box className={classes.price_box}>
            <h3 style={{ color: "black" }}>{item.HeaderContent.price}</h3>
            <Typography style={{ color: "black" }}>
              {item.HeaderContent.month}
            </Typography>
          </Box>
        </Box>
        <hr />
        {item.information.map((item) => {
          return (
            <Box className={classes.listitems} >
              <lable className={classes.lables} style={{ color: index==0 ? '#8B93A7': '#19233C'  }}>
                <Checkbox
                  icon={<CircleChecked style={{ color: index==0 ? '#8B93A7': '#19233C'  }} />}
                  checkedIcon={<CircleUnchecked style={{ color: index==0 ? '#8B93A7': '#19233C'  }} />}
                />
                {item.key}{" "}
              </lable>
            </Box>
          );
        })}
        <Box className={classes.btn_styles}>
          <Button variant="contained" className={classes.inside_btn}>
            Get started
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
export default CardContentComponent;
