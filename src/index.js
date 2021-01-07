import dva from 'dva';
import './index.css';
import {createBrowserHistory} from 'history'
// import { browserHistory } from 'dva/router';

// const app = dva({
//     history: browserHistory
// });
// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
});

// 2. Plugins
app.use({});

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
