import React from 'react';
import './App.css';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import { Box, CssBaseline, createTheme } from '@mui/material';
import PageHeader from '../Components/PageHeader';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import Employees from '../Employees/Employees';



const styles = {
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
}

function App() {  

  
  return (
    <>    
      <SideBar />
      <Box sx={styles.appMain}>
        <Header />
        
        <Employees />
      </Box>
      <CssBaseline /> {/* CssBaseLine applies common css rules that are pretty much always used */}
    </>

  );
}

export default App;
