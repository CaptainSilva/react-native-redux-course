/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {
  View,
} from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import Header from './components/common/Header';
import LibraryList from './components/LibraryList';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDT6oqnA3PyIsWm8JL5tqhaTtyWFdlbpQ8',
      authDomain: 'projecttemplate-546a8.firebaseapp.com',
      databaseURL: 'https://projecttemplate-546a8.firebaseio.com',
      projectId: 'projecttemplate-546a8',
      storageBucket: 'projecttemplate-546a8.appspot.com',
      messagingSenderId: '285466189119'
    };
    firebase.initializeApp(config);
  }
  renderRedux() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
      <View style={{ flex: 1 }}>
      <Header headerText='Redux Course' />
      <LibraryList />
      </View>
      </Provider>
    );
  }
  renderReduxNavigation() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
  render() {
    return (
      this.renderReduxNavigation()
    );
  }
}
