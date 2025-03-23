import React from 'react'
import { catalog, circooles, layer, quotie, sisyhus } from '../assets/assets'

const CompanyLogos = () => {
  return (
    <section className="w-full py-6">
      <div className="text-center text-[#667085]">
        <p>Join 4,000+ companies already growing</p>
        <div className="flex  justify-between items-center gap-6 mt-5">
          <img src={layer} alt="layers" className="h-8 sm:h-10 lg:h-12" />
          <img src={sisyhus} alt="sisyphus" className="h-8 sm:h-10 lg:h-12" />
          <img src={circooles} alt="circooles" className="h-8 sm:h-10 lg:h-12" />
          <img src={catalog} alt="catalog" className="h-8 sm:h-10 lg:h-12" />
          <img src={quotie} alt="quoties" className="h-8 sm:h-10 lg:h-12" />
        </div>
      </div>
    </section>
  )
}

export default CompanyLogos