import React from 'react'
import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
      <TypeAnimation className=''
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I Am a Developer',
    1000,
    'I Am a Student',
    1000,
    'I Am a Learner',
    1000
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
  )
}
