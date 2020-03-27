module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'meubairro',
  define: {
    timestamps: true,
    underscored: true,
    undescoredAll: true,
  },
};
