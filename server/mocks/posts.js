module.exports = function(app) {
    var express = require('express');
    var postsRouter = express.Router();

    postsRouter.get('/', function(req, res) {
        res.send([{
            title: 'First',
            content: 'First post'
        }, {
            title: 'Second',
            content: 'Second post'
        }, {
            title: 'Third',
            content: 'Third post'
        }]);
    });

    postsRouter.post('/', function(req, res) {
        res.status(201).end();
    });

    postsRouter.put('/:id', function(req, res) {
        res.send({
            'posts': {
                id: req.params.id
            }
        });
    });

    postsRouter.delete('/:id', function(req, res) {
        res.status(204).end();
    });

    app.use('/api/posts', postsRouter);
};