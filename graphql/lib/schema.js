import fetch from 'node-fetch';
import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import stations from './queries/trains/stations';
import current from './queries/trains/current';
import stationData from './queries/trains/stationData';
import stationSearch from './queries/trains/stationSearch';
import trainMovements from './queries/trains/trainMovements';
import haconTrains from './queries/trains/haconTrains';
import busStop from './queries/buses/busStop';
import busRealtime from './queries/buses/busRealtime';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    stations,
    current,
    stationData,
    stationSearch,
    trainMovements,
    haconTrains,
    busStop,
    busRealtime
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
