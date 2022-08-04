import { BsCartPlus } from "react-icons/bs";
import React from 'react';
import Form from 'react-bootstrap/Form';


const Navbar = (props) => {
    
    const searchProduct = (e)=>{
        const data = props.item.filter((rec)=>rec.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
        props.setItem(data)
    }

const ascendingSort = ()=>{
    props.setItem((item)=>{
        const dataToSort = [...item]
        dataToSort.sort((a,b)=>Number(a.price)-Number(b.price))
        return dataToSort
    })
}
const decendingSort =()=>{
    props.setItem((item)=>{
        const dataToSort = [...item]
        dataToSort.sort((a,b)=>Number(b.price)-Number(a.price))
        return dataToSort
    })
}

const ascendingRating = ()=>{
    props.setItem((item)=>{
        const dataToSort = [...item]
        dataToSort.sort((a,b)=> Number(a.rating.rate)-Number(b.rating.rate))
        return dataToSort
    })
}

const descendingRating = ()=>{
    props.setItem((item)=>{
        const dataToSort = [...item]
        dataToSort.sort((a,b)=> Number(b.rating.rate)-Number(a.rating.rate))
        return dataToSort
    })
}

const selectProduct = (e)=>{
    const data = props.item.filter((res)=>res.category === e.target.value)
    props.setItem(data)

}

  return (
    <>
    <div>
    <h1>Shopping Mart...<span style={{float : "right", paddingRight:"30px", paddingTop:"1px"}}><BsCartPlus /></span></h1>
    
    
    </div>
   
    
    <div>
        <input type="text" style={{width:"400px"}} placeholder="search product here..... " onKeyUp={searchProduct} />
    </div>
    <div>
     <h4> Sorting</h4>  
     <span>Price :</span>{' '}
     <button onClick={ascendingSort} >Low to high</button>{' '}
     <button onClick={decendingSort}>High to low</button>{' '}
     <span>Rating :</span>{' '}
     <button onClick={descendingRating}>High to Low</button>{' '}
     <button onClick={ascendingRating}>Low to High</button>{' '}
   
     {' '}<Form.Select size="sm" style={{width:"350px", height:"40px"}}  onChange={selectProduct}>
   
     <option>Select Category</option>
        {
            props.item.map((res)=>{
                return(
            <option key={res.id}>
               {res.category}
                </option>
                )
            
            }).filter((prod,index,arr)=>arr.indexOf(prod)===index)
        }
        
      </Form.Select>
    </div>
   
   </>
  )
}
export default Navbar