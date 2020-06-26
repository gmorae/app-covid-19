import React from "react";
import { Text } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import State from "../../models/states";

interface Params {
  data: State[];
}

const Card: React.FC<Params> = (props) => {
  const navigation = useNavigation();

  const handleToDetails = (item: State) => {
    navigation.navigate("Details", { item });
  };

  return (
    <FlatList
      data={props.data}
      keyExtractor={(card) => String(card.uid)}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      contentContainerStyle={{
        marginTop: 32
      }}
      renderItem={({ item: card }) => (
        <TouchableOpacity
          onPress={() => handleToDetails(card)}
          key={card.uid}
          style={styles.card}
        >
          <Text style={styles.sigla}>{card.uf}</Text>
          <Text style={styles.city}>{card.state}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Card;
