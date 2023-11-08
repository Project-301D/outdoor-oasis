import React from "react";
import Footer from "./Footer";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
// import Camp from '../components/Camp';
// import { Container, Carousel } from "react-bootstrap"

let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;

console.log('VITE_APP_SERVER: ', VITE_APP_SERVER)

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      parkCode: '',
      camp: '',
      showCamp: false,
      campName: '',
      error: null,
    };
  }

  handleCampInput = (event) => {
    console.log('input is: ', event.target.value);
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


  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${VITE_APP_SERVER}/campground`, {
        params: { name: this.state.campName }
      });
      this.setState({
        camp: response.data,
        error: null,
      },
      console.log(response.data));
    } catch (error) {
      console.error(error);
      this.setState({
        error: 'Error fetching campsite information. Please try again later.',
        camp: null,
      });
    }
  };







  render() {

    // console.log(this.state.weather);
    // let carouselItems = this.state.photoData.map((picture, index) => (
    //   <Carousel.Item key={index}>
    //     <img className="d-block w-100" src={picture.src} alt={picture.alt} />
    //     <Carousel.Caption>
    //       <h3
    //         style={{
    //           backgroundColor: "teal",
    //           borderRadius: "5px",
    //           width: "max-content",
    //           margin: "auto",
    //           padding: "5px",
    //         }}
    //       >
    //         Photo by: {picture.artist}
    //       </h3>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // ));

    return (
      <>
        <h1>Outdoor Oasis</h1>
        <p>Find a National Park!</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Enter campsite name:</Form.Label>
          <Form.Control
            type="text"
            value={this.state.campName}
            onChange={this.handleCampInput}
            onInput={this.handleInput}
            onSubmit={this.handleSubmit}
          />
          <Button type="submit" className="btn btn-primary">Search!</Button>
        </Form>

        {/* <Container>
          {this.state.showImages} &&

          (<Container>
            <Carousel> */}
        {/* {carouselItems} */}
        {/* </Carousel>
          </Container>) */}
        {/* </Container> */}

        <Footer />
      </>
    );
  }
}

export default Home;