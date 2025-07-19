function errorHandler(err, req, res, next) {
    console.error(err.stack);
    
    // Handle 404 error
    if (err.status === 404) {
        return res.status(404).send({ error: 'We think you are lost!' });
    } 
    
    // Handle 401 error
    if (err.status === 401) {
        return res.status(401).send({ error: 'Unauthorized!' });
    }
    
    // Handle 403 error
    if (err.status === 403) {
        return res.status(403).send({ error: 'Forbidden!' });
    }

    res.status(500).send({ error: 'Something went wrong!' });
}

module.exports = errorHandler;