import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import AccountBox from '@material-ui/icons/AccountBox'

const AccountListItem = ({ account }) => {
    return (
        <ListItem
            button
        >
            <ListItemIcon>
                <AccountBox />
            </ListItemIcon>
            <ListItemText primary={account.email}/>
        </ListItem>
    )
}

export default AccountListItem