import { ArrowRight } from 'lucide-react'
import React from 'react'

const FeaturedSection = () => {
  return (
    <div className=''>
        <div className="">
            <p>Now Showing</p>
            <button>View All
                <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5'/>
            </button>
        </div>
        <div className=""></div>
        <div className=""></div>
    </div>
  )
}

export default FeaturedSection