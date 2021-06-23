import './index.scss';

import Map from '../map';
import Services from '../services';


export default function MapSection() {
  return (
    <div class="MapSection">
      <Map />
      <Services />
    </div>
  );
}