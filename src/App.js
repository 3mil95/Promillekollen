import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Graph from './paths/Graph';
import AddDrink from './paths/AddDrink';
import FormSettings from './paths/FormSettings';
import History from './paths/History';
import createGraph from './GraphCreater';
//import Promille from './icons/Promille';
//import Historik from './icons/Historik';
//import Installningar from './icons/Installningar';
import Navigation from './components/Navigation';

class App extends Component {
  state = { 
    occasions: [],
    adding: false,
    page: "Graph",
    currentTime: 0,
    currentDrinks: [],
    perMille: [],
    pos: 0,
    index: null,
    drink: null
  }

  componentDidMount() {
    this.initLocalStorage()
    const occasions = JSON.parse(localStorage.getItem('occasions'))
    const time = this.getCurrentTime(occasions)
    
    this.setState({
      occasions: occasions,
      currentTime: time,
      currentDrinks: this.getCurrentDrinks(occasions),
      perMille: createGraph(this.getCurrentDrinks(occasions)).perMille,
      end: createGraph(this.getCurrentDrinks(occasions)).end,
      start: createGraph(this.getCurrentDrinks(occasions)).start,
      pos: time
    })
    setInterval(() => {
      this.setState({
        currentTime: this.getCurrentTime(this.state.occasions)
      })
    }, 5 * 1000);
  }

  initLocalStorage = () => {
    //localStorage.clear()
    if (!localStorage.getItem('userWeight')) {
      localStorage.setItem('userWeight', '80')
    }
    if (!localStorage.getItem('userLength')) {
      localStorage.setItem('userLength', '190')
    }
    if (!localStorage.getItem('userGender')) {
      localStorage.setItem('userGender', 'Man')
    }
    if (!localStorage.getItem('occasions')) {
      localStorage.setItem('occasions', JSON.stringify([]))
    }
  }

  saveChange = (occasions) => {
    this.setState({
      adding: false,
      occasions:occasions,
      currentTime: this.getCurrentTime(occasions),
      currentDrinks: this.getCurrentDrinks(occasions),
      perMille: createGraph(this.getCurrentDrinks(occasions)).perMille,
      end: createGraph(this.getCurrentDrinks(occasions)).end,
      start: createGraph(this.getCurrentDrinks(occasions)).start,
      pos: this.getCurrentTime(occasions)
    })
    localStorage.setItem('occasions', JSON.stringify(occasions))
  }

  removeDrink = (i) => {
    const occasions = this.state.occasions
    let index = this.getCurrentOccasion(occasions)
    occasions[index].drinks.splice(i,1)
    if (occasions[index].drinks.length === 0) {
      occasions.splice(index,1)
    }
    this.saveChange(occasions)
  }

  editDrink = (i, amount, strength, type, time) => {
    const occasions = this.state.occasions
    let index = this.getCurrentOccasion(occasions)
    let drink = occasions[index].drinks[i]
    drink.amount = parseInt(amount)
    drink.strength = parseInt(strength)
    drink.type = type
    drink.time = time
    occasions[index].drinks[i] = drink
    occasions[index].drinks.sort((a,b) => a.time - b.time)
    this.saveChange(occasions)
  }

  addDrink = (amount, strength, type, time) => {
    const occasions = this.state.occasions
    let index = this.getCurrentOccasion(occasions)
    if (!amount) {
      this.setState({adding: false})
      if (occasions[index].drinks.length === 0) {
        occasions.splice(index,1)
        this.saveChange(occasions)
      }
      return
    }
    const nweDrink = {time:time, amount:amount, strength:strength, type:type}
    occasions[index].drinks.push(nweDrink)
    occasions[index].drinks.sort((a,b) => a.time - b.time)
    if (!time) {
      return
    }    
    this.saveChange(occasions)
  }

  handleAdd = (index, drink) => {
    const date = new Date()
    const occasions = this.state.occasions
    let i = this.getCurrentOccasion(occasions)
    if (i === null) {
      const newOccasions = {year: date.getFullYear(),month: date.getMonth(), date:date.getDate(),drinks:[]}
      occasions.push(newOccasions)
      this.saveChange(occasions)
    }
    this.setState({
      adding: true,
      index: index,
      drink: drink
    })
  }

  setPos = (pos) => {
    this.setState({
      pos:pos
    })
  }

  handlePage = (page) => {
    if (page === "Graph" && page === this.state.page) {
      this.setState({
        pos: this.getCurrentTime(this.state.occasions)
      })
    }
    this.setState({
      page: page
    })
  }

  getAddDate = (occasions) => {    
    if (occasions.length === 0) {
      return null
    }
    const i = occasions.length-1;
    const date = new Date()
    const d1 = new Date(occasions[i].year,occasions[i].month,occasions[i].date)
    const d2 = new Date( date.getFullYear(),date.getMonth(),date.getDate())
    return (d2-d1)/(60*1000)
  }

  getCurrentOccasion = (occasions) => {
    const i = occasions.length-1;
    if (occasions.length < 1) {
      return null
    }
    const date = new Date()
    const d1 = new Date(occasions[i].year,occasions[i].month,occasions[i].date)
    const d2 = new Date(date.getFullYear(),date.getMonth(),date.getDate())
    if  (((d1-d2)/ (1000 * 3600 * 24) === -1 && date.getHours() < 10) || ((d1-d2) === 0)) {
      return i
    }
    return null
  }

  getCurrentDrinks = (occasions) => {
    const drinks = occasions[this.getCurrentOccasion(occasions)]
    if (drinks)
      return drinks.drinks
    return []
  }

  getCurrentTime = (occasions) => {
    if (this.getAddDate(occasions) === null) {
      return null
    }

    const date = new Date()
    const h = date.getHours() 
    const min = date.getMinutes()
    return h*60+min + this.getAddDate(occasions)
  }

  render() {        
    return ( 
      <div className="App">
        <HashRouter>
        <div className="page">
          <Switch>
            <Route exact path="/Settings" component={FormSettings} />
            <Route exact path="/History" render={(props) => <History {...props} occasions={this.state.occasions} ></History>}></Route>
            <Route path="/" render={(props) => (
              <Graph currentTime={this.state.currentTime} pos={this.state.pos} end={this.state.end} start={this.state.start} 
              setPos={this.setPos} perMille={this.state.perMille} handleAdd={this.handleAdd} drinks={this.state.currentDrinks}/>)}/>
          </Switch>
          {(this.state.adding) ? <AddDrink currentTime={this.state.currentTime} handleAdd={this.addDrink} handleEdit={this.editDrink} handleRemove={this.removeDrink} drink={this.state.drink} index={this.state.index}></AddDrink>: null}
          </div>
          <Route path="/" render={(props) => <Navigation {...props} handlePage={this.handlePage} page={this.state.page}/>}/>
          
        </HashRouter>
      </div>
     );
  }
}
 
export default App;
