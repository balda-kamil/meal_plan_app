import React from 'react'

function DietPlanColumnItem(props){
  const { data, current } = props
  console.log(data)
  return(
    <div className="column__item">
      { 
        current ? 
          <>  
            <p>{ data && data.text }</p>
            { data && data.image && <img src={`${process.env.PUBLIC_URL}/img/${data.image}_active.png`} alt={data.image}/>}
            { data && data.done && <img src={`${process.env.PUBLIC_URL}/img/check_ico.svg`} alt="meal done"/>}
          </>
        :
          <>
            <p>{ data && data.text }</p>
            { data && data.image && <img src={`${process.env.PUBLIC_URL}/img/${data.image}.png`} alt={data.image}/>}
            { data && data.done && <img src={`${process.env.PUBLIC_URL}/img/checkout_ico.svg`} alt="meal done"/>}
          </>
      }
    </div>
  )
}

export default DietPlanColumnItem