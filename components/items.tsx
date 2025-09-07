import React from 'react'
import { Heart, Star } from 'lucide-react'
import { Button } from './ui/button'

const images = ['airforce.jpg', 'converse black.jpg', 'converse maroon.jpg', 'converse.png']

export default function Items() {
    const items = Array.from({ length: 16 }, (_, index) => ({
        id: index + 1,
        image: images[index % images.length],
        name: `Product ${index + 1}`,
        stock: Math.random() > 0.5 ? 'In Stock' : 'Out of Stock'
    }))

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <img
                            src={`/images/${item.image}`}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                            <Heart className="h-5 w-5 text-red-500 cursor-pointer hover:text-red-600" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">{item.name}</h3>
                            <div className="flex mb-2">
                                {Array(5).fill(0).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-500" />
                                ))}
                            </div>
                            <p className={`text-xs mb-3 ${item.stock === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}>
                                {item.stock}
                            </p>
                            <Button variant="success" size="sm" className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
