import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './wexp.css'
import { themeContext } from "../../Context";

export default function WorkExperience() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="wexp" id="wexp">
        <Box className={"Tabs-pane"} sx={{ width: '100%', typography: 'body1' }}>
        <div className="awesome-wexp">
        <div className="text-wexp">
        <span style={{ color: darkMode ? "white" : "" }}>Work </span>
        <span>Experience</span>
        </div>
        </div>
            <div className="content">
            <TabContext  value={value}>
                    <Box  sx={{ borderBottom: 2, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab style={{color: darkMode ? "white" : "" }} label="SmartTech Solution" value="1" />
                        <Tab style={{color: darkMode ? "white" : "" }} label="VolgAI PVT.LTD." value="2" />
                        <Tab style={{color: darkMode ? "white" : "" }} label="Broadways InfoSys" value="3" />
                        <Tab style={{color: darkMode ? "white" : "" }} label="Hobby Projects" value="4" />

                    </TabList>
                    </Box>
                    <TabPanel value="1">
                    <div className="container">
                    <h2>Full Stack Python Developer</h2>
                    <span>2020/01 - Now</span>
                    <ul className="tech" style={{listStyle:""}}>
                        <li>Multi-Tenant e-commerce Website.</li>
                        <p>Created a multi-tenant featured website. Which allows allows "users in separate tenants" to view the application as though it was their own. 
                            A typical scenario that lends itself to a multitenant application is one in which all users of the application from different
                             tenants may wish to customize the user experience but otherwise have the same basic business requirements. </p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Django</li>
                            <li>Django Rest Framework</li>
                            <li>Bootstrap</li>
                            <li>Ajax</li>
                            <li>JQuerry</li>
                            <li>Django Tenants</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Nginx</li>
                            <li>GIT</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Live Projects Link:</li>
                            <li><a href="https://merobaby.com/" target={"_blank"}>LINK1 &nbsp;&nbsp;</a></li>
                            <li><a href="https://ntsagro.com/" target={"_blank"}>LINK2 &nbsp;&nbsp;</a></li>
                            <li><a href="https://everyinches.com/" target={"_blank"}>LINK3&nbsp;&nbsp;</a></li>
                            <li><a href="https://rupitastore.ordersathi.com/" target={"_blank"}>LINK4&nbsp;&nbsp;</a></li>
                        </ul>
                        <li>Smart water drinking assets management system.</li>
                        <p>The asset management tools comprising a mobile app, a web dashboard, and a configuration
                            panel are developed to support the management of assets and making asset management plans
                            for water systems.<br />
                            The mobile app is a password-protected application that allows operational staff members of the
                            water system to view and add information into the water system. The web dashboard is a publicly
                            accessible web link that presents information about the water system. The configuration panel in
                            the password-protected data management area for the entire system. Data and settings for the
                            water system can be managed from the configuration area.
                        </p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Django</li>
                            <li>Djnago Rest Framework</li>
                            <li>Oauth</li>
                            <li>Celery</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Typescript</li>
                            <li>Docker</li>
                            <li>GIT</li>
                            <li>Nginx</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Live Projects Link:</li>
                            <li><a href="https://assetmanagementsystem.netlify.app/#/login" target={"_blank"}>LINK1&nbsp;&nbsp;</a></li>
                            <li><a href=" https://assetmanagementsystem.netlify.app/#/scheme/scheme-name/home" target={"_blank"}>LINK2&nbsp;&nbsp;</a></li>
                        </ul>
                        <li>Logistics Management System.</li>
                        <p>In Logistics management section </p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Django</li>
                            <li>Django Rest Framework</li>
                            <li>Bootstrap</li>
                            <li>Ajax</li>
                            <li>JQuerry</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Nginx</li>
                            <li>GIT</li>
                        </ul>
                        <li>API integration with Odoo.</li>
                        <p>Integrated api endpoint provided by odoo services to the e-commerce website.
                            Thuis System autometically push every order to odoo system when admin confirm the order from the admin panel</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Djano</li>
                            <li>Python requests</li>
                            <li>Sessions</li>
                            <li>Cookies</li>
                            <li>GIT</li>
                        </ul>
                        <li> Sales and Order manager for e-commerce</li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Django</li>
                            <li>Django Rest Framework</li>
                            <li>Bootstrap</li>
                            <li>Ajax</li>
                            <li>JQuerry</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>Nginx</li>
                            <li>GIT</li>
                        </ul>
                    </ul>
                    </div>
                      </TabPanel>
                    <TabPanel value="2">
                    <div className="container">
                    <h2>JUNIOR PYTHON DEVELOPER</h2>
                    <span>2019/06 - 2020/01</span>
                    <ul className="tech" style={{listStyle:""}}>
                        <li>speech to text using google API.</li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Flask</li>
                            <li>SqLiteDb</li>
                            <li>Heroku</li>
                            <li>Docker</li>
                            <li>Google API</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/speech-to-text" target={"_blank"}>View Repository</a></li>
                        </ul>
                        <li>multi-tenant Django chat App using Web Socket.</li>
                        <p>Live chat support is a way for customers to get help through instant messaging platforms. 
                            It happens on a one on one level, often via a company's website. It can be a proactive
                             chat pop-up like a chat box appearing on your screen and asking if you need help.</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Django</li>
                            <li>PostgreSQL</li>
                            <li>Django Tenants</li>
                            <li>Web Sockets</li>
                            <li>GIT</li>
                            <li>Heroku</li>
                            <li>Docker</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/Multitenant-ChatApp-Django" target={"_blank"}>View Repository</a></li>
                        </ul>
                        <li>AI powered Chat-bot using RASA framework.</li>
                        <p>A complex chatbot system that can be customized and integrated in any website to provide contextual support in an automated and effecient way.</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Python</li>
                            <li>PostgreSQL</li>
                            <li>RASA</li>
                            <li>NLP/NLU</li>
                            <li>Heroku</li>
                            <li>Docker</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/ChatBot-Rasa" target={"_blank"}>View Repository</a></li>
                        </ul>
                        <li>ETL with Apache Airflow.</li>
                        <p></p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Apache Airflow</li>
                            <li>Google Big Queries</li>
                            <li>NumPy</li>
                            <li>Pandas</li>
                            <li>Matplotlib</li>
                            <li>PostgreSQL</li>
                            <li>Docker</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/ETL-example-Using-googleBigquerry" target={"_blank"}>View Repository</a></li>
                        </ul>
                        <li> Web scraping with Scrapy and Selenium</li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Scrapy</li>
                            <li>Selenium</li>
                            <li>Beautiful Soup</li>
                            <li>MongoDb</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target={"_blank"}>View Repository</a></li>
                        </ul>
                    </ul>
                    </div>
                    </TabPanel>
                    <TabPanel value="3">
                    <div className="container">
                    <h2>Core Python and Django Training</h2>
                    <span>2018-09 TO 2019-03</span>
                    <ul className="tech" style={{listStyle:""}}>
                        <p>In this period, I have learned core concept on python programming and Django framework and
                            handle some of live project.</p>
                    </ul>
                    </div>
                    </TabPanel>
                    <TabPanel value="4">
                    <div className="container">
                    <h2>Self Learning Projects</h2>
                    {/* <span>2019/06 - 2020/01</span> */}
                    <ul className="tech" style={{listStyle:""}}>
                        <li>Thyroid Disease Prediction System Using Supervised Machine Learning Algorithm.</li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Tkinter</li>
                            <li>SqLiteDb</li>
                            <li>Support Vector Machine Algorithm</li>
                            <li>Numpy</li>
                            <li>pandas</li>
                            <li>Matplotlib</li>
                            <li>scikit-learn</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target={"_blank"}>View Repository</a></li>
                        </ul>
                        <li>IPL cricket Score Prediction System using Machine learning.</li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Flask</li>
                            <li>SqLiteDb</li>
                            <li>Heroku</li>
                            <li>Docker</li>
                            <li>Linear Regression Algorithm</li>
                            <li>Numpy</li>
                            <li>pandas</li>
                            <li>Matplotlib</li>
                            <li>scikit-learn</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target={"_blank"}>View Repository</a></li>
                        </ul>
                        <li>Nepal stock market price prediction system.</li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Flask</li>
                            <li>SqLiteDb</li>
                            <li>Heroku</li>
                            <li>Docker</li>
                            <li>Linear Regression Algorithm</li>
                            <li>Numpy</li>
                            <li>pandas</li>
                            <li>Matplotlib</li>
                            <li>scikit-learn</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target={"_blank"}>View Repository</a></li>
                        </ul>
                        <li>TODO and PetApp .</li>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <ul className="techChild">
                            <li>Tech Uses: </li>
                            <li>Django</li>
                            <li>Djnago Rest Framework</li>
                            <li>Oauth</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Typescript</li>
                            <li>Docker</li>
                            <li>GIT</li>
                            <li>Heroku</li>
                        </ul>
                        <ul className="techChild" style={{paddingTop:"8px"}}>
                            <li>Projects Link Github:</li>
                            <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target={"_blank"}>View Repository</a></li>
                        </ul>
                    </ul>
                    </div>
                    </TabPanel>
                </TabContext>
            </div>
    </Box>
    </div>
    
  );
}