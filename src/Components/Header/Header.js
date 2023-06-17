import "./header.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="masthead">
      <h1>
        <Link to="/">KatsuBaka</Link>
      </h1>
      <Nav />
    </header>
  );
}
