import {GraphQLEnumType} from 'graphql';
exports.StationType = new GraphQLEnumType({
  name: 'StationTypes',
  values: {
    ALL: { value: 'A' },
    MAINLINE: { value: 'M' },
    SUBURBAN: { value: 'S' },
    DART: { value: 'D' }
  }
});
