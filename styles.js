/****
Use this in your ckeditor config like:
- Drupal:
  config.stylesCombo_stylesSet = 'ebi_styles:https://ebiwd.github.io/EBI-CKEditor-config/styles.js';
- Other:
  config.stylesSet = 'ebi_styles:https://ebiwd.github.io/EBI-CKEditor-config/styles.js';
**/
CKEDITOR.stylesSet.add("ebi_styles", [
  { name: 'H3: Section head' , element: 'h3', attributes: { 'class': 'my_style' } },
  { name: 'H4: Sub head' , element: 'h4', attributes: { 'class': 'my_style' } },
  { name: 'Lead paragraph' , element: 'p', attributes: { 'class': 'lead' } },
  { name: 'Small text' , element: 'span', attributes: { 'class': 'small' } },
  { name: 'No underline', element: 'a', attributes: { 'class': 'no-underline' } },
  { name: 'Readmore', element: 'a', attributes: { 'class': 'readmore' } },
  { name: 'External', element: 'a', attributes: { 'class': 'external' } },
  { name: 'Button: Readmore', element: 'a', attributes: { 'class': 'button readmore' } },
  { name: 'Button: External', element: 'a', attributes: { 'class': 'button external' } },
  { name: 'Button, secondary: Readmore', element: 'a', attributes: { 'class': 'button secondary readmore' } },
  { name: 'Button, secondary: External', element: 'a', attributes: { 'class': 'button secondary external' } }
]);
