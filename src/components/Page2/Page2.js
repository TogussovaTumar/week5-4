// Page2.js
import React from 'react';
import withTimeTracking from '../../withTimeTracking';
import './Page2.css';

const Page2 = ({ elapsedTime }) => {
    return (
        <div className="page2-container">
            <h2 className="page2-title">Page 2</h2>
            <p className="page2-time">Elapsed Time: {elapsedTime} seconds</p>
        </div>
    );
};

export default withTimeTracking(Page2);
