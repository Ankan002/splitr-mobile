import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';

import { colors } from "constants/Colors";
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { GroupsScreen, MyBillsScreen, SettingsScreen, LoginScreen, MyContributions } from "screens";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { initialLoadingAtom, isAuthenticatedAtom, loggedInUserAtom, themeAtom } from 'atoms';
import { Theme } from 'typings/theme';
import { StatusBar } from 'expo-status-bar';
import { getSavedTheme } from 'helpers';
import { DarkNavigatorTheme, LightNavigatorTheme } from 'themes';
import { verifyLoggedIn } from 'helpers';
import { fetchLoggedInUser } from 'helpers/user';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Constants from 'expo-constants';
import { LoggedInUser } from 'typings/user';

const timeOutFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Loading done...");
    }, 10000);
  })
}

export default function Navigation() {

  const [currentTheme, setCurrentTheme] = useRecoilState<Theme>(themeAtom);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState<boolean>(isAuthenticatedAtom);
  const setLoggedInUser = useSetRecoilState<LoggedInUser>(loggedInUserAtom);
  const [initialLoading, setInitialLoading] = useRecoilState<boolean>(initialLoadingAtom);

  GoogleSignin.configure({
    webClientId: Constants.manifest?.extra?.webClientId
  });

  const isMounted = useRef<boolean>(false);

  const onLoad = async () => {
    const savedTheme = await getSavedTheme();
    setCurrentTheme(savedTheme);
    const isUserLoggedIn = await verifyLoggedIn();
    setIsAuthenticated(isUserLoggedIn);
  }

  const onAuthenticated = async () => {
    if(initialLoading) return;

    setInitialLoading(true);

    const userResponse = await fetchLoggedInUser();

    if(!userResponse.success){
      setInitialLoading(false);
      console.log(userResponse);
      await GoogleSignin.signOut();
      setLoggedInUser({});
      setIsAuthenticated(false);
      Alert.alert("Session Expired... please login again to continue");
      return;
    }

    setLoggedInUser(userResponse.user);

    const resolvedData = await timeOutFunc();

    console.log(resolvedData);

    setInitialLoading(false);

    console.log(userResponse.user);
  }

  useEffect(() => {
    if(isMounted.current) return;

    isMounted.current = true;
    
    onLoad()
    .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if(!isAuthenticated) return;

    onAuthenticated()
    .catch(e => console.log(e));
  }, [isAuthenticated])

  return (
    <>
    <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={currentTheme === "dark" ? DarkNavigatorTheme : LightNavigatorTheme}>
        {
          isAuthenticated ? (
            <RootNavigator />
          ) : (
            <LoginNavigator />
          )
        }
        
      </NavigationContainer>
    </>
    
  );
}

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
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
        component={GroupsScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="group" size={25} color={color} />,
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="MyContributions"
        component={MyContributions}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome5 name="money-bill-wave" size={25} color={color} />,
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="MyBills"
        component={MyBillsScreen}
        options={{
          title: "Bills",
          tabBarIcon: ({ color }) => <Ionicons name="ios-newspaper" size={25} color={color} />,
          tabBarShowLabel: false
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Ionicons name="md-settings-sharp" size={25} color={color} />,
          tabBarShowLabel: false
        }}
      />
    </BottomTab.Navigator>
  );
}
