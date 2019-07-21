import React from "react";
import ReactDisqusComments from "react-disqus-comments";
import { useSiteMetadata } from "../../../hooks";

interface CommentsProps {
  postTitle?: string;
  postSlug?: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({
  postTitle,
  postSlug
}: CommentsProps): React.ReactElement => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={postTitle}
      title={postTitle}
      url={url + postSlug}
    />
  );
};

export default Comments;
