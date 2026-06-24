import styles from './Banner.module.css'
import logo from '../../assets/logo.png'

const Banner = () => {
    const title = 'La maison jungle'
    return(
        <div className={styles.banner}>
            <img 
                src={logo} 
                alt="logo de la maison jungle" 
                className={styles.bannerLogo} 
            />
            <h1 className={styles.title}>{title}</h1>
        </div>
    ) 
}
  
export default Banner
  