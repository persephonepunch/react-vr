import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import App from './src/App';

export default class project_office extends React.Component {
  render() {
    return (
      <View>
       <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('project_office', () => project_office);
