import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core"
import { AccountCircle, ChevronLeft, Menu as MenuIcon, Inbox, Contacts } from '@material-ui/icons'
import { React, useState } from 'react'
import AccountListItem from "./AccountListItem/AccountListItem"
import './Navbar.scss'

const Navbar = ({ visible }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const [accountMenuOpen, setAccountMenuOpen] = useState(false)

    const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null)

    const [user, setUser] = useState({
        accounts: [
            {
                email: "random@mail.com"
            },
            {
                email: "rando2m@mail.com"
            }
        ]
    })


    const handleDrawerOpen = (e) => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = (e) => {
        setDrawerOpen(false);
    };

    const handleAccountMenuOpen = (e) => {
        setAccountMenuOpen(true)
    }

    const handleAccountMenuClosed = (e) => {
        setAccountMenuOpen(false)
    }

    return visible && (
        <div className="navbar">
            <AppBar position='static'>
                <Toolbar className='navbar_toolbar'>
                    <div className="navbar_toolbar_item_left">
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6'>
                            Email client
                    </Typography>
                    </div>
                    <div className="navbar_toolbar_item_right">
                        <IconButton
                            aria-label="user account"
                            aria-controls="account_menu"
                            aria-haspopup="true"
                            onClick={handleAccountMenuOpen}
                            color="inherit"
                            ref={setAccountMenuAnchorEl}
                        >
                            <AccountCircle />
                            <Menu
                                id="account_menu"
                                anchorEl={accountMenuAnchorEl}
                                keepMounted
                                open={accountMenuOpen}
                                onClose={handleAccountMenuClosed}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </Menu>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                open={drawerOpen}
                variant='persistent'
                anchor='left'>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeft />
                </IconButton>
                <Divider />
                <List>
                    <ListItem button component="a" href="#">
                        <ListItemIcon>
                            <Inbox/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem button component="a" href="#">
                        <ListItemIcon>
                            <Contacts/>
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                    </ListItem>
                </List>
                <Divider />
                <List>

                    {
                        user.accounts.map(account => (<AccountListItem account={account} />))
                    }

                </List>
            </Drawer>

        </div>
    )
}

export default Navbar