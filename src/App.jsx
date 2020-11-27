import React from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
} from './app/action.js';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = ({ dispatch, visibleTodos, visibilityFilter }) => {
  return (
    <div className="App" style={{marginLeft: "100px"}}>
      <AddTodo
        onAddClicked={
          text => dispatch(addTodo(text))
        }
      />
      <TodoList 
        onTodoClicked={
          index => dispatch(completeTodo(index))
        }
        todos = {visibleTodos}
      />
      <Footer 
        filter = {visibilityFilter}
        onFilterClicked={
          filter => dispatch(setVisibilityFilter(filter))
        }
      />
    </div>
  );
}

function selectTodos(todos, filter){
  switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter( todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter( todo => !todo.completed);
    default:
      return todos;
  }
}
function select(state){
  return{
    visibilityFilter: state.visibilityFilter,
    visibleTodos: selectTodos(state.todos, state.visibilityFilter)
  }
}
export default connect(select)(App);
