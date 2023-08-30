import Link from 'next-intl';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function I18nLink({ href }: Props) {
  return <Link href={href} locale="en" />;
}
