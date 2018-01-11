/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'react-redux';
import {
  Provider,
  View,
} from 'react-native';
import reducers from './reducers';
import { Header } from './components/common/Header';
import LibraryList from './components/common/LibraryList';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Redux Course" />
        <LibraryList />
      </View>
      </Provider>
    );
  }
}
