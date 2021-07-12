import React from 'react';
import {Drawer, AppBar, Toolbar} from '@material-ui/core';
import {makeStyles, Typography } from '@material-ui/core';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {NavBarItems} from './NavBarItems';

const styles = makeStyles({
    page: {
        background: "light grey",
        width: "100%"
    },

    drawer: {
        width: "250px",
    },

    paper: {
        width: "250px"
    },

    root: {
        display:"flex"
    },

    icons:{
        flex: "30%",
        display: "grid",
        placeItems: "center",
    },

    titles:{
        flex: "70%",
        fontFamily: "Noto Sans, sans-serif"
    },

    logo:{
        paddingLeft: "40px",
        paddingTop: "10px"

    }
})

function NavBar() {
    const classes = styles();

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar colour="secondary">

                </Toolbar>
            </AppBar>
            
            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor='left'
            classes={{paper: classes.paper}}
            >
                <div>                
                    <Typography className={classes.logo} variant='h4'>
                    App Logo
                    </Typography>
                </div>

                <List >
                {NavBarItems.map((val, key) => (
                        <ListItem button key={key}>
                            <ListItemIcon className={classes.icons}>{val.icon}</ListItemIcon>
                            <ListItemText className={classes.titles} primary={val.title}/>
                        </ListItem>
                    ))}

                </List>

            </Drawer>
        </div>
    )
}

export default NavBar
