import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

class MilestoneUnit extends Component {

    render() {
        return (
            <Box mt={2}>
                <Grid container direction='column'>
                    <Grid item>{this.props.name || 'milestoneName'}</Grid>
                    <Grid item>{this.props.reward || 'milestoneReward'}</Grid>
                    <Grid item><BorderLinearProgress variant='determinate' value={this.props.curVal/this.props.targetVal*100 || 50} /></Grid>
                    <Grid item>
                        <Grid container direction='row' justify='flex-end'>
                            <Grid item>{this.props.curVal||50}/{this.props.targetVal||100}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                            <Button variant="contained">Contribute</Button>
                        </Grid>
                    </Grid>

                </Grid>


            </Box>
            // <Col className="pb-5 mb-5" lg="4">
            //     <Card className="card-lift--hover shadow border-0">
            //         <CardImg variant="top" src={this.props.map_img_featured} />
            //         <CardBody className="pb-5">
            //             <h6 className="text-primary text-uppercase">
            //                 {this.props.map_name}
            //             </h6>
            //             <p className="description">
            //                 {this.props.map_description}
            //             </p>
            //             <Button
            //                 className="mt-2"
            //                 color="primary"
            //                 href="#pablo"
            //                 onClick={e => e.preventDefault()}
            //             >
            //                 Develop Strats
            //               </Button>
            //         </CardBody>
            //     </Card>
            // </Col>
        )
    }
}

export default MilestoneUnit