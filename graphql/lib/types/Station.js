import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
exports.Station = new GraphQLObjectType({
  name: 'Station',
  description: '...',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.StationDesc.toString() || ""
    },
    alias: {
      type: GraphQLString,
      description: 'Alternative name for station',
      resolve: station => station.StationAlias.toString() || ""
    },
    latitude: {
      type: GraphQLString,
      description: 'Latitude of station',
      resolve: station => station.StationLatitude.toString() || ""
    },
    longitude: {
      type: GraphQLString,
      description: 'Longitude of station',
      resolve: station => station.StationLongitude.toString() || ""
    },
    code: {
      type: GraphQLString,
      description: 'Code of station',
      resolve: station => station.StationCode.toString() || ""
    },
    id: {
      type: GraphQLString,
      description: 'Station identifier',
      resolve: station => station.StationId.toString() || ""
    },
  })
})
