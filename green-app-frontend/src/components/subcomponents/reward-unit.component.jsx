import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const RewardUnit = (props) => {
    let cardImage = null;
    if (props.imageSrc){
        cardImage = <CardMedia image={props.imageSrc}></CardMedia>
    }
    
    return (
        <Box my={0.5}>
            <Card>    
                <CardContent>
                {cardImage}
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                </CardContent>
            </Card> 
        </Box>
    )
}

export default RewardUnit