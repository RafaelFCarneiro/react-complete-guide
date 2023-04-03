import React, { useContext } from 'react';
import Auth from './components/Auth';

import Ingredients from './components/Ingredients/Ingredients';
import { AuthContext } from './context/auth-context';

const App = (props) => {
  const { isAuth } = useContext(AuthContext);
  let content = <Auth />;
  if (isAuth) {
    content = <Ingredients />;
  }
  return content;
};

export default App;
