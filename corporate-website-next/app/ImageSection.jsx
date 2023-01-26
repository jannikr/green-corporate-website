import styles from './ImageSection.module.css'
import Image from "next/image";

const ImageSection = (props) => {

    const imageIsLeft = props.imageIsLeft
    const image = props.imageSrc

    return (
        <div className={styles.imageSectionWrapper}>
            <section className="page-content">
                <div className={`${styles.container} container`}>
                    {props.imageIsLeft && <div>
                        <Image src={props.imageSrc}
                               alt="Logo"
                               className={`${styles.imageSection} ${styles.imageSectionLeft}`}
                               width={450}
                               height={200}
                               priority
                        />
                    </div>}
                    <div className={styles.sectionText}>
                        <h1>Creative Solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    {!props.imageIsLeft && <div>
                        <Image src={props.imageSrc}
                               alt="Logo"
                               className={`${styles.imageSection} ${styles.imageSectionRight}`}
                               width={450}
                               height={200}
                               priority
                        />
                    </div>}
                </div>
            </section>
        </div>
    );

}

export default ImageSection