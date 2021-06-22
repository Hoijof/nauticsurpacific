import './index.scss';
import backgroundVideo from '../../../resources/background.mp4';

export default function Background({ children }) {
  return (
    <div className="Background" >
      <video className="Video" autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {children}
    </div>
  )
}