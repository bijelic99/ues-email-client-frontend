import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Login from './Login/Login'
import Register from './Register/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar visible />
      <Router>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute component={Register} path='/test' />
      </Router>
    </div>
  )
}

export default App;
