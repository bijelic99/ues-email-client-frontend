import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import NewMessage from './pages/NewMessage/NewMessage'
import AddContact from './pages/AddContact/AddContact'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css';

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
          <PrivateRoute component={NewMessage} path='/compose' />
          <PrivateRoute component={AddContact} path="/add-contact" />
        </Router>
      </ThemeProvider>
      <NotificationContainer />
    </div>
  )
}

export default App;
