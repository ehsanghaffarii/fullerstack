import {
  AnimationTriggerMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { EXPANSION_ANIMATION_TIMING } from './animation.constant';

export const expansionAnimations: {
  readonly expandFade: AnimationTriggerMetadata;
} = {
  expandFade: trigger('expandFade', [
    state('collapsed', style({ height: '0px', visibility: 'hidden', opacity: 0 })),
    state('expanded', style({ height: '*', visibility: 'visible', opacity: 1 })),
    transition('expanded <=> collapsed', animate(EXPANSION_ANIMATION_TIMING)),
    transition('collapsed => expanded', animate(EXPANSION_ANIMATION_TIMING)),
  ]),
};
