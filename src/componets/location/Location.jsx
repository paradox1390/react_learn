import { useEffect, useState } from 'react'
import { getLocation } from '../../utils'
import LocationIcon  from '../../assets/location-icon.svg?react'
export const Location = () => {
    const[latitude, setLatitude]= useState(null)
    const[longitude, setLongitude]= useState(null)
    const[loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true);
        getLocation().then((location)=>{
            console.log(location.lon);
            console.log(location.lat);
            setLongitude(location.lon)
            setLatitude(location.lat)
            setLoading(false);
        }) 
        },[])
  return (
    <div className='flex flex-col justify-center'>
        {loading && 'loading'}
        {latitude && <>
                        
                    <div className='flex items-center justify-center'>
                        <LocationIcon className='w-7 max-h-6 mr-1.5'/>
                        
                            <div className='flex flex-col'>
                                <span>{latitude.toFixed(2)}</span>
                                <span>{longitude.toFixed(2)}</span>

                            </div>
                    </div>
                    <a  href = {`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17`} target='_blank' rel='noreferrer' >You are here</a>
                    </>}

                    
    </div>
  )
}
