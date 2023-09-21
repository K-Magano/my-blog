// /** @type {import('next').NextConfig} */
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// const nextConfig = {
//   reactStrictMode: true,

// return {
//   env: {
//     mongodb_username: "Keorapetse",
//     mongodb_password: "MgTYsZXSt3ngD6wU",
//     mongodb_clustername: "cluster0",
//     mongodb_database: "messages",
//   },
// }

// };

// module.exports = nextConfig;
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Keorapetse",
        mongodb_password: "MgTYsZXSt3ngD6wU",
        mongodb_clustername: "cluster0",
        mongodb_database: "messages-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Keorapetse",
      mongodb_password: "MgTYsZXSt3ngD6wU",
      mongodb_clustername: "cluster0",
      mongodb_database: "messages",
    },
  };
};
