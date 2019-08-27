const fs = require('fs')
const path = require('path')
const dataMock = require('./dataMock')

const initialPostData = dataMock.createResponseData()
const data = JSON.stringify(initialPostData)

fs.writeFile(path.resolve(__dirname, 'db.json'), data, err => {
  if (err) {
    return console.log(err)
  }
  return console.log('The file was saved!')
})
