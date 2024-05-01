const {gql,GraphQLClient} = require('graphql-request');

const fetchKey = async () => {
    const res = await fetch("/key"); 
    const data = await res.json(); 
    return data    
};
const uploadHistoryList=async(userEmail,object)=>{
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
      updateArchive(
        data: {historyInfo: {create: {HistoryObject:{data: {historyJson: $jsonObjects}}}}}
        where: {userEmail: $userEmail}
      ) {
        id
      }
      publishArchive(where: {userEmail: $userEmail}) {
        id
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
      updateArchive(
        data: {saveInfo: {create: {SaveObject: {data: {saveJson: $jsonObjects}}}}}
        where: {userEmail: $userEmail}
      ) {
        id
      }
      publishArchive(where: {userEmail: $userEmail}) {
        id
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
const createUserEmail=async(userEmail)=>{
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
    mutation MyMutation {
      createArchive(data: {userEmail: "`+userEmail+`"}) {
        userEmail
      }
      publishArchive(where: {userEmail: "`+userEmail+`"}) {
        userEmail
      }
    }
    `
    const result=await graphQLClient.request(query);
    return result;
  }
    
const getSaveList=async(userEmail)=>{
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
    query MyQuery($userEmail: String!) {
      archive(where: {userEmail: $userEmail}) {
        saveInfo(last:40) {
          ... on SaveObject {
            saveJson
          }
        }
      }
    }
    `
    const variables = {
        userEmail: userEmail,
      };
    const result=await graphQLClient.request(query,variables);
    return result;
}
const getHistoryList=async(userEmail)=>{
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
    query MyQuery($userEmail: String!) {
      archive(where: {userEmail: $userEmail}) {
        historyInfo(last:32) {
          ... on HistoryObject {
            historyJson
          }
        }
      }
    }
    `
    const variables = {
        userEmail: userEmail,
      };
    const result=await graphQLClient.request(query,variables);
    return result;
}
export default{
  uploadHistoryList,
  uploadSaveList,
  createUserEmail,
  getSaveList,
  getHistoryList,
}
