import './App.css';
import newHook from './components/newHook';

function App() {
  return (
    <div className="App">
      <newHook url={`${process.env.REACT_APP_SERVER_URL}/data.json`}></newHook>
      <newHook url={`${process.env.REACT_APP_SERVER_URL}/error.json`}></newHook>
      <newHook url={`${process.env.REACT_APP_SERVER_URL}/loading.json`}></newHook>
    </div>
  );
}

export default App;
