import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { AiOutlineClockCircle, AiFillCheckCircle } from 'react-icons/ai'

const UserCard = (
  <div className='usercard'>

    <img className='user-img' src='https://avatars.githubusercontent.com/u/9008063?v=4' alt='User'></img>
    <h1>Asabeneh Yetayeh <span className='icon'><AiFillCheckCircle /></span></h1>
    <p>Senior Developer, Finland</p>

    <h1>Skills</h1>

    <div className='skills-items'>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>JS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>Flask</li>
        <li>Django</li>
        <li>NumPy</li>
        <li>Pandas</li>
        <li>Data Analysis</li>
        <li>MYSQL</li>
        <li>GraphQL</li>
        <li>D3.js</li>
        <li>Gatsby</li>
        <li>Docker</li>
        <li>Heroku</li>
        <li>Git</li>
      </ul>
    </div>

    <p><AiOutlineClockCircle />Joined on Aug 30, 2020 </p>
  </div>


)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(UserCard);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
