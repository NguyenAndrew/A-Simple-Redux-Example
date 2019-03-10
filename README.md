# A Simple Redux Example / A Simple React Redux Example

Learn how to use Redux with React. This sample is organized to be understandable, reusable and enjoyable! View the live application at https://andyln.com/A-Simple-Redux-Example/

## Quickstart

0. Clone the project
1. Install your dependencies with ```npm install```
2. Run your application with ```npm start```
3. Read index.js
4. Read all the files in the 'Redux' folder
5. Read all the .js files in the 'React_Components' folder

---

## Understanding Redux in a nutshell

Redux is composed of the following parts:

* State
* Redux Store
* Reducers
* Actions

**State** is where information is stored. You may have seen 'state' before with this.setState(...) in React components. 

**Redux Store** (usually just called store) is where the Redux keeps its state. React components can interact and retrieve the state from the redux store. This store is constructed with a reducer, initial state, and enhancers (see below).

**Reducers** are used to update the state within the store. Reducers takes in a state and an action, and returns new state. They are named this way, because Reducers 
'reduce' state and actions into that single new state.

**Actions** are objects sent to reducers to update state. A function that returns an action is an action creator. When using an action creator and react-redux's connect, a React component can update the state of the Redux Store.

Side note: Enhancers are functions that enhance the Redux store with third-party capabilities.

---

## Why Redux?

Redux creates a place where information can be viewed/manipulated from any component. Redux scales with your project, allowing you to focus on new functionality rather than bugs from passing state through a large component tree. 

For more reasons why you may/may not want to use Redux, read the following article: https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
