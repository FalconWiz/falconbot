
const Imgflipper = require('imgflipper')
const Promise = require('bluebird')

import { memes } from './../data/memes'
import { IMGFLIP_USERNAME, IMGFLIP_PASSWORD } from './../config'

const imgflipper = new Imgflipper(IMGFLIP_USERNAME, IMGFLIP_PASSWORD)
const generateMeme = Promise.promisify(imgflipper.generateMeme)


function meme (words) {
  const tags = words.split('"')
  const memetype = tags[0].trim().toLowerCase()

  return generateMeme(memes[memetype], tags[1] ? tags[1] : ' ', tags[3] ? tags[3] : ' ')
    .then(image => {
      return image
    })
    .catch(error => {
      if (error.message !== 'No texts supplied') {
        return `Error: ${error.message}`
      }
    })
}

export default meme
