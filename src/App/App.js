import React from 'react';
import './App.css';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import { Box, CssBaseline, createTheme } from '@mui/material';
import PageHeader from '../Components/PageHeader';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import Employees from '../Employees/Employees';
import { ThemeProvider } from '@mui/styles'; //in MUI v5, ThemeProvider is required to use makeStyles()



const styles = {
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
}

function App() {  

  
  return (
    <ThemeProvider>    
      <SideBar />
      <Box sx={styles.appMain}>
        <Header />
        
        <Employees />
      </Box>
      <CssBaseline /> {/* CssBaseLine applies common css rules that are pretty much always used */}
    </ThemeProvider>

  );
}

export default App;
