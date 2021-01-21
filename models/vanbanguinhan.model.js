const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize){
    const attributes = {
        idNguoiGui : {type: DataTypes.INTEGER,allowNull: false, references: {
            model: 'NguoiDungs',
            key: 'id'
        }},
        idVanBan : {type: DataTypes.INTEGER,allowNull: false, references: {
            model: 'VanBans',
            key: 'id'
        }},
        ngayGui : {type : DataTypes.DATEONLY , defaultValue :DataTypes.NOW}
    };
    return sequelize.define('VanBanGuiNhan',attributes);
}