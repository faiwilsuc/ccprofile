import React, {useState} from 'react';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Upicon from '@material-ui/icons/KeyboardArrowDown';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';



const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root:{
    boxShadow:"0 0 0 0"
  },
  privacy:{
    width:"100%",
    color:"black",
    backgroundColor:"white",
    borderRadius: "5px",
    borderColor:"white",
    border:"10px solid",
    [theme.breakpoints.down('md')]: {
      border:"0px",
    },
  },
  privacyTitle: {
    [theme.breakpoints.down('sm')]: {
      padding: "10px 10px",
    },
    padding: "35px 0 10px", 
    margin: "10px 0",
    fontSize: "25px",
    color: "#11274B",
    fontWeight: "bold"
  },
  margin: {
    margin: theme.spacing(2),
    width:"30%",
    align:"left",
    [theme.breakpoints.down('md')]: {
      fontSize:"20px",
      width:"100%",
      align:"center"  
    },
  },
  margintext: {

    fontWeight:"bold",
    color:"#727F95",
    fontSize:"15px",
    [theme.breakpoints.down('sm')]: {
      fontSize:"20px",
      fontWeight:"bold",
    },
  },
  table: {
    padding:theme.spacing(10)
  },
  tableheadernotification: {
    color: "#727F95",
    fontSize:"15px",
    fontWeight:"bold",
    borderBottom:"0px",
    [theme.breakpoints.down('sm')]: {
      fontSize:"20px",
      fontWeight:"bold",
    },
  },
  tableheader: {
    color: "#727F95",
    fontSize:"15px",
    fontWeight:"bold",
    borderBottom:"0px",
    [theme.breakpoints.down('md')]: {
      display:"none",
    },
  },
  tablebody: {
    color: "#727F95",
    backgroundColor: "#F3F5F8",
    [theme.breakpoints.down('md')]: {
      backgroundColor: "#ffffff",
      border:"0px 0px 0px"
    },
  },
  tablecell: {
    color: "#727F95",
    fontSize:"15px",
    borderBottom:"0px",
    [theme.breakpoints.down('md')]: {
      display:"none",
      border:"0px",
    },
  },
  tablecellspan: {
    display:"none",
    [theme.breakpoints.down('md')]: {
      display:"flex",
      border:"0px",
      width:"150px"
    },
  },
  tablecellfirst: {
    color: "#727F95",
    fontSize:"15px",
    borderBottom:"0px",
  },
  privacyother:{
    fontWeight:"Bold", 
    color:"#727F95", 
  },
  tablebodydiv:{
    padding:"20px", 
    [theme.breakpoints.down('md')]: {
      marginTop:"20px",
      padding:"0px",
    } 
  },
  nativeselect:{
    width:"250px",
    paddingTop:"5px",
    verticalAlign:"middle",
    textAlign:"left",
    [theme.breakpoints.down('sm')]: {
      width:"90%",
    }, 
    [theme.breakpoints.down('xs')]: {      
    }
  },
  privacydownicon:{
    verticalAlign: 'middle',
    float:"right",
    display:"none",
    [theme.breakpoints.down('md')]: {
      display:"flex",
    }
  },
  headtext:{
    paddingLeft:"15px"
  },
  selectpattern:{
    [theme.breakpoints.down('sm')]: {
      textAlign:"center",
      paddingTop:"10px"
    }  
 }
}));

export default function CustomizedSelects(props) {
  function createData(text, online, email, txt) {
    return { text, online, email, txt };
  }
  
  const rowsData = [
    createData('Your course has been added to member’s wishlist', true, false, false),
    createData('Member is requesting to play your course', true, false, false),
    createData('Member has a friend that would like to play your course', true, false, false),
    createData('Member is hosting a round. Want to join?', true, false, false),
    createData('A friend you invited to join Captain’s Club is now a member', true, false, false),
    createData('You haven’t yet completed your Captain’s Club Profile', true, false, false),
    createData('What courses have you played?', true, false, false),
    createData('What courses are on your wishlist?', true, false, false),
    createData('Invite your golfing friends to join Captain’s Club', true, false, false),
    createData('Your Captain’s Club Gear has been shipped', true, false, false),
    createData('A member has RSVP’d for your event', true, false, false),
    createData('A member has RSVP’d for your round', true, false, false),
    createData('A member has commented on your post', true, false, false),
  ];
  const classes = useStyles();
  const [age, setAge] = useState(10);
  const [rows, setRows] = useState(rowsData);

  const handleChange = event => { 
    setAge(event.target.value);
  };
  const handleChangeCheck = (event) => { 
    props.action(event.target.id)
  };
  // const handleCheckChange = name => event => {
  //setCheckedState({ ...checkedState, [name]: event.target.checked });
  // };
  const handleCheckChange = (event) => {
    var targetId = event.target.id;
    var targetIdArr = targetId.split('_');
    rows[targetIdArr[0]][targetIdArr[1]] = !rows[targetIdArr[0]][targetIdArr[1]];
    setRows([...rows]);
  };
  return (
    <div className={classes.privacybody}>
      <p className={classes.privacyTitle}>
        <span style={{verticalAlign: 'middle',paddingLeft:"20px"}}>Privacy Settings</span>
        <Upicon className={classes.privacydownicon}></Upicon>
      </p>
      <div className={classes.privacy} >
            <Grid style={{margin:"0px"}} container>
                <Grid className={classes.headtext} item xs={12} md={3}>
                      <p className={classes.margintext}>How Others See Your Profile</p>
                </Grid>
                <Grid  className={classes.selectpattern} item xs={12} md={3}>
                    <Select
                      value={age}
                      onChange={handleChange}
                      className={classes.nativeselect}
                      input={<BootstrapInput name="age" id="age-customized-select" />}
                    >
                      <MenuItem value={10}>Full Profile1</MenuItem>
                      <MenuItem value={20}>Full Profile2</MenuItem>
                      <MenuItem value={30}>Full Profile3</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        <div className={classes.tablebodydiv}>
           <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableheadernotification}>Notification Type</TableCell>
                    <TableCell className={classes.tableheader} align="center">Online</TableCell>
                    <TableCell className={classes.tableheader} align="center">Email</TableCell>
                    <TableCell className={classes.tableheader} align="center">Text</TableCell>
                    <TableCell style={{display:"none"}} className={classes.tableheader} align="center">Text</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tablebody}>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className={classes.tablecellfirst} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="center"><Checkbox id={index + "_online"} color="default" checked={row.online} onChange={handleCheckChange} value={row.online}/></TableCell>
                      <TableCell className={classes.tablecell} align="center"><Checkbox id={index + "_email"} color="default" checked={row.email} onChange={handleCheckChange} value={row.email}/></TableCell>
                      <TableCell className={classes.tablecell} align="center"><Checkbox id={index + "_txt"} color="default" checked={row.txt} onChange={handleCheckChange} value={row.txt}/></TableCell>
                      <TableCell className={classes.tablecellspan} align="right"><ArrowRightIcon id={row.text} onClick={handleChangeCheck}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
      </div>
    </div>
  );
}