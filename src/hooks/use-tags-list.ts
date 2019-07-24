import { useStaticQuery, graphql } from "gatsby";

import { Query, MarkdownRemarkGroupConnection } from "../generated/graphql-types";

const useTagsList = (): MarkdownRemarkGroupConnection[] => {
  const { allMarkdownRemark }: Query = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
