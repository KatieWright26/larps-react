import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

const state = {
  user: { id: 1, name: 'Katie', larpIds: [1] },
  larps: [
    { id: 1, name: 'star trek in the park', ownerId: 1, characterIds: [1, 2, 3] },
    { id: 3, name: 'spongebob', ownerId: 2, characterIds: [5, 7, 9] }
  ],
  characters: [
    { id: 1, name: 'Scotty' },
    { id: 1, name: 'Spok' },
    { id: 1, name: 'Captain Sleaze' }
  ]

}

render(<App name='larps' state={state} />, document.querySelector('main'))
console.log('welcome to larps')
