import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import en from '@/messages/en.json';
import pt from '@/messages/pt.json';

const defaultProviderProps: any = {
  locale: 'en',
  messages: {
    pt,
    en,
  },
};

test.customRender = (
  ui: ReactNode,
  { providerProps, ...renderOptions }: any = {},
) => {
  const locale = providerProps?.locale || defaultProviderProps.locale;
  return render(
    <NextIntlClientProvider
      locale={locale}
      messages={{
        ...defaultProviderProps.messages[locale],
        ...(providerProps?.messages || {}),
      }}>
      {ui}
    </NextIntlClientProvider>,
    renderOptions,
  );
};
