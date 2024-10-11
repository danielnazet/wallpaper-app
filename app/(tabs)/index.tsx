import { Link } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Library" component={Library} />
			<Tab.Screen name="Liked" component={Liked} />
			<Tab.Screen name="Suggested" component={Suggested} />
		</Tab.Navigator>
	);
}
