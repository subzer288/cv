import PdfPrinter from 'pdfmake';
import fs from 'node:fs';

import docDefinition from './utils/pdfDefinition'

const fonts = {
    Roboto: {
      normal: './../assets/fonts/roboto/Roboto-Light.ttf',
      bold: './../assets/fonts/roboto/Roboto-Bold.ttf',
      italics: './../assets/fonts/roboto/Roboto-LightItalic.ttf',
      bolditalics: './../assets/fonts/roboto/Roboto-BoldItalic.ttf'
    },
    Fontello: {
        normal: './../assets/fonts/fontello/font/fontello.ttf',
        bold: './../assets/fonts/fontello/font/fontello.ttf',
        italics: './../assets/fonts/fontello/font/fontello.ttf',
        bolditalics: './../assets/fonts/fontello/font/fontello.ttf'
        }
    }


const printer = new PdfPrinter(fonts);

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('./CV.pdf'));
pdfDoc.end();