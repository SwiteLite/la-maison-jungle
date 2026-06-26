import styles from './Categories.module.css'

const Categories = ({selectCat,  categoriesList}) => {
    
	return (
        <div className={styles.categories}>	
            <select onChange={(e) => selectCat(e.target.value)}
                className={styles.categoriesSelect}>
                <option value="all">Tout</option>
                {categoriesList.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
	)
}


export default Categories