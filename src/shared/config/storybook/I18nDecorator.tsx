// Wrap your stories in the I18nextProvider component
import { Story } from '@storybook/react';
import { Suspense } from 'react';

import 'shared/config/i18n/i18n';

export const I18nDecorator = (StoryComponent: Story) => (
  // This catches the suspense from components not yet ready (still loading translations)
  // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
  <Suspense fallback={<div>loading translations...</div>}>
    <StoryComponent />
  </Suspense>
);
