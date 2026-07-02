export type ButtonOutputMode = 'angular' | 'tailwind' | 'material';
export type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonIcon = 'rocket' | 'sparkles' | 'code' | 'none';

export type ButtonBooleanKey = 'loading' | 'disabled' | 'fullWidth';

export interface ButtonConfig {
    outputMode: ButtonOutputMode;
    variant: ButtonVariant;
    size: ButtonSize;
    radius: number;
    iconLeft: ButtonIcon;
    loading: boolean;
    disabled: boolean;
    fullWidth: boolean;
    label: string;
}