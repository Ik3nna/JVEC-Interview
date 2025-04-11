import React from 'react'
import styles from "./index.module.css"
import Button from '@/component/button'
import Slider from '@/component/slider'
import { motion } from "framer-motion"
import { 
  offeringsArray, 
  sliderArray, 
  representArray, 
  certificationsArray, 
  trustArray, 
  partnerSlideArray
} from '@/data'
import { useNavigate } from 'react-router-dom'

// assets 
import heroSideImg from "@/assets/images/hero-sideImg.svg"
import gridlines from "@/assets/images/heroGridlines.svg"
import heroImg from "@/assets/images/hero-img.svg"
import zigzag from "@/assets/images/zigzag.svg"
import trustedImg from "@/assets/images/trustedImg.png"
import trustedBlur from "@/assets/images/trustedBlur.svg"
import representBlur from "@/assets/images/representBlur.svg"
import representGridlines from "@/assets/images/Grid radial.svg"
import consult from "@/assets/images/consult.svg"
import collaborate from "@/assets/images/collaborate.svg"
import delivery from "@/assets/images/delivery.svg"
import startedBlur from "@/assets/images/startedBlur.svg"
import startedBg from "@/assets/images/startedBg.svg"

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`)
  }

  return (
    <main className={styles.container}>
      <section className={styles.hero_container}>
        <article className={styles.hc1}>
          <img src={gridlines} alt="gridlines" />
          <div>Welcome to KeySystem</div>
          <h1>IT Consulting for Forward-thinking Businesses</h1>
          <h3> Driving Digital Transformation, One Solution at a Time</h3>
          <div className={styles.btn_container}>
            <Button children="Get Started" />

            <Button children="Learn More" onClick={()=>handleNavigation("about")} />
          </div>
          <img src={heroSideImg} alt="light" />
        </article>

        <article className={styles.hc2}>
          <p>3</p>
          <img src={zigzag} alt="zig-zag" />
          <img src={heroImg} alt="hero" />
        </article>

        <Slider 
          sliderArr={[...sliderArray, ...sliderArray, ...sliderArray]}
          slideWidth={188}
          imgHeight={75}
          imgClass={styles.hc3_img}
        />
      </section>

      <section className={styles.container2}>
        <article>
          <motion.h2 {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>Why we are  your Trusted Consultant</motion.h2>
          <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>Empowering Businesses with Cutting-edge Technology</motion.p>
          <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.6)}>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence 
            is the driving force behind our success. Excellence is our legacy, and we are 
            proud to carry it forward. 
          </motion.p>
        </article>

        <img src={trustedBlur} alt="light" />

        <article>
          <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>
            Watch the video to see how we are innovating to keep businesses on top of their games.
          </motion.p>
          <motion.img 
            {...defaultMotionProps}
            variants={fadeUpVariant} 
            transition={createTransition(1, 0.5)} 
            src={trustedImg} 
            alt="trusted" 
          />
        </article>
      </section>

      <section className={styles.container3}>
        <motion.h2 {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>Our Offerings</motion.h2>
        <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>
          Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored 
          software and cybersecurity solutions drive efficiency, security, and growth. We empower 
          businesses to thrive in the digital age 
        </motion.p>
        <MotionButton 
          children="Learn more"
          {...defaultMotionProps}
          variants={fadeUpVariant} 
          transition={createTransition(1, 0.6)}
          className={styles.learn_btn}
          onClick={()=>handleNavigation("services")}
        />
        <article>
          {offeringsArray.map((item)=>(
            <motion.img
              key={item}
              src={item}
              alt="offering"
              initial={{ y: 0, scale: 1 }}
              animate={{
                y: [0, -8, 0],        
                scale: [1, 1.02, 1],  
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2, 
              }}
            />
          ))}
        </article>
      </section>

      <section className={styles.container4}>
        <article>
          <motion.h3 {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>What we Represent</motion.h3>
          <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>
            Our relentless pursuit of excellence is the driving force behind our success
          </motion.p>
        </article>

        <article>
          <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.6)}>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is 
            the driving force behind our success. Excellence is our legacy, and we are proud 
            to carry it forward. Watch the video to see how we are innovating to keep businesses 
            on top of their games.
          </motion.p>

          <div>
            {representArray.map((item)=>(
              <motion.div key={item.id} {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>
                <img src={item.img} alt={item.header} />
                <img src={representBlur} alt="light" />
                <img src={representGridlines} alt="gridlines" />

                <div>
                  <h2>{item.header}</h2>
                  <p>{item.desc}</p>
                </div> 
              </motion.div>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.container5}>
        <motion.h2 {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>
          Compliance Certifications/<br />Standards We Specialize In
        </motion.h2>
        <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>
          Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services
        </motion.p>
        <MotionButton 
          children="Contact Us"
          {...defaultMotionProps}
          variants={fadeUpVariant} 
          transition={createTransition(1, 0.6)}
          className={styles.learn_btn}
          onClick={()=>handleNavigation("contact")}
        />
        <article>
          <div className={styles.cert_container}>
            {certificationsArray.map((item, index) => (
              <motion.img 
                key={index}
                src={item} 
                alt={`cert-${index}`}
                {...defaultMotionProps}
                variants={fadeUpVariant} 
                transition={createTransition(1, 0.3)}
              />
            ))}
          </div>

          <div>
            <motion.h2 {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>
              They Trust Us
            </motion.h2>
            <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>
              And so can you
            </motion.p>
            <div className={styles.trust_container}>
              {trustArray.map((item, index)=>(
                <motion.img 
                  key={index}
                  src={item} 
                  alt={`trust-${index}`} 
                  {...defaultMotionProps}
                  variants={fadeUpVariant} 
                  transition={createTransition(1, 0.3)}
                />
              ))}
            </div>
            
            <div className={styles.process}>
              <motion.h2 {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>
                Our Process
              </motion.h2>
              <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>
                At KeySystem, we leave you with a lasting impression
              </motion.p>
              <div className={styles.process_container}>
                <motion.div className={`${styles.cards} ${styles.consult}`} {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>
                  <div>
                    <h3>Strategic Consultation</h3>
                    <p>We kick off with a strategic consultation to understand your brand, goals, and audience</p>
                  </div>
                  <img src={consult} alt="consult" />
                </motion.div>

                <div>
                  <motion.div className={styles.cards} {...defaultMotionProps} variants={fadeLeftVariant} transition={createTransition(1, 0.6)}>
                    <div>
                      <h3>Collaboration</h3>
                      <p>
                        At KeySystem, we collaborate closely to ensure the end result meets your
                        expectations and makes you happy
                      </p>
                    </div>
                    <img src={collaborate} alt="collaborate" />
                  </motion.div>

                  <motion.div  className={styles.cards} variants={fadeRightVariant} {...defaultMotionProps} transition={createTransition(1, 0.6)}>
                    <div>
                      <h3>Delivery</h3>
                      <p>
                        Our delivery rate is 100%; our clients deserve nothing less.
                      </p>
                    </div>
                    <img src={delivery} alt="delivery" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.partners}>
            <motion.h2 {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>
              Our Partners
            </motion.h2>
            <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>
              Creating a Synergy with global brands
            </motion.p>
            <div>
              <div>
              <Slider 
                slideWidth={230.11}
                imgHeight={91.55}
                sliderArr={[
                  ...partnerSlideArray, 
                  ...partnerSlideArray,
                  ...partnerSlideArray
                ]}
              />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className={styles.container6}>
        <img src={startedBlur} alt="start-blur" />
        <div>
          <div>
            <motion.h1
              {...defaultMotionProps}
              variants={fadeUpVariant} 
              transition={createTransition(1, 0.2)}
            >
              Ready to get started?
            </motion.h1>
            <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.3)}>Shoot us a Mail</motion.p>
            <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.4)}>
              Join numerous corporations, organizations, and businesses as they scale their teams, 
              tap into new market opportunities and build innovative products with KeySystem Technology
            </motion.p>
            <motion.p {...defaultMotionProps} variants={fadeUpVariant} transition={createTransition(1, 0.5)}>
              Join thousands of students who are ready to learn new skills or take their career to the 
              next level by enrolling in one of our training programs today.
            </motion.p>
            <MotionButton 
              children="Send Us a Mail Now"
              {...defaultMotionProps}
              variants={fadeUpVariant} 
              transition={createTransition(1, 0.6)}
              className={styles.learn_btn}
            />
          </div>

          <img src={startedBg} alt="started-bg" />
        </div>
      </section>
    </main>
  )
}

export default Home

const MotionButton = motion(Button);

const defaultMotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

const createTransition = (duration: number, delay: number) => ({
  duration,
  delay,
  ease: "easeOut"
});
