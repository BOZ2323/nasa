import React from 'react'

const DailySpacePic = ({data}) => {
    console.log("data in DailySpacePic",data)
    return (
        <div>
           <main><section><img src={data.hdurl} alt=""/></section></main> 
        </div>
    )
}

export default DailySpacePic
