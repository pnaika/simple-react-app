/**
 * Created by pnaika on 5/16/17.
 */
import React, {PropTypes} from 'react';
import Header from "./common/Heaader";
import {connect} from "react-redux";

class App extends  React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading : state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
