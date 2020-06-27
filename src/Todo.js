import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export const Todo = ({ todo, removeTodo }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => Alert.alert(`ID: ${todo.id}`)}
      onLongPress={() => removeTodo(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
