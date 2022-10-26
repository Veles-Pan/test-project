import { Country, Currency } from 'shared';

export interface Profile {
    first_name?: string,
    last_name?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    position?: string,
    email?: string,
    id?: string,
    avatar?: string
}

export interface ProfileSchema {
    profile?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
