// Page1.js
import React from 'react';
import withTimeTracking from '../../withTimeTracking';
import './Page1.css';

const Page1 = ({ elapsedTime }) => {
    return (
        <div className="page1-container">
            <h2 className="page1-title">Page 1</h2>
            <p className="page1-time">Elapsed Time: {elapsedTime} seconds</p>
        </div>
    );
};

export default withTimeTracking(Page1);

