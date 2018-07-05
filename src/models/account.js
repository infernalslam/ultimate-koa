module.exports = function (sequelize, Sequelize) {
  const account = sequelize.define('account', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    agencyId: {
      field: 'agency_id',
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    accountEmail: {
      field: 'account_email',
      type: Sequelize.TEXT,
      allowNull: false
    },
    accountOffererName: {
      field: 'account_offerer_name',
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'account',
    freezeTableName: true,
    underscored: true,
    collate: 'utf8mb4_unicode_ci',
    timestamps: true
  })
  return account
}
