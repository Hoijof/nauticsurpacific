import './index.scss';
import nsp from '../../../resources/nsp.svg';

export default function Logo() {
  return (
    <div className="Logo">
      <img className="LogoImage" src={nsp} alt="NSP" />
      <h2 className="LogoText">NAUTIC SUR PACIFIC</h2>
      <h3 className="LogoSubtext">Equipamiento y Servicios técnicos</h3>
    </div>
  )
}