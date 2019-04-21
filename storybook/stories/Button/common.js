import React, { Component } from 'react'
import { View, Text, Button } from 'react-native-ui-lib'

class CommonButtons extends Component {
    render() {
        const { buttonAction, buttonProps, requiredParams } = this.props
        return (
             <Button {...buttonProps} onPress={() => buttonAction()} />
        )
    }
}

export default CommonButtons
