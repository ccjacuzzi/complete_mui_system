import { withStyles } from '@mui/styles';
import React from 'react';

const style = {
    sideMenu: {
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'320px',
        height:'100%',
        backgroundColor:'#253053'
    }
}

const SideBar = (props) => {
    const {classes} = props;
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(style)(SideBar);