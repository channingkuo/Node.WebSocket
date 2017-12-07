var conns = new Array();

var ws = require('ws').Server;

var server = new ws({
    port: 8080
});

server.addListener('connection', function (conn) {
    console.log('connection....');
    console.log(conn)

    conns.push(conn);

    conn.addListener('message', function (msg) {
        console.log(msg);
        for (var i = 0; i < conns.length; i++) {
            if (conns[i] != conn) {
                conns[i].send(msg);
            }
        }
    });
});

console.log('running......');
