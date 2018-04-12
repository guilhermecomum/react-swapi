import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class FilmsList extends Component {
  handleActive(episode) {
    const { film } = this.props;
    return film && episode.episode_id === film.episode_id;
  }

  render() {
    const { films, chooseFilm, film } = this.props;

    return (
      <ul className="menu">
        <li className="menu-header">Choose a Film</li>
        {films.map((episode, index) => (
          <li
            key={index}
            className={"menu-item " + (this.handleActive(episode) ? "active" : "")}
            onClick={() => chooseFilm(episode.episode_id)}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    );
  }
}
