import React from 'react'
import { PostsStoreConsumer } from '../../posts-store-service-context';

export const withPostsStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <PostsStoreConsumer>
        {
          postsStoreService => <Wrapped
                                  {...props}
                                  postsStoreService={postsStoreService}
                                />
        }
      </PostsStoreConsumer>
    );
  };

};