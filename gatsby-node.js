const path = require(`path`);

const { buildOpenRoleUrl } = require("./src/utils/buildUrl");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
  type SitePage implements Node {
    context: SitePageContext
  }
  type SitePageContext {
    i18n: i18nContext
  }
  type i18nContext {
      language: String,
      languages: [String],
      defaultLanguage: String,
      originalPath: String
      routed: Boolean
  }
`);
};

exports.sourceNodes = async (args) => {
  const { actions, getNodesByType } = args;
  const { createNodeField } = actions;

  const openRoles = getNodesByType("ContentfulOurOpenRoles");

  for (const openRole of openRoles) {
    // to create only English pageUrl
    const openRoleEn = openRoles.find(
      (role) => role.contentful_id === openRole.contentful_id && role.node_locale === "en"
    );
    createNodeField({
      node: openRole,
      name: "pageUrl",
      value: buildOpenRoleUrl(openRoleEn),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // filtered out "pt" language to remove duplicates
  const result = await graphql(`
    query {
      allContentfulOurOpenRoles(filter: { node_locale: { eq: "en" } }) {
        edges {
          node {
            fields {
              pageUrl
            }
            contentful_id
          }
        }
      }
    }
  `);

  result.data.allContentfulOurOpenRoles.edges.forEach((edge) => {
    const pageUrl = edge.node.fields.pageUrl;
    const id = edge.node.contentful_id;

    createPage({
      path: pageUrl,
      component: path.resolve(`src/templates/open-role.js`),
      context: {
        id,
      },
    });
  });
};
