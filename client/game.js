$(function()
{
    if(!('getContext' in document.createElement('canvas'))) {
        alert('Your browser does not support canvas.');
        return false;
    }

    var url = "http://";
    var world = $(document),
        win = $(window),
        canvas = $('#world'),
        ctx = canvas[0].getContext('2d'),
        instructions = $('#instructions');

    var paddle_p1 = new Image(),
        paddle_p2 = new Image(),
        ball = new Image();

    paddle_p1.ready = false;
    paddle_p2.ready = false;
    ball.ready = false;

    paddle_p1.onload = setAssetReady;
    paddle_p2.onload = setAssetReady;
    ball.onload = setAssetReady;

    paddle_p1.src = 'img/p1.png';
    paddle_p2.src = 'img/p2.png';
    ball.src = 'img/ball.png';

    function setAssetReady() {
        this.ready = true;
    }

    ctx.fillRect(0, 0, 720, 480);
    ctx.fillStyle = "grey";
    ctx.fillText("Loading", 10, 10);
    var preloader = setInterval(preloading, 33);
    var gameloop;

    function preloading() {
        if(paddle_p1.ready) {
            clearInterval(preloader);
            gameloop = setInterval(update, 33);
        }
    }

    var paddle_p1_x = 720/2 - 100/2,
        paddle_p1_y = 0,
        paddle_p2_x = 720/2 - 100/2,
        paddle_p2_y = 450,
        ball_x = 0,
        ball_y = 0;

    function update()
    {
    //     var socket = new WebSocket("ws://localhost")
    //     socket.onopen = function() {
    //         document.addEventListener('keydown', function(event) {
    //             if(event.keyCode == 37) {
    //                 socket.send('MOVE_LEFT');
    //             } else if(event.keyCode == 39) {
    //                 socket.send('MOVE_RIGHT');
    //             }
    //         });
    //     }

    //     socket.onmessage = function(evt) {
    //         var received_msg = evt.data;
    //         // handle the parsing of the json.
    //     }

    //     socket.onclose = function(event) {
    //         ctx.fillStyle = "grey";
    //         ctx.fillRect(0, 0, 720, 480);
    //         ctx.drawImage(paddle_p1, paddle_p1_x, paddle_p1_px);
    //         ctx.drawImage(paddle_p2, paddle_p2_x, paddle_p2_y);
    //         ctx.drawImage(ball, ball_x, ball_y);
    //     }
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, 720, 480);
        ctx.drawImage(paddle_p1, paddle_p1_x, paddle_p1_y);
        ctx.drawImage(paddle_p2, paddle_p2_x, paddle_p2_y);
        ctx.drawImage(ball, ball_x, ball_y);
    }
})
