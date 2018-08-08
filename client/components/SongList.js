import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';
import loading from '../images/loading.svg'
import '../style/style.css';

class SongList extends Component {
    renderSongs() {
        return this.props.data.songs.map(song => {
            return(
                <li key={song.id} className="collection-item">
                    <i className="material-icons">music_note</i>
                    {song.title}
                </li>
            )
        })
    };

    render() {
        if (this.props.data.loading) {
            return (
                <div className="container valign-wrapper fs">
                    <div className="loader">
                        <h3>Loading</h3>
                        <img
                            src={loading}
                            alt="loading spinner"
                            className="center-align"
                        />
                    </div>
                </div>
            )
        }
        return(
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="/songs/new"
                      className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const query = gql`
    {
        songs {
        id
            title
        }
    }
`;

export default graphql(query)(SongList);