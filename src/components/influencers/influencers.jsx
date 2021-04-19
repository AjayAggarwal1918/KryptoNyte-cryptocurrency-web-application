import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import InfluencerCard from '../widgets/influencer/influencerCard'
import InfluencerLoadingCard from '../widgets/influencer/influencerLoadingCard'

import './influencers.css'

const Influencers = () => {

    const [influencers, setInfluencers] = useState([]);
    const [influencer, setInfluencer] = useState(0);
    const [loadCount, setLoadCount] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const handleInfluencerCardClick = (e, index) => {
        setInfluencer(index);
    }

    const loadMore = (e) => {
        setIsLoading(true);
        setLoadCount(previousLoadCount => previousLoadCount + 10);
    }

    useEffect(() => {
        Axios
            .get(`https://api.lunarcrush.com/v2?data=influencers&key=${process.env.REACT_APP_CRYPTODATA_API_KEY}&days=30&limit==${loadCount}`)
            .then(res => {
                setInfluencers(res.data.data)
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, [loadCount])

    return (
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
            <Grid item xs={12}>
                <h1 className="influencers-heading">Influencers</h1>
            </Grid>
            <Grid item xs={6} className="influencers-container">
                <Grid container justify="center" alignItems="center" spacing={3}>
                    {
                        influencers.length ? influencers.map((influencer, idx) => {
                            return <InfluencerCard
                                key={idx}
                                influencer={influencer}
                                idx={idx}
                                handleInfluencerCardClick={handleInfluencerCardClick}
                            />
                        }) :
                            [1, 2, 3, 4, 5, 6].map(idx => {
                                return <InfluencerLoadingCard key={idx} />
                            })
                    }
                </Grid>
                <Grid item container justify="center" alignItems="center" spacing={2} xs={12}>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={loadMore}>
                            {isLoading ? 'Loading...' : 'Load More'}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} className="influencer-container">
                <Paper elevation={6} variant="outlined" className="influencer-paper">
                    {influencers.length ? (
                        <Grid container direction="column" spacing={1}>
                            <Grid item xs={12}>
                                <img src={influencers[influencer].banner_image} className="influencer-paper-img" alt="" />
                            </Grid>
                            <Grid item container direction="row" spacing={1} justify="flex-start">
                                <Grid item xs={1.3}>
                                    <img src={influencers[influencer].profile_image} alt="" />
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container direction="column">
                                        <Grid item>
                                            <div className="influencer-social-acc-name">{influencers[influencer].display_name}</div>
                                        </Grid>
                                        <Grid item>
                                            <div className="influencer-social-handle">{influencers[influencer].twitter_screen_name}</div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" spacing={5}>
                                    <Grid item xs={4}>
                                        Volume : {influencers[influencer].volume}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Followers : {influencers[influencer].followers}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Engagement : {influencers[influencer].engagement}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Following : {influencers[influencer].following}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Volume Rank : {influencers[influencer].volume_rank}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Followers Rank : {influencers[influencer].followers_rank}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Engagement Rank : {influencers[influencer].engagement_rank}
                                    </Grid>
                                    <Grid item xs={8}>
                                        Influencer Average Rank : {influencers[influencer].influencer_rank_average.toFixed(2)}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>) : ''
                    }
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Influencers;