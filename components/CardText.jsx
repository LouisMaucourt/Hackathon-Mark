import React from 'react';

const Cardtext = () => {
    return (
        <section className='container'>
            <h3 className='mb-10'>Demark’ez vous des autres avec Markbook.</h3>
            <div className='flex gap-8'>
                <div className='border bg-[#252723] border-[var(--f-color)] p-4 flex flex-col gap-4 rounded-2xl w-1/3' >
                    <h4>Technologie de pointe anti-système</h4>
                    <p>Pas de Wi-Fi, pas de surveillance ! Avec le Markbook, vous naviguez dans l&apos;ombre.</p>
                </div>
                <div className='border bg-[#252723] border-[var(--f-color)] p-4 flex flex-col gap-4 rounded-2xl w-1/3'>
                    <h4>Navigateur TOR intégré</h4>
                    <p>Explorez le web en toute sécurité. Avec TOR, votre vie privée est protégée contre les regards indiscrets.</p>
                </div>
                <div className='border bg-[#252723] border-[var(--f-color)] p-4 flex flex-col gap-4 rounded-2xl w-1/3' >
                    <h4>Clavier ergonomique, sans messages subliminaux</h4>
                    <p>Écrivez librement avec un clavier traditionnel. Ici, chaque touche compte, sans influence extérieure. Vous êtes maître de vos mots. </p>
                </div>
            </div>
        </section >
    )
}

export default Cardtext;
