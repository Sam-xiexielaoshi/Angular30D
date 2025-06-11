import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const faqAnimations = {
  slideToggle: trigger('slideToggle', [
    state('void', style({
      height: '0',
      opacity: 0
    })),
    state('*', style({
      height: '*',
      opacity: 1
    })),
    transition('void => *', [
      animate('300ms ease-in')
    ]),
    transition('* => void', [
      animate('300ms ease-out')
    ])
  ])
}
