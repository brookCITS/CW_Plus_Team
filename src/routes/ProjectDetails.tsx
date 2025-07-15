import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import { Link } from "react-router-dom";

const ProfileDetails: React.FC = () => {
  const { id } = useParams();
  const { profile, loading } = useDictionary();

  if (loading || !profile) return <div>Loading...</div>;

  const person = id ? profile[parseInt(id)]: null;

  if (!person) return <div>Profile not found.</div>;

  return (
    <Container className="py-5">
      <Row className="nav"><Col><Link to={'/'}>Back</Link></Col></Row>
      <Row className="route-hero">
      <Col xs={12} sm={6} className={`basic-tile-image`} style={{backgroundImage: `url(${person.profilePic})`}}></Col>
      <Col xs={12} sm={6}>
        <Row>
           <h1>{person.name}</h1>
        </Row>
        <Row>
           <Col><h4>{person.title}</h4></Col>
           <Col><h4>{person.org}</h4></Col>
        </Row>
        <Row>
           <p>{person.bio}</p>
        </Row>
      </Col>
      </Row>
    </Container>
  );
};

export default ProfileDetails;
