import React, { Component } from 'react';

class FormSettings extends Component {
    state = { 
        gender: 1,
        weight: 40,
        length: 55
     }

    map = {
        "Man": 1,
        "Woman": 2,
        1:"Man",
        2:"Woman"
    }

    componentDidMount() {
        const gender = this.map[localStorage.getItem('userGender')]
        const weight = localStorage.getItem('userWeight')
        const length = localStorage.getItem('userLength')
        this.setState({
            gender:gender,
            weight:weight,
            length:length
        })
        
    }

    componentWillUnmount = () => {
        localStorage.setItem('userWeight', this.state.weight)
        localStorage.setItem('userLength', this.state.length)
        localStorage.setItem('userGender', this.map[this.state.gender])
    }
    
    handleChange = (e) => {
        if (e.target.name === "gender")
            this.setState({gender: e.target.value});
        if (e.target.name === "weight")
            this.setState({weight: e.target.value});
        if (e.target.name === "length")
            this.setState({length: e.target.value});
    }

    render() { 
        return ( 
            <div className="settings">
                <form onChange={this.handleChange} className="forms">
                    <label>{`${this.map[this.state.gender]}`}</label><br/>
                    <div class="slidecontainer">
                    <input min="1" max="2" value={this.state.gender} className="slider"  type="range" name="gender"/>
                    </div><br/>
                    <label>{`${this.state.weight} kg`}</label><br/>
                    <div class="slidecontainer">
                    <input min="40" max="220" value={this.state.weight} className="slider"  type="range" name="weight"/>
                    </div><br/>
                    <label>{`${this.state.length} cl`}</label><br/>
                    <div class="slidecontainer">
                    <input min='55' max="220" value={this.state.length} className="slider" type="range" name="length"/>
                    </div><br/>
                </form>
            </div>
        );
    }
}
 
export default FormSettings;