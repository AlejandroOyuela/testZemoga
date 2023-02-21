import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostList from './src/components/postList';
import PostDetails from './src/components/postDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostList"
          component={PostList}
          options={{title: 'Posts'}}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{title: 'Post Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
