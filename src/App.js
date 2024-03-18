import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Grid } from './components/Grid';
import { Card } from './components/Card';
import { Exercise } from './components/Exercise';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Grid></Grid>
       {/* <Exercise></Exercise> */}
       {/* <div className="cards">
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       </div> */}
    </div>
  );
}

export default App;
