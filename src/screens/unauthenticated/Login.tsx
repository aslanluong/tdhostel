import React from 'react';
import {View, Text} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
declare const global: {HermesInternal: null | {}};

const Login: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View>
      <Text
        onPress={(): Promise<string> =>
          Navigation.push(componentId, {component: {name: 'Bills'}})
        }>
        login {componentId} {global.HermesInternal && 'a'}
      </Text>
    </View>
  );
};

export default Login;
