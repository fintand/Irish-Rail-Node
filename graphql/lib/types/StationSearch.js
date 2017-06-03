import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
exports.StationSearch = new GraphQLObjectType({
  name: 'StationSearch',
  description: '...',
  fields: () => ({
    stationDesc_sp: {
      type: GraphQLString,
      description: 'Name of station',
      resolve: station => station.StationDesc_sp.toString() || ""
    },
    stationDesc: {
      type: GraphQLString,
      description: 'Alternative name for station',
      resolve: station => station.StationDesc.toString() || ""
    },
    stationCode: {
      type: GraphQLString,
      description: 'Latitude of station',
      resolve: station => station.StationCode.toString() || ""
    }
  })
})
