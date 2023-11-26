import './App.css';
import NewHook from './components/NewHook';

function App() {
  return (
    <div className="App">
      <NewHook url={`${process.env.REACT_APP_SERVER_URL}/data`}></NewHook>
      <NewHook url={`${process.env.REACT_APP_SERVER_URL}/error`}></NewHook>
      <NewHook url={`${process.env.REACT_APP_SERVER_URL}/loading`}></NewHook>
    </div>
  );
}

export default App;
