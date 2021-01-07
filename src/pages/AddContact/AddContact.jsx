import { Button, Container, Grid, Input, Paper, TextField, Typography } from "@material-ui/core"
import Joi from "joi"
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'
import './AddContact.scss'
import useContacts from "../../hooks/useContacts"
import { useState } from "react"

const AddContact = () => {

    const { addContact } = useContacts()
    const [photo, setPhoto] = useState(null)
    const [uploadInProgress, setUploadInProgress] = useState(false)

    const schema = Joi.object({
        firstName: Joi.string().alphanum().max(64),
        lastName: Joi.string().alphanum().max(64),
        displayName: Joi.string().alphanum().max(64).required(),
        email: Joi.string().max(1024).email({ tlds: { allow: false } }).required(),
        note: Joi.string().alphanum().max(1024),
    })

    const { register, handleSubmit, watch, errors } = useForm({
        resolver: joiResolver(schema)
    })

    const formSubmit = (formData) => {
        setUploadInProgress(true)
        addContact(formData, photo)
            .finally(() => setUploadInProgress(false))
    }

    const addPhotoButtonHandler = (e) => {
        const photo = e.target.files[0]
        if (photo) setPhoto(photo)
        else setPhoto(null)
    }

    return (
        <Container className="add-contact">
            <Paper elevation={6} component="form" className="contact-form" onSubmit={handleSubmit(formSubmit)} noValidate>
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Typography align="left" variant="h3">
                            Add contact
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="firstName"
                            label="First name"
                            fullWidth
                            inputProps={{
                                name: "firstName",
                                ref: register
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="lastName"
                            label="Last name"
                            fullWidth
                            inputProps={{
                                name: "lastName",
                                ref: register
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="displayName"
                            label="Display name"
                            fullWidth
                            inputProps={{
                                name: "displayName",
                                ref: register
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email address"
                            fullWidth
                            inputProps={{
                                name: "email",
                                ref: register
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="note"
                            label="Note"
                            multiline
                            rows={4}
                            fullWidth
                            inputProps={{
                                name: "note",
                                ref: register
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            component="label"
                        >
                            Upload Photo
                            <input
                                type="file"
                                hidden
                                onChange={addPhotoButtonHandler}
                            />
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button disabled={uploadInProgress} variant="contained" type="submit" color="primary">
                            Add contact
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default AddContact