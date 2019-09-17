import { writeFile } from 'fs'
import { resolve } from 'path'
import { createResponseData } from './dataMock'

const initialPostData = createResponseData()
const data = JSON.stringify(initialPostData)

writeFile(resolve(__dirname, '../../public/api/db.json'), data, (err: any) => {
  if (err) {
    return console.log(err)
  }
  return console.log('The file was saved!')
})
