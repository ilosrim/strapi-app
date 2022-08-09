module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b1f5c70f2fdb29919456a32896dfb751'),
  },
});
