import './App.css';
import TeacherDetail from './Teacher/TeacherDetail';
import TeacherList from './Teacher/TeacherList';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="container">
        <Routes>
            <Route path='/' element={<TeacherList/>} />
            <Route path='/teacher' element={<TeacherList/>} />
            <Route path='/teacher/:teacherId' element={<TeacherDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
