import React from "react";
import {useTrail, a, config } from 'react-spring'


const Trail = ({children, triggerTrailFinish}) => {
const items = React.Children.toArray(children);

const trail = useTrail(items.length, {
    to: [
      { opacity: 1, marginTop: '0' },
    ],
    from: { opacity: 0, marginTop: '200px',
    config: config.molasses },
    onRest: () => triggerTrailFinish()
  })


  return (
    <>
      {trail.map((style, index) => (
        <a.div key={index} className="red-letter" style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  )
}

export default Trail;
