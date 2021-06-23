import './index.scss';

import map from '../../resources/img/europe-map.svg';

export default function Map() {
  return (
    <div className="Map">
      <img className="Image" src={map} alt="" />
    </div>
  )
}