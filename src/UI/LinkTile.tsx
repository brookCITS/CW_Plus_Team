import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Profile } from "../types/Content";


type LinkTileProps = {
    item: Profile;
    linkText?: string;
    linkURL: string;
    textLimit?:number;
    classNames?:string
}

const LinkTile: React.FC<LinkTileProps> = ({item, linkURL, textLimit, classNames}) => {
    return (
        <Link 
            className={`basic-tile-link basic-tile-wrapper ${classNames}`} 
            to={linkURL}
            >
            <Row className={`basic-tile`}>
                {item.profilePic && 
                    <img src={item.profilePic} alt={`${item.name} profile pic`}/>
                }

                <Col className="basic-tile-text">
                    <Row><Col><h2 className="title-sans">{item.name}</h2></Col></Row>
                    <Row>
                        <Col><h5>{item.title}</h5></Col>
                        <Col><h5>{item.org}</h5></Col>
                    </Row>

                </Col>
            </Row>
        </Link>
    )
}
export default LinkTile;