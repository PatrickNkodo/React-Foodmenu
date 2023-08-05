import {useState} from 'react'
import Categories from './Categories'
import Menu from './Menu'
import data from './data'
import './index.css'
const mycategories= new Set(data.map((item)=>item.category)) //New set creates the array with the items with no repeat
//Add "all" to categories
const allCategories=['All',...mycategories]
const Menuitems = () => {
    const [menuItems,setMenuItems]=useState(data)
    const [category,setCategory]=useState('All')
    const [categories, setCategories]=useState(allCategories) //categories =allCategories

    const filterItems=(category)=>{
        if(category==='All'){
            console.log('all');
            return setMenuItems(data), setCategory('ALL')
        }
        let newItems= data.filter((item)=>{
            return item.category===category
        })
        setMenuItems(newItems);
        setCategory(category.toLocaleUpperCase())
    }
  return (
    <div>
     <h2>OUR MENU</h2>
     <h4>{category}</h4>
     <Categories categories={categories} fxn={filterItems}/>
     <Menu items={menuItems}/>
    </div>
  )
}

export default Menuitems
