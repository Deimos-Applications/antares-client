import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app.store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
