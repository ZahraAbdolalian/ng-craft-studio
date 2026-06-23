import {
    ButtonIcon,
    ButtonOutputMode,
    ButtonSize,
    ButtonVariant,
} from '../models/button-config.model';

type Option<T extends string> = {
    label: string;
    value: T;
};

export const defaultButtonConfig = {
    outputMode: 'angular',
    variant: 'solid',
    size: 'md',
    radius: 12,
    iconLeft: 'rocket',
    loading: false,
    disabled: false,
    fullWidth: false,
    label: 'Generate Button',
} satisfies import('../models/button-config.model').ButtonConfig;

export const buttonOutputModes: Option<ButtonOutputMode>[] = [
    { label: 'Angular', value: 'angular' },
    { label: 'Tailwind', value: 'tailwind' },
    { label: 'Material', value: 'material' },
];

export const buttonVariants: Option<ButtonVariant>[] = [
    { label: 'Solid', value: 'solid' },
    { label: 'Outline', value: 'outline' },
    { label: 'Soft', value: 'soft' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Link', value: 'link' },
];

export const buttonSizes: Option<ButtonSize>[] = [
    { label: 'XS', value: 'xs' },
    { label: 'S', value: 'sm' },
    { label: 'M', value: 'md' },
    { label: 'L', value: 'lg' },
    { label: 'XL', value: 'xl' },
];

export const buttonIcons: Option<ButtonIcon>[] = [
    { label: 'rocket', value: 'rocket' },
    { label: 'sparkles', value: 'sparkles' },
    { label: 'code', value: 'code' },
    { label: 'none', value: 'none' },
];