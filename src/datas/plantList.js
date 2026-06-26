import monstera from '../assets/monstera.jpg'
import ficus from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import olivier from '../assets/olivier.jpg'
import calathea from '../assets/calathea.jpg'
import basil from '../assets/basil.jpg'
import aloe from '../assets/cactus.jpg'
import succulent from '../assets/succulent.jpg'
import mint from '../assets/mint.jpg'


export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
        isSpecialOffer: true,
        light: 2,
		water: 3,
		cover: monstera,
		price : 15
        
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: true,
        isSpecialOffer: true,
        light: 3,
		water: 1,
		cover: ficus,
		price : 10
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
        isSpecialOffer: false,
        light: 1,
		water: 2,
		cover: pothos,
		price : 12
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale: false,   
        isSpecialOffer: false,
        light: 3,
		water: 1,
		cover: mint,
		price : 25
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale: false,
        isSpecialOffer: false,
        light: 3,
		water: 1,
		cover: olivier,
		price : 10
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        isBestSale: true,
        isSpecialOffer: false,
        light: 2,
		water: 2,
		cover: calathea,
		price : 9
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: false,  
        isSpecialOffer: true,
        light: 2,
		water: 3,
		cover: basil,
		price : 10
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: true,
        isSpecialOffer: false,
        light: 2,
		water: 1,	
		cover: aloe,
		price : 10
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale: true,
        isSpecialOffer: false,  
        light: 1,
		water: 1,				
		cover: succulent,
		price : 8
	}
]