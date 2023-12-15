import { Email, Logout, Notifications, Search } from '@mui/icons-material';
import { AppBar, Badge, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import {InputBase} from '@mui/material';
import { makeStyles } from '@mui/styles';

const styles = {
    root: {
        backgroundColor: '#fff',
        transform:'translateZ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'1rem',
        '&:hover':{  
            backgroundColor:'grey'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'10px'
        }
    }
}

const Header = () => {    

    return (
        <AppBar position='static' sx={styles.root}> {/* sx is the best way to override mui styles */}
            <Toolbar>
                <Grid container alignItems={'center'}>
                    <Grid item>
                        <InputBase 
                           placeholder='Search topics'
                           startAdornment={<Search fontSize='medium'/>}
                           sx={styles.searchInput}
                        />
                    </Grid>
                    <Grid item sm></Grid>                
                    <Grid item>
                        <Badge badgeContent={5} color='primary'>
                            <IconButton>
                                <Notifications fontSize='medium'/>
                            </IconButton>
                        </Badge>
                        <Badge badgeContent={1} color='secondary'>
                            <IconButton>
                                <Email fontSize='medium'/>
                            </IconButton>
                        </Badge> 
                        <IconButton>
                            <Logout />
                        </IconButton>                        
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;