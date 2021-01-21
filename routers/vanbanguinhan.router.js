const express = require('express');
const router = express.Router();
const VanBanGuiNhan = require('../controllers/vanbanguinhan.controller');

router.post('/themVanBanGuiNhan',VanBanGuiNhan.themVanBanGuiNhan);
router.put('/capNhatVanBanGuiNhan/:id',VanBanGuiNhan.capNhatVanBanGuiNhan);
router.get('/timVanBanGuiNhanTheoNguoiGui/:idNguoiGui',VanBanGuiNhan.timVanBanGuiNhanTheoNguoiGui);

module.exports = router;