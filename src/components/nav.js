import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="planet.png" alt="" width="100%" />
        </div>
        <h1>Space Travelers&apos; Hub</h1>
        <ul className="ul">
          <Link to="/">
            <li className="rocketslink">Rockets</li>
          </Link>
          <Link to="/">
            <li className="missionslink">Missions</li>
          </Link>
          <Link to="/">
            <li className="profilelink">My Profile</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
