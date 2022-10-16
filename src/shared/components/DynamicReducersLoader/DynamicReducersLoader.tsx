import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import React, {
  FC, ReactNode, useEffect,
} from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type RedusersListEntry = [StateSchemaKey, Reducer]

interface DynamicReducersLoaderProps {
  reducers: ReducersList
  children?: ReactNode
}

export const DynamicReducersLoader: FC<DynamicReducersLoaderProps> = ({ reducers, children }) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: RedusersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `${name}/INIT` });
    });

    return () => {
      Object.entries(reducers).forEach(([name, reducer]: RedusersListEntry) => {
        store.reducerManager.remove(name);
        dispatch({ type: `${name}/REMOVE` });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
