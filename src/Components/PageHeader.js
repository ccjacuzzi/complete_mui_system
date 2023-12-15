
import { Card, Paper, Typography, Box } from '@mui/material';
import React from 'react';


// pass thest objects into sx prop of mui components
const styles = {
    root:{
        backgroundColor:'pink'
    },
    pageHeaderDiv:{
        padding: '20px',
        margin: '0px 20px 5px 20px',
        display:'flex'
    },
    pageHeader:{
        padding:'20px',
        margin:'20px'
    }    
}


const PageHeader = (props) => {
    const {icon, title, subtitle} = props;    
    
    return (
        <Paper elevation={0} square sx={styles.root}>
            <Box sx={styles.pageHeaderDiv}>
                <Card style={{display:'inline-block', padding:'20px'}}>
                    {icon}
                </Card>

                <Box sx={styles.pageHeader}>
                    <Typography
                        variant='h6'
                        component='div'>
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle'
                        component='div'>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>

        </Paper>
    );
};

export default PageHeader;