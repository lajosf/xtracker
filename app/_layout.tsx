import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Folders" }} />
      <Stack.Screen name="activities" options={{ title: "Activities" }} />
    </Stack>
  );
}
