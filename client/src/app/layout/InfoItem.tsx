import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, Item, Segment, SegmentGroup } from 'semantic-ui-react';
//import {format} from 'date-fns';
import "./styles.css";


interface props {
    //id: number
    course: string,
    instructor: string,
    assignment: string,
    description: string,
    deadline: string,
}

export default function InfoItem({course, instructor, assignment, description, deadline}: props) {
    // if (deadline === ""){
    //     console.log("empty deadline")
    // } else {
    //     console.log(deadline)
    // }

    return (
        <SegmentGroup>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size="tiny" circular src="/assets/user.png"/>
                    <Item.Content>
                        <Item.Header className="item-header">
                            {assignment}
                        </Item.Header>
                        <Item.Description>by {instructor}</Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
        <Segment>
            <span>
                <Icon name="calendar alternate outline" style={{ marginRight: '5px' }}/>{deadline.split("T")[0]}
                <Icon name="time" style={{ marginLeft: '15px', marginRight: '5px' }}/>{deadline.split("T")[1]}
            </span>
        </Segment>    
        <Segment >
            {description}
        </Segment>
        <Segment clearing>
            <Header as="h4">Course: "{course}"</Header>
        </Segment>
    </SegmentGroup>
    )
}