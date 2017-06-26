import { GraphQLObjectType, GraphQLInt } from 'graphql';
import { fetchStop } from '../../bus';
import { BusStops } from '../../types/bus/busStops';

const stops = {
  type: BusStops,
  args: {
    stopId: {type: GraphQLInt}
  },
  description: '...',
  resolve: (root, {stopId}) => {
    return fetchStop(stopId);
  }
};

export default stops;