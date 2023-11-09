import React from "react";
//import Component?
import Footer from "./Footer";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import Camp from '../components/Camp';
// import { Container, Carousel } from "react-bootstrap"

let VITE_APP_SERVER = import.meta.env.VITE_APP_SERVER;

console.log('VITE_APP_SERVER: ', VITE_APP_SERVER)

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      fullName: '',
      images: '',
      imageUrlArray: [],
      imageCreditArray: '',
      imageTitleArray: '',
      imageAltTextArray: '',
      imageCaptionArray: '',
      campName: '',
      showCamp: false,
      error: null,
    };
  }

  handleCampInput = (event) => {
    console.log('input is: ', event.target.value);
    this.setState({
      campName: event.target.value,
    });
  };

  // displayCamp = async (parkCode, description, name) => {
  //   try {
  //     const response = await axios.get(`${VITE_APP_SERVER}/campground`, {
  //       params: { parkCode: parkCode, description: description, name: name }
  //     });
  //     console.log('response from front end: ', response);
  //     const campData = response.data;
  //     this.setState({
  //       latitude: campData[0].latitude,
  //       longitude: campData[0].longitude,
  //       fullName: campData[0].fullName,
  //       images: campData[0].images,
  //       showCamp: true,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };;

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${VITE_APP_SERVER}/campground`, {
        params: { name: this.state.campName }
      });
      // console.log('response.data[0].images: ', response.data[0].images)
      // console.log('imgUrlArray: ', imageUrlArray);
      this.setState({
        latitude: response.data[0].latitude,
        longitude: response.data[0].longitude,
        fullName: response.data[0].fullName,
        imageUrlArray: response.data[0].images.map(ele => ele['url']),
        imageCreditArray: response.data[0].images.map(ele => ele['credit']),
        imageTitleArray: response.data[0].images.map(ele => ele['title']),
        imageAltTextArray: response.data[0].images.map(ele => ele['altText']),
        imageCaptionArray: response.data[0].images.map(ele => ele['caption']),
        // images: response.data[0].images,
        error: null,
      })
      // console.log('response.data: ', response.data));
      // console.log('imageUrlArray: ', this.state.imageUrlArray);
    } catch (error) {
      console.error(error);
      this.setState({
        error: 'Error fetching campsite information. Please try again later.',
        camp: null,
      });
    }
  };



  render() {

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

        <div>
          <p>{this.state.fullName}</p>
          <p>{this.state.latitude}</p>
          <p>{this.state.longitude}</p>

          <Container fluid>
            <Carousel fade>
              {this.state.imageUrlArray.map((imageUrl, index = 0) => (
                <Carousel.Item key={index}>
                  <img
                    src={imageUrl}
                    // className="d-block w-100"
                  width={1200}
                  // height={500}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </div>

        <Footer />

      </>
    );
  }
}

export default Home;