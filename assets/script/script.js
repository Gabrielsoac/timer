function clock (){
    function getDateBySeconds(seconds){
        return new Date(seconds * 1000).toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    let seconds = 0;
    let timer;
    function initClock(){
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = getDateBySeconds(seconds);
            document.title = getDateBySeconds(seconds);
        }, 1000);
    }
    const clock = document.querySelector(".clock");
    
    document.addEventListener('click', function(event){
        const element = event.target;
    
        if(element.classList.contains('play')){
            clock.classList.remove('stoped');
            clearInterval(timer)
            initClock();
        }
    
        if(element.classList.contains('stop')){
            clock.classList.add('stoped');
            clearInterval(timer);
            document.title = 'Paused'
        }
    
        if(element.classList.contains('reset')) {
            clock.classList.remove('stoped');
            clearInterval(timer);
            clock.innerHTML = '00:00:00'
            seconds = 0;
            document.title = 'Timer'
        }
    })
}

clock();

