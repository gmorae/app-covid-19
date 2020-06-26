import React from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./style";
import State from "../../models/states";

const Details: React.FC = () => {
  const navigation = useNavigation();
  const route: any = useRoute();
  const item: State = route.params.item;

  function goBack() {
    navigation.goBack();
  }

  function formatValue(value: number) {
    return Intl.NumberFormat("pt-BR").format(value);
  }

  function formatDate(date: any) {
    return Intl.DateTimeFormat(['ban', 'id']).format(date)
  }
  return (
    <View style={styles.container}>
      <Icon onPress={goBack} name="arrow-left" size={24} />
      <Text style={styles.title}>{item.uf}</Text>
      <Text style={styles.state}>{item.state}</Text>
      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Casos</Text>
          <Text style={styles.descriptionCard}>{formatValue(item.cases)}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Suspeitos</Text>
          <Text style={styles.descriptionCard}>
            {formatValue(item.suspects)}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titleCard}>Mortes</Text>
          <Text style={styles.descriptionCard}>{formatValue(item.deaths)}</Text>
        </View>
      </View>
      <Text style={styles.date}>Ultima atualização: {formatDate(new Date(item.datetime))}</Text>
    </View>
  );
};

export default Details;
