"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const bitcoinTexture = "./images/bitcoin.png";

function BitCoin1() {
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
                <meshStandardMaterial map={texture} transparent
                    metalness={0.65} roughness={0.3}
                    side={THREE.FrontSide}
                />
            </mesh>

            <mesh position={[0, 0, -0.175]} rotation={[0, Math.PI, 0]}>
                <circleGeometry args={[2.16, 128]} />
                <meshStandardMaterial map={texture} transparent
                    metalness={0.65} roughness={0.3}
                    side={THREE.FrontSide}
                />
            </mesh>
        </group>
    );
}

const BitcoinCoinScene = () => {
    return (
        // <section className="relative bg-[#071014] py-12.5 rounded-4xl">
        <section className="relative bg-[#071014] py-12.5 rounded-4xl overflow-hidden bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('./images/bitcoin-bg-1.png')", }}
        >
            <div className="mx-auto w-50 h-50">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}
                    gl={{ antialias: true, alpha: true }}
                >
                    <fog attach="fog" args={["#ffae21", 7, 15]} />
                    <ambientLight intensity={2.4} />
                    <directionalLight position={[3, 3, 5]} intensity={2.8} />
                    <pointLight position={[-4, -2, 4]} intensity={2.2} color="#ffb12a" />
                    <pointLight position={[4, 2, -3]} intensity={1.2} color="#ffffff" />

                    <BitCoin1 />

                    <OrbitControls enableZoom={false} enablePan={false}
                        rotateSpeed={0.8} dampingFactor={0.08} enableDamping
                    />
                </Canvas>
            </div>
        </section>
    );
}

export default BitcoinCoinScene