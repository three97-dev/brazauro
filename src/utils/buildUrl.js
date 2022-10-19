const slugify = require("slugify");

const strToUrl = (str, fallback) => {
  let slug = slugify(str, { lower: true, remove: /[*+~.()'"!:@]/g, strict: true });
  if (slug === "") {
    return fallback;
  }
  return slug;
};

exports.buildOpenRoleUrl = (role) => {
  return `/careers/${strToUrl(role.title, role.contentful_id)}`;
};
