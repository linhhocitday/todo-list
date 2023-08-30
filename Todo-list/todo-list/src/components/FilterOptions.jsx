import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef FilterOptionsProps
 *
 * @property {Array} options properties of the filter
 */

/**
 *
 * @param {FilterOptionsProps} props
 */

const FilterOptions = ({ options, onChange }) => {
  const option = options.map((option) => (
    <label key={option.id} className="filter-option">
      <input
        type="radio"
        name="filter-option"
        value={option.name}
        id={option.id}
        checked={option.checked}
        onChange={(e) => onChange(e, option.id)}
      />
      <span>{option.name}</span>
    </label>
  ));

  return <form className="filter-options">{option}</form>;
};

FilterOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterOptions;
