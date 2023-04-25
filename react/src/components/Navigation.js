import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <p><Link to="/">Home</Link> <Link to="/announcements">Announcements</Link> <Link to="/earn-coins">Earn</Link> <Link to="/add-item">Add</Link></p>
        </nav>
    );
  }
export default Navigation;