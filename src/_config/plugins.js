// Eleventy
import {EleventyRenderPlugin, EleventyI18nPlugin} from '@11ty/eleventy';
import rss from '@11ty/eleventy-plugin-rss';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import webc from '@11ty/eleventy-plugin-webc';
import {eleventyImageTransformPlugin} from '@11ty/eleventy-img';
import i18nPlugin from "eleventy-i18n";

// custom
import {markdownLib} from './plugins/markdown.js';
import {drafts} from './plugins/drafts.js';

// Custom transforms
import {htmlConfig} from './plugins/html-config.js';

export default {
  EleventyRenderPlugin,
  rss,
  syntaxHighlight,
  webc,
  eleventyImageTransformPlugin,
  markdownLib,
  drafts,
  htmlConfig,
  EleventyI18nPlugin,
  i18nPlugin
};
