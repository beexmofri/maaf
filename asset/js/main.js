/*
Judul Project : Main Yuk!
Deskripsi : Main Yuk! adalah sebuah permainan seberapa sayang pacar kita. Main Yuk!
            dibuat dengan menggunakan Jquery.
Pembuat : Muhammad Surya Jayadiprana
Disclaimer : Tolong jangan hapus bagian ini, karena menandakan anda mengsupport
            developer lokal. Terima kasih
*/

// Dialog
$(document).on('click', '#tombolPopup', function (e) {
    e.preventDefault();
    Swal.fire({
        icon: 'info',
        title: 'Halo sayang, aku mau minta maaf yang tulus ke kamu',
        text: 'Maafin aku suka nyepelein hal kecil yang gak kamu suka, aku juga minta maaf belum bisa menuhin ekspetasi kamu. Dan semoga dengan ini bisa ngilangin rasa malas/bosen ke aku :)',
        showClass: {
            popup: 'animate__animated animate__tada'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    }).then(() => {
        Swal.fire({
            title: 'Harapan aku, kamu bisa nerima yang aku sampain',
            text: 'Kamu juga pasti tau, kalo aku selalu punya niat buat hubungan ini bisa sampai tua, makanya bakalan aku perjuangin terus mau gimanapun caranya',
            showClass: {
                popup: 'animate__animated animate__jackInTheBox'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        }).then(() => {
            Swal.fire({
                icon: 'error',
                title: 'Semoga Iya Kamu Berpikir Seperti Itu Juga',
                showClass: {
                    popup: 'animate__animated animate__jackInTheBox'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            })
                }).then(
                    function () {
                        const nama = 'Kamu';
                        console.log(nama);
                        Swal.fire({
                            title: nama + ' ' + 'mau sama aku terus kan?',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Iya',
                            cancelButtonText: 'Enggak',
                            showClass: {
                                popup: 'animate__animated animate__jackInTheBox'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOut'
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Makasih ya sayang ',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then(() => {
                                    Swal.queue([{
                                        title: 'Berpa banyak' + ' ' + nama + ' ' + 'mau sama aku terus?',
                                        confirmButtonText: 'Submit',
                                        showCancelButton: true,
                                        text: 'Coba isi pengen tau seberapa mau kamu sama aku terus',
                                        showClass: {
                                            popup: 'animate__animated animate__jackInTheBox'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOut'
                                        },
                                        showLoaderOnConfirm: true,
                                        input: 'range',
                                        inputAttributes: {
                                            min: 10,
                                            max: 100,
                                            step: 10,
                                            class: "form-range"
                                        },
                                        inputValue: 20,
                                        preConfirm: function (value) {
                                            Swal.insertQueueStep({
                                                title: 'Makasih yaa dapet nilai segitu' + ' ' + value + '%',
                                                icon: "info",
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            })
                                        },
                                        allowOutsideClick: () => !Swal.isLoading()
                                    }]).then(() => {
                                        Swal.fire({
                                            title: ' ' + nama + ' ' + 'sayang sama aku gak?',
                                            icon: 'question',
                                            type: 'question',
                                            showClass: {
                                                popup: 'animate__animated animate__jackInTheBox'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut'
                                            },
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Sayang banget',
                                            cancelButtonText: 'Enggak'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire({
                                                    title: 'Sama aku juga sayang banget sama' + ' ' + nama,
                                                    icon: 'info',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then(() => {
                                                    Swal.fire({
                                                        title: 'Terakhir nih',
                                                        icon: 'info',
                                                        text: 'Langsung klik oke aja ya!',
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#lope").removeClass("tulisan");
                                                        $.playSound('asset/audio/mine.mp3');
                                                        confetti.start();
                                                    })
                                                })
                                            } else {
                                                Swal.fire({
                                                    title: 'Yaaah :(',
                                                }).then(() => {
                                                    Swal.fire({
                                                        imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                        imageHeight: 300,
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("body,html").css("background-color", "#2d3436");
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#potek").removeClass("tulisan");
                                                        $(document).ready(function () {
                                                            var canvas = $('#canvas')[0];
                                                            canvas.width = window.innerWidth;
                                                            canvas.height = window.innerHeight;
                                                            if (canvas.getContext) {
                                                                var ctx = canvas.getContext('2d');
                                                                var w = canvas.width;
                                                                var h = canvas.height;
                                                                ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                ctx.lineWidth = 1;
                                                                ctx.lineCap = 'round';
                                                                var init = [];
                                                                var maxParts = 1000;
                                                                for (var a = 0; a < maxParts; a++) {
                                                                    init.push({
                                                                        x: Math.random() * w,
                                                                        y: Math.random() * h,
                                                                        l: Math.random() * 1,
                                                                        xs: -4 + Math.random() * 4 + 2,
                                                                        ys: Math.random() * 10 + 10
                                                                    })
                                                                }
                                                                var particles = [];
                                                                for (var b = 0; b < maxParts; b++) {
                                                                    particles[b] = init[b];
                                                                }

                                                                function draw() {
                                                                    ctx.clearRect(0, 0, w, h);
                                                                    for (var c = 0; c < particles.length; c++) {
                                                                        var p = particles[c];
                                                                        ctx.beginPath();
                                                                        ctx.moveTo(p.x, p.y);
                                                                        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                        ctx.stroke();
                                                                    }
                                                                    move();
                                                                }

                                                                function move() {
                                                                    for (var b = 0; b < particles.length; b++) {
                                                                        var p = particles[b];
                                                                        p.x += p.xs;
                                                                        p.y += p.ys;
                                                                        if (p.x > w || p.y > h) {
                                                                            p.x = Math.random() * w;
                                                                            p.y = -20;
                                                                        }
                                                                    }
                                                                }
                                                                setInterval(draw, 30);
                                                            }
                                                        })
                                                        $.playSound('asset/audio/sakit.mp3');
                                                    })
                                                })
                                            }
                                        })
                                    })
                                })
                            } else {
                                Swal.fire({
                                    title: 'Beneran? Aku tanya sekali lagi nih. Kamu mau sama aku terus?',
                                    icon: 'question',
                                    text: 'Coba jawab yang bener',
                                    showCancelButton: true,
                                    confirmButtonText: 'Beneran, enggak',
                                    cancelButtonText: 'Ya mau lah',
                                    confirmButtonColor: '#d33',
                                    cancelButtonColor: '#3085d6',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire({
                                            title: 'Yaaah :(',
                                        }).then(() => {
                                            Swal.fire({
                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                imageHeight: 300,
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            }).then(() => {
                                                $("body,html").css("background-color", "#2d3436");
                                                $("#tombolPopup").remove();
                                                $("#bubble").remove();
                                                $("#potek").removeClass("tulisan");
                                                $(document).ready(function () {
                                                    var canvas = $('#canvas')[0];
                                                    canvas.width = window.innerWidth;
                                                    canvas.height = window.innerHeight;
                                                    if (canvas.getContext) {
                                                        var ctx = canvas.getContext('2d');
                                                        var w = canvas.width;
                                                        var h = canvas.height;
                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                        ctx.lineWidth = 1;
                                                        ctx.lineCap = 'round';
                                                        var init = [];
                                                        var maxParts = 1000;
                                                        for (var a = 0; a < maxParts; a++) {
                                                            init.push({
                                                                x: Math.random() * w,
                                                                y: Math.random() * h,
                                                                l: Math.random() * 1,
                                                                xs: -4 + Math.random() * 4 + 2,
                                                                ys: Math.random() * 10 + 10
                                                            })
                                                        }
                                                        var particles = [];
                                                        for (var b = 0; b < maxParts; b++) {
                                                            particles[b] = init[b];
                                                        }

                                                        function draw() {
                                                            ctx.clearRect(0, 0, w, h);
                                                            for (var c = 0; c < particles.length; c++) {
                                                                var p = particles[c];
                                                                ctx.beginPath();
                                                                ctx.moveTo(p.x, p.y);
                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                ctx.stroke();
                                                            }
                                                            move();
                                                        }

                                                        function move() {
                                                            for (var b = 0; b < particles.length; b++) {
                                                                var p = particles[b];
                                                                p.x += p.xs;
                                                                p.y += p.ys;
                                                                if (p.x > w || p.y > h) {
                                                                    p.x = Math.random() * w;
                                                                    p.y = -20;
                                                                }
                                                            }
                                                        }
                                                        setInterval(draw, 30);
                                                    }
                                                })
                                                $.playSound('asset/audio/sakit.mp3');
                                            })
                                        })
                                    } else {
                                        Swal.fire({
                                            title: 'Makasih ya sayang'
                                        }).then(() => {
                                            Swal.queue([{
                                                title: 'Berpa banyak' + ' ' + nama + ' ' + 'mau sama aku terus?',
                                                confirmButtonText: 'Submit',
                                                showCancelButton: true,
                                                text: 'Coba isi pengen tau seberapa sayang kamu ke aku',
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                },
                                                showLoaderOnConfirm: true,
                                                input: 'range',
                                                inputAttributes: {
                                                    min: 10,
                                                    max: 100,
                                                    step: 10,
                                                    class: "form-range"
                                                },
                                                inputValue: 15,
                                                preConfirm: function (value) {
                                                    Swal.insertQueueStep({
                                                        title: 'Makasih yaa dapet nilai segitu' + ' ' + value + '%',
                                                        icon: "info"
                                                    })
                                                },
                                                allowOutsideClick: () => !Swal.isLoading()
                                            }]).then(() => {
                                                Swal.fire({
                                                    title: ' ' + nama + ' ' + 'sayang sama aku gak?',
                                                    icon: 'question',
                                                    type: 'question',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Sayang banget',
                                                    cancelButtonText: 'Enggak',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire({
                                                            title: 'Sama aku juga sayang sama' + ' ' + nama,
                                                            icon: 'info',
                                                            showClass: {
                                                                popup: 'animate__animated animate__jackInTheBox'
                                                            },
                                                            hideClass: {
                                                                popup: 'animate__animated animate__fadeOut'
                                                            }
                                                        }).then(() => {
                                                            Swal.fire({
                                                                title: 'Terakhir nih',
                                                                icon: 'info',
                                                                text: 'Langsung klik oke aja ya!',
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#lope").removeClass("tulisan");
                                                                $.playSound('asset/audio/mine.mp3');
                                                                confetti.start();
                                                            })
                                                        })
                                                    } else {
                                                        Swal.fire({
                                                            title: 'Yaaah :(',
                                                        }).then(() => {
                                                            Swal.fire({
                                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                                imageHeight: 300,
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("body,html").css("background-color", "#2d3436");
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#potek").removeClass("tulisan");
                                                                $(document).ready(function () {
                                                                    var canvas = $('#canvas')[0];
                                                                    canvas.width = window.innerWidth;
                                                                    canvas.height = window.innerHeight;
                                                                    if (canvas.getContext) {
                                                                        var ctx = canvas.getContext('2d');
                                                                        var w = canvas.width;
                                                                        var h = canvas.height;
                                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                        ctx.lineWidth = 1;
                                                                        ctx.lineCap = 'round';
                                                                        var init = [];
                                                                        var maxParts = 1000;
                                                                        for (var a = 0; a < maxParts; a++) {
                                                                            init.push({
                                                                                x: Math.random() * w,
                                                                                y: Math.random() * h,
                                                                                l: Math.random() * 1,
                                                                                xs: -4 + Math.random() * 4 + 2,
                                                                                ys: Math.random() * 10 + 10
                                                                            })
                                                                        }
                                                                        var particles = [];
                                                                        for (var b = 0; b < maxParts; b++) {
                                                                            particles[b] = init[b];
                                                                        }

                                                                        function draw() {
                                                                            ctx.clearRect(0, 0, w, h);
                                                                            for (var c = 0; c < particles.length; c++) {
                                                                                var p = particles[c];
                                                                                ctx.beginPath();
                                                                                ctx.moveTo(p.x, p.y);
                                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                                ctx.stroke();
                                                                            }
                                                                            move();
                                                                        }

                                                                        function move() {
                                                                            for (var b = 0; b < particles.length; b++) {
                                                                                var p = particles[b];
                                                                                p.x += p.xs;
                                                                                p.y += p.ys;
                                                                                if (p.x > w || p.y > h) {
                                                                                    p.x = Math.random() * w;
                                                                                    p.y = -20;
                                                                                }
                                                                            }
                                                                        }
                                                                        setInterval(draw, 30);
                                                                    }
                                                                })
                                                                $.playSound('asset/audio/sakit.mp3');
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }
                )
            })
        });