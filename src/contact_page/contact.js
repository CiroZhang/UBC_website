import styles from "./contact.module.css";


function Contacts() {
  return (
    <>
      <div className={styles.contactsCard}>
        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>Office</a>
          <a className={styles.contactsDescription}>Room 3225 - 600 West 10th
            Avenue, Vancouver, BC 
            </a>
    
        </div>

        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>LINKS</a>
          <a className={styles.contactsDescription}>CAP</a>
          <a className={styles.contactsDescription}>USCAP</a>
        </div>

          <div className={styles.contactSection}>
            <a className={styles.contactsTitle}>PAGES</a>
          <a className={styles.contactsDescription}>About</a>
          <a className={styles.contactsDescription}>Rapid</a>
          <a className={styles.contactsDescription}>Expert</a>
          <a className={styles.contactsDescription}>Diagnosis</a>
          <a className={styles.contactsDescription}>Contact</a>
        </div>

        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>CONTACT</a>

          <div className={styles.contacts}>
            
            <h4 className={styles.contactsDescription}>(604)7282258</h4>
          </div>

          <div className={styles.contacts}>
         
            <h4 className={styles.contactsDescription}>example@gmail.com</h4>
          </div>


    
        </div>
      </div>
    </>
  );
}

export default Contacts;