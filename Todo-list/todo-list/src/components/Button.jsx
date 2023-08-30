import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef ButtonProps
 *
 * @property {"danger" | "primary"} variant Button types
 */

/**
 *
 * @param {React.PropsWithChildren<ButtonProps>} props
 */

const Button = ({ variant, children, onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["danger", "primary"]),
  children: PropTypes.node,
};

export default Button;
