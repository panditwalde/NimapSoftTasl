import logo from './logo.svg';
import './App.css';
import { Route , Switch } from 'react-router-dom'
import Home from './Component/Home';
import User from './Component/User';
import Task from './Component/Task';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route path="/login" exact component={props => <Login {...props} />} />
        <Route path="/home"  component={props => <Home {...props} />} />
        <Route path="/user" component={props => <User {...props} />} />
        <Route path="/task" component={props => <Task {...props} />} />
        <Route path="/" component={props => <Home {...props} />} />




      </Switch>

    </div>
  );
}

export default App;
