import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Login from './Login/Login'
import Register from './Register/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const App = () => {
  const theme = createMuiTheme(
    {
      palette: {
        primary: {
          main: '#c24d2c'
        },
        secondary: {
          main: '#3e4a61'
        }
      }
    }
  )

  return (
    <div>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  )
}

export default App;
