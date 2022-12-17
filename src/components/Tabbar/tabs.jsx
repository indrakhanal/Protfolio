import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './tabs.css'
import { themeContext } from "../../Context";
import { Backend, Frontend, Development, Languages, Tools } from "./Tech/skills";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="tabs" id="tabs">
        <Box className={"Tabs-pane"} sx={{ width: '100%', typography: 'body1' }}>
        <div className="awesome-tab">
        <div className="text-line">
        <span style={{ color: darkMode ? "white" : "" }}>Technologies </span>
        <span>I have Worked With</span>
        </div>
        </div>
            <div className="content">
            <TabContext style={{overflow:"scroll"}}  value={value}>
                    <Box  sx={{ borderBottom: 2, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}  aria-label="lab API tabs example">
                        <Tab style={{color: darkMode ? "white" : "" }} label="Backend" value="1" />
                        <Tab style={{color: darkMode ? "white" : "" }} label="Frontend" value="2" />
                        <Tab style={{color: darkMode ? "white" : "" }} label="Development" value="3" />
                        <Tab style={{color: darkMode ? "white" : "" }} label="Languages" value="4" />
                        <Tab style={{color: darkMode ? "white" : "" }} label="Tools" value="5" />

                    </TabList>
                    </Box>
                    <TabPanel value="1">
                    <Backend />
                      </TabPanel>
                    <TabPanel value="2">
                      <Frontend />
                    </TabPanel>
                    <TabPanel value="3">
                      <Development/>
                    </TabPanel>
                    <TabPanel value="4">
                      <Languages />
                    </TabPanel>
                    <TabPanel value="5">
                    <Tools/>
                    </TabPanel>

                </TabContext>
            </div>
    </Box>
    </div>
    
  );
}