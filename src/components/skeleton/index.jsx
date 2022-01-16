import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

export default function Skeleton({ children }) {
  return (
    <div className="Skeleton">
      {children}
    </div>
  );
}

Skeleton.propTypes = {
  children: propTypes.node.isRequired,
};
