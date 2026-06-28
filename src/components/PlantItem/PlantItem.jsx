import CareScale from '../CareScaler/CareScale'
import styles from './PlantItem.module.css'


const PlantItem = ({ name, cover, water, light, id, price }) => {
	
	return (
		<div className={styles.plantItemContainer}>
		<li key={id} className={styles.plantItem} >
			<img src={cover} alt={`${name} cover`} className={styles.plantItemCover} />
			<h4>{name}</h4>
			<div>	
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
		</div>
	)
}

const handleClick = (plantName,e) => {
	console.log(`✨ Ceci est un clic sur ${plantName} ✨`)
	console.log('✨ Ceci est mon event :',e)
  }


export default PlantItem