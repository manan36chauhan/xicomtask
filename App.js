import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/store'; // Import your Redux store
import ImageListScreen from './src/components/ImageListScreen';
import ImageDetailScreen from './src/components/ImageDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ImageList"
            component={ImageListScreen}
            options={{title: 'Image List'}}
          />
          <Stack.Screen
            name="ImageDetail"
            component={ImageDetailScreen}
            options={{title: 'Image Detail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
