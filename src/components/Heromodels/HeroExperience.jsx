import { React, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { OrbitControls } from '@react-three/drei'
import Macbook from '../../public/Macbook.jsx'
import HeroLights from '../Heromodels/HeroLights.jsx'




    const HeroExperience = () => {
        const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
        const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });


    return (
        <> 
            <div className="">
                {/* fov positions how close the image is to the screen */}
                <Canvas camera={{ position: [0, 0, 20], fov: 10 }}>
                    <OrbitControls
                        enablePan={false} // Prevents panning of the scene
                        enableZoom={!isTablet} 
                        diableZoom={isMobile}// Disables zoom on tablets
                        maxDistance={20} // Maximum distance for zooming out
                        minDistance={5} // Minimum distance for zooming in
                        minPolarAngle={Math.PI / 4} // Minimum angle for vertical rotation
                        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
                     />
                    <HeroLights />

                       
                    <group className="groups"
                        scale={isMobile ? 0.7 : 1}
                        position={[0, -0.525, 0]}
                        rotation={[0.075, -Math.PI / -1.00, 0]} >
                        <Macbook />
                    </group>
                  
                </Canvas>
            </div>
        </>
    )
}

export default HeroExperience


{/*} <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2} color='#1a1a40' />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <OrbitControls
            
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        />
        
        </Canvas> */}

{/*} const isTablet = useMediaQuery({ query: '(max-width: 1024)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px) '}); */}

{/*}   <Canvas>
            <Suspense fllback={null}>
                <Macbook />
            </Suspense>
        </Canvas>
        </> */}

