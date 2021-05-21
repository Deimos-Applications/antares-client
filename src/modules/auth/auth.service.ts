import { httpClient } from '../../app.http-client';
import { store } from '../../app.store';
import { setJwt } from './auth.slice';

export class AuthService {
  public static async login(
    username: string,
    password: string,
  ): Promise<{ jwt: string | null }> {
    try {
      const res = await httpClient.post<{ access_token: string }>(
        '/auth/login',
        { username, password },
      );

      return {
        jwt: res.data.access_token,
      };
    } catch (error) {
      return {
        jwt: null,
      };
    }
  }

  public static logout(): void {
    store.dispatch(setJwt(null));
    window.location.href = '/';
  }
}
