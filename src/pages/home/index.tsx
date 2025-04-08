import React from 'react'
import styles from "./index.module.css"
import Button from '@/component/button'
import Slider from '@/component/slider'
import { motion } from "framer-motion"
import { offeringsArray, sliderArray, representArray } from '@/data'

// assets 
import heroSideImg from "@/assets/images/hero-sideImg.svg"
import gridlines from "@/assets/images/heroGridlines.svg"
import heroImg from "@/assets/images/hero-img.svg"
import zigzag from "@/assets/images/zigzag.svg"
import trustedImg from "@/assets/images/trustedImg.png"
import trustedBlur from "@/assets/images/trustedBlur.svg"
import representBlur from "@/assets/images/representBlur.svg"
import representGridlines from "@/assets/images/Grid radial.svg"

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero_container}>
        <article className={styles.hc1}>
          <img src={gridlines} alt="gridlines" />
          <div>Welcome to KeySystem</div>
          <h1>IT Consulting for Forward-thinking Businesses</h1>
          <h3> Driving Digital Transformation, One Solution at a Time</h3>
          <div className={styles.btn_container}>
            <Button content="Get Started" />

            <Button content="Learn More" />
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

      <motion.section className={styles.container2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.article variants={fadeUpVariant} transition={createTransition(1, 0)}>
          <motion.h2 variants={fadeUpVariant} transition={createTransition(1, 0.3)}>Why we are  your Trusted Consultant</motion.h2>
          <motion.p variants={fadeUpVariant} transition={createTransition(1, 0.6)}>Empowering Businesses with Cutting-edge Technology</motion.p>
          <motion.p variants={fadeUpVariant} transition={createTransition(1, 0.9)}>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence 
            is the driving force behind our success. Excellence is our legacy, and we are 
            proud to carry it forward. 
          </motion.p>
        </motion.article>

        <img src={trustedBlur} alt="light" />

        <motion.article variants={fadeUpVariant} transition={createTransition(1, 1.2)}>
          <motion.p variants={fadeUpVariant} transition={createTransition(1, 1.5)}>
            Watch the video to see how we are innovating to keep businesses on top of their games.
          </motion.p>
          <motion.img 
            variants={fadeUpVariant} 
            transition={createTransition(1, 1.8)} 
            src={trustedImg} 
            alt="trusted" 
          />
        </motion.article>
      </motion.section>

      <motion.section className={styles.container3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUpVariant} transition={createTransition(1, 0.3)}>Our Offerings</motion.h2>
        <motion.p variants={fadeUpVariant} transition={createTransition(1, 0.6)}>
          Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored 
          software and cybersecurity solutions drive efficiency, security, and growth. We empower 
          businesses to thrive in the digital age 
        </motion.p>
        <MotionButton 
          content="Learn more"
          variants={fadeUpVariant} 
          transition={createTransition(1, 0.9)}
          className={styles.learn_btn}
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
      </motion.section>

      <motion.section className={styles.container4} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.article variants={fadeUpVariant} transition={createTransition(1, 0)}>
          <motion.h3 variants={fadeUpVariant} transition={createTransition(1, 0.3)}>What we Represent</motion.h3>
          <motion.p variants={fadeUpVariant} transition={createTransition(1, 0.6)}>
            Our relentless pursuit of excellence is the driving force behind our success
          </motion.p>
        </motion.article>

        <motion.article variants={fadeUpVariant} transition={createTransition(1, 0.9)}>
          <motion.p variants={fadeUpVariant} transition={createTransition(1, 1.2)}>
            Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is 
            the driving force behind our success. Excellence is our legacy, and we are proud 
            to carry it forward. Watch the video to see how we are innovating to keep businesses 
            on top of their games.
          </motion.p>

          <motion.div variants={fadeUpVariant} transition={createTransition(1, 1.5)}>
            {representArray.map((item)=>(
              <motion.div key={item.id} variants={fadeUpVariant} transition={createTransition(1, 1.8)}>
                <img src={item.img} alt={item.header} />
                <img src={representBlur} alt="light" />
                <img src={representGridlines} alt="gridlines" />

                <div>
                  <h2>{item.header}</h2>
                  <p>{item.desc}</p>
                </div> 
              </motion.div>
            ))}
          </motion.div>
        </motion.article>
      </motion.section>

      <motion.section>
        ujdkjk
      </motion.section>
    </main>
  )
}

export default Home

const MotionButton = motion(Button);

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const createTransition = (duration: number, delay: number) => ({
  duration,
  delay,
  ease: "easeOut"
});