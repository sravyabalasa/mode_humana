import React from 'react';
import "../style/OurProcess.scss";
import { GiClothespin } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa";
import { Row, Col, Container } from "react-grid-system";

export default function OurProcess() {
	return (
		<div id="about-us">
			<Container className="content">
				<Row>
					<Col>
						<h1 className="title">OUR PROCESS</h1>
					</Col>
				</Row>
				<Row justify="center" align="center">
					<Col className="center-icon" xs={12} md={2}>
						<IoShirtOutline className="icon"/>
					</Col>
					<Col xs={12} md={10}>
						<h3 className="statement">As a sustainable venture, we’ll do the <strong className="statement-half">&nbsp;research&nbsp;</strong>, from brands to shipping, so you don’t have to.</h3>
					</Col>
				</Row>
				<Row className="row" justify="center" align="center">
					<Col className="center-icon" xs={12} md={2}>
						<FaMoneyCheck className="icon"/>
					</Col>
					<Col xs={12} md={10}>
						<h3 className="statement">We're the first box to contain<strong className="statement-half">&nbsp;new&nbsp;</strong> sustainable fashion and <strong className="statement-half">&nbsp;secondhand&nbsp;</strong> pieces, keeping our prices <strong className="statement-half">&nbsp;affordable&nbsp;</strong> while meeting our rigorous standards.</h3>
					</Col>
				</Row>
				<Row className="row" justify="center" align="center">
					<Col className="center-icon" xs={12} md={2}>
						<GiClothespin className="icon"/>
					</Col>
					<Col xs={12} md={10}>
						<h3 className="statement">Our <strong className="statement-half">&nbsp;stylists&nbsp;</strong> will ship to you a <strong className="statement-half">&nbsp;curated&nbsp;</strong> selection of pieces, based off of your <strong className="statement-half">&nbsp;preferences&nbsp;</strong> from our style quiz.</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
}