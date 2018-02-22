# EBI-CKEditor-config
Standardised configurations for the CKEditor for use at EMBL-EBI websites.

## Theme path
Contained here is a version of CKEditor with our suggested plugins; reference with:
`https://ebiwd.github.io/EBI-CKEditor-config/libraries/4.8_full_with_ebi_extras/ckeditor`

## Standard options
Here are some standard config options to set the spell checker, use the EBI styles, and point to assets located here:

```js
config.skin = 'ebi-theme';
config.extraPlugins = 'autosave,codesnippet,image2,balloonpanel,balloontoolbar,linkballoon,tableresize,openlink,quicktable';
config.contentsCss = ['https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css', 'https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global-drupal.css', 'https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.2/fonts.css'];
config.scayt_disableOptionsStorage = 'lang';
config.scayt_sLang = 'en_GB';
config.stylesCombo_stylesSet = 'ebi_styles:https://ebiwd.github.io/EBI-CKEditor-config/styles.js';
config.templates = 'ebi_templates';
config.templates_files = [ 'https://ebiwd.github.io/EBI-CKEditor-config/templates/ebi_templates.js' ];
config.templates_replaceContent = false;
config.codeSnippet_languages = ({
    javascript: 'JavaScript',
    php: 'PHP'
});
config.indentClasses = ['margin-left-medium','margin-left-large','margin-left-xlarge'];
config.pasteFromWordPromptCleanup = true;
config.disableNativeTableHandles = true;
config.image2_alignClasses = [ 'float-left', 'text-center', 'float-right' ];
config.linkJavaScriptLinksAllowed = true;
```

## Layout
A recommended layout good for general content editing:

```js
[
  ['Styles','-','Bold','Italic','Strike','Blockquote'],
  ['NumberedList','BulletedList','-','Outdent','Indent'],
  ['PasteFromWord','-','RemoveFormat'],
  '/',
  ['linkit','Unlink','Anchor'],
  ['Image','Enhanced Image'],
  ['Table','codeSnippet','-','CreateDiv'],
  ['Templates'],
  ['Source','ShowBlocks']
]
```
