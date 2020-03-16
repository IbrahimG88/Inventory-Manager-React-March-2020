import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AddItem from "./Features/AddItem/AddItem";
import Notifications from "./Features/Notifications/Notifications";
import QueueRoundedIcon from '@material-ui/icons/QueueRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DnsIcon from '@material-ui/icons/Dns';
import TuneIcon from '@material-ui/icons/Tune';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReorderIcon from '@material-ui/icons/Reorder';
import HistoryIcon from '@material-ui/icons/History';
import Reorder from "./Features/Reorder/Reorder";
import AddStocks from "./Features/Add Stocks/AddStocks";
import Inventory from "./Features/Inventory/Inventory";
import Prices from "./Features/Prices/Prices";
import Orders from "./Features/Orders/Orders";
import History from "./Features/History/History";
import Settings from "./Features/Settings/Settings";
import Search from "./Features/Search/Search";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  toolbar: {
    backgroundColor:'#1E90FF',
    color: 'white'
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              Inventory Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button key='Search'>
              <ListItemIcon>
                <SearchIcon fontSize="medium"/>
              </ListItemIcon>
              <Link to='/search'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Search' />
              </Link>
            </ListItem>
            <ListItem button key='Add Item'>
              <ListItemIcon>
                <QueueRoundedIcon  fontSize="medium"/>
              </ListItemIcon>
              <Link to='/addItem'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Add Item' />
              </Link>
            </ListItem>
            <ListItem button key='Notifications'>
              <ListItemIcon>
                <NotificationsActiveRoundedIcon />
              </ListItemIcon>
              <Link to='/notifications'  style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Notifications' />
              </Link>
            </ListItem>
            <ListItem button key='Reorder'>
              <ListItemIcon>
                <StoreIcon fontSize="medium"/>
              </ListItemIcon>
              <Link to='/reorder'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Reorder' />
                </Link>
            </ListItem>
            <ListItem button key='Add Stocks'>
              <ListItemIcon>
                <PostAddIcon fontSize="medium"/>
              </ListItemIcon>
              <Link to='/addstocks'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Add Stocks' />
                </Link>
            </ListItem>
            <ListItem button key='Inventory'>
              <ListItemIcon>
                <DnsIcon fontSize="medium"/>
              </ListItemIcon>
              <Link to='/inventory'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Inventory' />
                </Link>
            </ListItem>
            <ListItem button key='Prices'>
              <ListItemIcon>
                <MonetizationOnIcon  fontSize="medium"/>
              </ListItemIcon>
              <Link to='/prices'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Prices' />
                </Link>
            </ListItem>
            <ListItem button key='Orders'>
              <ListItemIcon>
                <ReorderIcon fontSize="medium"/>
              </ListItemIcon>
              <Link to='/orders'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Orders' />
                </Link>
            </ListItem>
            <ListItem button key='History'>
              <ListItemIcon>
                <HistoryIcon fontSize="medium"/>
              </ListItemIcon>
              <Link to='/history'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='History' />
                </Link>
            </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem button key='Settings'>
              <ListItemIcon>
                <TuneIcon fontSize="medium"/>
              </ListItemIcon>
              <Link to='/settings'  style={{ textDecoration: 'none', color:'rgba(0, 0, 0, 0.87)' }}>
                <ListItemText primary='Settings' />
                </Link>
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
          <Route path='/search'>
              <Search />
            </Route>
            <Route path='/addItem'>
              <AddItem />
            </Route>
            <Route path='/notifications'>
              <Notifications />
            </Route>
            <Route path='/reorder'>
              <Reorder />
            </Route>
            <Route path='/addstocks'>
              <AddStocks />
            </Route>
            <Route path='/inventory'>
              <Inventory />
            </Route>
            <Route path='/prices'>
              <Prices />
            </Route>
            <Route path='/orders'>
              <Orders />
            </Route>
            <Route path='/history'>
              <History />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
