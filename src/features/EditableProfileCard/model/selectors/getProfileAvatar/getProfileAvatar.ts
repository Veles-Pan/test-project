import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileAvatar = (state: StateSchema) => state?.profile?.profile?.avatar;
