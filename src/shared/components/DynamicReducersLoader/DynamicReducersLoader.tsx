import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import {
  FC, ReactNode, useEffect,
} from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../../lib/hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicReducersLoaderProps {
  reducers: ReducersList
  children?: ReactNode
  deleteAfterUnmount?: boolean
}

export const DynamicReducersLoader: FC<DynamicReducersLoaderProps> = ({ reducers, deleteAfterUnmount, children }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const montedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = montedReducers[name as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer as Reducer);
        dispatch({ type: `${name}/INIT` });
      }
    });

    return () => {
      if (deleteAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `${name}/REMOVE` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
