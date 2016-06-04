import React,{Component} from 'react'
import {View, Text} from 'react-native'

class Hello extends Component {
  render() {
    return(
      <View>
        <Text>
          {this.props.greeting}
        </Text>
      </View>
    )
  }
}


export default Hello