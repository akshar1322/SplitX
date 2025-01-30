'use client'
import React,{ useEffect} from 'react'
import CostomError from '../components/ui/Share/404Error'
import DeviceCheck from '../components/DeviceCheck'


const notFound = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.title = 'NotFound | SPLIX';
  }, []);
  return (
    <DeviceCheck>
      <div className=" flex container justify-center items-center" >
        <CostomError/>
    </div>
    </DeviceCheck>

  )
}

export default notFound
