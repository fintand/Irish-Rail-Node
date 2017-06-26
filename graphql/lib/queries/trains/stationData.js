import  { GraphQLList, GraphQLString } from 'graphql';
import train from '../../train';
import { Trains } from '../../types/train/Trains';

const stationData = {
  type: new GraphQLList(Trains),
  args: {
    stationCode: {type: GraphQLString},
    stationDesc: {type: GraphQLString},
    numMins: {type: GraphQLString}
  },
  description: '...',
  resolve: (root, {stationCode, stationDesc, numMins}) => {
    let promise = new Promise((resolve, reject) => {
      let params = null;
      if(stationCode) {
        params = { StationCode: stationCode.toUpperCase()};
      } else if(stationDesc) {
        params = { StationDesc: stationDesc.toUpperCase()};
      }
      if(numMins) {
        params.NumMins = numMins;
      }
      train.getStationData((data) => {
        let trains = data.response.ArrayOfObjStationData.objStationData;
        resolve(trains);
      }, true, params);
    });
    return promise.then(json => json);
  }
};

export default stationData;