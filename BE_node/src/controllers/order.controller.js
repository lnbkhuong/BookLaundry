const { Service, Order, User } = require("../database/sequelize");
const { getUserFromToken } = require("../middlewares/check-login.middleware");
var jwt = require("jsonwebtoken");
const createOrder = async (req, res, next) => {
  try {
    const { nameService, unitPrice, note } = req.body;
    const currUser = await getUserFromToken(req, res, next);
    const service = await Service.findOne({
      where: {
        nameService,
      },
      raw: true,
    });
    const newOrder = await Order.create({
      unitPrice,
      note,
      UserId: currUser.id,
      ServiceId: service.id,
    });

    return res.json({
      data: {
        newOrder,
      },
      message: "Tạo đơn hàng thành công",
    });
  } catch (error) {
    return next(error);
  }
};

const updateOneOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { unitPrice, quantity, status, note } = req.body;
    // const currUser = await getUserFromToken(req, res, next);

    const totalPrice = unitPrice * quantity;
    const updateOrder = await Order.update(
      {
        unitPrice,
        quantity,
        totalPrice,
        status,
        note,
      },
      {
        where: {
          id,
        },
        raw: true,
      }
    );

    return res.json({
      data: {
        updateOrder,
      },
      message: "Cập nhật đơn hàng thành công",
    });
  } catch (error) {
    return next(error);
  }
};

const getAllOrder = async (req, res, next) => {
  try {
    const currUser = await getUserFromToken(req, res, next);
    const { page, perPage, status } = req.query;
    const offset = (+page - 1) * +perPage;
    const limit = +perPage;
    const allOrder = await Order.findAndCountAll({
      offset,
      limit,
      where: {
        UserId: currUser.id,
        status: status,
      },
      include: [
        {
          model: User,
        },
        {
          model: Service,
        },
      ],
      // raw: true
    });
    console.log("🚀 ~ getAllOrder ~ allOrder:", allOrder)
    const { count } = allOrder;
    const totalPage = Math.ceil(count / perPage);
    return res.json({
      data: {
        allOrder: allOrder.rows,
        total: count,
        totalPage,
        page,
        perPage,
      },
    });
  } catch (error) {
    return next(error);
  }
};
const getAllOrderforAdmin = async (req, res, next) => {
  try {
    const { page, perPage, status } = req.query;
    const condition = status
      ? {
          status,
        }
      : {};
    const offset = (+page - 1) * +perPage;
    const limit = +perPage;
    const allOrder = await Order.findAndCountAll({
      offset: offset,
      limit,
      where: condition,
      include: [
        {
          model: User,
        },
        {
          model: Service,
        },
      ],
    });
    const { count } = allOrder;
    const totalPage = Math.ceil(count / perPage);
    return res.json({
      data: {
        allOrder: allOrder.rows,
        totalPage,
        page,
        perPage,
        total: count,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const getDetailOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const detailOrder = await Order.findOne({
      where: {
        id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Service,
        },
      ],
    });

    return res.json({
      data: {
        detailOrder,
      },
    });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  createOrder,
  updateOneOrder,
  getAllOrder,
  getAllOrderforAdmin,
  getDetailOrder,
};
