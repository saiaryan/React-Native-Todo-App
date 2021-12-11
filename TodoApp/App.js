/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CodePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/redux/reducers/index';
import HomeScreen from './src/screens/home/homeScreen';

const store = createStore(reducer);
let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  deploymentKey: 'QOJeRqws_aTHMSXusjWnD_PHc9G6g4WiWlowm',
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
};

const App = () => {
  React.useEffect(() => {
    CodePush.sync(
      {
        updateDialog: true,
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      syncWithCodePush,
      null,
    );
  }, []);
  const syncWithCodePush = status => {
    console.log('status===========', status);
  };
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default CodePush(codePushOptions)(App);
