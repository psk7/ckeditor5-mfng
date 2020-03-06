/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
//import Clipboard from '@ckeditor/ckeditor5-clipboard';

import Font from '@ckeditor/ckeditor5-font/src/font';

import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';

import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

class ClassicEditor extends ClassicEditorBase {}
class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
const plugins = [
	Essentials,
//	UploadAdapter,
//  Clipboard,
	Autoformat,
	Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript,
	BlockQuote,
//	CKFinder,
//	EasyImage,
	Heading,
	Image,
  ImageResize,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	Indent, IndentBlock,
//	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Base64UploadAdapter,
  Autosave,
	Font
//	Table,
//	TableToolbar
];

ClassicEditor.builtinPlugins = plugins;
InlineEditor.builtinPlugins = plugins;

// Editor configuration.
const config = {
	toolbar: {
		items: [
			'heading',
			'|', 
			'bold', 'italic', 'underline', 'code', '|', 
//'strikethrough', ,'subscript', 'superscript', '|',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
//			'insertTable',
//			'mediaEmbed',
			'|',
			'undo',
			'redo',
//			'|',
//			'outdent', 'indent',
			'|', 'removeFormat'
	] },
	image: {
    resizeUnit: 'px',
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'imageStyle:alignLeft',
			'imageStyle:alignRight',
//			'imageStyle:side',
//			'|',
//			'imageTextAlternative'
		],
		styles: [
                // This option is equal to a situation where no style is applied.
                'full',

                // This represents an image aligned to the left.
                'alignLeft',

                // This represents an image aligned to the right.
                'alignRight'
            ]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'ru'
};

ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;

export default {
    ClassicEditor, InlineEditor
};
