import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

export default function LinkElement({ className }) {
  return (
    <div className={`${className} LinkElement`}>
      <span className="Container">
        <a className="Link" href="http://wsgo.goirs.me">More Projects!</a>
      </span>
    </div>
  );
}

LinkElement.propTypes = {
  className: propTypes.string.isRequired,
};
