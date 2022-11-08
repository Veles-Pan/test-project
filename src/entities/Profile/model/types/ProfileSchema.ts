import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    EMPTY_FORM_DATA = 'EMPTY_FORM_DATA',
    EMAIL_REQUIRED = 'EMAIL_REQUIRED',
    FIRST_NAME_REQUIRED = 'FIRST_NAME_REQUIRED',
    LAST_NAME_REQUIRED = 'LAST_NAME_REQUIRED',
    AGE_REQUIRED = 'AGE_REQUIRED',
    AGE_NOT_INTEGER = 'AGE_NOT_INTEGER',
    AGE_IS_NEGATIVE = 'AGE_IS_NEGATIVE',
    SERVER_ERROR = 'SERVER_ERROR',
}

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
    validationErrors?: ValidateProfileError[]
}
