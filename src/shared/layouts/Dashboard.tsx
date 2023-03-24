import {Link, Outlet} from "react-router-dom";
import './dashboard.css'
import {
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {Sociales} from "../../models/sociales";

const Dashboard = () => {

    const [drawerState, setDrawerState] = useState(false);
    const test = {
        paddingLeft: '25%'
    }
    const sociales: Sociales[] = [
        {
            icon: <GitHubIcon/>,
            text: 'GitHub',
            url: 'https://github.com/atnavarro1993'
        },
        {
            icon: <LinkedInIcon/>,
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ariel-navarro-297062129/'
        },
        {
            icon: <WhatsAppIcon/>,
            text: 'Whatsapp',
            url: 'https://wa.me/+5491123624747'
        }
    ]
    const isMobile = useMediaQuery('(max-width: 900px)');
    return (
        <>
            <div>
                <Grid spacing={2} container={true}>
                    <Grid item={true} xs={9} md={10}>
                        <ul className={'navBar'}>
                            <li>
                                <Link to={'/'}>Yo</Link>
                            </li>
                            <li>
                                <Link to={'/proyectos'}>Proyectos</Link>
                            </li>
                            <li>
                                <Link to={'/contacto'}>Contacto</Link>
                            </li>

                        </ul>
                    </Grid>
                    {isMobile ? (
                        <Grid item={true} xs={3} md={2} width={'50%'}>
                            <div>
                                <div style={test}>
                                    <IconButton onClick={() => {
                                        setDrawerState(true)
                                    }}>
                                        <MenuIcon/>
                                    </IconButton>
                                </div>

                                <Drawer anchor={'right'} open={drawerState} onClose={() => {
                                    setDrawerState(false)
                                }}>
                                    <List>
                                        {sociales.map((value) =>
                                            <Link to={value.url} target={"_blank"}>
                                                <ListItem key={value.text} disablePadding>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            {value.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={value.text}/>
                                                    </ListItemButton>
                                                </ListItem>
                                            </Link>
                                        )}
                                    </List>
                                </Drawer>
                            </div>

                        </Grid>
                    ) : (
                        <Grid item={true} xs={3} md={2}>
                            <ul className={'navBar'}>
                                {sociales.map((value) =>
                                    <li>
                                        <IconButton>
                                            {value.icon}
                                        </IconButton>
                                    </li>
                                )}
                            </ul>
                        </Grid>
                    )}

                </Grid>
            </div>
            <Outlet/>
        </>
    );
}

export default Dashboard;