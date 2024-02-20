export const setPaginationStyling = () => {

    const swiperEl = document.querySelectorAll('swiper-container');

    console.log(swiperEl);

    const params = {
        injectStyles: [`
    .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
    }

    .swiper-pagination-bullet-active {
    color: #fff;
    background: #216329;
    }

    .swiper-button-next {
        color: #fff;
        background: #216329;
    }
    .swiper-button-prev{
        color: #fff;
        background: #216329;
    }
    `],
        pagination: {
            clickable: true,
            // renderBullet: function (index: number, className: string) {
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
    }

    swiperEl.forEach(container => {
        Object.assign(container!, params)
        container!.initialize();
    });
}

