import React from 'react'

import axe from '../assets/axe'
import bandsaw from '../assets/bandsaw'
import chisel from '../assets/chisel'
import hacksaw from '../assets/hacksaw'
import sledgehammer from '../assets/sledgehammer'

class ItemContainter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          id: bandsaw,
          title: 'Bandsaw',
          price: 562.14,
          imgSrc: axe,
          selected: false
        },
        {
          id: axe,
          title: 'Axe',
          price: 190.51,
          imgSrc: axe,
          selected: false
        },
        {
          id: axe,
          title: 'Axe',
          price: 190.51,
          imgSrc: axe,
          selected: false
        },
        {
          id: axe,
          title: 'Axe',
          price: 190.51,
          imgSrc: axe,
          selected: false
        },
        {
          id: axe,
          title: 'Axe',
          price: 190.51,
          imgSrc: axe,
          selected: false
        }
      ]
    }
  }
}
