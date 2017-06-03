import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
exports.TrainMovements = new GraphQLObjectType({
  name: 'TrainMovements',
  description: '...',
  fields: () => ({
    trainCode: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.TrainCode.toString() || ""
    },
    trainDate: {
      type: GraphQLString,
      description: 'Alternative name for station',
      resolve: station => station.TrainDate.toString() || ""
    },
    locationFullName: {
      type: GraphQLString,
      description: 'Latitude of station',
      resolve: station => station.LocationFullName.toString() || ""
    },
    locationOrder: {
      type: GraphQLString,
      description: 'Longitude of station',
      resolve: station => station.LocationOrder.toString() || ""
    },
    locationType: {
      type: GraphQLString,
      description: 'Code of station',
      resolve: station => station.LocationType.toString() || ""
    },
    trainOrigin: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.TrainOrigin.toString() || ""
    },
    trainDestination: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.TrainDestination.toString() || ""
    },
    scheduledArrival: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.ScheduledArrival.toString() || ""
    },
    scheduledDeparture: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.ScheduledDeparture.toString() || ""
    },
    expectedArrival: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.ExpectedArrival.toString() || ""
    },
    expectedDeparture: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.ExpectedDeparture.toString() || ""
    },
    arrival: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Arrival.toString() || ""
    },
    departure: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Departure.toString() || ""
    },
    autoArrival: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.AutoArrival.toString() || ""
    },
    autoDepart: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.AutoDepart.toString() || ""
    },
    stopType: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.StopType.toString() || ""
    }
  })
})
