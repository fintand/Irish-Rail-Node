import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
exports.CurrentTrains = new GraphQLObjectType({
  name: 'CurrentTrains',
  description: '...',
  fields: () => ({
    status: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: train => train.TrainStatus.toString() || ""
    },
    latitude: {
      type: GraphQLString,
      description: 'Latitude of station',
      resolve: train => train.TrainLatitude.toString() || ""
    },
    longitude: {
      type: GraphQLString,
      description: 'Longitude of station',
      resolve: train => train.TrainLongitude.toString() || ""
    },
    code: {
      type: GraphQLString,
      description: 'Code of station',
      resolve: train => train.TrainCode.toString() || ""
    },
    date: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: train => train.TrainDate.toString() || ""
    },
    publicMessage: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: train => train.PublicMessage.toString() || ""
    },
    direction: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: train => train.Direction.toString() || ""
    },
  })
})
