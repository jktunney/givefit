import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const WorkoutType = new ObjectType({
  name: 'Workout',
  fields: {
    title: { type: new NonNull(StringType) },
    date: { type: new NonNull(StringType) },
    time: { type: StringType },
    location: { type: StringType },
    author: { type: StringType },
    contentSnippet: { type: StringType },
    tags: { type: StringType },
    day: { type: StringType },
    image: { type: StringType},
    avatar: { type: StringType},
    id: { type: StringType},
  },
});

export default WorkoutType;
