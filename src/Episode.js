import React, { Component } from "react";
import { Header, Dimmer, Loader, Statistic } from "semantic-ui-react";

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
        <Header as="h2" textAlign="center" inverted>
          {title}
          <Header.Subheader>{director}</Header.Subheader>
        </Header>
        <Statistic.Group size="tiny">
          <Statistic color="yellow" inverted>
            <Statistic.Value>{planets.length}</Statistic.Value>
            <Statistic.Label>Planets</Statistic.Label>
          </Statistic>
          <Statistic color="yellow" inverted>
            <Statistic.Value>{characters.length}</Statistic.Value>
            <Statistic.Label>Characters</Statistic.Label>
          </Statistic>
          <Statistic color="yellow" inverted>
            <Statistic.Value>{starships.length}</Statistic.Value>
            <Statistic.Label>Starships</Statistic.Label>
          </Statistic>
          <Statistic color="yellow" inverted>
            <Statistic.Value>{species.length}</Statistic.Value>
            <Statistic.Label>Species</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    );
  }
}
