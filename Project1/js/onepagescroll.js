const display = $('.maincontent');
const sections = $('.section');

const performanceTransition = sectionEq => {
    const position = (sectionEq * 100) + '%';
    
    display.css({
        'transform': `translateY(${position})`,
        '-webkit-transform': `translateY(${position})`
    }); 

    sections.eq(sectionEq).addClass('active')
     .siblings().removeClass('active');
}



$('.wrapper').on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;
    const activeSection = sections.filter('active');
    const nextSection = activeSection.next();
    if (deltaY > 0)  { //scrool down
        
        performanceTransition(nextSection.index());
    }

    if (deltaY < 0)  { //scrool up
        console.log('вверх');
    }
});