import React from "react";
import Footer from "./Footer";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import { Container, Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

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
      phone: '',
      email: '',
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
        images: response.data[0].images,
        phone: response.data[0].phone,
        email: response.data[0].email,
        error: null,
      })
      // console.log('response.data: ', response.data));
      console.log('images: ', this.state.images);
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
          {this.state.imageUrlArray && this.state.imageUrlArray.length > 0 && (
            <>
              <p>Park Name: {this.state.fullName}</p>
              <p>Latitude: {this.state.latitude}</p>
              <p>Longitude: {this.state.longitude}</p>
              <p>Phone: {this.state.phone}</p>
              <p>Email: {this.state.email}</p>
              <Container fluid>
                <Carousel indicators={false}>
                    {this.state.images.map((obj, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={obj.url}
                          alt={obj.altText}
                          // className="d-block w-100"
                          height={500}
                        />
                        <p></p>
                        <p></p>
                        <p>{obj.caption}</p>
                        <p>{obj.title}, by {obj.credit}</p>
                      </Carousel.Item>
                    ))}
                </Carousel>
              </Container>
            </>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;