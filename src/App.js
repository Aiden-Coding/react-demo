import React from 'react';
import { Globalstyle } from './style';
import { IconGlobalstyle } from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Globalstyle />
        <IconGlobalstyle />
        <Header />
      </div>
    </Provider>
  );
}

export default App;
