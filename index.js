/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Index from './src/page/navigate/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Index);