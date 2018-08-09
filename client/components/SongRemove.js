import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

class SongRemove extends Component {
    render() {
        return(
            <div>Stuff</div>
        )
    }
}

const mutation = gql`
    mutation DeleteSong($id: ID){
        deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(mutation)(SongRemove);