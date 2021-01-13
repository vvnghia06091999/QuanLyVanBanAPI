const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize){
    const attributes = {
        idNhom : {type: DataTypes.INTEGER,allowNull: false, references: {
            model: 'Nhoms',
            key: 'id'
        }},
        idNguoiDung : {type: DataTypes.INTEGER,allowNull: false, references: {
            model: 'NguoiDungs',
            key: 'id'
        }}
    };
    return sequelize.define('ChiTietNhom',attributes);
}