import React from 'react';
import { Redirect } from 'react-router';
import * as ROUTES  from '../constants/Routes';
import { connect } from '../data/connect';

interface StateProps {
  hasSeenWelcome: boolean;
}

const HomeOrWelcome: React.FC<StateProps> = ({ hasSeenWelcome }) => {
  return hasSeenWelcome ? <Redirect to={ROUTES.REGISTER} /> : <Redirect to={ROUTES.WELCOME} />
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    hasSeenWelcome: state.user.hasSeenWelcome
  }),
  component: HomeOrWelcome
});