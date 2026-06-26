import sun from '../../assets/sun.svg'
import water from '../../assets/water.svg'

const CareScale = ({ scaleValue, careType }) => {
	const range = [1, 2, 3]
	

	const scaleType = careType === 'light' ? <img src={sun} alt="sun" /> : <img src={water} alt="water" />

	return (
		<div>
			
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span 
						key={rangeElem.toString()}
					    onClick={(e) => handleClick(careType,rangeElem,e)}>{scaleType}
					 </span>
				) : null
			)}
		</div>
	)

}

const handleClick = (careType,rangeElem,e) => {
	const message = ['peu','modérément','beaucoup']
	const textType = ['de lumière','d\'arossage']
	

	console.log('CareType :', careType, 'RangeElem :', rangeElem)
	alert(
		`Cette plante requiert ${message[rangeElem - 1]} ${textType[careType === 'light' ? 0 : 1]}`)
	
		
}

export default CareScale