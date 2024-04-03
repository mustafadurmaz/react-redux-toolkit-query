import { useState } from "react";

import "./App.css";
import {
  useAddCommentMutation,
  useCommentQuery,
  useCommentsQuery,
} from "./services/commentsApi";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useCommentsQuery();

  return (
    <>
      <div>
        {isLoading && <h2>...Loading</h2>}
        {isFetching && <h2>...isFetching</h2>}
        {error && <h2>Something went wrong</h2>}
        {isSuccess && (
          <div>
            {data?.map((comment) => {
              return (
                <div className="data" key={comment.id}>
                  <span>{comment.name}</span>
                  <span>
                    <CommentDeteail id={comment.id.toString()} />
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export const CommentDeteail = ({ id }: { id: string }) => {
  const { data } = useCommentQuery(id);

  return (
    <>
      <pre> {JSON.stringify(data, undefined, 2)} </pre>
    </>
  );
};

export const AddComment = () => {
  const [addComment] = useAddCommentMutation();
  const { refetch } = useCommentsQuery();

  const comment = {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  };

  const addHandler = async () => {
    await addComment(comment);
  };

  return (
    <>
      <button onClick={addHandler}>Add Comment</button>
    </>
  );
};

export default App;
