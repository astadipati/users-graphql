// ini centernya data diolah dimari
const graphql = require ('graphql');
const _= require ('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema //library inti dari schema yang ditaruh di root
} = graphql;

// manual data
const users = [
    {id: '23', firstName: 'Rama', age: 22},
    {id: '24', firstName: 'Astadipati', age: 23},
    {id: '25', firstName: 'Astadinata', age: 24},
    {id: '26', firstName: 'Kenshin', age: 25},
    {id: '27', firstName: 'Kinarra', age: 22}
];

const UserType = new GraphQLObjectType({
    // bagian ini ada 2 property
    // property
    name: 'User',
    // objek property
    fields: {
        id:  {type: GraphQLString} ,
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    // root ini berdasarkan id
    // beri saya id saya akan kembalikan ke UserType
    name : 'RootQueryType',
    fields:{
        user: {
            type: UserType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue, args){ //actual data
                return _.find(users,{id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});