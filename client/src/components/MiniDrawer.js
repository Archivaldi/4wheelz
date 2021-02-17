import React, { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {
    Drawer,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { authSteps } from '../utils/authSteps';

export default function MiniDrawer({ children, classes, allDocsComplete }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const { logout } = authSteps.route;
    const [images, setImages] = useState([]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = async () => {
        const res = await fetch(logout, {
            method: 'POST'
        })
        window.location.reload()
    }

    const generateDeal = async () => {
        const res = await fetch("/api/anvil/createEtchSigh", {
            method: 'POST'
        });
    };

    const takeImgInfo = async () => {
        console.log("Hit the button");
        const res = await fetch("/api/db/userInfo", {
            method: 'POST'
        });
        const info = await res.json();
        const { govId, registration, title, billOfSale } = info;
        setImages(images => [...images, govId, registration, title, billOfSale]);
    };

    // useEffect(() => {
    //     (async function getUserInformation() {
    //         const resTwo = await fetch(userInfo, {
    //             method: 'POST'
    //         })
    //         const userInform = await resTwo.json();
    //         console.log(userInform)
    //     })()
    // }, []);



    const {
        root,
        appBar,
        appBarShift,
        menuButton,
        hide,
        logo,
        auto,
        arbiTrader,
        drawer,
        drawerOpen,
        drawerClose,
        content,
        toolbar,
        exitIcon
    } = classes

    return (
        <div className={root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(appBar, {
                    [appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(menuButton, {
                            [hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true" alt="logo" className={logo} />
                    <Typography variant="h6" noWrap>
                        <span className={auto}>auto</span> <span className={arbiTrader}>arbi-trader</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(drawer, {
                    [drawerOpen]: open,
                    [drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [drawerOpen]: open,
                        [drawerClose]: !open,
                    }),
                }}
            >
                <div className={toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link href="/dashboard">
                        <ListItem button={true}>
                            <ListItemIcon>
                                <AutorenewIcon />
                            </ListItemIcon>
                            <ListItemText>View Progress</ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/upload">
                        <ListItem button={true} onClick={takeImgInfo}>
                            <ListItemIcon>
                                <CloudUploadIcon />
                            </ListItemIcon>
                            <ListItemText>Upload Documents</ListItemText>
                        </ListItem>
                    </Link>
                    <ListItem
                        button={true}
                        disabled={!allDocsComplete}
                        onClick={generateDeal}
                    >
                        <ListItemIcon>
                            <MailIcon
                                color={allDocsComplete ? "secondary" : "primary"}
                            />
                        </ListItemIcon>
                        <ListItemText>Send In Forms</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem
                        button={true}
                        onClick={handleLogout}
                    >
                        <ListItemIcon>
                            <ExitToAppIcon className={exitIcon} />
                        </ListItemIcon>
                        <ListItemText>Sign Out</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main className={content}>
                <div className={toolbar} />
                {children}
            </main>
        </div>
    );
}