import { useStaticQuery, graphql } from "gatsby";

import { Query, MarkdownRemarkGroupConnection } from "../generated/graphql-types";

const useCategoriesList = (): MarkdownRemarkGroupConnection[] => {
  const { allMarkdownRemark }: Query = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;
