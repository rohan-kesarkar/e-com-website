import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const prodId = useParams()

    const [item, setItem] = useState([])
    
    const getProduct = async ()=>{
        const responce = await fetch("https://fakestoreapi.com/products")
        setItem(await responce.json())
    }
   useEffect(()=>{
    getProduct()
   },[])
    console.log("This is ", item)

    const currentProduct = item.find(record=>record.id === parseInt(prodId.id))
console.log("tttttttttttt", currentProduct)

  return (
    <>
   ProductDetails
    </>
  )
}
export default ProductDetails
