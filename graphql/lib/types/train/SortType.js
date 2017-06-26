import {GraphQLEnumType} from 'graphql';
exports.SortType = new GraphQLEnumType({
  name: 'SortTypes',
  values: {
    ASCENDING: { value: 'ASC' },
    DESCENDING: { value: 'DESC' }
  }
})