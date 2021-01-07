import { NotificationManager } from 'react-notifications'
import { useHistory } from 'react-router-dom'
import { axios } from '../axios'
import useUser from './useUser'

const useContacts = () => {
    const { push } = useHistory()
    const { getCurrentUser } = useUser()

    const addContact = async (contact, photo) => {
        const formData = new FormData();
        formData.append("contact", JSON.stringify({ user: getCurrentUser().id, ...contact }))
        if (photo) formData.append("photo", photo, photo.name)
        return await axios.post("/contact", formData).then(({ data: contact }) => {
            NotificationManager.success(`Successfully added ${contact.displayName ? contact.displayName : contact.email} to your contact list`)
            push("/")
            return true
        })
            .catch((err) => {
                console.error(err)
                NotificationManager.error("An error occured while adding your contact")
                return false
            })
    }

    return { addContact }
}

export default useContacts