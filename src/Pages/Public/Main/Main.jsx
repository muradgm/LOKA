import { useState, useEffect, useRef, useContext } from 'react'
import { AnimationContext } from '../../../contexts/AnimationContext'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import './main.scss'

import '../../../../src/app.scss'

import Logo from '../../../assets/pngLogo.png'

gsap.registerPlugin(ScrollTrigger)


const Main = () => {
  const { isEnded, show } = useContext(AnimationContext)

  const [pDuration, setPDuration] = useState(0)


  const overlayRef = useRef(null)
  const imageRef = useRef(null)
  const sloganRef = useRef(null)

  const videosRef = useRef([])
  videosRef.current = []


  console.log(pDuration)


  console.log("pDuration >>", pDuration)
  console.log("isEnded >>", isEnded)

  //Main page gsap timeline
  const handleCanPlay = () => {
    const tl = gsap.timeline()
      tl.to(overlayRef.current, {
        duration: 1,
        opacity: 1,
        backgroundColor: `#000000`,
        ease: 'power2.inOut'
      })
      .to(imageRef.current, {
        y: 0,
        duration: 0.8,
        opacity: 1,
        ease: 'power2.inOut'
      })
      .to(sloganRef.current, {
        y: 0,

        duration: 0.8,
        ease: 'power2.inOut'
      })
    
  }

    //firing animations
  useEffect(() => {
    handleCanPlay()

  }, [])


  //revealing promo sections and promo video onscroll animation
  useEffect(() => {

      videosRef.current.forEach(video => {
        ScrollTrigger.create({
          trigger: video,
          start: 'top 70%',
          end: 'bottom 30%',
          onEnter: () => video.play(),
          onEnterBack: () => video.play(),
          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause()
        })
      })

  }, [])
  
  //adding promo videos to an array for ScrollTrigger
    const addToRefs = (el) => {
      videosRef.current.push(el)  
    console.log(videosRef.current);
    }


  return (
    <>
        <section className="cta-container">
      <div className="cta-wrapper" ref={overlayRef}>
        <div className="cta-content">
          <img ref={imageRef} src={Logo} alt="LOKA" className='logo' />
          <div  className="slogan">
            <h1 ref={sloganRef}>
              Lokalisieren
            </h1>
          </div>
        </div>
      </div>

      </section>
            <section className="promo-vid-container">
              <div className="promo-vid-overlay">
                <div className="promo-vid-overlay-content">
                  <h1 className="overlay-content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est necessitatibus soluta ipsam sunt nesciunt repudiandae velit architecto, a sapiente.
                  </h1>
                </div>
              </div>
              <div className="promo-video-wrapper">
                <video ref={addToRefs} src={process.env.PUBLIC_URL + "/landingVideos/strawberries.webm"} playsInline muted loop/>
              </div>
            </section>
            <section className="promo-vid-container">
              <div className="promo-vid-overlay">
                <div className="promo-vid-overlay-content">
                  <h1 className="overlay-content-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est necessitatibus soluta ipsam sunt nesciunt repudiandae velit architecto, a sapiente.
                  </h1>
                </div>
              </div>
              <div className="promo-video-wrapper">
                <video ref={addToRefs} src={process.env.PUBLIC_URL + "/landingVideos/lemons.webm"} playsInline muted loop/>
              </div>
            </section>
    </> 
  )
}

export default Main
