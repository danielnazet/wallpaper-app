import DownloadPicture from "@/components/BottomSheet";
import React, { useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export default function Account() {
	const [isOpen, setOpen] = useState(false);
	return (
		<SafeAreaView>
			<Text>Account page</Text>
			<Button
				title="Open Bottom Sheet"
				onPress={() => {
					setOpen(true);
				}}
			></Button>
			{isOpen && <DownloadPicture />}
		</SafeAreaView>
	);
}
