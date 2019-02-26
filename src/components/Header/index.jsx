import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import { withRouter } from 'react-router-dom';

const Header = props => (
  <header>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Readable
        </Typography>
        <div style={{ marginLeft: 10 }}>
          <Button onClick={() => props.history.push('/')} color="inherit">
            Home
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </header>
);

export default withRouter(Header);
