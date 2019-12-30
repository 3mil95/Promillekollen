import React, { Component } from 'react';

//const xScale = 150;
//const yScale = 100;

class Graph extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d")
        if (this.props.perMille.length > 0)
            this.drawGraph()
    }

    componentDidUpdate() {
      if (this.props.perMille.length > 0)
            this.drawGraph()
    }

    drawGraph = () => {
        if (!this.ctx) {
          return
        }
        console.log('draw', this.props.perMille)
        this.ctx.clearRect(0, 0, 400, 1000);
        this.ctx.fillStyle = "#222222"
        this.ctx.fillRect(25, 0, 375, 650);
        const pos = this.props.pos - 200
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle  = "#ffffff";
        this.ctx.moveTo(0, 650);
        for (let i = 0; i < this.props.perMille.length; i++) {
            if (this.props.currentTime === i) {
                this.currentPromil = this.props.perMille[i];
                this.ctx.stroke();
                this.ctx.strokeStyle  = "gray";
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.lineTo((i) - pos+5-1, Math.round(650-this.props.perMille[i-1]*500));
            } 
            if (this.props.perMille[i]) {
                this.ctx.lineTo((i) - pos+5-1, Math.round(650-this.props.perMille[i]*500));
            } else {
                this.ctx.lineTo((i) - pos+5-1, 650);
            }
        }
        this.ctx.stroke();
        this.createAxes()
    }

    createAxes = () => {
        const pos = this.props.pos -200
        this.ctx.strokeStyle  = "gray";
        this.ctx.lineWidth = 1;
        this.ctx.clearRect(0, 0, 25, 700);
        this.ctx.beginPath(); 
        this.ctx.moveTo(400, 650);
        this.ctx.lineTo(25, 650);
        this.ctx.lineTo(25, 0);
        this.ctx.stroke();
        for (let i = 0; i < 12; i++) {
            this.ctx.beginPath(); 
            this.ctx.strokeStyle  = "#333333";
            this.ctx.moveTo(23, 50 + i *50);
            this.ctx.lineTo(400, 50 +i*50);
            this.ctx.stroke();
            this.ctx.stroke();
            this.ctx.fillStyle = "gray";
            this.ctx.textAlign = "end";
            this.ctx.textBaseline = "middle";
            this.ctx.font = "15px Arial";
            this.ctx.fillText(`${Math.floor((12-i)/10)},${(12-i)%10}`, 21, 50 +i*50);
        }
        for (let i = 0; i < 375; i++) {
            if ((Math.round(pos + i))%60 === 0) {
                this.ctx.beginPath(); 
                this.ctx.strokeStyle  = "gray";
                this.ctx.moveTo(25+i, 653);
                this.ctx.lineTo(25+i, 647);
                this.ctx.stroke();
                this.ctx.fillStyle = "gray";
                this.ctx.textAlign = "center";
                this.ctx.font = "15px Arial";
                this.ctx.fillText(`${((Math.round(pos+i))/60)%24}:00`, 25+i, 670);
            }
        }
       
    }

    mouseClickedY = null;
    thePos = null; 
  
    handleMouseDown = (e) => {
      if (this.mouseClickedY) {
        return
      }
      this.mouseClickedY = e.pageX
      this.thePos = this.props.pos;
    }
  
    handleMouseUp = (e) => {
      this.mouseClickedY = null;
      this.thePos = null; 
    }
  
    handleMouseMove = (e) => {
      if (!this.mouseClickedY) {
        return
      }
      let newPos = this.thePos + (this.mouseClickedY - e.pageX)
      if (newPos < this.props.start) {
          newPos = this.props.start
      } else if (newPos > this.props.end) {
          newPos = this.props.end
      }
      this.props.setPos(newPos)
    }
  
    handleTouchStart = (e) => {
      var touch = e.touches[0]
      if (this.mouseClickedY) {
        return
      }
      this.mouseClickedY = touch.pageX
      this.thePos = this.props.pos;
    }
  
    handleTouchMove = (e) => {
      var touch = e.touches[0]
      if (!this.mouseClickedY) {
        return
      }
      const newPos = this.thePos + (this.mouseClickedY - touch.pageX)
      this.props.setPos(newPos)
    }

    render() { 
        if (this.props.perMille.length > 0)
            this.drawGraph()
        return ( 
            <div>
                <canvas height='685px' width='400px' ref="canvas"
                onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseUp} 
                onTouchStart={this.handleTouchStart} onTouchEnd={this.handleMouseUp} onTouchMove={this.handleTouchMove}></canvas>
                <div className="graph-nav">
                  <button className="add-button" onClick={this.props.handleAdd}>+</button>
                  <h3>{Math.round(this.currentPromil * 1000) / 1000}</h3>
                </div>
            </div>
        );
    }
}
 
export default Graph;