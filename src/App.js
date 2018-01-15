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
      apiKey: 'AIzaSyCdAPSPT6UsDGTew62k4KQbR3-H577Pg6U',
      authDomain: 'reduxcourse-56c6b.firebaseapp.com',
      databaseURL: 'https://reduxcourse-56c6b.firebaseio.com',
      projectId: 'reduxcourse-56c6b',
      storageBucket: 'reduxcourse-56c6b.appspot.com',
      messagingSenderId: '575106612073'
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
