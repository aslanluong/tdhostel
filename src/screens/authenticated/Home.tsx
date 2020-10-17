import React from 'react';
import {View, Text} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
declare const global: {HermesInternal: null | {}};

const Home: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View>
      <Text
        onPress={(): Promise<string> =>
          Navigation.push(componentId, {component: {name: 'Bills'}})
        }>
        home {componentId} {global.HermesInternal && 'a'}
      </Text>
    </View>
  );
};

export default Home;
