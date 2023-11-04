import './App.css';
import ModifyTeacher from './Teacher/ModifyTeacher';
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
            <Route path='/teacher/modify/:teacherId' element={<ModifyTeacher/>}/>
        </Routes>
    </div>
  );
}

export default App;
