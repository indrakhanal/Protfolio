import React from 'react';
import './skills.css'
import { motion } from 'framer-motion'
// import backend images
import django from '../../../img/backend/django.png'
import tk from '../../../img/backend/tk.png'
import celery from '../../../img/backend/celery.png'
import mongo from '../../../img/backend/mongo.png'
import postgres from '../../../img/backend/postgres.png'
import rest from '../../../img/backend/rest.jpeg'


// import frontend images
import reactlogo from '../../../img/frontend/react_.png'
import redux from '../../../img/frontend/redux.png'
import jquery from '../../../img/frontend/jquery.png'
import ajax from '../../../img/frontend/ajax.png'
import bootstrap from '../../../img/frontend/bootstrap.svg'
import html5 from '../../../img/frontend/html.png'
import angular from '../../../img/frontend/angular.png'
import ai_icon from '../../../img/ai_icon.png'
import healthcare_icon from '../../../img/healthcare_icon.png'

// import development images
import docker from '../../../img/dev/docker.png'
import git from '../../../img/dev/git.png'
import nginx from '../../../img/dev/nginx.png'
import heroku from '../../../img/dev/heroku.png'
import gitlab from '../../../img/dev/gitlab.png'
import yarn from '../../../img/dev/yarn.png'

// import language images
import python from '../../../img/dev/python.png'
import js from '../../../img/dev/js.png'
import ts from '../../../img/dev/ts.svg'

// import tools images
import vscode from '../../../img/tools/vscode.png'
import postman from '../../../img/tools/postman.png'
import jupyter from '../../../img/tools/jupyter.jpeg'
import pycharm from '../../../img/tools/pycharm.png'







export const Backend = (i) => {
  return (
    <motion.div

      style={{ overflow: "hidden", transition: "all 0.1s ease-in-out" }}
      key={i}
      layout
      transition={0.8}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}
    >
      <div className="wrapper">
        <div className="box a">
          <img src={django}></img>
          <span>Django</span>
        </div>
        <div className="box b">
          <img src={tk}></img>
          <span>Tkinter</span>
        </div>
        <div className="box c">
          <img src={celery}></img>
          <span>Celery</span>
        </div>
        <div className="box d">
          <img src={mongo}></img>
          <span>MongoDB</span>
        </div>
        <div className="box e">
          <img src={postgres}></img>
          <span>PostgreSQL</span>
        </div>
        <div className="box f">
          <img src={rest}></img>
          <span>APIs</span>
        </div>
      </div>
    </motion.div>
  )
}


export const Frontend = (i) => {
  return (
    <motion.div

      style={{ overflow: "hidden", transition: "all 0.1s ease-in-out" }}
      key={i}
      layout
      transition={0.8}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}
    >
      <div className="wrapper">
        <div className="box a">
          <img src={reactlogo}></img>
          <span>React</span>

        </div>
        <div className="box b">
          <img src={redux}></img>
          <span>Redux</span>
        </div>
        <div className="box c">
          <img src={jquery}></img>
          <span>JQuerry</span>
        </div>
        <div className="box d">
          <img src={ajax}></img>
          <span>Ajax</span>

        </div>
        <div className="box e">
          <img src={bootstrap}></img>
          <span>Bootstrap</span>
        </div>
        <div className="box f">
          <img src={html5}></img>
          <span>HTML</span>
        </div>
        <div className="box g" style={{ backgroundColor: "#dd0031" }}>
          <img src={angular}></img>
          <span>Angular</span>
        </div>

      </div>
    </motion.div>
  )
}


export const Development = (i) => {
  return (
    <motion.div

      style={{ overflow: "hidden", transition: "all 0.1s ease-in-out" }}
      key={i}
      layout
      transition={0.8}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}
    >
      <div className="wrapper">
        <div className="box a">
          <img src={docker}></img>
          <span>Docker</span>
        </div>
        <div className="box b">
          <img src={git}></img>
          <span>Git</span>
        </div>
        <div className="box c">
          <img src={nginx}></img>
          <span>Nginx</span>
        </div>
        <div className="box d">
          <img src={heroku}></img>
          <span>Heroku</span>
        </div>
        <div className="box e">
          <img src={gitlab}></img>
          <span>Git Lab</span>
        </div>
        <div className="box f">
          <img src={yarn}></img>
          <span>YARN</span>
        </div>

      </div>
    </motion.div>
  )
}


export const Languages = (i) => {
  return (
    <motion.div

      style={{ overflow: "hidden", transition: "all 0.1s ease-in-out" }}
      key={i}
      layout
      transition={0.8}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}
    >
      <div className="wrapper lang">
        <div className="box a common">
          <img src={python}></img>
          <span>Python</span>
        </div>
        <div className="box common" style={{ backgroundColor: "rgb(227, 227, 43)" }}>
          <img src={js}></img>
          <span>JavaScript</span>
        </div>
        <div className="box common" style={{ backgroundColor: "rgb(89, 155, 225)" }}>
          <img src={ts}></img>
          <span>TypeScript</span>
        </div>
      </div>
    </motion.div>
  )
}

export const GenAIHealthcare = (i) => {
  return (
    <motion.div

      style={{ overflow: "hidden", transition: "all 0.1s ease-in-out" }}
      key={i}
      layout
      transition={0.8}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}
    >
      <div className="wrapper ai-healthcare">
        <div className="box a" style={{ backgroundColor: "#1e293b", color: "#60a5fa" }}>
          <img src={ai_icon}></img>
          <span>RAG / GenAI</span>
        </div>
        <div className="box b" style={{ backgroundColor: "#0f172a", color: "#818cf8" }}>
          <img src={ai_icon}></img>
          <span>LLMs / Prompting</span>
        </div>
        <div className="box c" style={{ backgroundColor: "#064e3b", color: "#34d399" }}>
          <img src={healthcare_icon}></img>
          <span>FHIR / HL7</span>
        </div>
      </div>
    </motion.div>
  )
}

export const Tools = (i) => {
  return (
    <motion.div

      style={{ overflow: "hidden", transition: "all 0.1s ease-in-out" }}
      key={i}
      layout
      transition={0.8}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}
    >
      <div className="wrapper tools">
        <div className="box a common">
          <img src={vscode}></img>
          <span>VS Code</span>
        </div>
        <div className="box common">
          <img src={postman}></img>
          <span>Postman</span>
        </div>
        <div className="box common" style={{ backgroundColor: "grey" }}>
          <img src={jupyter}></img>
          <span>Jupyter</span>
        </div>
        <div className="box common">
          <img src={pycharm}></img>
          <span>PyCharm</span>
        </div>
      </div>
    </motion.div>
  )
}