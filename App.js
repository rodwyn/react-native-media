/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import Header from './src/components/header';

class App extends Component {
  render() {
    return (
      <Header headerText={'Albums'} />
    );
  }
}

export default App;
