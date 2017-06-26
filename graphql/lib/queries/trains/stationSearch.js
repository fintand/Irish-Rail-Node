import  { GraphQLList, GraphQLString } from 'graphql';
import train from '../../train';
import { StationSearch } from '../../types/train/StationSearch';

const stationSearch = {
  type: new GraphQLList(StationSearch),
  args: {
    q: {type: GraphQLString}
  },
  description: '...',
  resolve: (root, {q}) => {
    let promise = new Promise((resolve, reject) => {
      let params = null;
      if(q) {
        params = { StationText: q.toUpperCase()};
      }
      train.getStationsFilter((data) => {
        let stations = data.response.ArrayOfObjStationFilter.objStationFilter;
        resolve(stations);
      }, true, params);
    });
    return promise.then(json => json);
  }
};

export default stationSearch;