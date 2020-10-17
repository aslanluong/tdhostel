/**
 * @format
 */

// import {AppRegistry} from 'react-native'; // --> remove after link react-native-navigation
import Bills from '@screens/authenticated/Bills';
import {Navigation} from 'react-native-navigation';
import Home from '@screens/authenticated/Home';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App); // --> remove for ^
Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Bills', () => Bills);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'App',
              options: {
                bottomTab: {
                  text: 'Home',
                },
              },
            },
          },
          //   {component: {name: 'Home'}},
        ],
      },
    },
  });
});
