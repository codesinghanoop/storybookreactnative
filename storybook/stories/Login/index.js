import React from 'react'
import { View, text } from 'react-native-ui-lib'
import { storiesOf } from '@storybook/react-native'
import Card from './component'

const requiredParams = {
        placeholderA: 'email',
        placeholderB: 'password',
        loginButtonText: 'Sign in',
        signupButtonText: 'Register',
        Title: 'Welcome'
}

storiesOf('Login Screen', module)
.addDecorator(story => <View flex>{story()}</View>)
.add('default Login', () => <Card /> )
.add('different text', () => <Card {...requiredParams} />)
.add('social media', () => <Card socialMedia />)
