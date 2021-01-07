import { Chip, Grid, Paper } from "@material-ui/core"
import { Autocomplete } from '@material-ui/lab'

const RecipientInput = ({ insertToList, removeFromList, contactList }) => {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper component="ul">
                    <Chip
                        label="recipient" />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Autocomplete />
            </Grid>
        </Grid>
    )
}

export default RecipientInput