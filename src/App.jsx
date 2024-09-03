import WeatherDashboard from './components/WeatherDashboard/WeatherDashboard';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <WeatherDashboard/>
    </Provider>
  )
}

export default App
