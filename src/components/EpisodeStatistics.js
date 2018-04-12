import React, { Component } from "react";
import { Icon, Statistic, Responsive } from "semantic-ui-react";

export default class EpisodeStatisctis extends Component {
  render() {
    const {
      planets,
      characters,
      starships,
      species
    } = this.props.film;

    return (
      <div>
        <Responsive maxWidth={991}>
          <Statistic.Group size="mini" widths="two">
            <Statistic color="yellow" inverted>
              <Statistic.Value>
                <Icon className="statistic-icon" name="globe" />
                {planets.length}
              </Statistic.Value>
              <Statistic.Label>Planets</Statistic.Label>
            </Statistic>
            <Statistic color="yellow" inverted>
              <Statistic.Value>
                <Icon className="statistic-icon" name="users" />
                {characters.length}
              </Statistic.Value>
              <Statistic.Label>Characters</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          <div className="episode-statistics">
            <Statistic.Group
              size="mini"
              widths="two"
              className="episode-statistics"
            >
              <Statistic color="yellow" inverted>
                <Statistic.Value>
                  <Icon className="statistic-icon" name="space shuttle" />
                  {starships.length}
                </Statistic.Value>
                <Statistic.Label>Starships</Statistic.Label>
              </Statistic>
              <Statistic color="yellow" inverted>
                <Statistic.Value>
                  <Icon className="statistic-icon" name="bug" />
                  {species.length}
                </Statistic.Value>
                <Statistic.Label>Species</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </div>
        </Responsive>
        <Responsive minWidth={992}>
          <div className="episode-statistics">
          <Statistic.Group
            size="mini"
            widths="four"
            className="episode-statistics"
          >
            <Statistic color="yellow" inverted>
              <Statistic.Value>
                <Icon className="statistic-icon" name="globe" />
                {planets.length}
              </Statistic.Value>
              <Statistic.Label>Planets</Statistic.Label>
            </Statistic>
            <Statistic color="yellow" inverted>
              <Statistic.Value>
                <Icon className="statistic-icon" name="users" />
                {characters.length}
              </Statistic.Value>
              <Statistic.Label>Characters</Statistic.Label>
            </Statistic>
            <Statistic color="yellow" inverted>
              <Statistic.Value>
                <Icon className="statistic-icon" name="space shuttle" />
                {starships.length}
              </Statistic.Value>
              <Statistic.Label>Starships</Statistic.Label>
            </Statistic>
            <Statistic color="yellow" inverted>
              <Statistic.Value>
                <Icon className="statistic-icon" name="bug" />
                {species.length}
              </Statistic.Value>
              <Statistic.Label>Species</Statistic.Label>
            </Statistic>
          </Statistic.Group>
          </div>
        </Responsive>
      </div>
    );
  }
}
