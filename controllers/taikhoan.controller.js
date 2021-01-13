const express = require('express');
const { Op } = require("sequelize");

const db = require('../models/index');

function themTaiKhoan(req, res){
    const taiKhoan = {
        tenTaiKhoan :  req.body.tenTaiKhoan,
        matKhau : req.body.matKhau
    };
    db.taikhoan.create(taiKhoan).then(data => {
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || "Them khong thanh cong"
        });
    });
}

function timTaiKhoanTheoTen(req, res){
    const tenTaiKhoan = req.params.tenTaiKhoan;
    db.taikhoan.findOne({
        where : {tenTaiKhoan : tenTaiKhoan}
    }).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || "Khong Tim Thay"
        });
    });
}

//function 

module.exports = {themTaiKhoan,timTaiKhoanTheoTen};
