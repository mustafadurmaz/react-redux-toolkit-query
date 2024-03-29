import { useState } from "react";

import "./App.css";
import { useCommentsQuery } from "./services/commentsApi";

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
                  {/* <span><ContactDetail id={ contact.id} /></span> */}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
