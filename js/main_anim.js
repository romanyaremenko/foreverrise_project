// $(window).on('load', function () {
//     // $("#preload").fadeOut(1750);
//
//
// });
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh)
});

function animaJs () {
    var winW = $(window).width();
    function e() {
        T.reversed(),
            TweenMax.from(P, 1, { delay: 2.2, x: 80, opacity: 0, ease: "power4.out" }),
            TweenMax.from(q, 1, { delay: 2.2, y: -80, opacity: 0, ease: "power4.out" }),
            TweenMax.from(L, 1, { delay: 2.2, x: -80, opacity: 0, ease: "power4.out" }),
            TweenMax.from(D, 1, { delay: 1.6, opacity: 0, y: 40, ease: "power4.out" }),
            TweenMax.from(N, 1, { delay: 1.8, opacity: 0, y: 20, ease: "power4.out" }),
            TweenMax.from(V, 1, { delay: 2, x: 40, opacity: 0, duration: 2, ease: "back.out(1.4)" }),
            TweenMax.from(Y, 1, { delay: 2, x: -40, opacity: 0, duration: 2, ease: "back.out(1.4)" });
    }
    function a() {
        TweenMax.from(A, 1.7, { delay: 1.4, y: 180, opacity: 0, ease: "back.out(4)" }),
            TweenMax.from(j, 1, { delay: 1.6, opacity: 0, y: 40, ease: "expo.out" }),
            TweenMax.from(z, 1.32, { delay: 0.7, opacity: 0, y: 40, ease: "back.out(2)" });
    }
    function o() {
        TweenMax.from(E, 1, { delay: 1.6, opacity: 0, y: 40, duration: 2, ease: "expo.out" }),
            TweenMax.from(I, 1, { delay: 1.8, opacity: 0, y: 60, duration: 2, ease: "expo.out" }),
            TweenMax.from(X, 1, { delay: 2, opacity: 0, y: 40, duration: 2, ease: "expo.out" }),
            TweenMax.staggerFrom(
                H,
                0.7,
                {
                    delay: 1.4,
                    cycle: {
                        opacity: [0],
                        z: 2,
                        y: [150],
                        ease: function (e) {
                            return Back.easeOut.config(0.09 * e);
                        },
                    },
                },
                0.09
            ),
            TweenMax.staggerFrom(
                R,
                0.7,
                {
                    delay: 2.1,
                    cycle: {
                        opacity: [0],
                        x: [-20],
                        ease: function (e) {
                            return Back.easeOut.config(0.05 * e);
                        },
                    },
                },
                0.09
            ),
            TweenMax.staggerFrom(
                U,
                0.7,
                {
                    delay: 2.4,
                    cycle: {
                        opacity: [0],
                        x: [-20],
                        ease: function (e) {
                            return Back.easeOut.config(0.12 * e);
                        },
                    },
                },
                0.1
            ),
            TweenMax.from(G, 1, { delay: 2.2, opacity: 0, y: 40, duration: 2, ease: "expo.out" });
    }
    function t() {
        TweenMax.from(J, 1, { delay: 1.6, opacity: 0, y: 40, duration: 2, ease: "expo.out" }),
            TweenMax.from(K, 1, { delay: 1.8, opacity: 0, y: 60, duration: 2, ease: "expo.out" }),
            TweenMax.from(Q, 1, { delay: 1.8, opacity: 0, y: 140, ease: "expo.out" }),
            TweenMax.staggerFrom(W, 1.7, { delay: 2.1, opacity: 0, y: 60, ease: "expo.out" }),
            TweenMax.staggerFrom(
                Z,
                1.2,
                {
                    delay: 1.8,
                    cycle: {
                        opacity: [0],
                        y: [50],
                        ease: function (e) {
                            return Back.easeOut.config(0.2 * e);
                        },
                    },
                },
                0.09
            ),
            TweenMax.staggerFrom(ee, 1, { delay: 2, opacity: 0, x: 80, duration: 2, ease: "expo.out" }, 0.09),
            TweenMax.from(ae, 1, { delay: 2.2, opacity: 0, x: -80, duration: 2, ease: "expo.out" });
    }
    function n() {
        TweenMax.from(oe, 1, { delay: 2, opacity: 0, y: 40, duration: 2, ease: "expo.out" }),
            TweenMax.from(te, 1, { delay: 2, opacity: 0, y: 60, duration: 2, ease: "expo.out" }),
            TweenMax.from(ne, 1, { delay: 2.4, opacity: 0, x: 80, ease: "expo.out" }, 0.05),
            TweenMax.from(se, 1, { delay: 1.8, opacity: 0, y: 240, ease: "expo.out" }),
            TweenMax.staggerFrom(
                ie,
                1.2,
                {
                    delay: 1.8,
                    cycle: {
                        opacity: [0],
                        y: [50],
                        ease: function (e) {
                            return Back.easeOut.config(0.2 * e);
                        },
                    },
                },
                0.09
            ),
            TweenMax.from(re, 1, { delay: 3, opacity: 0, y: 80, ease: "expo.out" }, 0.09),
            TweenMax.from(ce, 1, { delay: 2.8, opacity: 0, y: 90, ease: "expo.out" }, 0.09),
            TweenMax.from(le, 1, { delay: 2, opacity: 0, x: 4, ease: "expo.out" }),
            TweenMax.from(ue, 1, { delay: 2, opacity: 0, x: -40, ease: "expo.out" });
    }
    function s() {
        TweenMax.from(de, 1.5, { delay: 1.8, opacity: 0, y: 70, ease: "expo.out" }),
            TweenMax.from(pe, 1.7, { delay: 1.7, opacity: 0, y: 80, duration: 2, ease: "expo.out" }),
            TweenMax.from(ge, 1.4, { delay: 1.7, y: 180, opacity: 0, ease: "back.out(2)" }),
            TweenMax.from(ye, 1.5, { delay: 1.7, opacity: 0, x: 60, ease: "expo.out" }),
            TweenMax.from(me, 1.5, { delay: 1.7, opacity: 0, x: -60, ease: "expo.out" });
    }
    function sd() {
        TweenMax.staggerFrom(
            ".page-team .team-it",
            1,
            {
                delay: 2.2,
                cycle: {
                    opacity: [0],
                    y: [-80],
                    ease: function (e) {
                        return Back.easeOut.config(0.7 * e);
                    },
                },
            },
            0.06
        )
        TweenMax.to(".page-team .team-it", 0.5, {delay: 4, className: "+=shadow" }, 0.05);
    }
    function i() {
        TweenMax.from(fe, 2, { opacity: 0, y: 140, ease: "expo.out" });
    }
    function c() {

        TweenMax.staggerFrom(
            $e,
            1,
            {
                delay: 2.2,
                cycle: {
                    opacity: [0],
                    x: [-80],
                    ease: function (e) {
                        return Back.easeOut.config(0.7 * e);
                    },
                },
            },
            0.06
        ),
            TweenMax.staggerFrom(
                we,
                0.7,
                {
                    delay: 3.2,
                    cycle: {
                        opacity: [0],
                        y: [10],
                        ease: function (e) {
                            return Back.easeOut.config(0.8 * e);
                        },
                    },
                },
                0.08
            ),
            TweenMax.from(xe, 1.5, {delay: 3.3, opacity: 0, y: 40, ease: "expo.out"});

    }
    function r() {
        TweenMax.staggerFrom(ve, 2, { delay: 2.4, ease: Back.easeOut.config(0.05), opacity: 0, y: 40 }),
            TweenMax.from(Te, 1, { delay: 1.8, ease: Back.easeOut.config(0.05), opacity: 0, y: 40 }),
            TweenMax.from(he, 1, { delay: 2.1, ease: Back.easeOut.config(0.05), opacity: 0, y: 40 }),
            TweenMax.from(be, 1.5, { delay: 1.2, ease: Sine.easeInOut, opacity: 0 }),
            TweenMax.from(Me, 1.5, { delay: 1.2, ease: Sine.easeInOut, opacity: 0, y: 50 });
    }
    function l() {
        TweenMax.from(_e, 2, { delay: 1.8, opacity: 0, y: 80, ease: Back.easeOut.config(0.05) }),
            TweenMax.from(ke, 2, { delay: 2, opacity: 0, y: 80, ease: Back.easeOut.config(0.05) }),
            TweenMax.from(Be, 2.2, { delay: 2.2, opacity: 0, y: 80, ease: Back.easeOut.config(0.05) }),
            TweenMax.from(Ce, 2.2, { delay: 2.4, opacity: 0, x: -80, ease: Back.easeOut.config(0.05) }),
            TweenMax.from(Oe, 2.2, { delay: 2.6, opacity: 0, x: -80, ease: Back.easeOut.config(0.05) });
    }
    function u(e, a) {
        Se = !0;
        var o = Pe - e,
            t = Pe;
        if (((Pe = e), $(".page").removeClass("active small previous"), $(".trigger_page-" + e).addClass("active"), $(".nav-btn").removeClass("active"), $(".nav-page" + e).addClass("active"), e > 1)) {
            if (($(".trigger_page-" + (e + 1)).addClass("previous"), a)) {
                $(".trigger_page-" + (e - 1)).hide();
                var n = e;
                setTimeout(function () {
                    $(".trigger_page-" + (n - 1)).show();
                }, 600);
            }
            for (; --e; ) $(".trigger_page-" + e).addClass("small");
        }
        if (o > 1) for (var s = e + 1; s < t; s++) $(".trigger_page-" + s + " .half").css("transition", "transform .7s ease-out");
        setTimeout(function () {
            Se = !1;
        }, 1e3);
    }
    function d() {
        var e = $(window).width();
        Pe > 1 &&
        e > 991 &&
        (u(--Pe, !0),
            y(),
            $("#currentPage").text(Pe),
            $(".scroll-btn").css("visibility", "visible"),
            $(".active .wrapp-content").addClass("do-transition"),
            setTimeout(function () {
                $(".active .wrapp-content").removeClass("do-transition");
            }, 600)),
            12 === Pe ? $(".scroll-btn").css("visibility", "hidden") : $(".scroll-btn").css("visibility", "visible");
    }
    function p() {
        var e = $(window).width();
        Pe < Fe &&
        e > 991 &&
        (u(++Pe),
            y(),
            $("#currentPage").text(Pe),
            $(".active .wrapp-content").addClass("do-transition"),
            setTimeout(function () {
                $(".active .wrapp-content").removeClass("do-transition");
            }, 600)),
            12 === Pe ? $(".scroll-btn").css("visibility", "hidden") : $(".scroll-btn").css("visibility", "visible");
    }
    function y() {
        var u = $(".scroll-btn--title"),
            d = $(".header .logo");
        1 === Pe &&
        (u.text("Product"),
            d.addClass("hide-logo"),
            setTimeout(function () {
                d.attr("src", "materials/photo/logo-header.svg").removeClass("hide-logo rz");
            }, 1500),
            $(".page-2").addClass("previous")),
        Pe > 1 &&
        !d.hasClass("rz") &&
        (d.addClass("hide-logo rz"),
            setTimeout(function () {
                d.attr("src", "materials/photo/foreverise_logo.svg").removeClass("hide-logo");
            }, 1e3)),
        2 === Pe &&
        (u.text("How it works"),
            setTimeout(function () {
                e();
            }, 100)),
        3 === Pe &&
        (u.text("Process scheme"),
            setTimeout(function () {
                a();
            }, 100)),
        4 === Pe &&
        (u.text("Income calculator"),
            setTimeout(function () {
                o();
            }, 100)),
        5 === Pe &&
        (u.text("How to start"),
            setTimeout(function () {
                t();
            }, 100)),
        6 === Pe &&
        (u.text("About"),
            setTimeout(function () {
                n();
            }, 100)),
        7 === Pe &&
        (u.text("Team"),
            setTimeout(function () {
                s();
            }, 100)),
        8 === Pe &&
        (u.text("Tokenomics"),
            setTimeout(function () {
                sd();
            }, 100)),
        9 === Pe &&
        (u.text("Roadmap"),
            setTimeout(function () {
                i();
            }, 100)),
        10 === Pe &&
        (u.text("Contract address"),
            setTimeout(function () {
                c();
            }, 100)),
        11 === Pe &&
        (u.text("Disclaimer"),
            setTimeout(function () {
                r();
            }, 100)),
        12 === Pe &&
        (u.text("Disclaimer"),
            setTimeout(function () {
                l();
            }, 100)),
            Pe >= 2 && Pe <= 6 ? $(".nav-btn.btn-custom").addClass("color-pink") : $(".nav-btn.btn-custom").removeClass("color-pink");
    }
    var m = $("#cursor"),
        g = $("#aura"),
        f = 0,
        x = 0,
        w = 0,
        v = 0;
    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            (f += (w - f) / 9), (x += (v - x) / 9), TweenMax.set(g, { css: { left: f - 12, top: x - 12 } }), TweenMax.set(m, { css: { left: w, top: v } });
        },
    }),
        $(document).on("mousemove", function (e) {
            (w = e.clientX), (v = e.clientY);
        }),
        $("li, a").on("mouseenter", function () {
            m.addClass("active"), g.addClass("active");
        }),
        $("li, a").on("mouseleave", function () {
            m.removeClass("active"), g.removeClass("active");
        });
    var T = new TimelineMax({ paused: !0, reversed: !0 }),
        h = new TimelineMax(),
        M = $(window).width(),
        b = $("body"),
        _ = $("#logo"),
        k = $(".logo_layer"),
        C = $(".logo__text span"),
        O = $(".logo-text .letter_layer"),
        B = $(".page-1 .btn"),
        F = $(".header .logo-wrapp"),
        S = $(".header_navi li");
    (scen1_sideNav = $(".side-nav .nav-btn")),
        (scen1_shareBtn = $(".share_it")),
        (scen1_scrollDownBtn = $(".scroll-btn")),
        T.reversed() ? T.play() : T.reverse(),
        T.staggerTo(b, 0.05, { delay: 2.5, className: "-=page_load" }, 0.05)
            .from(_, 0.9, { delay: 1.2, yPercent: -50, opacity: 0, duration: 2, ease: Back.easeOut.config(1.7) })
            .staggerFrom(
                C,
                0.7,
                {
                    delay: 0.2,
                    cycle: {
                        opacity: [0],
                        y: [48],
                        ease: function (e) {
                            return Back.easeOut.config(0.3 * e);
                        },
                    },
                },
                0.08
            )
            .staggerFrom(
                O,
                0.5,
                {
                    cycle: {
                        opacity: [0],
                        ease: function (e) {
                            return Back.easeOut.config(0.05 * e);
                        },
                    },
                },
                0.02
            )
            .staggerTo(C, 0.05, { className: "+=neon_anim" }, 0.05)
            .staggerTo(k, 0.5, { className: "+=anim" }, 0.05),
        TweenMax.from(k, 0.5, { delay: 5, opacity: 0, ease: "expo.out" }),
        TweenMax.from(B, 1, { delay: 5.2, y: 50, opacity: 0, duration: 2, ease: "power4" }),
        TweenMax.from(scen1_scrollDownBtn, 1, { delay: 5.5, y: 50, opacity: 0, duration: 2, ease: "power4" }),
    M > 990 &&
    (TweenMax.from(F, 1, { delay: 3.7, x: -150, opacity: 0, duration: 2, ease: "power4" }),
        TweenMax.staggerFrom(
            S,
            0.7,
            {
                delay: 3.7,
                cycle: {
                    opacity: [0],
                    x: [20],
                    ease: function (e) {
                        return Back.easeOut.config(0.05 * e);
                    },
                },
            },
            0.05
        ),
        TweenMax.staggerFrom(
            scen1_sideNav,
            1,
            {
                delay: 3.7,
                cycle: {
                    opacity: [0],
                    y: [-50],
                    ease: function (e) {
                        return Back.easeOut.config(0.09 * e);
                    },
                },
            },
            0.05
        )),
        h
            .to(scen1_shareBtn, 0.5, { css: { className: "+=reanim" } })
            .staggerFrom(
                scen1_shareBtn,
                1,
                {
                    delay: 3.7,
                    cycle: {
                        opacity: [0],
                        scale: [1.2],
                        ease: function (e) {
                            return Back.easeOut.config(0.9 * e);
                        },
                    },
                },
                0.09
            )
            .to(scen1_shareBtn, 0.25, { css: { className: "-=reanim" } });
    var P = $(".grup_it--1"),
        q = $(".grup_it--2"),
        L = $(".grup_it--3"),
        D = $(".page-2 .h2"),
        N = $(".page-2 .text"),
        V = $(".page-2 .google-play"),
        Y = $(".page-2 .app-store"),
        j = $(".page-3 .h2"),
        z = $(".page-3 .btn"),
        A = $(".page-3 .video-container"),
        E = $(".page-4 .h2"),
        I = $(".page-4 .h4"),
        H = $(".step_photo"),
        R = $(".step_desc"),
        U = $(".step_desc .icon_arr"),
        X = $(".page-4 .bottom_info"),
        G = $(".page-4 .text-small"),
        J = $(".page-5 .h2"),
        K = $(".page-5 .h4"),
        Q = $(".page-5 .phone"),
        W = $(".progress_bar"),
        Z = $(".range_it"),
        ee = $(".page-5 .estimated_total"),
        ae = $(".page-5 .btn"),
        oe = $(".page-6 .h2"),
        te = $(".page-6 .h4"),
        ne = $(".page-6 .text"),
        se = $(".page-6 .phone"),
        ie = $(".estimated_butons a"),
        ce = $(".page-6 .estimated_info"),
        re = $(".page-6 .estimated_total"),
        le = $(".page-6 .btn"),
        ue = $(".page-6 .logo"),
        de = $(".page-7 .h2"),
        pe = $(".page-7 .h3"),
        ye = $(".page-7 .text_it--1"),
        me = $(".page-7 .text_it--2"),
        ge = $(".page-7 .video"),
        fe = $(".page-8 img"),
        xe = $(".page-9 .h2"),
        $e = $(".calendar_month"),
        we = $(".calendar_cell"),
        ve = $(".page-10 .h2"),
        Te = $(".page-10 .grup-input"),
        he = $(".page-10 .btn"),
        Me = $(".page-10 .marquee"),
        be = $(".page-10 .bg"),
        _e = $(".logo_be-part svg"),
        ke = $(".page-11 .text-big"),
        ke = $(".page-11 .text-big"),
        Ce = $(".page-11 .h5"),
        Oe = $(".page-11 .text-norm"),
        Be = $(".page-11 .btn"),
        Fe = $(".page").length,
        Se = !1,
        Pe = 1;
    $("#currentPage").text(Pe), $("#lastPage").text(Fe);
    $(document).on("mousewheel DOMMouseScroll touchmove", function (e) {
        clearTimeout(void 0);
        var a = $(window).width();
        if (
            ((Trigger = setTimeout(function () {
                !Se && a > 991 && (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? d() : p());
                // console.log('scroll true')
            }, 1000)),
            a < 991)
        ) {
            var o = window.pageYOffset,
                t = document.querySelector(".header"),
                n = document.querySelector(".header .logo"),
                s = document.querySelector(".side-share");
            document.querySelector(".side-share.scroll");
            window.onscroll = function () {
                var e = window.pageYOffset,
                    a = document.querySelector(".page-1").offsetHeight,
                    i = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
                o > e ? (t.style.transform = "translate3d(0, 0, 0)") : o < e && !document.querySelector(".header_navi").classList.contains("active") && i > 250 && (t.style.transform = "translate3d(0, -200px, 0)"),
                    o > a
                        ? (s.classList.add("scroll"), n.setAttribute("src", "materials/photo/foreverise_logo.svg"))
                        : (s.removeAttribute("style"), document.querySelector(".side-share").classList.remove("scroll"), n.setAttribute("src", "materials/photo/logo-header.svg")),
                    o > e && o > a && s.classList.contains("scroll")
                        ? ((s.style.transform = "translate3d(0, 0, 0)"), (s.style.visibility = "visible"))
                        : o < e && o > a && s.classList.contains("scroll") && (s.style.transform = "translate3d(0, 120px, 0)"),
                    (o = e);
            };
        }
    }),
        $(document).on("click", ".scroll-btn", function () {
            var e = $(window).width();
            Se || ($(this).hasClass("up") ? e > 990 && d() : e > 990 && p(), e < 991 && $("html, body").animate({ scrollTop: $(".page-2").offset().top }, "slow"));
        }),
        $(document).on("keydown", function (e) {
            Se || (38 === e.which ? d() : 40 === e.which && p());
        }),
        $(document).on("click", ".nav-btn:not(.active)", function () {
            var e = $(window).width(),
                a = $(this).attr("data-target");
            Se ||
            (u(+$(this).attr("data-target")),
                $("#currentPage").text(Pe),
            e < 990 &&
            ($(".showMenu_js").removeClass("open"),
                $(".header_navi").removeClass("active"),
                $("body").css("overflow-y", "auto"),
                setTimeout(function () {
                    // console.log('presale 4');
                    // console.log($(".trigger_page-" + a));
                    var scrolToEl = $(".trigger_page-" + a).offset().top;
                    $("html, body").animate({
                        scrollTop:
                            scrolToEl + 'px'
                    }, "slow");
                }, 200)),
                12 === Pe ? $(".scroll-btn").css("visibility", "hidden") : $(".scroll-btn").css("visibility", "visible"),
            e > 991 && y());
        }),
        $(document).on("click", ".logo_to-top_js", function () {
            var e = $(window).width(),
                a = $(this).attr("data-target");
            Se ||
            (u(+$(this).attr("data-target")),
                $("#currentPage").text(Pe),
            e < 990 &&
            ($(".showMenu_js").removeClass("open"),
                $(".header_navi").removeClass("active"),
                $("body").css("overflow-y", "auto"),
                setTimeout(function () {
                    $("html, body").animate({ scrollTop: $(".page-" + a).offset().top }, "slow");
                }, 200)),
                12 === Pe ? $(".scroll-btn").css("visibility", "hidden") : $(".scroll-btn").css("visibility", "visible"),
            e > 991 && y());
        }),
        $(document).on("click", ".btn_to-top_js", function (e) {
            e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, "slow");
        });
}




if(document.fonts) {
    const notoSansRegular = new FontFace('Foreverise_1-Regular', 'url(fonts/Foreverise_1-Regular.ttf)');
    document.fonts.add(notoSansRegular);
    console.info('Current status', notoSansRegular.status);
    notoSansRegular.load();
    document.fonts.ready.then((fontFaceSet) => {
        console.log(fontFaceSet.size, 'FontFaces loaded.');
        $(document).ready(function () {


            function preload() {
                // animaJs()
                // $('.preload').fadeTo("fast", 1000);
                box = document.querySelector('.preload');
                if (box.classList.contains('hidden')) {
                    box.classList.remove('hidden');
                    setTimeout(function () {
                        box.classList.remove('visuallyhidden');
                    }, 20);
                } else {
                    box.classList.add('visuallyhidden');
                    box.addEventListener('transitionend', function(e) {
                        box.classList.add('hidden');
                    }, {
                        capture: false,
                        once: true,
                        passive: false
                    });
                }
            }
            setTimeout(preload, 3000);

            function preloadAnima() {
                animaJs()
            }
            setTimeout(preloadAnima, 500);
        })
    });

} else {
    console.error('Sorry, unsupported browser');
}



function loadLoopVideo() {
    (loopVideo[0].src = "video/UI_Full_Loop_460x996_x2.mp4"), loopVideo[0].load(), loopVideo[0].play();
}

// $(document).ready(function (){
//
// });
$(document).ready();

var loopVideo = $("#loopVideo");
$(window).load(function () {
    loadLoopVideo();
});
