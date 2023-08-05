import React from "react";

const Categories = ({categories,fxn}) => {
    console.log(categories);
  return (
    <div className='menu-btns'>
        {categories.map((x,index)=>{
            return <div key={index}>
                <button className='btn btn-dark my-1 mx-3' onClick={()=>fxn(x)}>{x}</button>
            </div>
        })}
    </div>
  )
}
export default Categories
