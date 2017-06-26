import  { GraphQLList } from 'graphql';
import orderBy from 'lodash/orderBy';
import train from '../../train';
import { StationType } from '../../types/train/StationType';
import { SortType } from '../../types/train/SortType';
import { Station } from '../../types/train/Station';

const stations = {
  type: new GraphQLList(Station),
  args: {
    type: {type: StationType},
    sort: {type: SortType}
  },
  description: '...',
  resolve: (root, {type, sort}) => {
    let promise = new Promise((resolve, reject) => {
      let params = null;
      if(type) {
        params = { StationType: type.toUpperCase()};
      }
      train.getAllStations((data) => {
        let stations = data.response.ArrayOfObjStation.objStation;
        if(sort) {
          if(sort === 'ASC') {
            stations = orderBy(stations, ['StationDesc'], ['asc'])
          } else if(sort === 'DESC') {
            stations = orderBy(stations, ['StationDesc'], ['desc'])
          }
        }
        resolve(stations);
      }, true, params)
    });
    return promise.then(json => json);
  }
};

export default stations;