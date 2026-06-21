import { Directive, HostListener, input } from "@angular/core";

type NcsButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost' | 'choice';
type NcsButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon-sm' | 'icon-md' | 'icon-lg';
type NcsButtonAlign = 'center' | 'start' | 'between';

@Directive({
    selector: 'button[ncsButton], a[ncsButton]',
    host: {
        class: 'ncs-button',
        '[attr.data-variant]': 'variant()',
        '[attr.data-size]': 'size()',
        '[attr.data-active]': 'active() ? "true" : null',
        '[attr.data-block]': 'block() ? "true" : null',
        '[attr.aria-disabled]': 'disabled() ? "true" : null',
        '[attr.disabled]': 'disabled() ? "" : null',
        '[attr.type]': 'type()',
        '[class.is-disabled]': 'disabled()',
        '[attr.data-align]': 'align()',
    },
})

export class NcsButton {
    readonly variant = input<NcsButtonVariant>('primary');
    readonly size = input<NcsButtonSize>('md');
    readonly active = input(false);
    readonly block = input(false);
    readonly disabled = input(false);
    readonly type = input<'button' | 'submit' | 'reset'>('button');
    readonly align = input<NcsButtonAlign>('center');

    @HostListener('click', ['$event'])
    onClick(event: Event): void {
        if (!this.disabled()) return;

        event.preventDefault();
        event.stopImmediatePropagation();
    }
}