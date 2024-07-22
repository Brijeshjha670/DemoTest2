// code for interview

import React, { useState } from 'react'

import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";

import './CollapsiblePanel.css';

const CollapsiblePanel = ({title,children,initialCollapse=true}) => {

    const [collapse,setCollapse] = useState(initialCollapse);

  return (
    <div className='collapsible-panel'>
        <div 
        className='collapsible-panel-header'
        onClick={() => setCollapse(!collapse)}>
            <span>{title}</span>
            {collapse ? <FaCircleArrowDown/>:<FaCircleArrowUp/>}
        </div>
        <div className={`collapsible-panel-content  ${collapse ? "collapsed":""}`}>
            {children}
        </div>
    </div>
  )
}

export default CollapsiblePanel