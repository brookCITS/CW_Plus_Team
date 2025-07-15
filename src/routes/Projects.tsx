import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDictionary } from "../context/DictionaryContext";
import LinkTile from "../UI/LinkTile";

const ProfileList: React.FC = () => {
  const { profile, loading } = useDictionary();

  if (loading || !profile) return <div>Loading...</div>;

  return (
    <Container className="py-5">
      <Row className="route-hero">
        <Col><h1>CW+ Team</h1></Col>
      </Row>
      <ListGroup>
        {Object.entries(profile).map(([id, project]) => (
          <LinkTile key={id} item={project} linkURL={`/${id}`} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ProfileList;
