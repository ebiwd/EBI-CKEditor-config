/****
Use this in your ckeditor config like:
- Drupal:
  config.stylesCombo_stylesSet = 'ebi_styles:https://ebiwd.github.io/EBI-CKEditor-config/styles.js';
- Other:
  config.stylesSet = 'ebi_styles:https://ebiwd.github.io/EBI-CKEditor-config/styles.js';
**/
CKEDITOR.stylesSet.add("ebi_styles", [
  { name: 'Normal paragraph' , element: 'p', attributes: { 'class': 'normal' } },
  { name: 'H3: Section head' , element: 'h3', attributes: { 'class': 'my_style' } },
  { name: 'H4: Sub head' , element: 'h4', attributes: { 'class': 'my_style' } },
  { name: 'Lead paragraph' , element: 'p', attributes: { 'class': 'lead' } },
  { name: 'Normal blockquote' , element: 'blockquote', attributes: { 'class': 'blockquote' } },
  { name: 'Quote' , element: 'blockquote', attributes: { 'class': 'quote' } },
  { name: 'Colour: white' , element: 'span', attributes: { 'class': 'white-color' } },
  { name: 'Colour: grey' , element: 'span', attributes: { 'class': 'secondary-color' } },
  { name: 'Small text' , element: 'span', attributes: { 'class': 'small' } },
  { name: 'Plain link', element: 'a', attributes: { 'class': 'plain' } },
  { name: 'No underline', element: 'a', attributes: { 'class': 'no-underline' } },
  { name: 'Readmore', element: 'a', attributes: { 'class': 'readmore' } },
  { name: 'External', element: 'a', attributes: { 'class': 'external' } },
  { name: 'Button: Normal', element: 'a', attributes: { 'class': 'button' } },
  { name: 'Button: Secondary', element: 'a', attributes: { 'class': 'button secondary' } },
  { name: 'Button: Readmore', element: 'a', attributes: { 'class': 'button readmore' } },
  { name: 'Button: External', element: 'a', attributes: { 'class': 'button external' } },
  { name: 'Button: Readmore, secondary', element: 'a', attributes: { 'class': 'button secondary readmore' } },
  { name: 'Button: External, secondary', element: 'a', attributes: { 'class': 'button secondary external' } },
  { name: 'Callout', element: 'div',  attributes: { 'class': 'callout' } },
  { name: 'Row', element: 'div',  attributes: { 'class': 'row' } },
  { name: 'Medium 6', element: 'div',  attributes: { 'class': 'columns medium-6' } },
  { name: 'Table: normal', element: 'table',  attributes: { 'class': 'normal' } },
  { name: 'Table: data', element: 'table',  attributes: { 'class': 'data-table small no-stripe' } },
  { name: 'Table: no stripe', element: 'table',  attributes: { 'class': 'no-stripe' } },
  { name: 'Table row: white text', element: 'td',  attributes: { 'class': 'white-color' } },
  { name: 'Table row: sub-head', element: 'td',  attributes: { 'class': 'secondary-background white-color' } },
  { name: 'Table row: section head', element: 'th',  attributes: { 'class': 'secondary-background white-color' } }
]);


// make all h1s h2s into h3s -- as these are reserved for the site and page title
CKEDITOR.on('instanceReady', function (ev) {
  ev.editor.on('paste', function (ev) {
      var pasted = ev.data.dataValue;
      pasted = pasted.replace(/<h2/g, "<h3");
      pasted = pasted.replace(/<\/h2>/g,"<\/h3>");
      pasted = pasted.replace(/<h1/g, "<h3");
      pasted = pasted.replace(/<\/h1>/g,"<\/h3>");
      ev.data.dataValue = pasted;
  });
});
