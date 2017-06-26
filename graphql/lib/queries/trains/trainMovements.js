import  { GraphQLList, GraphQLString } from 'graphql';
import train from '../../train';
import { TrainMovements } from '../../types/train/TrainMovements';

const trainMovements = {
  type: new GraphQLList(TrainMovements),
  args: {
    trainId: {type: GraphQLString},
    trainDate: {type: GraphQLString}
  },
  description: '...',
  resolve: (root, {trainId, trainDate}) => {
    let promise = new Promise((resolve, reject) => {
      let params = {};
      if(trainId && trainDate) {
        params.TrainId = trainId.toUpperCase();
        params.TrainDate = trainDate.toUpperCase();
      }
      train.getTrainMovements((data) => {
        let movements = data.response.ArrayOfObjTrainMovements.objTrainMovements;
        resolve(movements);
      }, true, params);
    });
    return promise.then(json => json);
  }
};

export default trainMovements;