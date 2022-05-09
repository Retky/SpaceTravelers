import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
        <div><img src="../public/planet.png" alt="" /></div>
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
