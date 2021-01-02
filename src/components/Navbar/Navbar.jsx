import { AppBar, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@material-ui/core"
import { ChevronLeft, Menu as MenuIcon } from '@material-ui/icons'
import { React, useState } from 'react'

const Navbar = ({ visible }) => {
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = (e) => {
        setOpen(true);
    };

    const handleDrawerClose = (e) => {
        setOpen(false);
    };

    return visible && (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6'>
                        Email client
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                variant='persistent'
                anchor='left'>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeft />
                </IconButton>
                <Divider />
                <List>
                    <ListItem>
                        A thing
                    </ListItem>
                </List>
            </Drawer>

        </div>
    )
}

export default Navbar