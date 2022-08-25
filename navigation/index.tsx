import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';

import { colors } from "constants/Colors";
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Groups, Bills, Settings } from "screens";
import { useRecoilState } from 'recoil';
import { themeAtom } from 'atoms';
import { Theme } from 'typings/theme';
import { StatusBar } from 'expo-status-bar';
import { getSavedTheme } from 'helpers';
import { DarkNavigatorTheme, LightNavigatorTheme } from 'themes';

export default function Navigation() {

  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);

  const isMounted = useRef<boolean>(false);

  const onLoad = async () => {
    const savedTheme = await getSavedTheme();
    setCurrentTheme(savedTheme);
  }

  useEffect(() => {
    if(isMounted.current) return;

    isMounted.current = true;
    
    onLoad()
    .catch(e => console.log(e));
  }, []);

  return (
    <>
    <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={currentTheme === "dark" ? DarkNavigatorTheme : LightNavigatorTheme}>
        <RootNavigator />
      </NavigationContainer>
    </>
    
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Groups"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryOrange,
        tabBarInactiveTintColor: colors.lightGrey,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Groups"
        component={Groups}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="group" size={25} color={color} />,
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="Bills"
        component={Bills}
        options={{
          title: "Bills",
          tabBarIcon: ({ color }) => <Ionicons name="ios-newspaper" size={25} color={color} />,
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Ionicons name="md-settings-sharp" size={25} color={color} />,
          tabBarShowLabel: false
        }}
      />
    </BottomTab.Navigator>
  );
}
