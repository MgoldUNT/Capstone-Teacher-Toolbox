import * as React from 'react';
import { View } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AssignmentListScreen from "./app/screens/AssignmentListScreen";
import ClassGradeScreen from "./app/screens/ClassGradeScreen";
import ClassScreen from "./app/screens/ClassScreen";
import CreateAssignmentScreen from "./app/screens/CreateAssignmentScreen";
import RoomLayOutScreen from "./app/screens/RoomLayOutScreen";
import SideBarScreen from "./app/screens/SideBarScreen";
import StudentScreen from "./app/screens/StudentScreen";
import TakingRollScreen from "./app/screens/TakingRollScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="ClassScreen" component={ClassScreen} />
        <Stack.Screen name="AssignmentListScreen" component={AssignmentListScreen} />
        <Stack.Screen name="ClassGradeScreen" component={ClassGradeScreen} />
        <Stack.Screen name="CreateAssignmentScreen" component={CreateAssignmentScreen} />
        <Stack.Screen name="RoomLayOutScreen" component={RoomLayOutScreen} />
        <Stack.Screen name="SideBarScreen" component={SideBarScreen} />
        <Stack.Screen name="StudentScreen" component={StudentScreen} />
        <Stack.Screen name="TakingRollScreen" component={TakingRollScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;