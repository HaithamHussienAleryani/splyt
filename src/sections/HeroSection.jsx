

const HeroSection = () => {
  return (
    <section className='bg-main-bg'>
        <div className='hero-container'>
            <img src="/images/static-img.png" alt="hero-image" className="absolute start-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150 bottom-0" />
            <div className="hero-content">
                <div className="overflow-hidden">
                    <h1 className="hero-title">Freaking delicious</h1>
                </div>
                <div style={{
                     clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'
                }} className="hero-text-scroll">
                    <div className="hero-subtitle">
  <h1 >Protien + Caffine</h1>
                    </div>
                  
                </div>
                     <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores voluptatums </h2>
                     <div className="hero-button">
                        <p>check splyt</p>
                     </div>
            </div>
       
        </div>
    </section>
  )
}

export default HeroSection