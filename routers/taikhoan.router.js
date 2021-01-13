const express = require('express');
const router = express.Router();
const TaiKhoan = require('../controllers/taikhoan.controller');

router.post('/themTaiKhoan',TaiKhoan.themTaiKhoan);
router.get('/getTaiKhoanByName/:tenTaiKhoan',TaiKhoan.timTaiKhoanTheoTen);
module.exports = router;