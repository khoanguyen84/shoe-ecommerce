import React from 'react';
import './App.css';
import FormRegister from './components/FormContact/FormContact';
import Profile from './components/Profile/Profile';
import JobList from './components/JobList/JobList';
import Heading from './components/Heading/Heading';

function App() {
  return (
    <div className="container vh-100">
      <Heading color='green' backgroundColor='orange'>We are learning CRA</Heading>
      <Heading color='yellow' backgroundColor='red'>We are learning Vite</Heading>
      <FormRegister/>
      <Profile/>
      <JobList/>
    </div>
  );
}

export default App;

// Component = thành phần