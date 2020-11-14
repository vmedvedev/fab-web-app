import React from 'react';
import {gql, useSubscription} from '@apollo/client';

const GET_MSG_SUBSCRIPTION = gql`
  subscription MessageSubscription {
    newMessage
  }
`;

const Message = () => {
    // const { loading, error, data, subscribeToMore } = useQuery(GET_CMD_QUERY)
    const { data, loading, error } = useSubscription(
      GET_MSG_SUBSCRIPTION
    );
  
    return (       
        <h1 style={{ fontSize: 54, cursor: 'pointer' }} >
            {loading ? 'Waiting...' : error ? 'Error: server is unavailable' : `Message: ${data.newMessage}`}
        </h1>
    );
};

export default Message;
