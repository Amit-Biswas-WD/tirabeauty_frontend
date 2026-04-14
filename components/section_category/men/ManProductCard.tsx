"use client"

import ReusableFeaturedProducts from '@/components/common/ReusableFeaturedProducts'
import { AllProductData } from '@/data/AllProductData'

export const ManProductCard = () => {
  return (
  <ReusableFeaturedProducts
         productData={AllProductData.man}
         headingTitle="Chosen For You"
       />
  )
}
