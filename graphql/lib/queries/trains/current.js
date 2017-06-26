import  { GraphQLList } from 'graphql';
import train from '../../train';
import { StationType } from '../../types/train/StationType';
import { CurrentTrains } from '../../types/train/CurrentTrains';

const current = {
  type: new GraphQLList(CurrentTrains),
  args: {
    type: {type: StationType}
  },
  description: '...',
  resolve: (root, {type}) => {
    let promise = new Promise((resolve, reject) => {
      let params = null;
      if(type) {
        params = { TrainType: type.toUpperCase()};
      }
      train.getCurrentTrains((data) => {
        let trains = data.response.ArrayOfObjTrainPositions.objTrainPositions;
        resolve(trains);
      }, true, params);
    });
    return promise.then(json => json);
  }
};

export default current;