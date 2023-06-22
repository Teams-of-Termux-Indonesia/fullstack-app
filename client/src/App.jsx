import './styles/main.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = ()=>{
  return (
    <div className='container'>
    <Header/>
    <HomeScreen/>
    </div>
  )
}

export default App
