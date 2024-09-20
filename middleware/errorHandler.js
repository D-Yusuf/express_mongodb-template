module.exports = (error, req, res, next)=>{
    try {
        return res.status(error.status || 500).json({error: error || `Internal Server Error`})
    } catch (error) {
        next(error)
    }
}