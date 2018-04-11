import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

import Layout from "./Layout";
import { getFilms } from "./actions";

const mapDispatchToProps = dispatch => {
  return {
    getFilms: () => dispatch(getFilms())
  };
};

const mapStateToProps = state => {
  return {
    films: state.app.films,
    loading: state.app.loading
  };
};

class App extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    const { loading, films } = this.props;
    if (loading) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )
    } else {
      return (
        <Router>
          <Layout
            render={appProps => (
              <div>
                <h1>Star Wars - Films</h1>
                <ul>
                  {films.map(film => (
                    <li>{film.title}</li>
                  ))}
                </ul>
              </div>
            )}
          />
        </Router>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
