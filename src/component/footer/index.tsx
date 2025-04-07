import React from 'react'
import styles from "./index.module.css"
import Container from '../container'

// assets 
import logo from "@/assets/icons/logo.svg"
import ig from "@/assets/icons/instagram.svg"
import twitter from "@/assets/icons/twitter.svg"
import linkedIn from "@/assets/icons/linkedIn.svg"
import fb from "@/assets/icons/facebook.svg"

const Footer: React.FC = () => {
  const maxLength = Math.max(servicesArr[0].length, servicesArr[1].length);

  return (
    <footer className={styles.footer}>
      <Container width='medium' className={styles.container}>
        <section>
          <div>
            <img src={logo} alt="logo" className={styles.logo} />
            <p>&copy; {new Date().getFullYear()} KeySystem Technology Limited. All rights reserved.</p>
          </div>

          <div className={styles.service_container}>
            <h5>Services</h5>

            {Array.from({ length: maxLength }).map((_, index) => (
              <div key={index} className={styles.service_row}>
                <p>{servicesArr[0][index]}</p>
                <p>{servicesArr[1][index]}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div>
            <h5>quick links</h5>

            <div>
              <p>About Us</p>
              <p>Sitemap</p>
            </div>
          </div>

          <div className={styles.service_container}>
            <h5>contact</h5>

            <div className={styles.service_row}>
              <div>
                <h6>Nigeria</h6>
                <p>55G Adebisi Omotola Close, Off Samuel Adedoyin Street, Victoria Island</p>
              </div>

              <div>
                <h6>United Kingdom</h6>
                <p>39 Kenyon Lane, Off Moston Lane,Moston, Manchester, United Kingdom, M40 9JG</p>
              </div>
            </div>

            <div className={styles.service_row}>
              {contactArr.map((item)=>(
                <div>
                  <h6>{item.country}</h6>
                  <p>Tel: {item.tel}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sm_container}>
          <div>
            {socialIcons.map((item)=>(
              <img src={item} alt="social-media" />
            ))}
          </div>

          <div className={styles.service_container}>
            <div>
              <h6>Nigeria</h6>
              <p>Tel: +234 818 444 1404</p>
            </div>

            <div>
              <h6>Email</h6>
              <a href='mailto: enquiries@keysystemltd.com'>enquiries@keysystemltd.com</a>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  )
}

export default Footer

const servicesArr = [
  [
    "Core refresh", "Application management services", "Evolution & enhancement services",
    "Solution Assurance & validation", "Digital Banking & financial inclusion",
    "Online/mobile lending solution"
  ],
  [
    "Staff augmentation solutions", "Risk management & Internal audit solutions", 
    "Data Warehouse & Business Intelligence (BI)", "Enterprise Document Management Solutions",
    "KeySystem software testing", "Cybersecurity Solutions"
  ]
]

const contactArr = [
  {
    country: "United Kingdom",
    tel: "+44 161 948 1444"
  }, 
  {
    country: "United Arab Emirates",
    tel: "+971 50 423 8817"
  },
  {
    country: "Canada",
    tel: "+1 647 977 1435"
  }
]

const socialIcons = [
  ig, twitter, linkedIn, fb
]