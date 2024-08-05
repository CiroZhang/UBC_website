import styles from "./about.module.css"
import image from "../assets/aboutCancer.png"

function about() {
    return(
        <>
            <div className = {styles.aboutBackground}> 
                <div className = {styles.title}>

                <h2 className = {styles.aboutTitle}> About us</h2>
                </div>
                
                    <div className = {styles.aboutCard}>
                        <div className = {styles.sub}>
                            <h3 className = {styles.about}> Primary diagnosis</h3>
                            <h3 className = {styles.about}> Consultation</h3>
                            <h3 className = {styles.about}> Biomarker testing</h3>
                            <h3 className = {styles.about}>  Clinical trial</h3>
                            <h3 className = {styles.about}> AI Training</h3>
                            <h3 className = {styles.about}> Pathology quality assurance</h3>
                        </div>
                        <img src = {image} className = {styles.image}/>
                        
                    </div>   
            </div>   
        </>

    )

}

export default about;