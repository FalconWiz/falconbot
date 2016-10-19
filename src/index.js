
const Discord = require('discord.js')
const client = new Discord.Client()

import { DISCORD_BOT_TOKEN } from './config'

import meme from './commands/meme'

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${message.guild.name}(${message.channel.name}): "${message.content}" by ${message.author}`)
  }

  if (message.content === 'ping') {
    message.channel.sendMessage('pong')
  }

  if (message.content[0] === '!') {
    const command = message.content.toLowerCase().split(' ')[0].substring(1)
    const words = message.content.substring(command.length + 2)

    if (command === 'meme') {
      meme(words)
        .then( content => {
          message.channel.sendMessage(content)
        })
        .catch( error => {
          message.channel.sendMessage('Sorry, that meme was too dank to handle! Try another.')
          console.log(error)
        })
    } else {
      message.channel.sendMessage(`Sorry! Command "${command}" isn't a thing!`)
    }

  }



})

client.login(DISCORD_BOT_TOKEN)
