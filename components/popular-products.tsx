import React from 'react'
import { Heart, Star } from 'lucide-react'
import { Button } from './ui/button'

const images = ['airforce.jpg', 'converse black.jpg', 'converse maroon.jpg', 'converse.png']

export default function PopularProducts() {
    const products = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        image: images[index % images.length],
        name: `Popular Product ${index + 1}`,
        price: `Ksh. ${(Math.floor(Math.random() * 100) + 50).toFixed(2)}`,
        description: `This is a great product description for ${`Popular Product ${index + 1}`}. It's high quality and popular among customers.`,
        stock: Math.random() > 0.5 ? 'In Stock' : 'Out of Stock'
    }))

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-8">The Most Popular Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <img
                            src={`/images/${product.image}`}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                            <Heart className="h-5 w-5 text-red-500 cursor-pointer hover:text-red-600" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                            <p className="text-lg font-bold text-green-600 mb-2">{product.price}</p>
                            <div className="flex mb-2">
                                {Array(5).fill(0).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                                ))}
                            </div>
                            <p className={`text-xs mb-3 ${product.stock === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                                {product.stock}
                            </p>
                            <Button variant="default" size="sm" className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}