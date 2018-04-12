import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class FilmsList extends Component {
  handleActive(episode) {
    const { film } = this.props
    return film && episode.episode_id === film.episode_id
  }

  render() {
    const { films, chooseFilm, film } = this.props;

    return (
      <div>
        <Menu text vertical inverted>
          <Menu.Item header>Choose a Film</Menu.Item>
          {films.map((episode, index) => (
            <Menu.Item
              key={index}
              name={episode.title}
              active={this.handleActive(episode)}
              color={this.handleActive(episode) ? 'yellow':'red'}
              onClick={() => chooseFilm(episode.episode_id)}
            />
          ))}
        </Menu>
      </div>
    );
  }
}
