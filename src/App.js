import './App.css';
import { useEffect } from 'react';
import Gallery from './components/Gallery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from "./actions/petActions";
import Nav from './components/Nav';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

function App() {
    
  const state = useSelector((state) => state.pets) // Returns entire state
  
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(fetchPets())
  }, [])

  return (
    
    <Router>
      <Container>
        <div className="App">
          {!state.pets ? (<h1>Loading...</h1>) : (
            <div>
              <Nav />
              <Switch>
                <Route path="/" exact component={Gallery} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          )}
        </div>
      </Container>
    </Router>
  );
}


const Container = styled.div`
  background: #ced6e0;
  height: 100%;
`;

export default App;
