import React from "react";
import {Link} from "react-router-dom";
import {RoutesConstants, WSConstants} from "../../constants";
import moment from "moment";
import styles from "./MovieListItem.styles";

export default function MovieListItem(props) {
  return (
    <Link style={{textDecoration: 'none', color: 'black'}} to={RoutesConstants.MOVIE + "/" + props.movie.id}>
      <div style={styles.card}>
        <div style={styles.container}>
          <div
            style={{backgroundImage: `url(${WSConstants.IMAGE_URL}/w200${props.movie.poster_path})`, ...styles.img}}/>
          <div style={styles.details}>
            <div style={styles.title}>{props.movie.title}</div>
            <div style={styles.overview}>{props.movie.overview}</div>
            <div style={styles.date}>{moment(props.movie.release_date).format('DD/MM/YYYY')}</div>
          </div>
        </div>

      </div>
    </Link>
  );
}