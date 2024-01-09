import { Box, styled } from '@mui/material'
import ResponsiveDrawer from './components/Drawer'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Customers from './routes/customers'
import { useState } from 'react'
import Accounts from './routes/accounts'

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {

  return (
   <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='clientes' element={<Customers/>} />
        <Route path='cuentas' element={<Accounts/>} />
      </Route>
   </Routes>
  )
}

function Layout() {
  const [title, setTitle] = useState("");
  return (
    <div>
    <Box sx={{ display: "flex" }}>
      <ResponsiveDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
        <Outlet />
      </Box>
    </Box>
    </div>
  )
}

export default App
