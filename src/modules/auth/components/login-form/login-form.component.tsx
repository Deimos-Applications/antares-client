import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useNavigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/app-dispatch.hook';
import { useAppSelector } from '../../../../hooks/app-selector.hook';
import { AuthService } from '../../auth.service';
import { selectJwt, setJwt } from '../../auth.slice';

export const LoginForm: React.FC = () => {
  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  const currentJwt = useAppSelector(selectJwt);
  const [state, setState] = useState<{
    email: string;
    password: string;
  }>({ email: '', password: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    const { jwt } = await AuthService.login(state.email, state.password);

    if (jwt) {
      dispacth(setJwt(jwt));
    } else {
      setShowError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (currentJwt) {
      navigate('/dashboard');
    }
  }, [currentJwt]);

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {loading && (
        <CircularProgress style={{ position: 'absolute' }}></CircularProgress>
      )}

      <Snackbar
        autoHideDuration={3000}
        open={showError}
        onClose={() => setShowError(false)}
      >
        <Alert severity="error" elevation={6} variant="filled">
          Oops! Check your credentials your email or password might be wrong
        </Alert>
      </Snackbar>

      <FormControl>
        <InputLabel htmlFor="email-input">Your login or email</InputLabel>
        <Input
          id="email-input"
          startAdornment={
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </InputAdornment>
          }
          onChange={(e) => setState({ ...state, email: e.target.value })}
          value={state.email}
        />
      </FormControl>

      <FormControl style={{ marginTop: '1rem' }}>
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input
          id="password-input"
          type="password"
          startAdornment={
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
            </InputAdornment>
          }
          onChange={(e) => setState({ ...state, password: e.target.value })}
          value={state.password}
        />
      </FormControl>

      <Button
        type="submit"
        style={{ width: '50%', marginTop: '1rem' }}
        variant="contained"
        color="primary"
        disabled={loading}
      >
        Sign In
      </Button>
    </form>
  );
};
