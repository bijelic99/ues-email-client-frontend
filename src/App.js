import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Login from './Login/Login'
const { BrowserRouter: Router, Route } = require("react-router-dom")
const { default: Register } = require("./Register/Register")

const App = () => {
  return (
    <div>
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
