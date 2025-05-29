import React from 'react';
import { Provider } from "react-redux"
import { store } from "../src/store/store"
import SignInForm from './components/form';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <SignInForm />
    </Provider>
  );
}

export default App;



