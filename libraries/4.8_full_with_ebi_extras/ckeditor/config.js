/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};

CKEDITOR.replace( 'editor1', {
  qtRows: 10, // Count of rows
  qtColumns: 8, // Count of columns
  qtBorder: '1', // Border of inserted table
  qtWidth: '90%', // Width of inserted table
  qtStyle: { 'border-collapse' : 'collapse' },
  qtClass: 'inserted-table', // Class of table
  qtCellPadding: '0', // Cell padding table
  qtCellSpacing: '0', // Cell spacing table
  qtPreviewBorder: '4px double black', // preview table border
  qtPreviewSize: '5px', // Preview table cell size
  qtPreviewBackground: '#c8def4' // preview table background (hover)
});
