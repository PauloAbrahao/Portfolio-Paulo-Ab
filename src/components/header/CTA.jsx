import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn"> Baixe meu CV </a>
      <a href="#contact" className="btn btn-primary"> Me chame </a>
    </div>
  )
}

export default CTA