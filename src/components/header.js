import React, { Component } from 'react'
import styled from 'styled-components';
import { throws } from 'assert';

const StyledHeader = styled.header`
  padding: 75px 20px 100px 20px;
  background: #1d68ff;
  background: linear-gradient(110deg, #1d68ff, #5d93ff);
  position: relative;

  border-radius: 3px 3px 0 0;

  a, a:hover {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: 0;
    display: inline-block;
    position: relative;
    color: #fff;

    &:before {
      content: attr(data-site-title);
      font-size: 50px;
      font-style: italic;
      position: relative;
      z-index: 10;
    }

    &:after {
      content: '';
      border-bottom: 15px solid #111;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 25%;
      opacity: .5;
    }
  }

  [data-hovered=true] {
    &:before {
      content: attr(data-site-title-hovered);
    }
  }

  canvas {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.drawCanvas = this.drawCanvas.bind(this);
    this.setHoverState = this.setHoverState.bind(this);
    this.unsetHoverState = this.unsetHoverState.bind(this);
  }

  setHoverState() {
    this.setState({
      hovered: true
    });
  }

  unsetHoverState() {
    this.setState({
      hovered: false
    });
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
    this.ctx = this.canvas.getContext('2d');
    window.addEventListener("resize", this.drawCanvas);
    this.drawCanvas();
  }

  componentWillMount() {
    window.removeEventListener("resize", this.drawCanvas);
  }

  render() {
    return (<StyledHeader>
      <a href="/">
        <h1
          onMouseEnter={this.setHoverState}
          onMouseLeave={this.unsetHoverState}
          data-hovered={this.state.hovered ? "true" : "false"}
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
