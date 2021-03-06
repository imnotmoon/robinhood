import './App.css';
import Header from '../Header/Header'
import Newsfeed from '../Newsfeed/Newsfeed'
import Stats from '../Stats/Stats'

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="app__header">
        <Header />
      </div>
      {/* body */}
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;