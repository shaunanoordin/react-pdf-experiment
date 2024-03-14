# React PDF Experiment

This is an experiment that uses [React-PDF](https://react-pdf.org/) to generate PDF files. At the moment, the experiment is running on the command line (via Node.js), though there is interest in making the PDF generation feature available on a webpage.

Context: the Zooniverse is interested in generating individualised "volunteer certificates".

## Usage

Requirements:
- Node (tested with node v20.9.0) and npm (tested with npm v10.1.0)

Running:
- Setup the repo with `npm install`
- Run `npm start`
- You should see 3 PDF files generated in the `/output` folder

## Notes

Lessons Learnt:
- Translating a HTML design to PDF requires some adaptation.
- For example, 'div', 'p', and 'img' need to be replaced with React-PDF's View, Text, and Image.
- 'px' or 'em' don't seem to be supported. 'mm' works. (Possibly because PDFs are designed to be printed on physical paper?)
- Specifying a font family requires some sort of pre-registration. I haven't fully tested this yet.
- Other than that, CSS styles (sepecially layouts) seem to mostly work.

Future Work:
- `<PDFDownloadLink />` is potentially an easy way to generate PDF files on a webpage. See https://react-pdf.org/advanced
