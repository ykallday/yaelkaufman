import Header from './components/Header';
import Main from './components/Main';
import BottomNav from './components/Bottom-Nav';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className = 'center'>
        <Main/>
     </div>
     <BottomNav/>
     
    </div>
  );
}

export default App;
