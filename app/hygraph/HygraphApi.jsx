const {gql,GraphQLClient} = require('graphql-request');

const fetchKey = async () => {
    const res = await fetch("/key"); 
    const data = await res.json(); 
    return data    
};
const uploadSaveList=async(userEmail,object)=>{
    const config = await fetchKey();
    const hygraphKey=config.hygraphKey;
    const hygraphToken=config.hygraphToken;
    const HYGRAPH_URL=`https://ap-southeast-2.cdn.hygraph.com/content/${hygraphKey}/master`
    const graphQLClient = new GraphQLClient(HYGRAPH_URL, {
        headers: {
          authorization: `Bearer ${hygraphToken}`
        }
      })
    const query = gql`
    mutation MyMutation($jsonObjects: [Json!], $userEmail: String!) {
      updateSaveList(
        data: { videoInfo: { create: { Object: { data: { jsonObjects: $jsonObjects } } } } }
        where: { userEmail: $userEmail }
      ) {
        videoInfo {
          ... on Object {
            jsonObjects
          }
        }
      }

      publishSaveList(where: { userEmail: $userEmail }) {
        videoInfo {
          ... on Object {
            jsonObjects
          }
        }
      }
    }
  `;

  const variables = {
    jsonObjects: [object],
    userEmail: userEmail,
  };
    const result=await graphQLClient.request(query,variables);
    return result;
}
export default{
    uploadSaveList,
}
