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
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab style={{ color: darkMode ? "white" : "" }} label="Infinite Software Services" value="1" />
                                <Tab style={{ color: darkMode ? "white" : "" }} label="Cotiviti Nepal PVT.LTD" value="2" />
                                <Tab style={{ color: darkMode ? "white" : "" }} label="SmartTech Solution" value="3" />
                                <Tab style={{ color: darkMode ? "white" : "" }} label="VolgAI PVT.LTD." value="4" />
                                <Tab style={{ color: darkMode ? "white" : "" }} label="Hobby Projects" value="5" />
                                {/* <Tab style={{color: darkMode ? "white" : "" }} label="Hobby Projects" value="5"/> */}

                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div className="container">
                                <h2>FullStack Developer - Software Engineer II</h2>
                                <span>2024/06 - Present</span>
                                <ul className="tech" style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
                                    <li>Working on Health Data Repository (HDR) systems using Smile CDR and FHIR R4/R5 APIs to manage and exchange clinical data securely and efficiently.</li>
                                    <li>Designed, developed, and integrated FHIR-compliant RESTful APIs for core healthcare resources such as Patient, Immunization, Procedure, Observation, and CarePlan using .NET.</li>
                                    <li>Built secure and responsive frontend applications using Angular, enabling seamless interaction with .NET backend services.</li>
                                    <li>Designed and optimized FHIR resource fetching, transformation, and aggregation pipelines to support real-time clinical dashboards and healthcare data visualization.</li>
                                    <li>Implemented Retrieval-Augmented Generation (RAG) workflows to retrieve relevant clinical data from FHIR resources and generate meaningful summaries using Large Language Models (LLMs).</li>
                                    <li>Leveraged LangChain to orchestrate LLM workflows, prompt templates, and context injection for accurate healthcare data querying and summarization.</li>
                                    <li>Integrated vector databases and embeddings to improve semantic search and reduce hallucinations in AI-generated clinical insights.</li>
                                    <li>Developed end-to-end health record visualization solutions, including role-based access control, audit-friendly data flows, and integration layers for external FHIR services.</li>
                                    <li>Collaborated closely with cross-functional teams (backend, frontend, QA, and domain experts) to ensure FHIR data models, APIs, and workflows adhered to healthcare interoperability standards.</li>
                                    <li>Actively contributed to improving system performance, security, and maintainability in compliance with healthcare data handling best practices.</li>
                                </ul>
                                <ul className="techChild">
                                    <li>Tech stack: </li>
                                    <li>Angular</li>
                                    <li>.NET</li>
                                    <li>FastAPI</li>
                                    <li>OKTA</li>
                                    <li>Microservices Architecture</li>
                                    <li>Git</li>
                                    <li>CI/CD Pipelines</li>
                                    <li>Docker</li>
                                    <li>FHIR</li>
                                    <li>RAG</li>
                                    <li>LangChain</li>
                                    <li>Embeddings</li>
                                    <li>LLMS(gpt-4o)</li>
                                    <li>Ollama</li>
                                    <li>FAISS</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div className="container">
                                <h2>FullStack Developer - Software Engineer II</h2>
                                <span>05/2024 – 02/2024</span>
                                <ul className="tech" style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
                                    <li>Contributed to US healthcare analytics projects by developing and maintaining backend services using Python, Django, RabbitMQ, and Celery.</li>
                                    <li>Actively handled and resolved Veracode security scan findings, improving application security, code quality, and compliance with industry standards.</li>
                                    <li>Developed and maintained frontend components using Backbone.js and Marionette.js, ensuring modular and maintainable UI architecture.</li>
                                    <li>Created dynamic and data-driven visualizations using D3.js to support analytics and reporting requirements.</li>
                                    <li>Collaborated closely with cross-functional teams in a highly professional environment, integrating modern tools and contributing across multiple projects.</li>
                                    <li>Participated in code reviews, debugging, and performance optimization to ensure reliable and scalable system behavior.</li>
                                </ul>
                                <ul className="techChild">
                                    <li>Environment: </li>
                                    <li>Django</li>
                                    <li>CSS</li>
                                    <li>Backbone.js</li>
                                    <li>Marionette.js</li>
                                    <li>D3.js</li>
                                    <li>Microservices Architecture</li>
                                    <li>Git</li>
                                    <li>CI/CD Pipelines</li>
                                    <li>Docker</li>
                                    <li>Celery</li>
                                    <li>Redis</li>
                                    <li>RabbitMQ</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div className="container">
                                <h2>Full Stack Python Developer</h2>
                                <span>2020/01 - 2023/03</span>
                                <ul className="tech" style={{ listStyle: "" }}>
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
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Live Projects Link:</li>
                                        <li><a href="https://merobaby.com/" target="_blank" rel="noreferrer">LINK1 &nbsp;&nbsp;</a></li>
                                        <li><a href="https://ntsagro.com/" target="_blank" rel="noreferrer">LINK2 &nbsp;&nbsp;</a></li>
                                        <li><a href="https://everyinches.com/" target="_blank" rel="noreferrer">LINK3&nbsp;&nbsp;</a></li>
                                        <li><a href="https://rupitastore.ordersathi.com/" target="_blank" rel="noreferrer">LINK4&nbsp;&nbsp;</a></li>
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
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Live Projects Link:</li>
                                        <li><a href="https://assetmanagementsystem.netlify.app/#/login" target="_blank" rel="noreferrer">LINK1&nbsp;&nbsp;</a></li>
                                        <li><a href=" https://assetmanagementsystem.netlify.app/#/scheme/scheme-name/home" target="_blank" rel="noreferrer">LINK2&nbsp;&nbsp;</a></li>
                                    </ul>
                                    <li>Logistics Management System.</li>
                                    <p>In Logistics management system all the order information can be tracked until the order will not deliver to the customer including rider detail and everything about that order.</p>
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
                                    <p>Created sales order manager for e-commerce admin panel</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Django </li>
                                        <li> Django Rest Framework </li>
                                        <li> Bootstrap </li>
                                        <li> Ajax </li>
                                        <li> JQuerry </li>
                                        <li> JavaScript </li>
                                        <li> HTML/CSS </li>
                                        <li> Nginx </li>
                                        <li> GIT </li>
                                    </ul>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel value="4">
                            <div className="container">
                                <h2>JUNIOR PYTHON DEVELOPER</h2>
                                <span>2019/06 - 2020/01</span>
                                <ul className="tech" style={{ listStyle: "" }}>
                                    <li>speech to text using google API.</li>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Flask </li>
                                        <li> SqLiteDb </li>
                                        <li> Heroku </li>
                                        <li> Docker </li>
                                        <li> Google API </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/speech-to-text" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                    <li>multi-tenant Django chat App using Web Socket.</li>
                                    <p>Live chat support is a way for customers to get help through instant messaging platforms.
                                        It happens on a one on one level, often via a company's website. It can be a proactive
                                        chat pop-up like a chat box appearing on your screen and asking if you need help.</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Django </li>
                                        <li> PostgreSQL </li>
                                        <li> Django Tenants </li>
                                        <li> Web Sockets </li>
                                        <li> GIT </li>
                                        <li> Heroku </li>
                                        <li> Docker </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/Multitenant-ChatApp-Django" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                    <li>AI powered Chat-bot using RASA framework.</li>
                                    <p>A complex chatbot system that can be customized and integrated in any website to provide contextual support in an automated and effecient way.</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Python </li>
                                        <li> PostgreSQL </li>
                                        <li> RASA </li>
                                        <li> NLP/NLU </li>
                                        <li> Heroku </li>
                                        <li> Docker </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/ChatBot-Rasa" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                    <li>ETL with Apache Airflow.</li>
                                    <p></p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Apache Airflow </li>
                                        <li> Google Big Queries </li>
                                        <li> NumPy </li>
                                        <li> Pandas </li>
                                        <li> Matplotlib </li>
                                        <li> PostgreSQL </li>
                                        <li> Docker </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/ETL-example-Using-googleBigquerry" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                    <li> Web scraping with Scrapy and Selenium</li>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Scrapy </li>
                                        <li> Selenium </li>
                                        <li> Beautiful Soup </li>
                                        <li> MongoDb </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel value="5">
                            <div className="container">
                                <h2>Self Learning Projects</h2>
                                {/* <span>2019/06 - 2020/01</span> */}
                                <ul className="tech" style={{ listStyle: "" }}>
                                    <li>Thyroid Disease Prediction System Using Supervised Machine Learning Algorithm.</li>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Tkinter </li>
                                        <li> SqLiteDb </li>
                                        <li> Support Vector Machine Algorithm </li>
                                        <li> Numpy </li>
                                        <li> pandas </li>
                                        <li> Matplotlib </li>
                                        <li> scikit-learn </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                    <li>IPL cricket Score Prediction System using Machine learning.</li>
                                    <p>In this project, I have implemented IPL live match score prediction System using Linear Regression Algorithm.
                                        In which the datasets were downloaded from Kaggle datasets, datasets were 2012 to 2019 match score records.
                                        I have Used python jupyter notebook for model building and implemented on the flask app for UI.</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Flask </li>
                                        <li> SqLiteDb </li>
                                        <li> Heroku </li>
                                        <li> Docker </li>
                                        <li> Linear Regression Algorithm </li>
                                        <li> Numpy </li>
                                        <li> pandas </li>
                                        <li> Matplotlib </li>
                                        <li> scikit-learn </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                    <li>Nepal stock market price prediction system.</li>
                                    <p>In this project, I have created a machine learning model that predicts the closing price of each script according to the current market price; such as today's opening price, previous closing price, today's high value, and low value.
                                        <br />
                                        For UI i have created a flask app to predict the price. In this project, the datasets used as 2012 to 2017 as training datasets and 2018 to 2020 as test datasets. The algorithm used is a supervised machine learning model which is a linear regression algorithm.
                                    </p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Flask </li>
                                        <li> SqLiteDb </li>
                                        <li> Heroku </li>
                                        <li> Docker </li>
                                        <li> Linear Regression Algorithm </li>
                                        <li> Numpy </li>
                                        <li> pandas </li>
                                        <li> Matplotlib </li>
                                        <li> scikit-learn </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target="_blank" rel="noreferrer">View Repository</a></li>
                                    </ul>
                                    <li>TODO and PetApp .</li>
                                    <p>Created a restful api for handeling todo and pet app with react as UI</p>
                                    <ul className="techChild">
                                        <li>Tech Uses: </li>
                                        <li> Django </li>
                                        <li> Djnago Rest Framework </li>
                                        <li> Oauth </li>
                                        <li> React </li>
                                        <li> Redux </li>
                                        <li> Typescript </li>
                                        <li> Docker </li>
                                        <li> GIT </li>
                                        <li> Heroku </li>
                                    </ul>
                                    <ul className="techChild" style={{ paddingTop: "8px" }}>
                                        <li>Projects Link Github:</li>
                                        <li><a href="https://github.com/indrakhanal/web-scraping-Scrapy" target="_blank" rel="noreferrer">View Repository</a></li>
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
