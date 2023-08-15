import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

// import { useStore } from "../stores/store";
// import { observer } from "mobx-react-lite";
// import { useEffect } from "react";

export default function HomePage() {
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as="h2" inverted >
                    <Image size="massive" src="/assets/logo.png" alt="logo" style={{marginBottom: 12}}/>
                    Data Science & Machine Learning Program
                </Header>

                <Header as="h3" inverted style={{ marginTop: '-15px', marginBottom: '30px' }}>
                    2022
                </Header>
                
                <Button as={Link} to="/information" size="huge" inverted>                 
                    Go to the detail page
                </Button>
            </Container>
            
        </Segment>
    )
}