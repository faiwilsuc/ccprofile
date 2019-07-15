import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';
import {Splash, Profile} from '../pages'
import GuestHeader from '../components/header_guest'
import Footer from '../components/footer'

const styles = theme => ({
    root: {
        color: theme.palette.textOnPrimary,
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh'
    }
})

const GuestLayout = ({ classes }) => {
    return (
        <div className={classes.root}>
            <GuestHeader />
            <div>
                <Switch>
                    <Route path='/' exact component={Splash} />
                    <Route path='/profile' exact component={Profile} />
                    <Redirect to='/' />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default withStyles(styles)(GuestLayout)
