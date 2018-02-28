const display = $('.maincontent');
const sections = $('.section');

let inScroll = false ;

const swithMenuActiveClass = sectionEq => {
    $('.fixed-menu__item').eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
}


const performanceTransition = sectionEq => {
    if (inScroll) return
    inScroll = true

    const position = (sectionEq * -100) + '%';

    display.css({
        'transform': `translateY(${position})`,
        '-webkit-transform': `translateY(${position})`
    }); 

    sections.eq(sectionEq).addClass('active')
        .siblings().removeClass('active');


    setTimeout(() => {
        inScroll = false;
        swithMenuActiveClass(sectionEq);
    }, 1300)
}



$('.wrapper').on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (deltaY > 0 && nextSection.length)  { //scrool down
        
        performanceTransition(nextSection.index());
    }

    if (deltaY < 0 && prevSection.length)  { //scrool up

        performanceTransition(prevSection.index());
    }
});