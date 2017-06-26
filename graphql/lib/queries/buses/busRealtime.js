import { GraphQLObjectType, GraphQLInt } from 'graphql';
import { fetchBusesRealtime } from '../../bus';
import { BusStopsRealtime } from '../../types/bus/busStopsRealtime';

const stops = {
  type: BusStopsRealtime,
  args: {
    stopId: {type: GraphQLInt}
  },
  description: '...',
  resolve: (root, {stopId}) => {
    return fetchBusesRealtime(stopId);
  }
};

export default stops;