import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, onClick }) => (
    <div className={"btn btn-warning w-100 m-2"} onClick={(e) => {
        e.preventDefault();
        onClick();
    }
    }>{children}</div>
)

Link.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;