import React from 'react'
import { MdDoneAll, MdOutlineFeaturedPlayList, MdOutlineManageSearch } from 'react-icons/md'

const HowItworks = () => {
  return (
    <section className="w-full howItWorks">
      <div className="autoWidth sectionFlow">
        <h2 className="text-4xl">How It Works</h2>
        <ul>
          <li>
            <MdOutlineManageSearch className="icon"/>
            <h3>Browse & Choose</h3>
            <p>
              Explore our extensive catalog of top-quality laptos. Filter by brand, specification, or rental duration to find the perfect match for your needs. Once you've found the right laptop simply select it.
            </p>
          </li>

          <li>
          <div>
            <MdOutlineFeaturedPlayList className="icon"/>
          </div>
          <h3>Provide Your Details</h3>
            <p>
              Provide the necessary information, including your rental period, location for pickup, and any special reqirements. Our secure platform ensures you details are preotected every step of the way.
            </p>
          </li>

          <li>
          <MdDoneAll className="icon"/>
          <h3>Finalize & Pickup</h3>
            <p>
              Complete the rental agreement to secure your laptop. After confirmation, you'll recieve instructions for pickup or delivery. It's that simple.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default HowItworks