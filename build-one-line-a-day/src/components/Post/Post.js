import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.scss';
import { Card, Image, Icon, Grid } from 'semantic-ui-react';

const postAPI = 'https://jsonplaceholder.typicode.com/posts'

const Post = () => {

    const [API, setAPI] = useState(postAPI);

    const [content, setContent] = useState([]);

    const [user, setUser] = useState(null);

    const [post, setPost] = useState(null);

    useEffect(() => {
        const getPosts = () => {
        axios.get(API)
        .then(res => {
            setContent(res.data);
        })
        .catch(e => {
        console.log('Server error', e)
      });
    };

    getPosts();
}, [API]);

console.log(content)


    return (
<Grid container columns={1}>
<Grid.Column>
    {content.map((item, index) => {
 return (<Card className="card-container" key={index}>
  <Card.Content>
  <Card.Header>{item.title}</Card.Header>
  <Card.Meta>
    <span className='date'>Date created</span>
  </Card.Meta>
  <Card.Description>
    {item.body}
  </Card.Description>
</Card.Content>
</Card>
    )})};
</Grid.Column>
</Grid>
    )
};

export default Post;



{/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
