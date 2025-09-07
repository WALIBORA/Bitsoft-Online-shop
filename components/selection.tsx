import React from 'react'
import { Button } from './ui/button'

export default function Selection() {
    return (
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 px-4 py-3 bg-white shadow-sm rounded-md max-w-7xl mx-auto my-4">
            <Button variant="outline" size="default">Ladies</Button>
            <Button variant="outline" size="default">Gents</Button>
            <Button variant="outline" size="default">Shoes</Button>
            <Button variant="outline" size="default">Others</Button>
            <div className="flex-grow" />
            <Button variant="default" size="default">See All</Button>
        </div>
    )
}
