import { Box, Grid } from '@material-ui/core';
import type { RouteComponentProps } from '@reach/router';
import React from 'react';
import { LoginForm } from '../components/login-form/login-form.component';

export const LoginPage: React.FC<RouteComponentProps> = () => {
  return (
    <Box height="100vh" display="flex">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LoginForm></LoginForm>
        </Grid>
        <Grid item xs={12} sm={8}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#0675C8',
            }}
          ></div>
        </Grid>
      </Grid>
    </Box>
  );
};
