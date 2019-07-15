import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Brand from './brand';
import Size from './size';
import Grid from '@material-ui/core/Grid';
import Clear from '@material-ui/icons/Clear';
import { Hidden } from '@material-ui/core';

const styles = theme => ({
  golftitle: {
    padding: "10px",
    fontSize: "25px",
    color: "#11274B",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "10px",
  },
  golfedit: {
    fontSize: "15px",
    float: "right",
    height: "100%",
    paddingTop: "10px",
    color: "#2783D4",
  },
  golfcancel: {
    fontSize: "15px",
    float: "right",
    height: "100%",
    paddingTop: "10px",
    color: "#2783D4",
    marginLeft: 10,
  },
  golfsave: {
    fontSize: "15px",
    float: "right",
    height: "100%",
    paddingTop: "10px",
    backgroundColor: "#2883D4",
    color: "white",
  },
  pgolfpanel: {
    width: "100%",
    color: "black",
    backgroundColor: "white",
  },
  golfpanel: {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
    borderColor: "white",
    border: "10px solid",

    [theme.breakpoints.down('md')]: {
      padding: "20px 20px",
    },
    [theme.breakpoints.down('sm')]: {
      padding: "20px 0px",
    }
  },
  golf: {
    width: "100%",
    color: "#354866",
    backgroundColor: "#F3F5F8",
    borderRadius: "5px",
    display: "flex",
  },
  controlbtn: {
    border: "2px solid #D1D8E0",
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%",
    padding: "0px",
    height: "57px",
  },
  rolename: {
    fontWeight: "Bold",
    fontSize: 18,
    color: "#727F95",
    paddingLeft: 5,
    paddingRight: 5,
  },
  margin: {
  },
  item_desc: {
    marginTop: "0px",
    width: "100%",
  },
  hyperlink: {
    width: 20,
  },
  gearPanel_listTitle: {
    color: "#354866",
    fontSize: 25,
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    borderColor: "white",
    border: "10px solid",
    fontWeight: "bold",

    [theme.breakpoints.down('md')]: {
      padding: "20px 0px",
    },
    [theme.breakpoints.down('sm')]: {
      padding: "20px 0px",
    }
  },

  gear_list: {
    padding: 10,
    fontSize: 25,
    color: "#73859B",
    fontWeight: 400,
  },
  course_list_mobile: {
    padding: 10,
    fontSize: 25,
    color: "#73859B",
    fontWeight: 400,
  },
  deletebtn: {
    minWidth: 0,
    width: 36,
    borderRadius: "50%",
    backgroundColor: "#B5B5B5",
    color: "white",
    verticalAlign: "-webkit-baseline-middle",
  },
  deletebtnmobile: {
    minWidth: 0,
    float: "right",
    width: 36,
    borderRadius: "50%",
    backgroundColor: "#B5B5B5",
    color: "white",
    verticalAlign: "-webkit-baseline-middle",
  },
  mobileRoleName: {
    padding: "5px 0px",
    color: "black",
    fontWeight: "bold",
  },
  mobileDescription: {
    padding: "5px 0px", 
    color: "#4895DA",
  },
  mobileBrand: {
    padding: "5px 0px",
  },
  rightBtns: {
    float: "right",
  }
})

const sizes = ["N/A", "S", "M", "L"];

const list = [
  { key: "ball", type: "Golf Ball", description: "AVX Golf Balls", brand: "Titleist", size: "0" },
  { key: "driver", type: "Driver", description: "M2 (2017)", brand: "TaylorMade", size: "0" },
  { key: "wedge", type: "Wedge", description: "588 RTX Satin Chrome", brand: "Cleveland", size: "1" },
  { key: "putter", type: "Putter", description: "KM1 DaSS Arm-Lock", brand: "Bettinardi", size: "0" },
  { key: "shoes", type: "Shoes", description: "Roma White & Grey", brand: "Lambda", size: "0" },
  { key: "polo", type: "Polo", description: "Victory Solid Golf Polo", brand: "Nike", size: "2" },
  { key: "gloves", type: "Gloves", description: "StaSof Golf Gloves", brand: "FootJoy", size: "3" }
];

const GolfMembership = ({ history, classes }) => {

  const [editFlag, setEditFlag] = useState(false);
  //datas to display gear datas.
  const [gearDatas, setGearDatas] = useState(list);
  //check if exists a row in gearDatas.
  const checkExists = (check_key) => {
    for (let i in gearDatas) {
      if (gearDatas[i].key === check_key) {
        return true;
      }
    }
    return false;
  }

  //temp values.
  const emptyList = [
    { key: "ball", type: "Golf Ball", description: "", brand: "", size: "0" },
    { key: "driver", type: "Driver", description: "", brand: "", size: "0" },
    { key: "wedge", type: "Wedge", description: "", brand: "", size: "0" },
    { key: "putter", type: "Putter", description: "", brand: "", size: "0" },
    { key: "shoes", type: "Shoes", description: "", brand: "", size: "0" },
    { key: "polo", type: "Polo", description: "", brand: "", size: "0" },
    { key: "gloves", type: "Gloves", description: "", brand: "", size: "0" }
  ];
  const [tempRows, setTempRows] = useState(emptyList);

  const setTemp = (mainKey, valueKey, event) => {
    let index;
    for (let i in tempRows) {
      if (tempRows[i].key === mainKey) {
        index = i;
      }
    }
    let temp = tempRows;
    temp[index][valueKey] = event.target.value;
    setTempRows(temp);
  }

  //toggle to edit state.
  const editClick = () => {
    setEditFlag(!editFlag);
  }

  //add a row to list
  const addList = (mainKey) => {
    let index;
    for (let i in tempRows) {
      if (tempRows[i].key === mainKey) {
        index = i;
      }
    }

    if (tempRows[index]["description"] === "" || tempRows[index]["brand"] === "") {
      return;
    }

    // setGearDatas(gearDatas);
    setGearDatas([
      ...gearDatas, tempRows[index]
    ])
  }
  const Desktopgear = (props) => {
    if (props.Flag) {
      return (
        <div className={classes.golf}>
          <Grid container spacing={2} style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Grid item sm={2}>{props.gear.type}</Grid>
            <Grid item sm={4}>{props.gear.description}</Grid>
            <Grid item sm={3}>{props.gear.brand}</Grid>
            <Grid item sm={2}>{sizes[props.gear.size]}</Grid>
            <Grid item sm={1}>
              <Button id={props.index} onClick={() => deleteRow(props.index)} className={classes.deletebtn}>
                <Clear />
              </Button>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div className={classes.golf}>
          <Grid container spacing={2} style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Grid item sm={2}>{props.gear.type}</Grid>
            <Grid item sm={4}>{props.gear.description}</Grid>
            <Grid item sm={3}>{props.gear.brand}</Grid>
            <Grid item sm={3}>{sizes[props.gear.size]}</Grid>
          </Grid>
        </div>
      );
    }
  };
  const DesktopEdit = (props) => {
    if (props.Flag && (!checkExists(props.gear.key))) {
      return (
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={2}>
                <p className={classes.rolename} >{props.gear.type}</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <TextField
                  placeholder="Item Description"
                  onChange={event => setTemp(props.gear.key, "description", event)}
                  className={classes.item_desc}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Brand onSelect={event => setTemp(props.gear.key, "brand", event)} className={classes.brand} />
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Size onChange={event => setTemp(props.gear.key, "size", event)} className={classes.size} />
              </Grid>
              <Grid item xs={12} sm={12} md={1}>
                <div>
                  <Button onClick={() => addList(props.gear.key)} className={classes.controlbtn} >
                    Add
                    </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      );
    } else {
      return "";
    }
  };

  const renderDesktopEditList = () => {
    if (tempRows.length > 0) {
      return tempRows.map((gear, index) => (
        <DesktopEdit gear={gear} key={index} index={index} Flag={editFlag} />
      ));
    }
    else return [];
  }
  //store the list to display golf membership when the viewport is desktop.
  const renderDesktopGear = () => {
    if (gearDatas.length > 0) {
      return gearDatas.map((gear, index) => (
        <Desktopgear gear={gear} key={index} index={index} Flag={editFlag} />
      ));
    }
    else return [];
  }
  const desktoplist = renderDesktopGear();
  const desktopEditList = renderDesktopEditList();

  const Mobilegear = (props) => {
    if (props.Flag) {
      return (
        <Grid item xs={12} md={12} style={{padding: "20px 0px"}}>
          <div className={classes.mobileRoleName}>{props.gear.type}</div>
          <div className={classes.mobileDescription}>{props.gear.description}
          </div>
          <div className={classes.mobileBrand}>
            Brand: {props.gear.brand}
            <Button id={props.index} onClick={() => deleteRow(props.index)} className={classes.deletebtnmobile}>
              <Clear />
            </Button>
          </div>
          <div className={classes.mobileBrand}>Size : {sizes[props.gear.size]}</div>
        </Grid>
      );
    } else {
      return (
        <Grid item xs={12} md={12} style={{padding: "20px 0px"}}>
          <div className={classes.mobileRoleName}>{props.gear.type}</div>
          <div className={classes.mobileDescription}>{props.gear.description}
          </div>
          <div className={classes.mobileBrand}>
            Brand: {props.gear.brand}
          </div>
          <div className={classes.mobileBrand}>Size : {sizes[props.gear.size]}</div>
        </Grid>
      );
    }
  };
  //store the list to display golf membership when the viewport is desktop.
  const renderMobileGear = () => {
    if (gearDatas.length > 0) {
      return gearDatas.map((gear, index) => (
        <Mobilegear gear={gear} key={index} index={index} Flag={editFlag} />
      ));
    }
    else return [];
  }
  const mobilelist = renderMobileGear();

  //delete a row from list
  const deleteRow = (index) => {
    gearDatas.splice(index, 1);
    setGearDatas([...gearDatas]);
  }

  return (
    <div>
      <p className={classes.golftitle}>
        My Gear Preference
        {editFlag === false && (
          <Button className={classes.golfedit} onClick={editClick}>
            Edit
          </Button>
        )}
        {editFlag === true && (
          <span className={classes.rightBtns}>
            <Button className={classes.golfcancel} onClick={editClick}>
              Cancel
            </Button>
            <Button className={classes.golfsave} onClick={editClick}>
              Save
            </Button>
          </span>
        )}
      </p>
      <Hidden mdDown>
        {editFlag === true && (
          <div className={classes.pgolfpanel}>
            {desktopEditList}
          </div>
        )}

        <div className={classes.golfpanel}>
          <div className={classes.gearPanel_listTitle}>
            <Grid container spacing={2}>
              <Grid item sm={2}>Type</Grid>
              <Grid item sm={4}>Item Description</Grid>
              <Grid item sm={3}>Brand</Grid>
              <Grid item sm={3}>Size</Grid>
            </Grid>
          </div>
          <div className={classes.gear_list}>
            {desktoplist}
          </div>
        </div>
      </Hidden>
      <Hidden lgUp>
        {editFlag === true && (
          <div className={classes.pgolfpanel}>
            {desktopEditList}
          </div>
        )}

        <div className={classes.golfpanel}>
          <div className={classes.gear_list}>
            {mobilelist}
          </div>
        </div>
      </Hidden>
    </div >
  )
}
export default withRouter(withStyles(styles)(GolfMembership))