import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 128,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#FFF",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
  },

  sigla: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },

  city: {
    marginTop: 16,
    fontSize: 8,
    textAlign: "center",
  },
});

export default styles;
