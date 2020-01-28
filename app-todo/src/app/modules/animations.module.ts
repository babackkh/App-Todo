import {
    transition,
    trigger,
    state,
    style,
    animate
} from '@angular/animations';

export const FadeIn =
    trigger('fadeIn', [
        state('void', style({ opacity: '0', transform: 'translateX(-100%)' })),
        transition(':enter', [
            animate(500)
        ]),
        transition(':leave', [
            animate(500, style({ backgroundColor: '#ff6347', opacity: '0', transform: 'translateX(100%)' }))
        ])
    ]);
