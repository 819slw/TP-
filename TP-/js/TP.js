$(function(){
	$('.nav-ul li').click(function(){
		$(this).siblings('li').removeClass('active-nav');
		$(this).addClass('active-nav');
	});

    wave_animation();
    $(window).resize(function() {
        wave_animation();
    });

});

function wave_animation() {
    function e(e, t, r, o, s) {
        e.shadowBlur = 0,
        e.beginPath(),
        moveYNew1 = r,
        moveYNew2 = o,
        r *= 1,
        o *= 1;
        var w = 400;
        for (y = 24, allY = [], q = 0; y > q; q++) {
            distanceNew1 = A * (s + 1),
            distanceNew2 = A * moveYNew2;
            var m = A * q,
            u = distanceNew1 * (q - (y - 1) / 2) / 2,
            v = (distanceNew2 * (q - (y - 1) / 2) / 2, 10),
            d = 200 + v * q;
            moveYNew2 >= 0 && moveYNew2 < .01 ? l || (l = !0, i = Math.floor(5 * Math.random()) + 1, o *= i) : l = !1;
            var h = 35 * t;
            h = 1,
            r += r * q / 200,
            o += o * q / 200;
            var c = d + r + 50 - r - u,
            f = d + r + 50 - r - u,
            Y = d + r + 50 - r - u,
            p = (800 + (d - r) * s + 600) / 4,
            g = (800 + (d - r) * s + 600) / 4,
            C = d + r + r - 2.5 * r,
            F = (400 + (d - r) * s + 1e3) / 4,
            T = (400 + (d - r) * s + 1e3) / 4,
            k = d + r + 100 - r - u,
            R = d + r + 100 - r - u;
            100 > c && (c = 150),
            c > 600 && (c = 600),
            150 > f && (f = 150),
            f > 600 && (f = 600),
            150 > Y && (Y = 150),
            Y > 600 && (Y = 600),
            150 > p && (p = 150),
            p > 600 && (p = 600),
            150 > g && (g = 150),
            g > 600 && (g = 600),
            150 > C && (C = 150),
            C > 600 && (C = 600),
            150 > F && (F = 150),
            F > 600 && (F = 600),
            150 > T && (T = 150),
            T > 600 && (T = 600),
            150 > k && (k = 150),
            k > 600 && (k = 600),
            150 > R && (R = 150),
            R > 600 && (R = 600),
            allY.push([c, f, Y, p, g, C, F, T, k, R]),
            e.moveTo(0, c),
            e.bezierCurveTo((w / 2 - 5 * q + u) * x, f, w / 2 * x, Y, w * x, p),
            e.bezierCurveTo((w + w / 2) * x, p - (Y - p), (w + w / 2) * x, C, 2 * w * x, F),
            e.bezierCurveTo((2 * w + w / 2) * x, 2 * F - C, (2 * w + w / 2 + 5 * q - distanceNew1 + q * s) * x, k, 1.5 * (3 * w + 5 * q + distanceNew1) * x, R),
            e.strokeStyle = P[q],
            e.stroke(),
            e.beginPath()
        }
        r = 55 * moveYNew1,
        o = 2 * moveYNew2;
        var z;
        for (j = 0; j < N; j++) {
            0 == j ? z = (20 * t % 100 + 1) / 100 : 1 == j ? z = (250 * t % 100 + 1) / 100 : 2 == j ? z = (30 * t % 100 + 1) / 100 : 3 == j ? z = (35 * t % 100 + 1) / 100 : 4 == j ? z = (40 * t % 100 + 1) / 100 : 5 == j ? z = (45 * t % 100 + 1) / 100 : 6 == j && (z = (50 * t % 100 + 1) / 100),
            m = I[j] * A;
            var u = distanceNew1 * (I[j] - (y - 1) / 2) / 2;
            distanceNew2 * (I[j + 500] - (y - 1) / 2) / 2;
            z -= .99 * j,
            0 >= z && (z = z % 1 + 1),
            z > .95 && (z = 1);
            var B;
            I[j] < y && (0 == M[j] ? (.5 > z && (b[j] = !0), B = n({
                x: 0,
                y: allY[I[j]][0]
            },
            {
                x: w / 2 - 5 * I[j] + u,
                y: allY[I[j]][1]
            },
            {
                x: w / 2,
                y: allY[I[j]][2]
            },
            {
                x: w,
                y: allY[I[j]][3]
            },
            z), Math.floor(1 == z) && b[j] && (M[j]++, b[j] = !1)) : 1 == M[j] ? (.5 > z && (b[j] = !0), B = n({
                x: w,
                y: allY[I[j]][3]
            },
            {
                x: w + w / 2,
                y: 2 * allY[I[j]][3] - allY[I[j]][2]
            },
            {
                x: w + w / 2,
                y: allY[I[j]][5]
            },
            {
                x: 2 * w,
                y: allY[I[j]][6]
            },
            z), Math.floor(1 == z) && b[j] && (M[j]++, b[j] = !1)) : 2 == M[j] && (.5 > z && (b[j] = !0), B = n({
                x: 2 * w,
                y: allY[I[j]][6]
            },
            {
                x: 2 * w + w / 2,
                y: 2 * allY[I[j]][6] - allY[I[j]][5]
            },
            {
                x: 2 * w + w / 2 + 5 * I[j] - distanceNew1 + I[j] * s,
                y: allY[I[j]][8]
            },
            {
                x: 1.5 * (3 * w + 5 * I[j] + distanceNew1),
                y: allY[I[j]][9]
            },
            z), Math.floor(1 == z) && b[j] && (M[j] = 0, b[j] = !1, I[j] = Math.floor(Math.random() * y))), a(e, B.x, B.y, P[I]))
        }
    }
    function a(e, a, t, n) {
        // D.src = "images/spark.png";
        // var r = 16;
        // e.shadowBlur = 10,
        // e.shadowColor = n,
        // e.drawImage(D, a - r / 2 + 1, t - r / 2 + 1, r, r)
    }
    function t(a, n) {
        var r = (new Date).getTime() - n,
        o = g * r / 1e3;
        o += .01,
        a.clearRect(0, 0, h, c);
        var i = Math.sin(o),
        l = Math.sin(.37 * r / 1e3);
        e(a, 2.5 * r / 1e3, i, Math.sin(o + 2), l),
        requestAnimFrame(function() {
            t(a, n)
        })
    }
    function n(e, a, t, n, o) {
        e.x *= x,
        a.x *= x,
        t.x *= x,
        n.x *= x;
        var i = r(o, e.x, a.x, t.x, n.x),
        l = r(o, e.y, a.y, t.y, n.y);
        return {
            x: i,
            y: l
        }
    }
    function r(e, a, t, n, r) {
        var o = e * e,
        i = o * e;
        return a + (3 * -a + e * (3 * a - a * e)) * e + (3 * t + e * ( - 6 * t + 3 * t * e)) * e + (3 * n - 3 * n * e) * o + r * i
    }
    function o() {
        for (var e, a, t, n = 0; y > n; n++) 
        // e = parseInt(C + (R - C) / y * n),
        // a = parseInt(F + (z - F) / y * n),
        // t = parseInt(F + (F - z) / y * n),
        P.push("rgba(10,153,255,0.5)");
        for (var n = 0; Y > n; n++) e = parseInt(R + (T - R) / Y * n),
        // a = parseInt(z + (k - z) / Y * n),
        // t = parseInt(B + (B - k) / Y * n),
        P.push("rgba(10,153,255,0.5)");
    }
    window.requestAnimFrame = function(e) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(e) {
            window.setTimeout(e, 1e3 / 60)
        }
    } ();
    var i = 1,
    l = !1,
    s = document.getElementById("canvas"),
    w = s.getContext("2d");
    w.lineWidth = 1;
    var m = document.getElementById("banner"),
    u = getComputedStyle(m),
    v = parseInt(u.getPropertyValue("width"), 10),
    d = parseInt(u.getPropertyValue("height"), 10);
    canvas.width = v,
    canvas.height = 640;
    var h = canvas.offsetWidth,
    c = canvas.offsetHeight,
    
    f = 1300,
    x = h / f;
    1 > x && (x = 1),
    w.globalCompositeOperation = "xor";
    for (var y = 12,Y = 18,p = (new Date).getTime(), g = 1, N = 7, I = [], M = [], b = [], q = 0; N > q; q++)
     I.push(Math.floor(24 * Math.random())),
    M.push(0),
    b.push(!1);
    var A = 18,
    C = 69,
    F = 200,
    T = 190,
    k = 219,
    R = 96,
    z = 205,
    B = 163,
    P = [];
    o();
    var D = new Image;
    t(w, p)
}