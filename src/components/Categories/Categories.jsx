import styles from './Categories.module.css'

const Categories = ({selectCat,  categoriesList}) => {
    
	return (
        <div className={styles.categories}>	

        <label htmlFor="categories">Filtrer par catégorie : </label>
            <select 
                onChange={(e) => selectCat(e.target.value)}
                id="categories"
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