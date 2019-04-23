import React, { useState } from 'react';
import './Event.css';
import { Icon, Col, Row, Button, Offset } from 'react-materialize';

const Event = (props) => {

	const [otherClass, setOtherClass] = useState({key: true});
	const [favorite, setFavorite] = useState({star: true});

	return (
		<div className="container separate">
			<div className="row">
				<div className="col s4 marge">
					<img className="imgEvent" src={`https://images.sk-static.com/images/media/profile_images/artists/${props.image}/huge_avatar`} alt="pic of event"></img>
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
					<Button className="light-blue accent-2 btn" onClick={() => setFavorite({star: !favorite.star})} href="#">
						<Icon>{favorite.star ? 'star_border' : 'star'}</Icon>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Event;