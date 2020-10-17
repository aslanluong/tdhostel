import React from 'react';
import {View, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
declare const global: {HermesInternal: null | {}};

const Bills: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View>
      <Text>
        bills {componentId} {global.HermesInternal && 'a'}
      </Text>
    </View>
  );
};

export default Bills;
