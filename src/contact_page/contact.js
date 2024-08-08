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