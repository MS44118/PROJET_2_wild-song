import React, { useState } from 'react';
import './Event.css';
import { Icon, Button } from 'react-materialize';

const Event = (props) => {

	//initialize hooks for change favorit's star
	const [favorite, setFavorite] = useState({ star:  props.star ? props.star : false });
	//script for get distance between user and the even
	const financial = (x) => {
		return Number.parseFloat(x).toFixed(2);
	}
	const sqr = (a) => {
		return a * a;
	}
	const Distance = (x1, y1, x2, y2) => {
		return financial(Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1)))
	}

	let favorisArray =[]
	let objetFavorieJSON = { // creation de l'objet json pour stocker l'event
		title: props.title,
		image: props.image,
		address1: props.address1,
		address2: props.address2,
		date: props.date,
		time: props.time,
		reserveLink: props.reserveLink,
		star: favorite,
		lat: props.lat,
		lng: props.lng,
		eventLat: props.eventLat,
		eventLng: props.eventLng,
	}
	// let favorisItem = JSON.stringify(objetFavorieJSON); // transforme objFavorieJson en string json 
	// localStorage.setItem('favoris', favorisItem);//stock favorisItem avec pour clé d'appelle "favoris"
	// favorisItem = localStorage.getItem("favoris");// recupere favorisItem via l'appelle de la clé
	// let favorisJSON = JSON.parse(favorisItem); // transforme la stringJSON favorisItem en objJSON
	const addFavorite = () => { // fonction pour ajouter les favoris dans le localStorage si le click du bouton est true
		if (localStorage.getItem('favoris')) {
			favorisArray = JSON.parse(localStorage.getItem('favoris'))
			// test if favorisArray contains a value if yes add the valus in favorisArray
		}
		if (favorite.star === false){
			favorisArray.push(objetFavorieJSON);
			localStorage.setItem('favoris', JSON.stringify(favorisArray))
			// add favorite
		} else {
			let indexFavDelete = favorisArray.findIndex(fav => fav.reserveLink === objetFavorieJSON.reserveLink);
			favorisArray.splice(indexFavDelete, 1)
			localStorage.setItem('favoris', JSON.stringify(favorisArray))
			//delete favorite
		}
	};

	//structure of the event
	return (
		<div className="container-fluid separate">
			<div className="row">
				<div className="col s12 m9 mt-2">
					<h5>{props.title}</h5>
					<p><Icon tiny>location_on</Icon> {props.address1 === 'Unknown venue' ? props.address2 : `${props.address1} (${props.address2})`}</p>
					<p>Distance : {Distance(props.lat, props.lng, props.eventLat, props.eventLng)} km</p>
					<p>Date : {props.date} {props.time ? `- ${props.time}` : ''}</p>
				</div>
				<div className="offset-s2 col s8 m3 marge">
					<img className="sizePic" src={`https://images.sk-static.com/images/media/profile_images/artists/${props.image}/huge_avatar`} alt="pic of event"></img>
				</div>
			</div>
			<div className="row">
				<div className="col s5">
					<Button className="colorButton btn" node="a" href={props.reserveLink} target="blank">
						Reserver
					</Button>
				</div>
				<div className="offset-s2 col s3">
					<Button className="colorButton btn" onClick={() => {setFavorite({star: !favorite.star})
					 addFavorite()}} href="#">
						<Icon>{favorite.star ? 'star'  : 'star_border'}</Icon>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Event;