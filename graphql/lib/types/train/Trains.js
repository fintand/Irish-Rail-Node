import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
exports.Trains = new GraphQLObjectType({
  name: 'Trains',
  description: '...',
  fields: () => ({
    serverTime: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.Servertime.toString() || ""
    },
    trainCode: {
      type: GraphQLString,
      description: 'Alternative name for station',
      resolve: station => station.Traincode.toString() || ""
    },
    stationFullname: {
      type: GraphQLString,
      description: 'Latitude of station',
      resolve: station => station.Stationfullname.toString() || ""
    },
    stationCode: {
      type: GraphQLString,
      description: 'Longitude of station',
      resolve: station => station.Stationcode.toString() || ""
    },
    queryTime: {
      type: GraphQLString,
      description: 'Code of station',
      resolve: station => station.Querytime.toString() || ""
    },
    trainDate: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Traindate.toString() || ""
    },
    origin: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Origin.toString() || ""
    },
    destination: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Destination.toString() || ""
    },
    destinationTime: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Destinationtime.toString() || ""
    },
    status: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Status.toString() || ""
    },
    lastLocation: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Lastlocation.toString() || ""
    },
    dueIn: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Duein.toString() || ""
    },
    late: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Late.toString() || ""
    },
    expArrival: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Exparrival.toString() || ""
    },
    expDepart: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Expdepart.toString() || ""
    },
    schArrival: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Scharrival.toString() || ""
    },
    schDepart: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Schdepart.toString() || ""
    },
    direction: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Direction.toString() || ""
    },
    trainType: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Traintype.toString() || ""
    },
    locationType: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.Locationtype.toString() || ""
    }
  })
})
