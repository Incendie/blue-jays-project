import React from "react";
import "./styles.scss";

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
        <h3>Click on a team to see team information.</h3>
        {/* <form onSubmit={this.onSubmit} action="submit">
          <input type="text" onChange={this.onChange} />
          <button type="button" onClick={this.onSubmit}>
            Search
          </button>
        </form> */}
        <div className="leagues">
          <div className="leagues__american">American League</div>
          <div className="leagues__national">National League</div>
        </div>
        <div className="divisions">
          <div className="al__west">AL West</div>
          <div className="al__east">AL East</div>
          <div className="al__central">AL Central</div>
          <div className="nl__west">NL West</div>
          <div className="nl__east">NL East</div>
          <div className="nl__central">NL Central</div>
        </div>
        <Teams />
      </div>
    );
  }
}
