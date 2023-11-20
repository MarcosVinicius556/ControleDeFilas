import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Global } from './styles/GlobalStyle.jsx'
import { applicationStore } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Global />
      <Provider store={applicationStore}>
        <App />
      </Provider>
    </>
)
