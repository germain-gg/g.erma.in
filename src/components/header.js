import React, { Component } from 'react'
import styled from 'styled-components';

import { Header as StyledHeader } from './styled';

class Header extends Component {

  constructor(props) {
    super(props);
    this.drawCanvas = this.drawCanvas.bind(this);
  }

  drawCanvas() {

    const { width } = this.canvas.parentNode.getBoundingClientRect();
    const { ctx, canvas } = this;

    canvas.setAttribute('width', width);

    ctx.clearRect(0, 0, width, canvas.height);

    const start = {
      x: 0,
      y: canvas.height * 0.75
    };

    const end = {
      x: width,
      y: 0
    }

    ctx.beginPath();
    ctx.fillStyle = "#fff";

    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(150, 0, 300, 60, end.x, end.y);

    ctx.lineTo(width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(start.x, start.y);

    ctx.closePath();
    ctx.fill();
  }

  componentDidMount() {

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.drawCanvas);
    }

    this.ctx = this.canvas.getContext('2d');
    this.drawCanvas();
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.drawCanvas);
    }
  }

  render() {
    return (<StyledHeader>
      <a href="/">
        <h1
          data-site-title={this.props.siteTitle}
          data-site-title-hovered="\ʒɛʁ.mɛ̃\ Souquet"
        >
          {this.props.siteTitle}
        </h1>
      </a>
      <canvas ref={el => this.canvas = el} height="75px"/>
    </StyledHeader>)
  }
}
export default Header
