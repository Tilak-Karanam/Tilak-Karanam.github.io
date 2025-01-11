import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Tilak's Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;