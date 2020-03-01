import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
                <Link to='/'><h1>Ultimate Bucket List</h1></Link>
                <ul>
                    <li><Link to='/planner'>Planner</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
        </nav>
    )
}

export default Navbar;