import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Global } from './styles/GlobalStyle.jsx'
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Global />
      <Provider store={store}>
        <App />
      </Provider>
    </>
)
