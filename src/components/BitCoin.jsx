// "use client";

// import React, { useRef } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// const bitcoinTexture = "/Images/bitcoin.png";

// function BitcoinCoin() {
//     const coinRef = useRef(null);
//     const texture = useLoader(THREE.TextureLoader, bitcoinTexture);

//     texture.colorSpace = THREE.SRGBColorSpace;
//     texture.anisotropy = 16;

//     useFrame(() => {
//         // light idle movement only, drag OrbitControls se hoga
//         if (coinRef.current) coinRef.current.rotation.y += 0.001;
//     });

//     return (
//         <group ref={coinRef} rotation={[0.18, -0.35, 0]}>
//             {/* Coin body / edge */}
//             <mesh rotation={[Math.PI / 2, 0, 0]}>
//                 <cylinderGeometry args={[2.15, 2.15, 0.34, 128, 1, false]} />
//                 <meshStandardMaterial
//                     color="#d99a23"
//                     metalness={0.9}
//                     roughness={0.26}
//                 />
//             </mesh>

//             {/* Front image */}
//             <mesh position={[0, 0, 0.175]}>
//                 <circleGeometry args={[2.16, 128]} />
//                 <meshStandardMaterial
//                     map={texture}
//                     transparent
//                     metalness={0.65}
//                     roughness={0.3}
//                     side={THREE.FrontSide}
//                 />
//             </mesh>

//             {/* Back image */}
//             <mesh position={[0, 0, -0.175]} rotation={[0, Math.PI, 0]}>
//                 <circleGeometry args={[2.16, 128]} />
//                 <meshStandardMaterial
//                     map={texture}
//                     transparent
//                     metalness={0.65}
//                     roughness={0.3}
//                     side={THREE.FrontSide}
//                 />
//             </mesh>

//             {/* Golden outer glow rim */}
//             <mesh rotation={[Math.PI / 2, 0, 0]}>
//                 <torusGeometry args={[2.16, 0.035, 18, 160]} />
//                 <meshStandardMaterial
//                     color="#ffe07a"
//                     emissive="#a86105"
//                     emissiveIntensity={0.35}
//                     metalness={1}
//                     roughness={0.18}
//                 />
//             </mesh>
//         </group>
//     );
// }

// export default function BitcoinCoinScene() {
//     return (
//         <section className="relative bg-[#071014]">
//             <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]">
//                 <Canvas
//                     camera={{ position: [0, 0, 6], fov: 45 }}
//                     gl={{ antialias: true, alpha: true }}
//                 >
//                     <fog attach="fog" args={["#ffae21", 7, 15]} />
//                     <ambientLight intensity={2.4} />
//                     <directionalLight position={[3, 3, 5]} intensity={2.8} />
//                     <pointLight position={[-4, -2, 4]} intensity={2.2} color="#ffb12a" />
//                     <pointLight position={[4, 2, -3]} intensity={1.2} color="#ffffff" />

//                     <BitcoinCoin />

//                     <OrbitControls
//                         enableZoom={false}
//                         enablePan={false}
//                         rotateSpeed={0.8}
//                         dampingFactor={0.08}
//                         enableDamping
//                     />
//                 </Canvas>
//             </div>
//         </section>
//     );
// }


"use client";

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const bitcoinTexture = "/Images/bitcoin.png";

function BitcoinCoin() {
    const coinRef = useRef(null);
    const texture = useLoader(THREE.TextureLoader, bitcoinTexture);

    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;

    useFrame(() => {
        if (coinRef.current) coinRef.current.rotation.y += 0.001;
    });

    return (
        <group ref={coinRef} rotation={[0.18, -0.35, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[2.15, 2.15, 0.34, 128, 1, false]} />
                <meshStandardMaterial color="#d99a23" metalness={0.9} roughness={0.26} />
            </mesh>

            <mesh position={[0, 0, 0.175]}>
                <circleGeometry args={[2.16, 128]} />
                <meshStandardMaterial
                    map={texture}
                    transparent
                    metalness={0.65}
                    roughness={0.3}
                    side={THREE.FrontSide}
                />
            </mesh>

            <mesh position={[0, 0, -0.175]} rotation={[0, Math.PI, 0]}>
                <circleGeometry args={[2.16, 128]} />
                <meshStandardMaterial
                    map={texture}
                    transparent
                    metalness={0.65}
                    roughness={0.3}
                    side={THREE.FrontSide}
                />
            </mesh>

            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.16, 0.035, 18, 160]} />
                <meshStandardMaterial
                    color="#ffe07a"
                    emissive="#a86105"
                    emissiveIntensity={0.35}
                    metalness={1}
                    roughness={0.18}
                />
            </mesh>
        </group>
    );
}

export default function BitcoinCoinScene() {
    const areaRef = useRef(null);
    const dragRef = useRef({ isDragging: false, startX: 0, startLeft: 0 });
    const [x, setX] = useState(0);

    const coinSize = 160;

    const startDrag = (e) => {
        const point = e.touches ? e.touches[0] : e;
        dragRef.current.isDragging = true;
        dragRef.current.startX = point.clientX;
        dragRef.current.startLeft = x;
    };

    const onDrag = (e) => {
        if (!dragRef.current.isDragging || !areaRef.current) return;

        const point = e.touches ? e.touches[0] : e;
        const areaWidth = areaRef.current.offsetWidth;
        const maxX = Math.max(0, (areaWidth - coinSize) / 2);
        const deltaX = point.clientX - dragRef.current.startX;
        const nextX = dragRef.current.startLeft + deltaX;

        setX(Math.max(-maxX, Math.min(maxX, nextX)));
    };

    const stopDrag = () => {
        dragRef.current.isDragging = false;
    };

    return (
        <section className="relative bg-[#071014]">
            {/* jitna width doge, utne area ke andar coin x-axis me drag hoga */}
            <div
                ref={areaRef}
                className="relative mx-auto h-40 w-full max-w-150 overflow-hidden touch-none"
                onMouseMove={onDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onTouchMove={onDrag}
                onTouchEnd={stopDrag}
            >
                <div
                    className="absolute left-1/2 top-0 h-40 w-40 cursor-grab active:cursor-grabbing"
                    style={{ transform: `translateX(calc(-50% + ${x}px))` }}
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                >
                    <Canvas
                        camera={{ position: [0, 0, 6], fov: 45 }}
                        gl={{ antialias: true, alpha: true }}
                    >
                        <fog attach="fog" args={["#ffae21", 7, 15]} />
                        <ambientLight intensity={2.4} />
                        <directionalLight position={[3, 3, 5]} intensity={2.8} />
                        <pointLight position={[-4, -2, 4]} intensity={2.2} color="#ffb12a" />
                        <pointLight position={[4, 2, -3]} intensity={1.2} color="#ffffff" />

                        <BitcoinCoin />

                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            rotateSpeed={0.8}
                            dampingFactor={0.08}
                            enableDamping
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
