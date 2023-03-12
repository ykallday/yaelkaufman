import Header from './components/Header';
import Main from './components/Main';
import BottomNav from './components/Bottom-Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "wrapper-grid">
        <div className = "top">
          <Header/>
        </div>
        <div className = 'center'>
          <Main/>
        </div>
        <div className = "bottom">
          <BottomNav/>
        </div>
     </div>
    </div>
  );
}

export default App;
