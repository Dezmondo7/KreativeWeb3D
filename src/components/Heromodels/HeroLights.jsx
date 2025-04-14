import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {

    return (
        <>
            <spotLight position={[2, 2, 6]}
                angle={10}
                intensity={250}

                color="white"
            />

            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                intensity={200}

                color="blue"
            />

            <spotLight
                position={[-3, 5, 4]}
                angle={0.3}
                intensity={175}

                color="gold"
            />

            <primitive
                object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
                position={[0, 1, 0]}
                intensity={2}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]} />

            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#7209b7" />

            <pointLight
                position={[1, 2, -2]}
                intensity={10}
                color="#0d00a4" />
        </>
    )
}

export default HeroLights