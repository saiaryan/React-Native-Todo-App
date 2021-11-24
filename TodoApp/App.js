/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from './themes/colors';
import fonts from './themes/fonts';

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todoText, setTodoText] = React.useState('');

  const handleAddTodo = () => {
    let todoList = todos;
    todoList.push(todoText);
    setTodos(todoList);
    setTodoText('');
  };
  const handleTodo = todo => {
    setTodoText(todo);
  };
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <View style={styles.backgroundStyle}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titletext}>Todo's</Text>
        </View>
        <ScrollView>
          {todos && todos.length > 0 ? (
            todos.map((data, i) => {
              return (
                <TouchableOpacity key={i} style={styles.bodyWrapper}>
                  <View style={styles.bodyBox}>
                    <View style={styles.todoCheckBox}></View>
                    <Text style={styles.todoText}>{data}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>No Data</Text>
          )}
        </ScrollView>
        <View style={styles.footerWrapper}>
          <TextInput
            onChangeText={todo => handleTodo(todo)}
            style={styles.todoTextInput}
            placeholder="Write a task"
            value={todoText}
          />
          <TouchableOpacity
            onPress={handleAddTodo}
            style={styles.addTodo}></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginTop: 94,
  },
  titletext: {
    fontSize: fonts.fontSize.h4,
    color: colors.textColor,
    fontFamily: fonts.fontFamily.bold,
    fontWeight: fonts.fontWeight.sevenHundreds,
  },
  bodyWrapper: {
    marginHorizontal: 20,
    backgroundColor: colors.white,
    width: '90%',
    height: 53,
    marginTop: 20,
  },
  todoCheckBox: {
    height: 24,
    width: 24,
    backgroundColor: colors.blue,
    marginLeft: 15,
    marginTop: 14,
  },
  bodyBox: {
    flexDirection: 'row',
  },
  todoText: {
    marginLeft: 15,
    marginTop: 16,
    color: 'black',
  },
  footerWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  todoTextInput: {
    backgroundColor: 'white',
    height: 55,
    width: '80%',
    borderRadius: 30,
    textAlign: 'center',
  },
  addTodo: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default App;
