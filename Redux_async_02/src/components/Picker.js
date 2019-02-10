import React from 'react'
import PropTypes from 'prop-types'

// value は　stateの selectedWord
const Picker = ({ value, onChange, options }) => (
  <div>
    <h1>{value}</h1>
    <select className="form-control" onChange={e => onChange(e.target.value)}
            value={value}>
      {options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>)
      }
    </select>
  </div>
)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
