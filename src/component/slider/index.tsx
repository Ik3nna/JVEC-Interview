import React from 'react'
import styles from "./index.module.css"
import { SliderProps } from '../componentType'

const Slider: React.FC<SliderProps> = ({ sliderArr, slideWidth, imgHeight, imgClass }) => {
    const styleVars = {
        '--slide-width': `${slideWidth}px`,
        '--slide-height': `${imgHeight}px`,
        '--total-width': `${slideWidth * sliderArr.length}px`,
        '--scroll-amount': `${-slideWidth * (sliderArr.length / 2)}px`
      } as React.CSSProperties;

    return (
        <div className={styles.slider} style={styleVars}>
            <div className={styles.slideTrack}>
                {sliderArr.map((item, index)=>(
                    <div key={index} className={styles.slide}>
                        <img src={item} className={imgClass} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider