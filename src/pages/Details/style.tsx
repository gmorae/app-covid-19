import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    padding: 32,
    backgroundColor: "#F0F0F5",
  },

  title: {
    marginTop: 16,
    fontSize: 64,
    textAlign: "center",
    fontWeight: "bold",
  },

  state: {
    fontSize: 16,
    textAlign: "center",
  },

  cards: {
    marginTop: 32,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  card: {
    marginTop: 16,
    width: 150,
    backgroundColor: "#FFF",
    padding: 16,
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

  titleCard: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  descriptionCard: {
    textAlign: "center",
    marginTop: 8
  },

  date: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
  }
});

export default styles;
