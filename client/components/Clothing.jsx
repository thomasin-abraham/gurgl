import React from 'react'
import {connect} from 'react-redux'

import FilterRow from './subcomponents/FilterRow_Clothing'

class Clothing extends React.Component {
  displayClothing(clothing) {
    let reduced = clothing
      .reduce((rows, item, idx) => {
        idx % 3 === 0
        ? rows.push([item])
        : rows[rows.length-1].push(item)
        return rows
      }, [])

    return reduced.map((row, i) => {
      let itemArray = row.map((item, idx) => {
        return (
          <div className="clothingItem four columns" key={idx}>
            <img src={item.photo1} /><br />
            { item.description }
          </div>
        )
      })
      return (
        <div className="clothingRow row" key={i}>
          { itemArray }
        </div>
      )
    })
  }

  render () {
    return (
    <div className="clothingContainer container">
      <FilterRow />
      <div className="clothingGallery row">
        { this.displayClothing(this.props.clothing) }
      </div>
    </div>
    )
  }
}

Clothing = connect()(Clothing)
export default Clothing
