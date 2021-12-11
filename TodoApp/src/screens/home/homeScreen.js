import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../../themes/colors';
import fonts from '../../../themes/fonts';
import {ADD_TODO, REMOVE_TODO} from '../../redux/actions/actionTypes';

const HomeScreen = () => {
  const reduxState = useSelector(({todos}) => ({
    todosList: todos?.todos,
  }));
  const todos = reduxState?.todosList?.length > 0 ? reduxState.todosList : [];
  const [todoText, setTodoText] = React.useState('');
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (todoText) {
      dispatch({type: ADD_TODO, todoText});
      setTodoText('');
    } else {
      Toast.show('Todo cant be empty');
    }
  };
  const handleTodo = todo => {
    setTodoText(todo);
  };
  const handleTodoCompleted = index => {
    dispatch({type: REMOVE_TODO, index});
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleTodoCompleted(index)}
        style={styles.bodyWrapper}>
        <View style={styles.bodyBox}>
          <View style={styles.todoCheckBox}></View>
          <Text style={styles.todoText}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const ListEmptyComponent = () => {
    return (
      <View>
        <View style={styles.emptyImageWrapper}>
          <Image
            style={styles.emptyImage}
            source={require('../../../assets/images/empty.png')}
          />
        </View>
        <View>
          <Text style={styles.emptyText}>Start adding todos</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <View style={styles.backgroundStyle}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titletext}>Todo's</Text>
        </View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent()}
          //   keyExtractor={item => item.id}
          // extraData={selectedId}
        />
        <View style={styles.footerWrapper}>
          <TextInput
            onChangeText={todo => handleTodo(todo)}
            style={styles.todoTextInput}
            placeholder="Write a task"
            value={todoText}
            placeholderTextColor={colors.placeholderColor}
          />
          <TouchableOpacity onPress={handleAddTodo} style={styles.addTodo}>
            <Icon
              style={styles.addIcon}
              name="add-circle"
              size={30}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>
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
    padding: 12,
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
    flexShrink: 1,
    fontFamily: fonts.fontFamily.bold,
  },
  footerWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  todoTextInput: {
    backgroundColor: 'white',
    height: 55,
    width: '80%',
    borderRadius: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
    color: colors.textColor,
  },
  addTodo: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.blue,
    justifyContent: 'center',
  },
  emptyImageWrapper: {
    alignSelf: 'center',
  },
  emptyImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  emptyText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: fonts.fontFamily.bold,
    fontSize: fonts.fontSize.h1,
  },
  addIcon: {alignSelf: 'center'},
});

export default HomeScreen;
