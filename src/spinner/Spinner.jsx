import React from 'react';
import PropTypes from 'prop-types';
import './spinner.scss';

const Spinner = ({ size }) => {
  const styles = {
    width: size,
    height: size,
  };
  return <span style={styles} className="spinner" />;
};

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 50,
};

export default Spinner;
