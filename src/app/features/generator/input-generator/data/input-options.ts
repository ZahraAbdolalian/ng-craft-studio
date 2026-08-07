import { InputBooleanKey, InputConfig, InputIcon, InputOutputMode, InputSize, InputType, InputVariant } from '../models/input-config.model';

export const defaultInputConfig: InputConfig = {
    outputMode: 'angular',
    type: 'text',
    variant: 'outline',
    size: 'md',
    radius: 14,
    iconLeft: 'mail',

    label: 'Email address',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email.',
    errorText: 'Please enter a valid email address.',
    value: '',

    required: false,
    disabled: false,
    invalid: false,
    fullWidth: true,
    clearable: false,
    floatingLabel: false,
};

export const inputOutputModes: {
    label: string;
    value: InputOutputMode;
    description: string;
}[] = [
        {
            label: 'Angular + SCSS',
            value: 'angular',
            description: 'Standalone Angular component with full SCSS output.',
        },
        {
            label: 'Tailwind',
            value: 'tailwind',
            description: 'Self-contained Tailwind classes without internal dependencies.',
        },
        {
            label: 'Material',
            value: 'material',
            description: 'Angular Material input output.',
        },
    ];

export const inputTypes: { label: string; value: InputType }[] = [
    { label: 'Text', value: 'text' },
    { label: 'Email', value: 'email' },
    { label: 'Password', value: 'password' },
    { label: 'Number', value: 'number' },
    { label: 'Search', value: 'search' },
    { label: 'URL', value: 'url' },
    { label: 'Tel', value: 'tel' },
];

export const inputVariants: { label: string; value: InputVariant }[] = [
    { label: 'Outline', value: 'outline' },
    { label: 'Filled', value: 'filled' },
    { label: 'Soft', value: 'soft' },
    { label: 'Underline', value: 'underline' },
];

export const inputSizes: { label: string; value: InputSize }[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
];

export const inputIcons: { label: string; value: InputIcon }[] = [
    { label: 'None', value: 'none' },
    { label: 'Search', value: 'search' },
    { label: 'Mail', value: 'mail' },
    { label: 'Lock', value: 'lock' },
    { label: 'User', value: 'user' },
    { label: 'Hash', value: 'hash' },
];

export const inputBooleanOptions: { label: string; value: InputBooleanKey }[] = [
    { label: 'Required', value: 'required' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Invalid', value: 'invalid' },
    { label: 'Full Width', value: 'fullWidth' },
    { label: 'Clearable', value: 'clearable' },
    { label: 'Floating Label', value: 'floatingLabel' },
];