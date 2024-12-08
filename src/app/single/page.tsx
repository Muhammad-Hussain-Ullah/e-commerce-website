import { products } from '@/app/components/fourth'
import { ProductCard } from '@/app/components/ProductCard'
import ProductDetails from '@/app/components/productDetails'
import React from 'react'

export default function Product() {
  return (
    <div>
    <ProductDetails />
    <h1 className='text-2xl text-center font-bold my-3'>Related Products</h1>
    <div className="grid grid-cols-1 p-10 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {products.map((product) => (
        // @ts-ignore
        
        <ProductCard product={product} />
      ))}
    </div>
  </div>
  )}
  
