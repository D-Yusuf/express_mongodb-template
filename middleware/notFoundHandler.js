module.exports = (req, res, next)=>{
    try {
        return res.status(404).json({error: `${req.originalUrl} not found`})
    } catch (error) {
        next(error)
    }
}