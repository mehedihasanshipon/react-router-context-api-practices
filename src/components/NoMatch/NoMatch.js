import React from 'react';
import { useLocation } from 'react-router';

const NoMatch = () => {
    const location =  useLocation();
    return (
        <div>
            <h3>No match for location "<code>{location.pathname}</code>"</h3>
        </div>
    );
};

export default NoMatch;