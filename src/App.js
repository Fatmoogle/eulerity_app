import './App.css';
import { useEffect } from 'react';
import Gallery from './components/Gallery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from "./actions/petActions";

function App() {
    
    const state = useSelector((state) => state.pets) // Returns entire state
    
    const dispatch = useDispatch(); 
    
    useEffect(() => {
      dispatch(fetchPets())
    }, [])
    
  return (
    <div className="App">
      {!state.pets ? (<h1>Loading...</h1>) : (
        <div>
          <h1>Code Challenge</h1>
          <Gallery />
        </div>
      )}
    </div>
  );
}

export default App;
