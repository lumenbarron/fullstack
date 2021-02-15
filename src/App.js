import React, { Component, useState, useEffect, } from 'react';
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import AddTodo from './components/AddTodo';
import AllTodo from './components/AllTodo';
// import Todo from './components/Todo';
import './App.scss';

export default function App() {
  const store = generateStore()
  return (
    <BrowserRouter>
      
        <section className="general-style">
          <h1>My Task</h1>
          <Navbar />
          <section>
            <Switch>
            <Provider store={store}>
              <Route exact path="/" component={AllTodo} />
              {/* <Route path="/add" component={AddTodo} />
      <Route path="/:todo_id" component={Todo} /> */}
      </Provider>
            </Switch>
          </section>
        </section>
      
    </BrowserRouter>
  )
}
