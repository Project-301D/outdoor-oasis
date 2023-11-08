/* eslint-disable react/prop-types */
import React from 'react'

 class Camp extends React.Component {


  render() {
    console.log('Did we get a campsight?',this.props.camp);
    return (
      this.props.camp.map((data, index) => (
        <div key={index}>
          <p>PhoneNumber: {data.phoneNumber}</p>
          <p>type: {data.type}</p>
        </div>
      ))
    )
  }
}
export default Camp;