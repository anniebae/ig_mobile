import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Hello from './Hello'

class App extends Component {
  constructor() {
    super()
    
    // this.state = {
    //   names: 'Dudeface',
    //   poo: 'Make a name!',
    //   good: true,
    //   count: 0
    // }

    this.state = {
      korean: '안녕',
      english: 'Hello',
      spanish: 'Holæ',
      greeting: 'Hello'
    }
  }

  changeGreeting(lang) {
    this.setState({greeting: lang})
  }

  render() {
    return (
      <View>
        <View  style={styles.container}>
          <Hello greeting={this.state.greeting} />
          <Text onPress={_ => this.changeGreeting(this.state.korean) }>Korean</Text>
          <Text onPress={_ => this.changeGreeting(this.state.english) }>English</Text>
          <Text onPress={_ => this.changeGreeting(this.state.spanish) }>Spanish</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    padding: 60,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
