import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

import styles from "./style";
import Cards from "../../components/Card";
import State from "../../models/states";

const Home: React.FC = () => {
  const [cities, setCites] = useState<State[]>([]);

  useEffect(() => {
    axios.get("https://covid19-brazil-api.now.sh/api/report/v1").then((res) => {
      setCites(res.data.data);
    });
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Covid BR</Text>
        <Text style={styles.subtitle}>
          Aqui você terá acesso ao dados atualizados sobre o Covid-19.
        </Text>
        <Text style={styles.description}>
          Selecione um estado para saber os detalhes
        </Text>
      </View>
      {cities ? (
        <Cards data={cities} />
      ) : (
        <Text>Tente Novamente ou mais tarde</Text>
      )}
    </View>
  );
};

export default Home;
