import React from 'react'
import { ProjectContainer, ProjectH1, CardsContainer, MLContainer,
    MlTitle, MlCardsContainer, CardItem, CardItemLink, CardImg,
    rootStyle, mediaStyle } from './ProjectElements'
import {MlCards, WebCards} from './data'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 140,
    },
  });



export default function ProjectSection() {
    const classes = useStyles();
    return (
        <ProjectContainer>
            <ProjectH1>Projects</ProjectH1>
            <CardsContainer>
                <MLContainer>
                    <MlTitle>ML/AI Projects</MlTitle>
                    <MlCardsContainer>
                        {MlCards.map((element) => {
                            return (
                              <Card key={element.key} className={classes.root}>
                                <CardActionArea>
                                  <CardMedia    
                                    className={classes.media}
                                    image={element.img}
                                    title="Contemplative Reptile"
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      {element.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
																			{element.description}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                                <CardActions>
                                  <Button size="small" color="primary">
                                    Learn More
                                  </Button>
                                </CardActions>
                              </Card>
                            );
                        })}
                    </MlCardsContainer>
                </MLContainer>
                <MLContainer>
                    <MlTitle>Web Development</MlTitle>
                    <MlCardsContainer>
                        {WebCards.map((element) => {
                            return (
                            	<CardItem key={element.key}/>
                            );
                        })}
                    </MlCardsContainer>
                </MLContainer>
            </CardsContainer>
        </ProjectContainer>
    )
}
