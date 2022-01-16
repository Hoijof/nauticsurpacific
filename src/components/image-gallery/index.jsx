import React from 'react';
import LinkElement from '../link-element';

import './index.scss';

import imagesData from '../../mocks/images';

export default function ImageGallery() {
  return (
    <picture className="ImageGallery">
      {imagesData.map((imageData) => {
        if (imageData.isLink) {
          return <LinkElement className="Image" />;
        }

        return (
          <span key={imageData.name} className="Image">
            <img src={imageData.url} alt={imageData.name} />
          </span>
        );
      })}
    </picture>
  );
}
