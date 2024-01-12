import { StyleSheet, View } from "react-native";
import React from "react";

const TicTac = () => {
  const tacs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View style={styles.container}>
      <View style={styles.huree}>
        <View style={styles.tic}>{tacs.map((tac) => styles.tic)}</View>
      </View>
    </View>
  );
};

export default TicTac;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  huree: {
    backgroundColor: "black",
    height: 400,
    width: 400,
    borderRadius: 10,
  },
  tic: {
    backgroundColor: "white",
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 20,
  },
});
