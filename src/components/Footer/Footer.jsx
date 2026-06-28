import { useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {

	const [inputValue, setInputValue] = useState('')


    const handleBlur = (value) => {
        if (!value.includes('@')){
            alert(`Attention, "${value}" ne contient pas le caractère "@",  ceci n'est pas une adresse valide. `)   
        }
        
    }

	return (
		<footer className={styles.footer}>
			<div className={styles.footerElem}>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>

			<div className={styles.footerElem} >Laissez-nous votre mail :</div>
            <input 
                type='text' 
                placeholder='Entrez votre mail'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                onBlur={()=>handleBlur(inputValue)}/>
            <button 
            className={styles.sendMailButton}
            onClick={() => alert(inputValue)}>
                Envoyer 🚨</button>
		</footer>
	)
}

export default Footer
