import React from 'react'

export default function imageCards(val) {
  return (
    <div className="p-2">
      <div
        className="card pt-2"
        style={{ width: 300 }}
      >
        <div className="justify-content-center">
          <img
            src={val.image}
            alt={val.name}
            width="80"
            height="80"
            className="image rounded mx-auto d-block"
          />
        </div>
        <div className="card-body mx-auto d-block">
          <h5 className="card-title">{val.name}</h5>
          <p>Price : {`$${val.current_price}`}</p>
          <p>Rank : {val.market_cap_rank}</p>
          <p>Market Cap: ${val.market_cap} </p>
          <button></button>
        </div>
      </div>
    </div>
  )
}
