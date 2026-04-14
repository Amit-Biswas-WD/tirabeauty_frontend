"use client"

import ReusableFeaturedProducts from '@/components/common/ReusableFeaturedProducts'
import { AllProductData } from '@/data/AllProductData'

export const BothBodyProductCard = () => {
  return (
  <ReusableFeaturedProducts
         productData={AllProductData.bath_body}
         headingTitle="Chosen For You"
       />
  )
}

