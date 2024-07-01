import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { PrimeReactProvider } from "primereact/api";
ReactDOM.createRoot(document.getElementById('root')).render(

  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
)
