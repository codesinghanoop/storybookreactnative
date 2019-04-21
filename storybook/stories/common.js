import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-ui-lib'
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import ButtonComponent from './Button/common'

const requiredParams = {
  buttonProps: {fullWidth: true,
    'label': 'Full Width',
    'marginB-10': true
  },
  ButtonName: 'Normal Button',
  buttonAction: () => action('navigate-to-next'),
}

const mediumButton = {
  buttonProps: {fullWidth: true,
  size:'medium',
  'bg-red70': true,
  dark10: true,
  label: 'Medium Size Full Width',
  'marginB-10': true},
  buttonAction: () => action('navigate-to-next'),
}

const smallButton = {
  buttonProps: {
    fullWidth: true,
    size: 'small',
    'bg-green70': true,
    green10: true,
    label: 'Small Size Full Width',
  },
  buttonAction: () => action('navigate-to-next'),
}

const fullRoundButton = {
  buttonProps: {
    'label': 'Full Width round',
    size: 'small',
    red10: true
  },
  buttonAction: () => action('navigate-to-next'),
}



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(story => <View flex centerV>{story()}</View>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
  .add('Full width button', () => <ButtonComponent {...requiredParams} />)
  .add('Medium full width button', () => <ButtonComponent {...mediumButton} />)
  .add('Small full width button', () => <ButtonComponent {...smallButton} />)
  .add('full width round button', () => <ButtonComponent {...fullRoundButton} />)
