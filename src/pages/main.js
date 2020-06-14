import React from 'react';
import * as Actions from '../store/actions';
import { connect } from 'react-redux';

const Main = ({profile}) => (
    <div>
        <h1>Main</h1>
        <button onClick={profile}>PROFILE</button>
    </div>
);

export default connect(null, Actions)(Main);
