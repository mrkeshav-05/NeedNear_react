import React from 'react'

const Service = (props) => {
  return (
    <section>
      <img src={props.service.img} alt="" />
      {props.service.id}
      {props.service.content}
    </section>
  )
}

export default Service