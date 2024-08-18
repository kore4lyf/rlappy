import React from 'react'
import { MdDiamond, MdLocationPin, MdSearch } from 'react-icons/md'

const HeroSearchForm = () => {
  return (
    <form action="/rent" className="heroInputForm form-control shadow-lg p-1 rounded-xl sm:rounded-full overflow-hidden sm:w-full border borderNeutral">
      <div className="heroInputFormContainer input-group flex flex-col sm:flex-row">

        <label className="heroInputSM flex items-center gap-2 sm:pl-5 w-[100%]">
          <MdDiamond className='text-base-content opacity-60 w-5 h-5'/>
          <input required name="brand" type="text" placeholder="Brand" className="w-28 grow bg-transparent focus:border-0 focus:outline-none " />
        </label>

        <div className="heroInputDivider divider divider-horizontal h-9 w-fit self-center"></div>

        <label className="heroInputSM flex items-center gap-2 sm:pl-5 w-[100%]">
          <MdLocationPin className='text-base-content opacity-60 w-5 h-5'/>
          <input required name="location" type="text" placeholder="Location" className="w-28 grow bg-transparent focus:border-0 focus:outline-none " />
        </label>
        <button className="btn  mbtn-primary sm:btn-circle"> 
          <MdSearch className='w-5 h-5 hidden sm:block'/> 
          <span className="sm:hidden">Search</span>
          </button>
      </div>
    </form>
  )
}

export default HeroSearchForm