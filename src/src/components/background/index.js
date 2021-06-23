import './index.scss';
import backgroundVideo from '../../../resources/background.mp4';

export default function Background({ children }) {
  return (
    <div className="Background" >
      <div className="Gradient GradientTop"></div>
      <video className="Video" autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {children}
      <div className="Gradient GradientBottom"></div>
    </div>
  )
}