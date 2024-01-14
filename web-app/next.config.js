module.exports = {
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
    },
};
