import React from 'react'

const Header = ({ siteTitle }) => (
  <h1 style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)"
  }}>{siteTitle}</h1>
)

export default Header
