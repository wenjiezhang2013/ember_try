module.exports = function(app) {
    var express = require('express');
    var postsPostRouter = express.Router();

    postsPostRouter.get('/', function(req, res) {
        res.send({
            title: 'First',
            content: 'First post'
        });
    });

    postsPostRouter.post('/', function(req, res) {
        res.status(201).end();
    });

    postsPostRouter.get('/:id', function(req, res) {
        res.send({
            'posts/post': {
                id: req.params.id
            }
        });
    });

    postsPostRouter.put('/:id', function(req, res) {
        res.send({
            'posts/post': {
                id: req.params.id
            }
        });
    });

    postsPostRouter.delete('/:id', function(req, res) {
        res.status(204).end();
    });

    app.use('/api/posts/post', postsPostRouter);
};