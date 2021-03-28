import axios from "axios";

export const handleFetchCoinData = (page, perPage) => {
  const coinSymbols = [
    'BTC', 'LTC', 'ETH', 'PAX', 'SLV', 'NBR', 'STAR', 'DEBASE', 'BOS', 'SMC', 'LNC', 'SWT', 'ART',
    'HTH', 'CHG', 'CARBON', 'BPT', 'CWV', 'XBASE', 'BZNT', 'DELTA', 'MCC', 'TRXC', 'KEY', 'ECA', 'BRC', 'UFR',
    'HYDRO', 'IMT', 'LBA', 'TTN', 'BTAD', 'HER', 'PAL', 'DRT', 'BCF', 'COT', 'CHAT', 'CUSDC', 'RLT', 'TAC', 'CTXC',
    'VNT', 'BIFI', 'BGTT', 'HIVE', 'APR', 'QUN', 'IC', 'PTN', 'INXT', 'QBC', 'GZRO', 'DTH', 'CEN', 'SFT', 'CXO', 'MNP',
    'STORJ', 'KOMP', 'ELY', 'FYZ', 'RYO', 'LIT', 'NCL2', 'CASH', 'VRM', 'EXMR', 'TRIO', 'NOIA', 'WBS', 'ROT', 'ROCK2',
    'OIL', 'COSM', 'ETHO'
  ];
  const requestedCoins = coinSymbols.slice(perPage * page, perPage * page + perPage);
  const URL = `https://api.lunarcrush.com/v2?data=assets&key=${process.env.REACT_APP_CRYPTODATA_API_KEY}&symbol=${requestedCoins}`;
  return axios.get(URL)
    .then(response => {
      const extractedData = response.data.data.map(({
        name, galaxy_score, alt_rank, price, percent_change_24h, percent_change_7d, percent_change_30d, market_cap, volume_24h,
        market_dominance, volatility, social_volume, social_score_calc_24h, social_contributors, social_dominance
      }) => {
        return {
          name, galaxy_score, alt_rank, price, percent_change_24h, percent_change_7d, percent_change_30d, market_cap, volume_24h,
          market_dominance, volatility, social_volume, social_score_calc_24h, social_contributors, social_dominance
        }
      })
      return extractedData;
    })
    .catch(err => {
      console.log(err, URL);
      return [];
    })
}