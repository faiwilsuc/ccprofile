import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Morehoriz from '@material-ui/icons/MoreHoriz';
import Morevert from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  activityTitle: {
    padding: 10,
    fontSize: 25,
    color: "#11274B",
    fontWeight: "bold",
    margin: '10px 0'
  },
  textPart: {
    padding: '8px 0',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  acceptTxt: {
    float: 'left',
    color: '#4694D9',
    fontSize: 18,
    fontWeight: "bold"
  },
  acceptBtn: {
    borderRadius: 5,
    float: 'right',
    color: '#4694D9',
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: '#FFFFFF',
    border: '1px solid grey',
    padding: '5px 30px',
  },
  declineBtn: {
    borderRadius: 5,
    float: 'left',
    color: '#4694D9',
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: '#1A73E7',
    border: '1px solid grey',
    padding: '5px 30px'
  },
  rmvTxt: {
    color: '#727F95',
    fontSize: 16
  },
  offTxt: {
    color: '#4694D9',
    fontSize: 16,
    fontWeight: 'bold'
  },
  undoTxt: {
    color: '#4694D9',
    fontSize: 16,
    fontWeight: 'bold'
  },
  ownerTxt: {
    fontSize: 16,
    color: "#727F95",
    fontWeight: "bold"
  },
  descTxt: {
    fontSize: 16,
    color: "#727F95",
    textAlign: 'right'
  },
  timeText: {
    fontSize: 16,
    color: "#727F95",
    textAlign: 'right',
    float: 'right'
  },
  declineTxt: {
    color: '#4694D9',
    fontSize: 18,
    fontWeight: "bold",
    float: 'right',
  },
  avatar: {
    borderRadius: 5,
    float: 'left',
    marginRight: 20
  },
  recentpanel: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: "20px 20px",
  },
  recentactivities: {
    backgroundColor: "#F3F5F8",
    borderRadius: 5,
    padding: 20,
    display: "flex",
  },
  noactivities: {
    margin: 'auto',
    fontSize: 20,
    color: "#C5CAD3",
  },
  activityEdit: {
    fontSize: 15,
    float: "right",
    color: "#2783D4",
  },
  iconPos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popoverTxt: {
    padding: '20px 20px',
    fontSize: 16,
    color: "#727F95",
  }
})
  const RecentActivities = ({ classes }) => {
  const [ editFlag, setEditFlag ] = useState(0);
  const [ moreFlag, setMoreFlag ] = useState(-1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [ rcntActivitiesData, setActivitiesData ] = useState([
    {
      ownerName: 'Rob Duva',
      descTxt:  'invited you to an event:',
      resultTxt: 'Captain’s Club Launch.',
      timeHistory: '15m',
      rmvFlag: false,
      offFlag: false
    },
    {
      ownerName: 'You',
      descTxt:  'have a new friend request:',
      resultTxt: 'Brian Littleton',
      timeHistory: '2d ago',
      rmvFlag: false,
      offFlag: false
    }
  ]);

  const editEnable = () => {
    setEditFlag(!editFlag);
  }
  function handleClick(event) {
    setMoreFlag(Number(event.currentTarget.id));
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function rmvNotification(){
    rcntActivitiesData[moreFlag]['rmvFlag']=!rcntActivitiesData[moreFlag]['rmvFlag'];
    setActivitiesData([...rcntActivitiesData])
    handleClose();
  }
  function offNotification(){
    rcntActivitiesData[moreFlag]['offFlag']=!rcntActivitiesData[moreFlag]['offFlag'];
    setActivitiesData([...rcntActivitiesData])
    handleClose();
  }
  function undoClick(event){
    var arrIndex = Number(event.currentTarget.id);
    if(rcntActivitiesData[arrIndex]['rmvFlag'] && !rcntActivitiesData[arrIndex]['offFlag']){//true false
      rcntActivitiesData[arrIndex]['rmvFlag']=false;
      setActivitiesData([...rcntActivitiesData])
    } else if(rcntActivitiesData[arrIndex]['offFlag'] && !rcntActivitiesData[arrIndex]['rmvFlag']){//false true
      rcntActivitiesData[arrIndex]['offFlag']=false;
      setActivitiesData([...rcntActivitiesData])
    } else if(rcntActivitiesData[arrIndex]['offFlag'] && rcntActivitiesData[arrIndex]['rmvFlag']){ //true true
      rcntActivitiesData[arrIndex]['rmvFlag']=false;
      rcntActivitiesData[arrIndex]['offFlag']=false;
      setActivitiesData([...rcntActivitiesData])
    }
  }
  function offClick(event){
    var arrIndex = Number(event.currentTarget.id);
    rcntActivitiesData[arrIndex]['offFlag']=true;
    rcntActivitiesData[arrIndex]['rmvFlag']=true;
    setActivitiesData([...rcntActivitiesData])
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
    <div>
      <p className={classes.activityTitle}>Recent Activities
        <Button className={classes.activityEdit} onClick={editEnable}>
            Edit
        </Button>
      </p>
      <div className={classes.recentpanel}>
        <div className={classes.recentactivities}>
          {rcntActivitiesData.length === 0 ? (
            <div className={classes.noactivities}>No Activities Yet</div>
          ):(
            <Grid container>
              {rcntActivitiesData.map((data, index) => {
                return (
                  <Grid container key={index} item xs={12} style={{padding: '10px 0'}}>
                    <Grid item xs={10} sm={10} md={8}>
                      {
                        (!data['offFlag'] && !data['rmvFlag']) ? ( //false false
                          <div>
                            <Avatar alt="" src={require('../../assets/images/profile_pic.png')} className={classes.avatar}/>
                            <div className={classes.textPart}>
                              <span className={classes.ownerTxt}>{data.ownerName}&nbsp;</span>
                              <span className={classes.descTxt}>{data.descTxt}&nbsp;</span>
                              <span className={classes.ownerTxt}>{data.resultTxt}</span>
                            </div>
                          </div>
                        )
                        :(data['rmvFlag'] && !data['offFlag']) ? ( //true false
                          <div> 
                            <div><span className={classes.rmvTxt}>This notification is now removed.</span>&nbsp;<span id={index} className={classes.undoTxt} onClick={undoClick} >Undo</span></div>
                            <div><span id={index} className={classes.offTxt} onClick={offClick}>Turn off notification like this</span></div>
                          </div>
                        ):((data['offFlag'] && data['rmvFlag']) || (!data['rmvFlag'] && data['offFlag']))  ? ( //true true// false true
                          <div><span className={classes.rmvTxt}>You will no longer receive notifications like this.</span>&nbsp;<span id={index} className={classes.undoTxt} onClick={undoClick}>Undo</span></div>
                        ): (
                          <div></div>
                        )
                      }
                    </Grid>
                    <Hidden smDown>
                      <Grid item xs={editFlag ? 2:3}>
                        <div style={{padding: '8px 0'}}>
                          <span className={classes.acceptTxt}>Accept</span>
                          <span className={classes.declineTxt}>Decline</span>
                        </div>
                      </Grid>
                    </Hidden>
                    <Grid item xs={editFlag ? 1:2} sm={1}>
                      <div style={{padding: '8px 0'}}>
                        <span className={classes.timeText}>{data.timeHistory}</span>
                      </div>
                    </Grid>
                    {editFlag ? (
                      <Grid item xs={1} className={classes.iconPos}>
                        <Button id={index} onClick={handleClick}>
                          <Hidden smDown>
                            <Morehoriz style={{ fontSize: "20px", color: "#727F95" }} />
                          </Hidden>
                          <Hidden mdUp>
                            <Morevert style={{ fontSize: "20px", color: "#727F95" }} />
                          </Hidden>
                        </Button>
                      </Grid>
                      ):(
                        <div></div>
                      )
                    }
                    <Hidden mdUp>
                      <Grid container item xs={12} spacing={5} style={{padding: '10px 0'}}>
                        <Grid item xs={6}>
                          <Button className={classes.acceptBtn}>Accept</Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button className={classes.declineBtn}>Decline</Button>
                        </Grid>
                      </Grid>
                    </Hidden>
                  </Grid>
                )
              })} 
            </Grid>           
          )}
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'center',
        // }}
      >
        <div className={classes.popoverTxt}>
          <p onClick={rmvNotification}>Remove this notification</p>
          <p onClick={offNotification}>Turn off notifications like this</p>
        </div>
      </Popover>
    </div >
  );
}
export default withRouter(withStyles(styles)(RecentActivities))