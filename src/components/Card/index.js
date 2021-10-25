import React from 'react';

function Card(props) {
  const { width, title } = props;
  return(
    <div class="card shadow p-3 mb-5 bg-white rounded my-card" style={{width: width}}>
      <div class="card-body">
        <h5 class="card-title">{ title }</h5>
        {props.children}
      </div>
    </div>
  )
}

export default Card;