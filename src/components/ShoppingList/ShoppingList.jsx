  import { plantList } from '../../datas/plantList'
  import styles from './Shopping.module.css'
  import CareScale from '../CareScaler/CareScale'
  import PlantItem from '../PlantItem/PlantItem'

  function ShoppingList() {


    const categories = plantList.reduce(
      (acc, plantList) => acc.includes(plantList.category) ? acc : acc.concat(plantList.category), []
    )
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className={styles.plantList}>
                {plantList.map((plant) => (

                    <PlantItem name={plant.name} cover={plant.cover} water={plant.water} light={plant.light} id={plant.id} />
                    {/*<li key={plant.id} className={styles.plantItem}>
                        {plant.isBestSale && plant.category === "classique" && <span>🔥 </span>}
                        {plant.name} 
                        <CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
                    </li>*/}
                ))}
            </ul>
        </div>
    )
  }


 
  
  
  export default ShoppingList