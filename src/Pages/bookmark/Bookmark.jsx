import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { Post } from "../../Components/Post/Post";
import { getAllBookMarks } from "../../features/bookmarkSlice";
export const Bookmark = () => {
  const { bookmark } = useSelector((store) => store.bookmark);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBookMarks());
  }, [bookmark]);
  return (
    <div>
      <h2>Bookmark page</h2>
      {bookmark.length === 0 ? (
        <div>
          <h2>No Bookmark</h2>
        </div>
      ) : (
        <div>
          {bookmark.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
};
