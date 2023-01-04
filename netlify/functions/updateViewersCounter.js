import fetch from "node-fetch";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_SITE_STATS_ENTRY_ID,
  CONTENTFUL_CONTENT_MANAGEMENT_TOKEN,
  DISABLE_VIEWERS_COUNTER_BUMP,
} = process.env;

const getViewersCounter = async () => {
  try {
    const response = await fetch(
      `https://api.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries/${CONTENTFUL_SITE_STATS_ENTRY_ID}`,
      {
        headers: {
          Authorization: `Bearer ${CONTENTFUL_CONTENT_MANAGEMENT_TOKEN}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return {
        numberOfUsers: data?.fields?.viewersCounter?.en,
        version: data?.sys?.version,
      };
    }

    return null;
  } catch (error) {
    throw new Error(`Failed to get viewers counter: ${error}`);
  }
};

const updateViewersCounter = async (version, newNumberOfUsers) => {
  try {
    const response = await fetch(
      `https://api.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries/${CONTENTFUL_SITE_STATS_ENTRY_ID}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CONTENTFUL_CONTENT_MANAGEMENT_TOKEN}`,
          "Content-Type": "application/vnd.contentful.management.v1+json",
          "X-Contentful-Version": version,
        },
        body: JSON.stringify({
          fields: {
            viewersCounter: {
              en: newNumberOfUsers,
            },
          },
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return {
        numberOfUsers: data?.fields?.viewersCounter?.en,
      };
    }

    return null;
  } catch (error) {
    throw new Error(`Failed to update viewers counter: ${error}`);
  }
};

exports.handler = async () => {
  try {
    let data = await getViewersCounter();

    if (!DISABLE_VIEWERS_COUNTER_BUMP && data?.numberOfUsers && data?.version) {
      const newNumberOfUsers = data.numberOfUsers + 1;
      data = await updateViewersCounter(data.version, newNumberOfUsers);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        numberOfUsers: data?.numberOfUsers,
      }),
    };
  } catch (error) {
    console.log(`Netlify function error: ${error.message}`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "error",
        error: error.response ? error.response.data : error.message,
      }),
    };
  }
};
