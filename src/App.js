import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Dimmer, Loader } from "semantic-ui-react";

import Layout from "./Layout";
import Header from "./Header";
import FilmsList from "./FilmsList";
import Episode from "./Episode";

import { getFilms, chooseFilm } from "./actions";
import "./App.css";

const mapDispatchToProps = dispatch => {
  return {
    getFilms: () => dispatch(getFilms()),
    chooseFilm: id => dispatch(chooseFilm(id))
  };
};

const mapStateToProps = state => {
  return {
    film: state.app.film,
    films: state.app.films,
    loading: state.app.loading
  };
};

class App extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    const { loading, films, film } = this.props;
    if (loading) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    } else {
      return (
        <Container className="main-container">
          <Header />
          <FilmsList {...this.props} />
          {film && <Episode film={film} />}
        </Container>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
