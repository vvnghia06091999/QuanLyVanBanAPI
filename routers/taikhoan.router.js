const express = require('express');
const router = express.Router();
const TaiKhoan = require('../controllers/taikhoan.controller');

router.post('/themTaiKhoan',TaiKhoan.themTaiKhoan);
router.get('/timTaiKhoanTheoTen/:tenTaiKhoan',TaiKhoan.timTaiKhoanTheoTen);
router.put('/capNhatMatKhau/:id',TaiKhoan.capNhatMatKhau);
router.get('/xuatTatCaTaiKhoan',TaiKhoan.xuatTatCaTaiKhoan);
router.post('/dangNhap',TaiKhoan.dangNhap);

module.exports = router;