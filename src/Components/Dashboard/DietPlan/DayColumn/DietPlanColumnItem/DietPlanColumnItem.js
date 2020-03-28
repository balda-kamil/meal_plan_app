import React from 'react'

function DietPlanColumnItem(props){
  const { data, current } = props
  console.log(props)
  return(
    <div>
      {
        current ? 
          <>  
            <p>{ data && data.text }</p>
            { data && data.image && <img src={`${process.env.PUBLIC_URL}/img/${data.image}_active.png`} alt={data.image}/>}
          </>
        :
          <>
            <p>{ data && data.text }</p>
            { data && data.image && <img src={`${process.env.PUBLIC_URL}/img/${data.image}.png`} alt={data.image}/>}
          </>
      }
    </div>
  )
}

export default DietPlanColumnItem