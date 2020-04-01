import React from "react";
import {Link} from "react-router-dom";
import {RoutesConstants, WSConstants} from "../../constants";
import styles from "./SmallMovieListItem.styles";

export default function SmallMovieListItem(props) {
  return (
    <Link style={{textDecoration: 'none', color: 'black'}} to={RoutesConstants.MOVIE + "/" + props.movie.id}>
      <div style={styles.card}>
        <div style={styles.container}>
          <div
            style={{backgroundImage: `url(${WSConstants.IMAGE_URL}/w200${props.movie.poster_path})`, ...styles.img}}/>
          <div style={styles.title}>{props.movie.title}</div>
        </div>
      </div>
    </Link>
  );
}