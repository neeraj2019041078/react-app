import React from 'react';
import "./Card.css";

export function CardDefault({ link }) {
  return (
    <div className='big'>
     <div className="card">
      <div className="cards-row">
        {link.slice(0, 3).map((item, index) => (
          <div className="position" key={index}>
            <div className="card-header">
              <img
                src={item.url}
                alt={`card-image-${index}`}
              />
            </div>
            <div className="card-body">
              <h1>{item.caption}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='hello4'>
    <div className="second-row">
        <div className="cards-row">
          {link.slice(3, 6).map((item, index) => (
            <div className="position" key={index}>
              <div className="card-header">
                <img
                  src={item.url}
                  alt={`card-image-${index}`}
                />
              </div>
              <div className="card-body">
                <h1>{item.caption}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
   

    </div>
   
  );
}
