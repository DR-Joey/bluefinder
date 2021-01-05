import React from "react";
import VehiclePresenter from "./VehiclePresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
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
    return <VehiclePresenter result={result} error={error} loading={loading} />;
  }
}
