import { trigger, transition, style, query, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          height: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.25s cubic-bezier(.25, 1, .30, 1)', style({ opacity: 50 }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 50 }),
        animate('0.5s cubic-bezier(.25, 1, .30, 1)', style({ opacity: 0 }))
      ], { optional: true })
    ])
  ]);
