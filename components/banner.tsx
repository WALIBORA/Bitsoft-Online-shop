import React from 'react'
import { Button } from './ui/button'

export default function Banner() {
    return (
        <div className="bg-gradient-to-r from-pink-100 to-pink-300 py-2 mx-4 my-4 rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left side: Text and Button */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Grab yours today
                        </h1>
                        <Button variant="success" size="lg">
                            Shop Now
                        </Button>
                    </div>

                    {/* Right side: Picture */}
                    <div className="md:w-1/2 flex justify-center h-40 md:h-56">
                        <img
                            src="/images/converse.png"
                            alt="Product"
                            className="max-w-full h-full rounded-lg shadow-lg object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
