import React from 'react'

const DailySpacePic = ({data}) => {
    console.log("data in DailySpacePic",data)
    return (
        <main>
           <section><img src={data.hdurl} alt={data.explanation}/></section>
        </main>
    )
}

export default DailySpacePic
