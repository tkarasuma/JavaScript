import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, onClick, active }) => {
    if (active) {
        return (
            <div className={"btn btn-warning  w-25 mr-2"}>{children}</div>
        )
    } else {
        return (
            <div className={"btn btn-outline-secondary w-25 mr-2"} onClick={(e) => {
                e.preventDefault();
                onClick();
            }
            }>{children}</div>
        )
    }
}

Link.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
}

export default Link;