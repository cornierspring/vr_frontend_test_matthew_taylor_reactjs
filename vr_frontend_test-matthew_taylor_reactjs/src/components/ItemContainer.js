import React from 'react'

import axe from '../assets/axe.png'
import bandsaw from '../assets/bandsaw.png'
import chisel from '../assets/chisel.png'
import hacksaw from '../assets/hacksaw.png'
import sledgehammer from '../assets/sledgehammer.png'

class ItemContainter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [
        {
          id: bandsaw,
          title: 'Bandsaw',
          imgSrc: bandsaw
        },
        {
          id: axe,
          title: 'Axe',

          imgSrc: axe
        },
        {
          id: sledgehammer,
          title: 'Sledgehammer',

          imgSrc: sledgehammer
        },
        {
          id: chisel,
          title: 'Chisel',

          imgSrc: chisel
        },
        {
          id: hacksaw,
          title: 'Hacksaw',

          imgSrc: hacksaw
        }
      ]
    }
  }

  displayProducts = products => {
    return products.map(product => {
      return (
        <div>
          <img src={products.imageSrc} />
          {products.tilte}
        </div>
      )
    })
  }
}

export default ItemContainter
