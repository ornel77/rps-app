import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Choices = ({myChoice}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigate("/result")
        }, 2000);

        return () => {
            clearTimeout(timeOut)
        }
    }, [navigate])
  return (
    <div className='text-yellow-200'>{myChoice}</div>
  )
}

export default Choices