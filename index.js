import {
  AppRegistry,
} from 'react-360';
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import Counter from './components/Counter';
import KeepCounting from './components/KeepCounting';

AppRegistry.registerComponent('Increment', () => Increment);
AppRegistry.registerComponent('Decrement', () => Decrement);
AppRegistry.registerComponent('Counter', () => Counter);
AppRegistry.registerComponent('KeepCounting', () => KeepCounting);

