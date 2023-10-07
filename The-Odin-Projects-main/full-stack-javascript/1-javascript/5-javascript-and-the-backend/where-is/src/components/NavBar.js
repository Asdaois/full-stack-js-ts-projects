import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  const [active, setActive] = useState("Play Level");
  const play = useRef(null);
  const create = useRef(null);
  const about = useRef(null);

  const handleActive = e => {
    setActive(e.target.innerText);
  };

  function isActive(element) {
    if (element.current !== null && element.current.innerText === active) {
      return "NavBar-active";
    }
    return null;
  }

  useEffect(() => {}, [active]);

  return (
    <nav className="NavBar">
      <Link
        to="/play"
        className={`NavBar-link ${isActive(play)}`}
        onClick={handleActive}
        ref={play}
      >
        Play Level
      </Link>
      <Link
        to="/create"
        className={`NavBar-link ${isActive(create)}`}
        onClick={handleActive}
        ref={create}
      >
        Create Level
      </Link>
      <Link
        to="/about"
        className={`NavBar-link ${isActive(about)}`}
        onClick={handleActive}
        ref={about}
      >
        About
      </Link>
    </nav>
  );
}
