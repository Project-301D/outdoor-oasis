import React from "react";
import Footer from "./Footer";
import axios from "axios";
// import Header from "./Header"
// import {Button} from 'react'
import Camp from '../components/Camp';

let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      parkCode: '',
      camp: '',
      showCamp: false,
      error: false,

    };
  }

  handleCampInput = (event) => {
    console.log(event.target. value);
    this.setState({
      campName: event.target.value,
    });
  };
  

  displayCamp = async (parkCode, description, name) => {
    try {
      const response = await axios.get(`${VITE_APP_SERVER}/campground`, {
        params: { parkCode: parkCode, description: description, name: name }
      });
      const campData = response.data; 
      this.setState({
        camp: campData,
        showCamp: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  

  
  render() {
    return (
      <>
      {/* <Header /> */}
        <h1>Outdoor Oasis</h1>
        <p>Find a National Park!</p>
        <form>
          <label>Choose a Park</label>
          {/* //is type number? */}
          {this.state.showCamp && <Camp camp={this.state.camp} />}
          <input type="text" placeholder="Yellowstone" list="bigNames"></input>
          <datalist id="bigNames">
            <option value="Yellowstone" />
            <option value="Great Smoky" />
            <option value="Grand Teton" />
            <option value="Grand Canyon" />              
          </datalist>
                    <button type="submit" className="btn btn-primary">Search!</button>
        </form>
        <Footer />
      </>
    );
  }
}

export default Home;