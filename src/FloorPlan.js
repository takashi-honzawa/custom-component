import React, { useEffect, useRef } from 'react';
import { FloorPlanEngine } from '@archilogic/floor-plan-sdk'
import './FloorPlan.css'

const startupSettings = {
  planRotation: 90, 
  ui: { menu: false, scale: false },
  theme: {
    elements: {
      // space: {
      //   program: {
      //     circulate: {
      //       fill: [229, 231, 233]
      //     },
      //     work: {
      //       fill: [212, 239, 223]
      //     },
      //     common: {
      //       fill: [252, 243, 207]
      //     },
      //     meet: {
      //       fill: [214, 234, 248]
      //     },
      //     wash: {
      //       fill: [242, 215, 213]
      //     },
      //     operate: {
      //       fill: [253, 235, 208]
      //     }
      //   }
      // },
      asset: {
         //fill: [248, 249, 249]
         fillOpacity: 0.8,
      },
      roomStamp: {
        roomStampDisplay: ['usage']
      },
    },
    background: {
      color: "#fff"
    }
  },
  units: {
    system: "imperial"
  }
}

let hasLoaded = false
let fpe

const FloorPlan = ({ triggerQuery, model, modelUpdate }) => {
  //const container = useRef(null);

  //const {token, floorId } = model

  const token = "c6580a08-797b-4f88-ba7c-6c3db7dd7e2c"
  const floorId = "45007690-d201-45f1-a403-f64de8ac6abc"
  
  async function initFloorPlan(container){
    console.log('init')
    if(floorId && hasLoaded !== floorId){
      fpe = new FloorPlanEngine(container.current, {startupSettings})
      const fpeLoaded = await fpe.loadScene(floorId, {publishableToken: token})
      hasLoaded = floorId
      //return fpe
    }
  }
  useEffect(() => {
    const container2 = document.getElementById('floor-plan')

    if(container2){
      initFloorPlan(container2)
    }

    // if(container.current){
    //   initFloorPlan()
    // }
  })
  
  
  return(
    <div className='fpe' id="floor-plan" /*ref={container}*/></div>
  )
}

export default FloorPlan