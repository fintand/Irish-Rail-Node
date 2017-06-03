import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
exports.HaconTrains = new GraphQLObjectType({
  name: 'HaconTrains',
  description: '...',
  fields: () => ({
    trainStatus: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainStatus.toString() || ""
    },
    trainStatus: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainStatus.toString() || ""
    },
    trainCode: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainCode.toString() || ""
    },
    trainDate: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainDate.toString() || ""
    },
    lastLocationType: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.LastLocationType.toString() || ""
    },
    direction: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.Direction.toString() || ""
    },
    trainOrigin: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainOrigin.toString() || ""
    },
    trainOriginTime: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainOriginTime.toString() || ""
    },
    trainDestination: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainDestination.toString() || ""
    },
    trainDestinationTime: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainDestinationTime.toString() || ""
    },
    lastLocation: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.LastLocation.toString() || ""
    },
    nextLocation: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.NextLocation.toString() || ""
    },
    difference: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.Difference.toString() || ""
    },
    scheduledDeparture: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.ScheduledDeparture.toString() || ""
    },
    scheduledArrival: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.ScheduledArrival.toString() || ""
    },
  })
})
