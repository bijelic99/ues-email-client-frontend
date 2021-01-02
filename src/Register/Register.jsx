import { Button, Grid, Paper, TextField } from '@material-ui/core'
import './Register.scss'

const Register = () => {
    return (
        <Grid container justify='center' alignItems='center' className="register">
            <Grid item xs={12} sm={10} md={6} xl={4}>
                <Paper>
                    <form className='register_form'>
                        <TextField id='username' label="Username" fullWidth/>
                        <TextField id='password' label="Password" type='password' fullWidth/>
                        <TextField id='firstName' label="First name" fullWidth/>
                        <TextField id='lastName' label="Last name" fullWidth/>
                        <Button color="primary" fullWidth>
                            Register
                        </Button>
                    </form>
                </Paper>
                </Grid>
        </Grid>
    )
}

export default Register