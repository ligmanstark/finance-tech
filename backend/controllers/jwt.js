const Session = require('../models/sessions');
const crypto = require('crypto');  // Для генерации уникального deviceId

const createSession = async (userId, refreshToken, req) => {
    const deviceId = crypto.randomBytes(16).toString('hex');  // Генерация уникального deviceId
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);  // Пример: сессия истекает через 7 дней

    const session = new Session({
        userId,
        refreshToken,
        deviceId,
        expiresAt,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
    });

    await session.save();
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !user.comparePassword(password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    const deviceId = await createSession(user._id, refreshToken, req);

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
    });

    res.json({ accessToken, deviceId });
};

const refreshTokenHandler = async (req, res) => {
    const { deviceId } = req.body;
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken || !deviceId) {
        return res.status(401).json({ message: 'Missing token or deviceId' });
    }

    const session = await Session.findOne({ refreshToken, deviceId });

    if (!session || session.expiresAt < new Date()) {
        return res.status(401).json({ message: 'Invalid or expired session' });
    }

    const newAccessToken = generateAccessToken(session.userId);

    res.json({ accessToken: newAccessToken });
};

const logout = async (req, res) => {
    const { deviceId } = req.body;
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken || !deviceId) {
        return res.status(400).json({ message: 'Missing token or deviceId' });
    }

    await Session.deleteOne({ refreshToken, deviceId });

    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out' });
};
