/*
Main script
Creates PDF files. 
Ref: https://react-pdf.org/

- Script is run with node.
- I couldn't properly set up JSX syntax, so I'm using React.createElement().
*/

import React, { createElement as elem } from 'react'
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

// Create styles
const styles = StyleSheet.create({
  page: {
    fontSize: '10mm',
    backgroundColor: '#202020'
  },
  main: {
    margin: '20mm',
    padding: '20mm',
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    border: '2mm solid #00979d'
  },
  zooLogo: {

  },
  bigText: {
    fontSize: '16mm',
    textAlign: 'center'
  },
  smallText: {
    textAlign: 'center'
  },
})

const ZooniverseCertificate = ({ name }) => (
  elem(
    Document, null,
    elem(Page, { size: 'A4', style: styles.page },
      elem(View, { style: styles.main },
        elem(Text, { style: styles.bigText },
          name
        ),
        elem(Text, { style: styles.smallText },
          'is a Zooniverse volunteer'
        )
      )
    )
  )
)

// const names = ['Shaun', 'Sean', 'Mark']
const names = ['Shaun']

names.forEach((name) => {
  ReactPDF.render(elem(ZooniverseCertificate, { name }), `${__dirname}/${name}.pdf`)
})

