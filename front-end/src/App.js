import axios from 'axios';
import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props){  
    super(props)
    this.state = {
      userInfo : {},
      userId : 85
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  

  componentDidMount(){
    axios
      .get("http://localhost:5000/user/"+this.state.userId)
      .then( (response) => {
        console.log(response);
        this.setState({
          userInfo : response.data
        }, () => {console.log(this.state.userInfo)})
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get("http://localhost:5000/user/"+this.state.userId)
      .then( (response) => {
        console.log(response);
        this.setState({
          userInfo : response.data
        }, () => {console.log(this.state.userInfo)})
      })
  }

  handleChange(event) {
    this.setState({userId: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="number" value={this.state.userId} onChange={this.handleChange}  />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Rated Movies:</p>
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {this.state.userInfo.userRating && this.state.userInfo.userRating.map(tile => (
            <div style={{ width:200, margin: 10}}>
              <img style={{width:200,height:300}} src={tile.poster_link} alt={tile.movieName} />
              <p style={{textAlign:'center', overflowWrap:'anywhere'}}>{'Name: ' + tile.movieName}</p>
              <p style={{textAlign:'center', overflowWrap:'anywhere'}}>{'Rating: ' + tile.rating}</p>
              <p style={{textAlign:'center', overflowWrap:'anywhere'}}>{'Genre: ' + tile.genre}</p>
            </div>
          ))}
        </div>
        <p>Recommended Movies:</p>
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {this.state.userInfo.recommendation && this.state.userInfo.recommendation.map(tile => (
            <div style={{ width:200, margin: 10}}>
              <img style={{width:200,height:300}} src={tile.poster_link} alt={tile.movieName} />
              <p style={{textAlign:'center', overflowWrap:'anywhere'}}>{'Name: ' + tile.movieName}</p>
              <p style={{textAlign:'center', overflowWrap:'anywhere'}}>{'Rating: ' + tile.estimatedRating}</p>
              <p style={{textAlign:'center', overflowWrap:'anywhere'}}>{'Genre: ' + tile.genre}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default App;
