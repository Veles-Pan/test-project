import { Story } from '@storybook/react';
import { Suspense } from 'react';

import 'shared/config/i18n/i18n';
import { ContentLoader } from 'widgets/ContentLoader';

export const I18nDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<ContentLoader />}>
    <StoryComponent />
  </Suspense>
);
