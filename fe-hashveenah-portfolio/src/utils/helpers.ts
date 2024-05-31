import { v4 as uuidv4 } from 'uuid';

// styping for swiperJS bullets and arrows
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
        height: 5vh;
        color: #3c814880;
    }
    .swiper-button-prev {
        height: 5vh;
        color: #3c814880;
    }
    .swiper-button-prev:hover {
        color: #3c8148c2;
    }
    .swiper-button-next:hover {
        color: #3c8148c2;
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

export const generateUniqueKey = (): string => {
    return uuidv4();
}

export const notAuthenticatedHandler = () => {
    const FE_URL = import.meta.env.VITE_FE_URL;
    
    console.log('feURL')
    window.open(FE_URL+'login', '_blank')?.focus();
}


