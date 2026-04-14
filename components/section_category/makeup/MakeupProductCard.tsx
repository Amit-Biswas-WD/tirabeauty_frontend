"use client"

import ReusableFeaturedProducts from '@/components/common/ReusableFeaturedProducts'
import { AllProductData } from '@/data/AllProductData'

export const MakeupProduct = () => {
  return (
  <ReusableFeaturedProducts
         productData={AllProductData.makeUp}
         headingTitle="Chosen For You"
       />
  )
}
