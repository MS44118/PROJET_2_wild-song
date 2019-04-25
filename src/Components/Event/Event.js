import React, { useState } from 'react';
import './Event.css';
import { Icon, Col, Row, Button, Offset } from 'react-materialize';

const Event = (props) => {

	//initialize hooks for change favorit's star
	const [favorite, setFavorite] = useState({star: true});
	//script for get distance between user and the even
	const financial = (x) => {
		return Number.parseFloat(x).toFixed(2);
	}
	const sqr = (a) => {
		return a*a;
	}
	const Distance = (x1, y1, x2, y2) => {
		return financial(Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1)))
	}
	
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
				<div className="offset-s4 col s3">
					<Button className="colorButton btn" onClick={() => setFavorite({star: !favorite.star})}>
						<Icon>{favorite.star ? 'star_border' : 'star'}</Icon>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Event;