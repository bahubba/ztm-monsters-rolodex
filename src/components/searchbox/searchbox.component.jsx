import React from 'react';

import './searchbox.styles.css';

export const Searchbox = ({placeholder, changeHandler}) => {
    return (
        <div>
            <input
                className="search"
                type="search"
                placeholder={placeholder}
                onChange={changeHandler}
            />
        </div>
    );
}