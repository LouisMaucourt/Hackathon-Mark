import React from 'react'

const VideoThree = () => {
    return (
        <section className='video relative' id="presentation">
            <video
                className=' absolute top-0 left-0 w-full h-5/6 '
                src="/ouverture-black.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className='container h-screen flex flex-col justify-end  '>
                <div className='flex flex-col items-baseline pb-20 z-10'>
                    <h3>Markbook</h3>
                    <div className='flex justify-between items-center w-full'>
                        <h1>A contre courant.</h1>
                        <h3>Prix 00000</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoThree
