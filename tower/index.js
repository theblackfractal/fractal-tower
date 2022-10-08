import React, { useRef, useEffect, useState } from 'react'
import { DEG2RAD, useWorld, useFields, useSyncState } from 'hyperfy'

import { Tween } from './Tween'


export default function Tower() {
  const world = useWorld()


  return (    
    <app>
      <skysphere
        src="GreySky_2k.png"
      />
      <hdr
        src="NeonLineSky_512.hdr"
      />
      <tonemapping
        value="cineon"
      />
    </app>   
  )
}

