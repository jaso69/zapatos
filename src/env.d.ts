/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Language } from './i18n';

declare namespace App {
  interface Locals {
    lang: Language;
  }
}