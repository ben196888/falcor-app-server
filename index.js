const falcorExpress = require('falcor-express');
const Router = require('falcor-router');
const express = require('express');

const app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
    return new Router([
        {
            route: 'greeting',
            get: function() {
                return {
                    path: ['greeting'],
                    value: 'Hello World',
                };
            },
        },
    ]);
}));

app.use(express.static(__dirname + '/'));

const server = app.listen(3000, () =>
    console.log('Falcor app listening on Port 3000')
);
