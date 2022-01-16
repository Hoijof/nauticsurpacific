import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

import icons from '../../resources/img/icons3n.png';

const iconsToOffset = {
  airConditioner: { x: 0, y: 15 },
  water: { x: 0, y: -180 },
  freeze: { x: -130, y: -80 },
  temperature: { x: -0, y: -290 },
  engine: { x: -390, y: -180 },
};

export default function Services() {
  return (
    <div className="Services">
      <Service name="Refrigeración" icon="freeze" />
      <Service name="Climatización" icon="temperature" />
      <Service name="Tratamiento de agua" icon="water" />
      <Service name="Mecánica de motores" icon="engine" />
      <Service name="Refrigeración" icon="freeze" />
      <Service name="Climatización" icon="temperature" />
      <Service name="Tratamiento de agua" icon="water" />
      <Service name="Mecánica de motores" icon="engine" />
    </div>
  );
}

function Service({ name, icon }) {
  const iconOffsets = iconsToOffset[icon];

  const styles = {
    backgroundImage: `url("${icons}")`,
    backgroundPosition: `${iconOffsets?.x}px ${iconOffsets?.y}px`,
    backgroundSize: 512,
  };

  return (
    <div className="Service">
      <div style={styles} className="Icon" />
      <div className="Name">{name}</div>
    </div>
  );
}

Service.propTypes = {
  name: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};
