import React, { Component } from "react";
import { Header, Icon, Statistic } from "semantic-ui-react";
import EpisodeStatisctis from './EpisodeStatistics'

export default class Episode extends Component {
  render() {
    const {
      title,
      director,
      planets,
      characters,
      starships,
      species
    } = this.props.film;

    return (
      <div>
        <Header as="h2" textAlign="center" inverted >
          {title}
          <Header.Subheader>{director}</Header.Subheader>
        </Header>

        <EpisodeStatisctis {...this.props} />
      </div>
    );
  }
}
