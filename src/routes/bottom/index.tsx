import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import ScreenNames from "~routes/routes";
import { Contacts, MessagesHomeScreen, Profile } from "~screens/app";
import { AppColors } from "~utils";
import AppFonts from "~utils/app-fonts";
import { height, width } from "~utils/dimensions";
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.MESSAGESHOMESCREEN}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: AppColors.white,
          paddingBottom: height(0.5),
          paddingVertical: height(1),
          paddingHorizontal: width(1),
          height: height(8),
          borderTopColor: AppColors.lightGray,
          borderTopWidth: height(0.1),
        },
        header: () => false,
      }}
    >
      <Tab.Screen
        name={ScreenNames.MESSAGESHOMESCREEN}
        component={MessagesHomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="inbox"
              color={focused ? AppColors.darkGray : AppColors.lightGray}
              size={width(8)}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: width(2),
                fontFamily: AppFonts.SFProTextMedium,
                paddingBottom: height(0.3),
                color: focused ? AppColors.darkGray : AppColors.lightGray,
              }}
            >
              Inbox
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name={ScreenNames.CONTACTS}
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="users"
              color={focused ? AppColors.darkGray : AppColors.lightGray}
              size={width(8)}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: width(2),
                fontFamily: AppFonts.SFProTextMedium,
                paddingBottom: height(0.3),
                color: focused ? AppColors.black : AppColors.lightGray,
              }}
            >
              Contacts
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
       name='user'
       color={focused?AppColors.darkGray:AppColors.lightGray}
size={width(8)}
       />

          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: width(2),
                fontFamily: AppFonts.SFProTextMedium,
                paddingBottom: height(0.3),
                color: focused ? AppColors.darkGray : AppColors.lightGray,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
