import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-ui-lib';

export default function GeneralButton({ onPress, children }) {
  return <Button centerV onPress={onPress}>{children}</Button>;
}

GeneralButton.defaultProps = {
  children: null,
  onPress: () => {},
};

GeneralButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
