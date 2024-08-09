import styles from "./contact.module.css";


function Contacts() {
  return (
    <>
      <div className={styles.contactsCard}>
        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>Office</a>
          <a 
          href="https://www.google.com/maps/place/600+W+10th+Ave,+Vancouver,+BC+V5Z+4E6,+Canada"
          target="_blank" 
          rel="noopener noreferrer"
  
          className={styles.contactsDescription}>Room 3225 - 600 West 10th
            Avenue, Vancouver, BC 
            </a>
    
        </div>

        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>LINKS</a>
          <a 
          href="https://www.google.com" 
          target="_blank" 
          rel="noopener noreferrer"

          className={styles.contactsDescription}>CAP</a>


          <a
          href="https://www.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          
          className={styles.contactsDescription}>USCAP</a>
        </div>

        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>CONTACT</a>

          <div className={styles.contactSection}>
            
            <a className={styles.contactsDescription}>(604)7282258</a>
            <a className={styles.contactsDescription}>example@gmail.com</a>
          </div>


    
        </div>
      </div>
    </>
  );
}

export default Contacts;