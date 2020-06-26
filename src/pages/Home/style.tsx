import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#F0F0F5",
  },

  title: {
    color: "#F82F40",
    fontSize: 32,
    maxWidth: 260,
    marginTop: 64,
    fontWeight: 'bold'
  },

  subtitle: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
  },
  description: {
    color: "#6C6C80",
    fontSize: 12,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
    fontWeight: 'bold'
  },
});

export default styles;
