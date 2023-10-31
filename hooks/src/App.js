import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home/HomePage';
import StudentList from './components/Student/StudentList';
import CreateStudent from './components/Student/CreateStudent';
import Navbar from './components/Layout/Navbar';
import StudentDetail from './components/Student/StudentDetail';
import NotFound from './components/Layout/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/student' element={<StudentList />} />
          <Route path='/student/add' element={<CreateStudent />} />
          <Route path='/student/detail/:studentId/:name' element={<StudentDetail />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
