import { defineConfig } from 'https://cdn.jsdelivr.net/npm/@twind/core@1.1.3/+esm';
import install from 'https://cdn.jsdelivr.net/npm/@twind/with-web-components@1.1.3/+esm';
import presetTailwind from 'https://cdn.jsdelivr.net/npm/@twind/preset-tailwind@1.1.4/+esm';
import presetAutoprefix from 'https://cdn.jsdelivr.net/npm/@twind/preset-autoprefix@1.0.7/+esm';
import presetTypography from 'https://cdn.jsdelivr.net/npm/@twind/preset-typography@1.0.7/+esm';

export const withTwind = install(defineConfig({
  presets: [
    presetTailwind(),
    presetAutoprefix(),
    presetTypography(),
  ],
}));
