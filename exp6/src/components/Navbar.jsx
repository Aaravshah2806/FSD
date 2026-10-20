import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 24, listStyle: 'none', padding: 20, justifyContent: 'center' }}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
      </ul>
    </nav>
  );
}
