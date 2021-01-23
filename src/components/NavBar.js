import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from 'react-router-dom/Link'

const NavBar = () => {
  return (
    <AppBar className='navbar'>
      <Toolbar className='navbar__toolbar'>
        <Button component={Link} to='/'>
          home
        </Button>
        <Button component={Link} to='/login'>
          login
        </Button>
        <Button component={Link} to='/signup'>
          signup
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
