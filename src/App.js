import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';


class App extends Component {
     componentWillMount() {
          const config = {
            apiKey: 'AIzaSyDKnP6x4OZH4G526Pxv8mckrgTY9tbQJWE',
            authDomain: 'manager2-2e928.firebaseapp.com',
            databaseURL: 'https://manager2-2e928.firebaseio.com',
            projectId: 'manager2-2e928',
            storageBucket: 'manager2-2e928.appspot.com',
            messagingSenderId: '138907831924'
          };
          firebase.initializeApp(config);
     }
     render() {
          const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
          return (
               <Provider store={store}>
                    <RouterComponent />
               </Provider>
          );
     }
}

export default App;
