import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Dimmer, Loader } from "semantic-ui-react";
import Header from "./components/Header";
import FilmsList from "./components/FilmsList";
import Episode from "./components/Episode";

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
    const { loading, film } = this.props;
    if (loading) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    } else {
      return (
        <Container>
          <div className="main-container">
            <Header />
            <Grid container stackable columns="equal">
              <Grid.Column verticalAlign="middle">
                <FilmsList {...this.props} />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                {film && <Episode film={film} />}
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
