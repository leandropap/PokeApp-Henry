import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div>
            <h1>
                <p>Henry Pokemon Web App</p>
                <p>Landing Page</p>
            </h1>
            <Link to='/home'>
                <button>Catch'em All!</button>
            </Link>
        </div>
    )
};

