/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type i18nconfig = {
  language: string,
  textDirection: 'auto' | 'ltr' | 'rtl'
}

interface MetaData {
  title?: string
}