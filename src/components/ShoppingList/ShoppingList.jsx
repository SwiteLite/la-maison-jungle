  import { plantList } from '../../datas/plantList'
  import styles from './Shopping.module.css'
  import PlantItem from '../PlantItem/PlantItem'

    const ShoppingList = ({cat, cart, updateCart}) => {


    const filteredPlants = plantList.filter((plant) =>
        cat === 'all' || plant.category === cat
      )

    const addToCart = (name, price) => {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <div >
            <ul className={styles.shoppingList}>
                {filteredPlants.map((plant) => (
                    <div
                     key={plant.id}
                     className={styles.plantItemContainer}
                     >
                    <PlantItem 
                        name={plant.name} 
                        cover={plant.cover} 
                        water={plant.water} 
                        light={plant.light} 
                        price={plant.price} 
                    />
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>{plant.price}€</span>
                      <button 
                        className={styles.cartAddButton} 
                        onClick={() => addToCart(plant.name, plant.price)}>
                        Ajouter
                      </button>
                    </div>
                    
                </div>
                ))}
            </ul>
        </div>
    )
  }


 
  export default ShoppingList