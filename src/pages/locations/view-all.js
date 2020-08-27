import React from "react";
import { Box } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout/layout";
import CardCategory from "../../components/card-category/card-category";
import departmentsData from "../../services/departmentsData";

export default () => {
  const response = useStaticQuery(
    graphql`
      query {
        allContentfulRecruitment {
          edges {
            node {
              location
              overview
              title
              department
            }
          }
        }
      }
    `
  );
  return (
    <>
      <Layout>
        <Box className={"list-category-container"} component={"ul"}>
          {departmentsData.map((item, index) => (
            <CardCategory
              key={index}
              name={item.title}
              recruitment={response.allContentfulRecruitment.edges}
            />
          ))}
        </Box>
      </Layout>
    </>
  );
};
