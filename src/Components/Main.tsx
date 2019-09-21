import React from "react";

import Teams from "./Teams/Teams";

import { filterSubmitted } from "../Actions/filterActions";

const { connect } = require("react-redux");

interface Props {
  [key: string]: any;
}

interface State {
  search: string;
}

@connect((store: any) => {
  return { store };
})
export default class Main extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: any) {
    this.setState({ search: e.target.value });
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.props.dispatch(filterSubmitted(this.state.search));
  }

  public render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>What are you looking for today?</p>
        <form onSubmit={this.onSubmit} action="submit">
          <input type="text" onChange={this.onChange} />
          <button type="button" onClick={this.onSubmit}>
            Search
          </button>
        </form>
        <Teams />
      </div>
    );
  }
}
