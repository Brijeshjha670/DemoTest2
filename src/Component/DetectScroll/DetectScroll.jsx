// code for interview

import React from 'react';
import useScrollDetection from '../../hooks/useScrollDetection';

const DetectScroll = () => {

    const scrollDetection = useScrollDetection();

  return (
    <>
    <h1>{scrollDetection}</h1>
    <h1>DetectScroll</h1>
    </>
    
  )
}

export default DetectScroll