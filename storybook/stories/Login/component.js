import {View, TextField, Text, Button} from 'react-native-ui-lib';
import React from 'react'
import PropTypes from 'prop-types';

const Card = ({ Title, loginButtonText, placeholderB, placeholderA, signupButtonText, socialMedia, socialButtonText }) => (
    <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>{Title}</Text>
        <TextField text50 placeholder={placeholderA} dark10/>
        <TextField text50 placeholder={placeholderB} secureTextEntry dark10/>
        <View marginT-90 center>
          <Button text70 white background-orange30 label={loginButtonText}/>
          {
              socialMedia ? <View center>
                  <Text text70 marginT-10>Or</Text>
                  <Button link text70 blue30 label={socialButtonText} marginT-10/>
              </View> : null
          }
          <Button link text70 orange30 label={signupButtonText} marginT-20/>
        </View>
    </View>
)

Card.defaultProps = {
    placeholderA: 'username',
    placeholderB: 'password',
    loginButtonText: 'login',
    signupButtonText: 'sign up',
    Title: 'Welcome',
    socialMedia: false,
    socialButtonText: 'login with Facebook'
}

Card.propTypes = {
    placeholderA: PropTypes.string,
    placeholderB: PropTypes.string,
    loginButtonText: PropTypes.string,
    signupButtonText: PropTypes.string,
    Title: PropTypes.string,
    socialMedia: PropTypes.bool
}

export default Card
