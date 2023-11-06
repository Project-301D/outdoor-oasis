import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

class SecretContent extends React.Component {





  render() {

    return (
      <>
        <h1>Searched Content</h1>
      </>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth0(SecretContent);