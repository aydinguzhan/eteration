import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import { PrimeReactProvider } from "primereact/api";
ReactDOM.createRoot(document.getElementById('root')).render(

  <PrimeReactProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </PrimeReactProvider>,
)
