'use client'
import React from 'react'
import { useUserState } from '../../store'

const DailyTask = () => {
  const {profile}=useUserState();
  console.log(profile);
  
  return (
    <div>
      {
        profile?.assignment
      }
    </div>
  )
}

export default DailyTask