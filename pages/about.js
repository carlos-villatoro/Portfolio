import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About(){
    return (
        <div>
            <h1>About</h1>

            <p className={[styles.extraGreen, styles.bigFont].join(' ')}>I'm a programmer, much wow</p>
            
            <div>
                <style jsx>{`
                    .orangeText {
                        color: yellow;
                    }

                    p{
                        font-size: 70px
                    }
                `}</style>
                <p className="orangeText">i want to play apex right now</p>

            </div>

            {/* loading an image locally */}
            <Image 
                // assumes you are in the public folder
                src='/selfie.jpeg'
                alt = 'myself'
                width={900}
                height={1600}
            />
            <Image 
                src='https://placekitten.com/300/300'
                alt='a kitten'
                width={300}
                height={300}
            />
        </div>
    )
}