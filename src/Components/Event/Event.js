import React, { useState } from 'react';
import './Event.css';
import { Icon, Button,} from 'react-materialize';

const Event = (props) => {

	const [otherClass, setOtherClass] = useState({key: true});
	const [favorite, setFavorite] = useState({star: false});
	let objetFavorieJSON = { // creation de l'objet json pour stocker l'event
		title: props.title,
		image: props.image,
		address1: props.address1,
		address2: props.address2,
		date: props.date,
		time: props.time,
		reserveLink: props.reserveLink,

	}//																AIDE APPRENTISSAGE LOCALSTORAGE 
	// let favorisItem = JSON.stringify(objetFavorieJSON); // transforme objFavorieJson en string json qui stock dans favorisItem
	// localStorage.setItem('favoris', favorisItem);//stock dans le localStorage favorisItem avec pour clé d'appelle "favoris"
	// favorisItem = localStorage.getItem("favoris");// recupere favorisItem dans le localStorage via l'appelle de la clé
	// let favorisJSON = JSON.parse(favorisItem); // transforme la stringJSON favorisItem en objJSON



	const addFavorite = () => { // fonction pour ajouter les favoris dans le localStorage au click du boutton
		let favorisArray = []; //tableau ou tous les favoris sont stocker 
		if (localStorage.getItem('favoris')) { // si localStorage contient une valeur favoris
			favorisArray = JSON.parse(localStorage.getItem('favoris'))//stock le favoris dans le tableau
		}
		// if (favorite.star === false){// si le bouton est false ajoute le dans le tableau sinon delete le favoris du localStorage
		// 	// if (favorisArray.include(localStorage.setItem('favoris', JSON.stringify(favorisArray)))){
		// 	// 		// le nouveau favoris est inclus dans le tableau alors ne fais rie
		// 	// 		// ne fais rien du tous 
		// 	// }else{
		// 		localStorage.setItem('favoris', JSON.stringify(favorisArray))
		// 		favorisArray.push(objetFavorieJSON);
		// 	// }
		// }else{
		// 	localStorage.removeItem("favoris");
		localStorage.setItem('favoris', JSON.stringify(favorisArray))
		favorisArray.push(objetFavorieJSON);
		}




		// favorisArray.push(objetFavorieJSON);
		// localStorage.setItem('favoris', JSON.stringify(favorisArray))


		// if (favorite.star === false ){
		// 	let favorisItem = JSON.stringify(objetFavorieJSON);
		// 	localStorage.setItem('favoris', favorisItem);
		// 	tableauFav.push(favorisItem);



		// 	// a remplire 
		// } if (favorite.star === true){ // retire l'object du local storal si il y est deja stocker
		//  // a remplire
		// }
	// };

	return (
		<div className="container separate">
			<div className="row">
				<div className="col s4 marge">
					<img src={`https://images.sk-static.com/images/media/profile_images/artists/${props.image}/huge_avatar`} alt="pic of event"></img>
					<p>9.6km</p>
					<p>{props.date} - {props.time}</p>
				</div>
				<div className="col s8 mt-2">
					<h5>{props.title}</h5>
					<p><Icon tiny>location_on</Icon> {props.address1} ({props.address2})</p>
					<p className={otherClass['key'] ? "less" : ""}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
						Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim
							est eleifend mi, non fermentum diam nisl sit amet erat. </p>
				</div>
			</div>
			<div className="row">
				<div className="col s5">
					<Button className="light-blue accent-2 btn" node="a" href={props.reserveLink} target="blank">
						Reserver
					</Button>
				</div>
				<div className="col s2">
					<Button className="light-blue accent-2 btn" onClick={() => setOtherClass({key: !otherClass.key})}>
						<Icon>{otherClass['key'] ? "expand_more" : "expand_less"}</Icon>
					</Button>
				</div>
				<div className="offset-s2 col s3">
					<Button className="light-blue accent-2 btn" onClick={() => {
																																setFavorite({star: !favorite.star}) 
																																addFavorite()
																																}}
																											href="#">
						<Icon>{favorite.star ? 'star'  : 'star_border'}</Icon>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Event;