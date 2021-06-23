import react from 'react';

import './index.scss';


export default function LinkElement({ className }) {

  return (
    <span className={`${className} LinkElement`}>
      <a className="Link" href="http://wsgo.goirs.me">More Projects!</a>
    </span>
  )
}