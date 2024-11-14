import { Text, View, StyleSheet, SectionList } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <SectionList
        style={{ alignSelf: 'flex-start', width: '100%' }}
        sections={[{ title: "Folders", data: ["Apple", "Banana", "Cherry"] }]}
        renderItem={({ item }) => (
          <Text style={[styles.text, {
            fontSize: 17,
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderBottomWidth: 0.5,
            borderBottomColor: '#404040',
            alignSelf: 'flex-start',
            width: '100%'
          }]}>
            {item}
          </Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.text, {
            fontSize: 24,
            fontWeight: '600',
            paddingVertical: 16,
            paddingHorizontal: 16,
            backgroundColor: '#25292e',
            alignSelf: 'flex-start',
            width: '100%'
          }]}>
            {title}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
