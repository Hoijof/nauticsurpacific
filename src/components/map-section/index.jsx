import React from 'react';
import './index.scss';

import Map from '../map';
import Services from '../services';

export default function MapSection() {
  return (
    <div className="MapSection">
      <Map />
      <Services />
    </div>
  );
}
