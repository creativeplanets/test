import marquee from '../styles/Marquee.module.css'

export default function Marquee() {
    return (
        <div className={marquee.container}>
            <p className={marquee.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie ligula. 
            </p>
            <p className={marquee.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie ligula. 
            </p>
        </div>
    )
  }
  