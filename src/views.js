import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { Dimmer, Loader } from 'semantic-ui-react';

function LoaderView(props) {
  return (
    <Dimmer active={props.loader} page>
      <Loader />
    </Dimmer>
  );
}

export default connect(
  (state) => ({
      loader: state.RAL.show
  })
)(LoaderView)
