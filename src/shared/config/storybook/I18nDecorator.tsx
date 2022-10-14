import { Story } from '@storybook/react';
import { Suspense } from 'react';

import 'shared/config/i18n/i18n';

export const I18nDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<div>loading translations...</div>}>
    <StoryComponent />
  </Suspense>
);
