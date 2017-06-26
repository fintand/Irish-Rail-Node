import  { GraphQLList } from 'graphql';
import train from '../../train';
import { HaconTrains } from '../../types/train/HaconTrains';

const haconTrains = {
  type: new GraphQLList(HaconTrains),
  description: '...',
  resolve: (root) => {
    let promise = new Promise((resolve, reject) => {
      train.getHaconTrains((data) => {
        let stations = data.response.ArrayOfObjHaconPositions.objHaconPositions;
        resolve(stations);
      }, true);
    });
    return promise.then(json => json);
  }
};

export default haconTrains;