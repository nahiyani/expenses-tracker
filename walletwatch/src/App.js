import './App.css';
import AppBar from './components/AppBar/AppBar';
import AppControlsCounter from './components/AppControls/AppControlsCounter';
import AppControlsDelete from './components/AppControls/AppControlsDelete';

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <AppControlsCounter />
      <AppControlsDelete />
    </div>
  );
}

export default App;
