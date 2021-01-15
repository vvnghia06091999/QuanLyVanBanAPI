const { Op } = require("sequelize");

const db = require('../models/database');

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

function capNhatMatKhau(req, res) {
    const id = req.params.id;
    db.taikhoan.update(req.body,{
        where : {id : id}
    }).then(num =>{
        if(num == 1){
            res.send({
                message : "Cap nhat thanh cong"
            });
        }else{
            res.send({
                message : "Cap nhat khong thanh cong"
            })
        }
    }).catch(err =>{
        res.status(500).send({
            message : err.message || "Khong The Cap Nhat Mat Khau id " + id
        });
    });
}

function xuatTatCaTaiKhoan(req, res){
    db.taikhoan.findAll().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || "Khong the xuat tat ca"
        });
    });
}

module.exports = {themTaiKhoan,timTaiKhoanTheoTen,capNhatMatKhau,xuatTatCaTaiKhoan};
