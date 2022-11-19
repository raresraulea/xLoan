import * as React from 'react';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core/hooks';
import {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal
} from '@elrondnetwork/dapp-core/UI';
import { logout } from '@elrondnetwork/dapp-core/utils';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import PageNotFound from 'pages/PageNotFound';
import { routeNames } from 'routes';
import routes from 'routes';
import UnlockPage from '../../UnlockPage';
import { MainListItems, secondaryListItems } from './listItems';

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        xLoan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };
  const { isLoggedIn } = useGetLoginInfo();

  return (
    <Layout>
      <TransactionsToastList />
      <NotificationModal />
      <SignTransactionsModals className='custom-class-for-modals' />

      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position='absolute' open={open}>
            <Toolbar
              sx={{
                pr: '24px' // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge='start'
                color='inherit'
                aria-label='open drawer'
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' })
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component='h1'
                variant='h6'
                color='inherit'
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              {isLoggedIn && (
                <Button
                  sx={{ color: '#fff', cursor: 'pointer' }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </Toolbar>
          </AppBar>
          <Drawer variant='permanent' open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: [2]
              }}
            >
              <Typography fontSize='26px' fontWeight={700}>
                xLoan
              </Typography>
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List
              component='nav'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <Box>
                <MainListItems />
              </Box>
              <Box>
                <Divider sx={{ my: 1 }} />
                {secondaryListItems}
              </Box>
            </List>
          </Drawer>
          <Box
            component='main'
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
              padding: '2rem'
            }}
          >
            <Toolbar />
            <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Routes>
                  <Route path={routeNames.unlock} element={<UnlockPage />} />
                  {routes.map((route: any, index: number) => (
                    <Route
                      path={route.path}
                      key={'route-key-' + index}
                      element={<route.component />}
                    />
                  ))}
                  <Route path='*' element={<PageNotFound />} />
                </Routes>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
