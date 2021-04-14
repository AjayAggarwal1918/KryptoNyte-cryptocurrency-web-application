// DEPENDENCY IMPORTS 
import React from 'react'; 
import { Route,Switch } from 'react-router-dom';


// COMPONENT IMPORTS 
import Dashboard from './components/home/dashboard'; 
import Coins from './components/coins/coins'; 
import Compare from './components/compare/compare';
import Influencers from './components/influencers/influencers';
import Feeds from './components/feeds/feeds';
import Exchanges from './components/exchanges/exchanges';


//  HIGHER ORDER COMPONENT
import Layout from './HOC/layout/layout';


// CONSTANTS DEFINED 
const Routes=()=>{
    return (
        <>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/coins" exact component={Coins} />
                    <Route path="/compare" exact component={Compare} />
                    <Route path="/compare/:topic" exact component={Compare} />
                    <Route path="/influencers" exact component={Influencers} />
                    <Route path="/feeds" exact component={Feeds} />
                    <Route path="/exchanges" exact component={Exchanges} />
                </Switch>
            </Layout>
        </>
    ); 
}; 

export default Routes; 