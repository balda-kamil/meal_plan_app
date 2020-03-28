import React from 'react'

function DietPlanColumnItem(props){
  const { data, current } = props
  return(
    <div className="column__item">
      { 
        current ? 
          <>  
            <p>{ data && data.text }</p>
            { data && data.image && <img src={`${process.env.PUBLIC_URL}/img/${data.image}_active.png`} alt={data.image}/>}
            { data && data.done && <img src={`${process.env.PUBLIC_URL}/img/check_ico.svg`} alt="meal done" className="column__item-checkout-ico"/>}
          </>
        :
          <>
            <p>{ data && data.text }</p>
            { data && data.image && <img src={`${process.env.PUBLIC_URL}/img/${data.image}.png`} alt={data.image}/>}
            { data && data.done && <img src={`${process.env.PUBLIC_URL}/img/checkout_ico.svg`} alt="meal done" className="column__item-checkout-ico"/>}
          </>
      }
    </div>
  )
}

export default DietPlanColumnItem