import React, { Component } from 'react';
import Slider from '../components/Slider';

class AddDrink extends Component {
    state = { 
        type: "",
        strength: 4.5,
        amount: 33,
        index: 0,
        clock: 100,        
        editable: true
    }

    types = [
        {name:"Öl", strength:5, amount: 40},
        {name:"Vin", strength:12, amount: 15},
        {name:"Drink", strength:40, amount: 4},
        {name:"Cider", strength:5, amount: 33},
        {name:"Sprit", strength:40, amount: 4}
    ]

    imgMap = {
        'Öl':"icons/ol.svg",
        "Vin":"icons/vin.svg",
        "Drink":"icons/drink.svg",
        "Cider":"icons/cider.svg",
        "Sprit":"icons/sprit.svg"
    }

    typeToIndex = (findType) => {
        let index = 0
        this.types.forEach((type, i) => {
            if (type.name === findType) {
                index = i
            }
        })
        return index
    }

    componentDidMount() {
        const editable = !(this.props.handleRemove === this.props.handleEdit)
        if (this.props.index !== null) {
            console.log("edit")
            this.setState({
                index: this.typeToIndex(this.props.drink.type),
                amount: this.props.drink.amount,
                strength: this.props.drink.strength,
                clock: this.props.drink.time,
                editable: editable
            })
            console.log(this.state)
            return
        }
        this.setState({
            clock: this.props.currentTime
        })
        this.handleType(0)
    }

    handleSubmit = () => {
        if (this.props.index !== null) {
            this.props.handleEdit(this.props.index, this.state.amount, this.state.strength, this.types[this.state.index].name, this.state.clock)
            return
        }
        this.props.handleAdd(this.state.amount, this.state.strength, this.types[this.state.index].name, this.state.clock);
    } 

    onSubmit = (e) => {
        e.preventDefault();
    }

    handleClose = () => {
        if (this.props.index !== null) {
            this.props.handleRemove(this.props.index)
            return
        }
        this.props.handleAdd(null, null);
    }

    handleChange = (e) => {
        if (!this.state.editable)
            return
        if (e.target.name === "amount")
            this.setState({amount: e.target.value});
        if (e.target.name === "strength")
            this.setState({strength: e.target.value});
        if (e.target.name === "clock")
            this.setState({clock: e.target.value});
    }

    handleType = (dir) => {
        if (!this.state.editable)
            return
        const index = this.state.index + dir
        this.setState({
            index: index,
            amount: this.types[index].amount,
            strength: this.types[index].strength
        })
    }

    render() { 
        this.currentTime = this.props.currentTime
        console.log(this.state.clock)
        const index = this.state.index
        return ( 
            <div className='modal'>
                <div className="modal-page">
                    <button className="close-button" onClick={this.handleClose}>{(this.props.index !== null) ? (this.state.editable) ? "Remove" : "Back" : "Avbryt"}</button>
                    <form onChange={this.handleChange} onSubmit={this.onSubmit} className='forms'>
                        <div className="type-selecter">
                            {(index !== 0 && this.state.editable) ? <button onClick={() => this.handleType(-1)}>◀</button> : <p></p>}
                            <div>
                                <img src={this.imgMap[this.types[index].name]} height='100px' alt="hej"/>
                                <label>{this.types[index].name}</label>
                            </div>
                            {(index !== this.types.length-1 && this.state.editable) ? <button onClick={() => this.handleType(1)}>▶</button> : <p></p>}
                        </div>
                        {/*<label>{`${this.state.amount} cl`}</label><br/>
                        <div class="slidecontainer">
                            <input min="1" max="100" value={this.state.amount} className="slider" type="range" name="amount"/>
                        </div><br/>
                        <label>{`${this.state.strength}%`}</label><br/>
                        <div class="slidecontainer">
                            <input min="1" max="100" value={this.state.strength} className="slider" step='0.1' type="range" name="strength"/><br/>
                        </div>*/}
                        <Slider onChange={this.handleChange} value={this.state.amount} name="amount" min="1" max="100" unit=" cl" editable={this.state.editable}></Slider>
                        <Slider onChange={this.handleChange} value={this.state.strength} step='0.1' name="strength" min="0" max="100" unit="%" editable={this.state.editable}></Slider>
                        <Slider onChange={this.handleChange} value={this.state.clock} name="clock" min="0" max="2880" currentTime={this.currentTime} unit="clock" editable={this.state.editable}></Slider>
                    </form>
                    {(this.state.editable) ? <button onClick={this.handleSubmit} className="confirm-button">Klar</button> : <div/>}
                </div>
            </div>
        );
    }
}
 
export default AddDrink;