import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import './influencerCard.css'

function influencerLoadingCard() {
  return (
    <Grid item xs={6} className="influencer-card">
      <Paper elevation={4} className="influencer-paper-bg ">
        <Grid container className="influencer-card-header" spacing={1}>
          <Grid item xs={2} >
            <div className="influncer-card-number"></div>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid container direction="column" spacing={1} xs={6}>
            <Grid item>
              <div className="influencer-card-social-account-name"></div>
            </Grid>
            <Grid item>
              <div className="influencer-card-social-account-handle"></div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
          </Grid>
          <Grid container className="influencer-card-footer" spacing={0.7}>
            <Grid item xs={5}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>

                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={1}>
            </Grid>
            <Grid container direction="column" item xs={6} spacing={1}>
              <Grid item>
              </Grid>
              <Grid item>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default influencerLoadingCard;
