import './App.css';
import TwoWayBinding from './components/TwoWayBinding';
import TwoWayBindingFormSubmit from './components/TwoWayBindingFormSubmit';
import TwoWayBindingFormSubmit2 from './components/TwoWayBindingFormSubmit2';
import UseState from './components/UseState';
import TwoWayBindingFormSubmit3 from './components/TwoWayBindingFormSubmit3';
import TimerApp from './components/TimerApp';
import InitStateCallback from './components/InitStateCallback';
import PlayListApp from './components/PlayList/PlayListApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
      <ToastContainer theme="colored" position='top-right' autoClose={3000} />
      <PlayListApp />
    </div>
  );
}

export default App;
