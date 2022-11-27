import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

type RouteError = {
    statusText?: string;
    message?: string;
};

const Error = () => {
    const error = useRouteError() as RouteError;
    return (
        <div>
            <div>oops! Sorry that sucks</div>
            <div>{error?.statusText || error?.message || 'Unknown error'}</div>
            <div>
                <Link to="home">Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;
