# EBI-CKEditor-config
Standardised configurations for the CKEditor for use at EMBL-EBI websites.

## Standard options
Here are some standard config options to set the spell checker, use the EBI styles, and point to assets located here:

```js
config.contentsCss = ['https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css', 'https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global-drupal.css', 'https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css'];
config.scayt_disableOptionsStorage = 'lang';
config.scayt_sLang = 'en_GB';
config.stylesCombo_stylesSet = 'ebi_styles:https://ebiwd.github.io/EBI-CKEditor-config/styles.js';
```
