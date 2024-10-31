import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='relative pt-20'>
            <Image
                className="absolute w-full rotate-180 h-auto"
                src="/footer-grille.webp"
                width={1000}
                height={800}
                alt="Footer Mark"
                loading="lazy"
            />
            <Image
                className="m-auto pt-24"
                src="/logo-green.png"
                width={500}
                height={128}
                alt="Footer Mark"
                loading="lazy"
            />
            <div className='flex gap-32 p-8 container'>

                <div className='flex flex-col gap-6'>
                    <h4>Service Client</h4>
                    <p>
                        Contactez-nous par voie postale Markbook Service Client<br />
                        Rue des Éveillés, BP 1984.
                    </p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h4>CGU</h4>
                    <p>
                        Découvrez nos termes en toute transparence et sans surveillance.
                    </p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h4>Livraison</h4>
                    <p>Livraison uniquement en point relais.</p>
                </div>
                <div className='flex flex-col gap-6 '>
                    <div>
                        <h4>Réseaux sociaux</h4>
                        <p>(Suivez-nous discrètement)</p>
                    </div>
                    <div className='flex gap-5'>
                        <Image src="/rs-1.png" width={22} height={22} alt="Réseaux sociaux" />
                        <Image src="/rs-2.png" width={22} height={22} alt="Réseaux sociaux" />
                        <Image src="/rs-3.png" width={22} height={22} alt="Réseaux sociaux" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
