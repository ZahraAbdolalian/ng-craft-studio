export type InputOutputMode = 'angular' | 'tailwind' | 'material';

export type InputType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'search'
    | 'url'
    | 'tel';

export type InputVariant =
    | 'outline'
    | 'filled'
    | 'soft'
    | 'underline';

export type InputSize =
    | 'sm'
    | 'md'
    | 'lg';

export type InputIcon =
    | 'none'
    | 'search'
    | 'mail'
    | 'lock'
    | 'user'
    | 'hash';

export type InputBooleanKey =
    | 'required'
    | 'disabled'
    | 'invalid'
    | 'fullWidth'
    | 'clearable'
    | 'floatingLabel';

export interface InputConfig {
    outputMode: InputOutputMode;
    type: InputType;
    variant: InputVariant;
    size: InputSize;
    radius: number;
    iconLeft: InputIcon;

    label: string;
    placeholder: string;
    helperText: string;
    errorText: string;
    value: string;

    required: boolean;
    disabled: boolean;
    invalid: boolean;
    fullWidth: boolean;
    clearable: boolean;
    floatingLabel: boolean;
}