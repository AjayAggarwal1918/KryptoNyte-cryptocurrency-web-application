import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import './influencerCard.css'

function influencerCard(props) {
  const {
    display_name,
    twitter_screen_name,
    profile_image,
    banner_image,
    influencer_rank_average,
    engagement_rank,
    followers_rank,
    volume_rank
  } = props.influencer;
  return (
    <Grid item xs={6} className="influencer-card" onClick={(e) => props.handleInfluencerCardClick(e, props.idx)}>
      <Paper elevation={4} className="influencer-paper-bg ">
        <Grid container className="influencer-card-header" spacing={1}>
          <Grid item xs={2} >
            <div className="influncer-card-number">{props.idx + 1}</div>
          </Grid>
          <Grid item xs={3}>
            <img src={profile_image} alt="profile picture" />
          </Grid>
          <Grid container direction="column" spacing={1} xs={6}>
            <Grid item>
              <div className="influencer-card-social-account-name">{display_name}</div>
            </Grid>
            <Grid item>
              <div className="influencer-card-social-account-handle">{twitter_screen_name}</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <img
              src={banner_image}
              className="influencer-card-img"
            />
          </Grid>
          <Grid container className="influencer-card-footer" spacing={0.7}>
            <Grid item xs={5}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  Influencer Avg Rank
                </Grid>
                <Grid item>
                  {influencer_rank_average.toFixed(2)}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={1}>
            </Grid>
            <Grid container direction="column" item xs={6} spacing={1}>
              <Grid item>
                {engagement_rank} Engagement Rank
              </Grid>
              <Grid item>
                {followers_rank} Follower Rank
              </Grid>
              <Grid item>
                {volume_rank} Volume Rank
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default influencerCard;
