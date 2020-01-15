import React, { Component } from 'react';


class Slider extends Component {
    state = {  
        max: 100,
        min: 1,
        step: 1,
        offset: 0,
        unit: "",
        map: null
    }
    stepSize = 30
    mouseClickedY = null;


    componentDidMount() {
        let map = this.state.map;
        let max = this.state.max;
        let min = this.state.min;
        let step = this.state.step;
        let unit = this.state.unit;
        if (this.props.map) 
            map = parseInt(this.props.map)
        if (this.props.max) 
            max = parseInt(this.props.max)
        if (this.props.min) 
            min = parseInt(this.props.min)
        if (this.props.step) 
            step = parseFloat(this.props.step)
        if (this.props.unit) 
            unit = this.props.unit
        this.setState({
            map, max, min, step, unit
        })
        console.log(this.state)
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d")
    }


    drawValues = () => {
        const numValues = (this.state.max - this.state.min) / this.state.step
        const curentStep = (this.props.value - this.state.min) / this.state.step
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle  = "#888888";
        for (let i = 0; i <= numValues; i++) {
            this.ctx.moveTo((this.canvas.width/2 + (curentStep - i)*this.stepSize)-this.state.offset, 10);
            this.ctx.lineTo((this.canvas.width/2 + (curentStep - i)*this.stepSize)-this.state.offset, 17);
        }
        this.ctx.stroke();
    }

    drawSlider = () => {
        if (!this.ctx) {
            return
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle  = "#888888";
        this.ctx.moveTo(0, 10);
        this.ctx.lineTo(this.canvas.width, 10);
        this.ctx.stroke();
        this.drawValues()
        this.ctx.beginPath();
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle  = "#4CAF50";
        this.ctx.moveTo(this.canvas.width/2, 5);
        this.ctx.lineTo(this.canvas.width/2, 20);
        this.ctx.stroke();

    }

    handleTouchStart = (e) => {
        var touch = e.touches[0]
        if (this.mouseClickedY  || this.props.editable === false) {
          return
        }
        this.mouseClickedY = touch.pageX
    }

    handleMouseDown = (e) => {
        if (this.mouseClickedY || this.props.editable === false) {
          return
        }
        this.mouseClickedY = e.pageX
      }
    
      handleMouseUp = (e) => {
        if (!this.mouseClickedY) {
            return
        }
        console.log("Up", this.props.value)
        this.mouseClickedY = null;
        this.setState({
            offset: 0
        })
      }

      handleTouchMove = (e) => {
        var touch = e.touches[0]
        this.handleMouseMove(touch)
      }
    
      handleMouseMove = (e) => {
        if (!this.mouseClickedY) {
          return
        }
        let value = this.props.value
        let offset = (this.mouseClickedY - e.pageX)
        if (offset < -this.stepSize/2 && parseFloat(value) < parseFloat(this.state.max)) {
            this.mouseClickedY += this.stepSize
            value = parseFloat(value) + parseFloat(this.state.step)
            this.props.onChange({target:{value: Math.round(value/this.state.step) / Math.round(1/this.state.step), name: this.props.name}})
        }
        if (offset > this.stepSize/2 && parseFloat(value) > parseFloat(this.state.min)) {
            this.mouseClickedY -= this.stepSize
            value = parseFloat(value) - parseFloat(this.state.step)
            this.props.onChange({target:{value: Math.round(value/this.state.step) / Math.round(1/this.state.step), name: this.props.name}})
        }
        if (value < this.state.min) {
            value = this.state.min
        }
        if (value > this.state.max) {
            value = this.state.max
        }
        this.setState({
            offset: offset,
            value: Math.round(value/this.state.step) / Math.round(1/this.state.step)
        })
      }

    getDay = (time) => {
        console.log(this.props.currentTime)
        if (!this.props.currentTime)
            return ""
        const currentDay = Math.floor(this.props.currentTime/(24*60))
        const day = Math.floor(time/(24*60))
        console.log("day",currentDay, day)
        if (currentDay === day)
            return <p>Today</p>
        if (currentDay < day) 
            return <p>Tomorrow</p>
        if (currentDay > day) 
            return  <p>Yesterday</p>
    }

    render() { 
        this.drawSlider()
        console.log("time",this.props.value)
        return (  
            <div onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseUp} 
                 onTouchStart={this.handleTouchStart} onTouchEnd={this.handleMouseUp} onTouchMove={this.handleTouchMove} className="my-slider">
                <label>
                    {(this.state.unit !== "clock") ?
                        `${(this.props.map) ? this.props.map[this.props.value] : this.props.value}${this.state.unit}` :
                        `${Math.floor((this.props.value/60)%24)}:${(this.props.value%60 < 10) ? `0${this.props.value%60}` :  this.props.value%60}`}{this.getDay(this.props.value)}</label>
                <canvas width="400px" height="40px" ref="canvas"></canvas>
            </div>
        );
    }
}
 
export default Slider;