import { useState, useEffect} from 'react'
import styles from './Cart.module.css'


const Cart = ({cart, updateCart}) => {
  const [isOpen, setIsOpen] = useState(true)

	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className={styles.cart}>
			<button
				className={styles.cartButton}
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>

			{cart.length > 0 ? (
				<>
					<h2 className={styles.title}>Panier</h2>
					<ul className={styles.list}>
						{cart.map(({ name, price, amount }, index) => (
							<li className={styles.cartItem} key={`${name}-${index}`}>
								{name} {price}€ × {amount}
							</li>
						))}
					</ul>
					<p className={styles.total}>Total : {total}€</p>
					<button
						className={styles.cartButton}
						onClick={() => updateCart([])}
					>
						Vider le panier
					</button>
				</>
			) : (
				<p className={styles.empty}>Votre panier est vide</p>
			)}
		</div>
	) : (
		<div className={styles.cartClosed}>
			<button
				className={styles.cartButton}
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
