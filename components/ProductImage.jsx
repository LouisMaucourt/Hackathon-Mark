import React from 'react'
import Image from 'next/image'

const ProductImage = () => {
    return (
        <div className='py-12 flex gap-11 justify-center'>
            <Image src="/wifi.webp" width={200} height={200} alt="Product-1" />
            <Image src="/wifi.webp" width={200} height={200} alt="Product-1" />
            <Image src="/wifi.webp" width={200} height={200} alt="Product-1" />
            <Image src="/wifi.webp" width={200} height={200} alt="Product-1" />
        </div>
    )
}

export default ProductImage
