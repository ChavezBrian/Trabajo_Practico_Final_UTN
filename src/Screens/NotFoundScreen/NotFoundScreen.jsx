import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundScreen.css';

export default function NotFoundScreen() {
    return (
        <div className='not-found-screen-container'>
            <section className="not-found-container">
                <span className="not-found-code">404</span>
                <h1 className="not-found-title">Wrong Turn?</h1>
                <p className="not-found-description">
                    You seem to be lost in the void. The channel or page you are looking for doesn't exist.
                </p>
                <Link to="/home" className="not-found-btn">
                    Back to Home
                </Link>
            </section>
        </div>
    );
}
