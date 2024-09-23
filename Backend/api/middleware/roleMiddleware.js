
const roleMiddleware = (role) => (req, res, next) => {

    if (req.user.rol !== role) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

module.exports = roleMiddleware;