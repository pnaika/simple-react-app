/**
 * Created by pnaika on 5/16/17.
 */
import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
        <Link to="/" className="btn btn-primary btn-lg">Home Page</Link>
      </div>
    );
  }
}

export default AboutPage;
