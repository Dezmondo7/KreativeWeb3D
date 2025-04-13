import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
    return (
        <>
            <spotLight position={[2, 2, 6]}
                angle={10}
                intensity={250}
                penubra={0.2}
                color="white"
            />

            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                intensity={175}
                penubra={0.5}
                color="blue"
            />

            <spotLight
                position={[-3, 5, 4]}
                angle={0.3}
                intensity={175}
                penubra={0.5}
                color="gold"
            />

            <primitive
            object={new THREE.RectAreaLight('#A259FF')}/>
        </>
    )
}

export default HeroLights