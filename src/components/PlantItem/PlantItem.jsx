const PlantItem = ({ name, cover, water, light, id }) => {
	
	return (
		<div>
			{name}
			<img src={cover} alt={`${name} cover`} />
		</div>
	)
}

export default PlantItem