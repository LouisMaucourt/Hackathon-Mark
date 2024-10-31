import React from 'react'
import RadialColor from '../components/assets/RadialColor'
import WriteText from '../components/assets/WriteText'
const Video = () => {
    return (
        <section className='video' id="presentation">
            {/* <RadialColor color="orange" bottom="100px" left="50px" /> */}
            <video
                className=' absolute top-0 left-0 w-full h-5/6 '
                src="/ouverture-black.mp4"
                autoPlay
                loop
                muted
                playsInline

            />
            <div className='container h-screen flex flex-col justify-start  '>
                <div className='flex flex-col items-baseline pb-20 z-10'>
                    <div className='flex justify-between items-center w-full'>
                        <div>
                            <WriteText
                                normalText="A contre"
                                animatedText="courant."
                                className="text-7xl"
                            />
                            <h3>MarkBook</h3>
                        </div>

                        <h3>Prix 00000</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
