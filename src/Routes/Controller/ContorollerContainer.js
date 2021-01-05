import React from "react";
import ControllerPresenter from "./ControllerPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
  }

  render() {
    const { result, error, loading } = this.state;
    console.log("imhere");
    return (
      <ControllerPresenter result={result} error={error} loading={loading} />
    );
  }
}
