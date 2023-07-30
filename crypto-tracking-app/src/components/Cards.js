import React from 'react'

export default function imageCards(props) {
  return (
    <div className="p-2">
      <div
        className="card pt-2"
        style={{ width: 300 }}
      >
        <div className="justify-content-center">
          <img
            src={props.image}
            alt={props.name}
            width="80"
            height="80"
            className="image rounded mx-auto d-block"
          />
        </div>
        <div className="card-body mx-auto d-block">
          <h5 className="card-title">{props.name}</h5>
          <p>Price : {`$${props.current_price}`}</p>
          <p>Rank : {props.market_cap_rank}</p>
          <p>Market Cap: ${props.market_cap} </p>
          <button></button>
        </div>
      </div>
    </div>
  )
}
