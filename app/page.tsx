import React from 'react'
import { Button } from "@/components/ui/button"

import './globals.css'
import Container from '@/components/container'

import PopularProducts from '@/components/popular-products'

function page() {
  return (
    <>
      <Container>
        <PopularProducts />
      </Container>
    </>
  )
}

export default page