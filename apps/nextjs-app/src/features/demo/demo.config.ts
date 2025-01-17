import type { I18nActiveNamespaces } from '@/lib/i18n';

export type DemoConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'demo'>>;
};

export const demoConfig: DemoConfig = {
  i18nNamespaces: ['common', 'demo'],
} as const;
