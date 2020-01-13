import React, { Component } from 'react';
import Drinks from '../components/Drinks';

//const xScale = 150;
//const yScale = 100;

class Graph extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d")
        this.createAxes()
    }

    componentDidUpdate() {
      this.createAxes()
    }

    drawGraph = () => {
        console.log('draw', this.props.perMille)
        this.currentPromil = 0.00;
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
                this.ctx.lineTo((i) - pos+25, Math.round(650-this.props.perMille[i-1]*500));
            } 
            if (this.props.perMille[i]) {
                this.ctx.lineTo((i) - pos+25, Math.round(650-this.props.perMille[i]*500));
            } else {
                this.ctx.lineTo((i) - pos+25, 650);
            }
        }
        this.ctx.stroke();
    }

    createAxes = () => {
      if (!this.ctx) {
        return
      }
        const pos = this.props.pos -200
        this.ctx.strokeStyle  = "gray";
        this.ctx.lineWidth = 1;
        this.ctx.clearRect(0, 0, 400, 1000);
        this.ctx.fillStyle = "#222222"
        this.ctx.fillRect(25, 0, 375, 650);
        for (let i = 0; i < 12; i++) {
          this.ctx.beginPath(); 
          this.ctx.strokeStyle  = "#333333";
          if (i === 6) {
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle  = "red";
          }
          this.ctx.moveTo(23, 50 + i *50);
          this.ctx.lineTo(400, 50 +i*50);
          this.ctx.stroke();
        }
        if (this.props.perMille.length > 0)
          this.drawGraph()
        
        this.ctx.strokeStyle  = "gray";
        this.ctx.lineWidth = 1;
        this.ctx.clearRect(0, 0, 25, 700);
        this.ctx.beginPath(); 
        this.ctx.moveTo(400, 650);
        this.ctx.lineTo(25, 650);
        this.ctx.lineTo(25, 0);
        this.ctx.stroke();
        for (let i = 0; i < 12; i++) {
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
      let newPos = this.thePos + (this.mouseClickedY - touch.pageX)
      if (newPos < this.props.start) {
        newPos = this.props.start
      } else if (newPos > this.props.end) {
        newPos = this.props.end
      }
      this.props.setPos(newPos)
    }

    render() { 
        this.createAxes()
        console.log("dr", this.props.drinks)
        return ( 
            <div>
              <div className={(this.props.drinks.length !== 0) ? "show" : "hidden"}>
                <canvas height='685px' width='400px' ref="canvas" 
                onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseUp} 
                onTouchStart={this.handleTouchStart} onTouchEnd={this.handleMouseUp} onTouchMove={this.handleTouchMove}></canvas>
                <Drinks drinks={this.props.drinks} handleEdit={(index,dtink) => this.props.handleAdd(index,dtink)}></Drinks>
              </div>
                {(this.props.currentTime !== -1) ? <div className= {(this.props.drinks.length !== 0) ? "graph-nav" : "graph-add"}>
                  <button className="add-button" onClick={() => this.props.handleAdd(null,null)}>+</button>
                  {(this.props.drinks.length !== 0) ? <h3>{Math.round(this.currentPromil * 1000) / 1000}</h3> : null}
                </div> : null}
            </div>
        );
    }
}
 
export default Graph;