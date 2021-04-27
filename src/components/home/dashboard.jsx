import React from 'react';
import './dashboard.css'
import Paper from '@material-ui/core/Paper'
import CoinsSS from '../../assets/Images/CoinsSS.png';
import CompareSS from '../../assets/Images/CompareSS.png';
import FeedsSS from '../../assets/Images/feedsSS.png';
import InfluencersSS from '../../assets/Images/InfluencersSS.png';
import Grid from '@material-ui/core/Grid'
import { Link, useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const Dashboard = () => {
    const history = useHistory();
    return (
        <div>
            <h1 className="dashboard-welcome-heading">
                <center>
                    Welcome to
                </center>
            </h1>
            <h1 className="dashboard-logo-heading">Kryptonte</h1>

            <Paper className="dashboard-background-paper dashboard-features-container">
                <Container>
                    <Grid container direction="row" alignItems="center" spacing={4}>
                        <Grid item xs={5}>
                            <Link to="/coins"> <img src={CoinsSS} className="dashboard-feature-ss"></img></Link>
                        </Grid>
                        <Grid item xs={7} >
                            <p className="dashboard-feature-text-heading">
                                <h1> Visit the Coins section</h1>
                                <p style={{ color: '#d4bfbf' }}>to know statistics of various cryptocurrencies</p>
                                <Button
                                    style={{ marginTop: '10px ' }}
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => history.push('/coins')}
                                >
                                    Coins
                                </Button>
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <Paper className="dashboard-background-paper dashboard-features-container">
                <Container>
                    <Grid container direction="row" alignItems="center" spacing={4}>
                        <Grid item xs={7} >
                            <p className="dashboard-feature-text-heading">
                                <h1> Visit the Compare section</h1>
                                <p style={{ color: '#d4bfbf' }}>to compare the statistics of cryptocurrencies</p>
                            </p>
                            <Button
                                style={{ marginTop: '10px ' }}
                                variant="outlined"
                                color="secondary"
                                onClick={() => history.push('/compare')}
                            >
                                Compare
                                </Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Link to="/compare"> <img src={CompareSS} className="dashboard-feature-ss"></img></Link>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <Paper className="dashboard-background-paper dashboard-features-container">
                <Container>
                    <Grid container direction="row" alignItems="center" spacing={4}>
                        <Grid item xs={5}>
                            <Link to="/feeds"> <img src={FeedsSS} className="dashboard-feature-ss"></img></Link>
                        </Grid>
                        <Grid item xs={7} >
                            <p className="dashboard-feature-text-heading">
                                <h1> visit the Feeds section</h1>
                                <p style={{ color: '#d4bfbf' }}>to know what is out there on social media about cryptocurrencies</p>
                            </p>
                            <Button
                                style={{ marginTop: '10px ' }}
                                variant="outlined"
                                color="secondary"
                                onClick={() => history.push('/feeds')}
                            >
                                Feeds
                                </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <Paper className="dashboard-background-paper dashboard-features-container">
                <Container>
                    <Grid container direction="row" alignItems="center" spacing={4}>
                        <Grid item xs={7} >
                            <p className="dashboard-feature-text-heading">
                                <h1> visit  Influencers section</h1>
                                <p style={{ color: '#d4bfbf' }}>to know about influencers in the world of cryptocurrencies</p>
                            </p>
                            <Button
                                style={{ marginTop: '10px ' }}
                                variant="outlined"
                                color="secondary"
                                onClick={() => history.push('/influencers')}
                            >
                                Influencers
                                </Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Link to="/influencers"> <img src={InfluencersSS} className="dashboard-feature-ss"></img></Link>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    );
};

export default Dashboard;