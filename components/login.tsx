'use client'
import React from 'react'
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

const ButtonIn = () => {
  return (
    <Button onClick={()=> signIn()} >Sign in</Button>
  )
}

export default ButtonIn; 