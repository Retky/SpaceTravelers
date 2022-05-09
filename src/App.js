import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/nav';
import Rockets from './components/rockets';
import Missions from './components/missions';
import Profile from './components/my-profile';

function App() {
  return (
    <Router>
      <Nav />
      <section>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
