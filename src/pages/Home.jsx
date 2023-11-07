import React from "react";
import Footer from "./Footer";
// import Header from "./Header"
// import {Button} from 'react'


class Home extends React.Component {

  
  render() {
    return (
      <>
      {/* <Header /> */}
        <h1>Outdoor Oasis</h1>
        <p>Find a National Park!</p>
        <form>
          <label>Choose a Park</label>
          {/* //is type number? */}
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