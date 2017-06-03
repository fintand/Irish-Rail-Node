import fetch from 'node-fetch';
import orderBy from 'lodash/orderBy';
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLEnumType
} from 'graphql';

import train from './train';
import {StationType} from './types/StationType'
import {CurrentTrains} from './types/CurrentTrains'
import {Station} from './types/Station'
import {Trains} from './types/Trains'
import {StationSearch} from './types/StationSearch'
import {TrainMovements} from './types/TrainMovements'
import {HaconTrains} from './types/HaconTrains'
import {SortType} from './types/SortType'


const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    stations: {
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
        })
        return promise.then(json => json);
      }
    },
    current: {
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
        })
        return promise.then(json => json);
      }
    },
    stationData: {
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
        })
        return promise.then(json => json);
      }
    },
    stationSearch: {
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
        })
        return promise.then(json => json);
      }
    },
    trainMovements: {
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
        })
        return promise.then(json => json);
      }
    },
    haconTrains: {
      type: new GraphQLList(HaconTrains),
      description: '...',
      resolve: (root) => {
        let promise = new Promise((resolve, reject) => {
          train.getHaconTrains((data) => {
            let stations = data.response.ArrayOfObjHaconPositions.objHaconPositions;
            resolve(stations);
          }, true);
        })
        return promise.then(json => json);
      }
    }
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
