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

const difineSections = sections => {
    const activeSection = sections.filter('.active');
    return {
      activeSection: activeSection,
      nextSection: activeSection.next(),
      prevSection: activeSection.prev()
    }
}

$('.wrapper').on({
    wheel : e => {
        const deltaY = e.originalEvent.deltaY;
        const section = difineSections(sections);
    
        if (deltaY > 0 && section.nextSection.length)  { //scrool down
            
            performanceTransition(section.nextSection.index());
        }
    
        if (deltaY < 0 && section.prevSection.length)  { //scrool up
    
            performanceTransition(section.prevSection.index());
        }
    },
    touchmove: e => (e.preventDefault());
});



$(document).on('keydown', e => {
    const section = difineSections(sections);

    if(inScroll) return

    switch (e.keyCode) {
        case 40: //вверх
            if (!section.nextSection.length) return;
            performanceTransition(section.nextSection.index());
            break;
    
        case 38: //вверх
            if (!section.prevSection.length) return;
            performanceTransition(section.prevSection.index());
            break;
    }
});


$('[data-scroll-to]').on('click', e=> {

    e.preventDefault();
    const scrollData = $(e.currentTarget)
    const sectionIndex = parseInt(scrollData.attr('data-scroll-to'));

    performanceTransition(sectionIndex);
});