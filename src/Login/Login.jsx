import { Button, Grid, Paper, TextField } from '@material-ui/core'
import './Login.scss'

const Login = () => {
    return (
        <Grid container justify='center' alignItems='center' className="login">
            <Grid item xs={12} sm={10} md={6} xl={4}>
                <Paper>
                    <form className='register_form'>
                        <TextField id='username' label="Username" fullWidth/>
                        <TextField id='password' label="Password" type='password' fullWidth/>
                        <Button color="primary" fullWidth>
                            Login
                        </Button>
                    </form>
                </Paper>
                </Grid>
        </Grid>
    )
}

export default Login