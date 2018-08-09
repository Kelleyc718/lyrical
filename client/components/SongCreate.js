import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { hashHistory, Link } from "react-router";
import loading from "../images/loading.svg";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      loading: false
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
        variables: {
          title: this.state.title,
          loading: this.state.loading
        }
      })
      .then(() => {return this.setState({ loading: true })})
      .then(() => hashHistory.push("/"))
      .catch(error => console.log(error));
  }

  render() {
      console.log(this.props);
    if (this.state.loading) {
      return (
        <div className="container valign-wrapper fs">
          <div className="loader">
            <h3>Loading</h3>
            <img src={loading} alt="loading spinner" className="center-align" />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Go Back</Link>
        <h3>Create a new song.</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title: </label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
