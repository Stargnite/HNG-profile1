const displayedTime = document.querySelector('#time')
const day = document.querySelector('#day')

const getTime = () => {
	const time = new Date().getTime();
	
	displayedTime.textContent = time
}
setInterval(getTime, 100)





const currentDay = () => {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentTime = new Date();
        const dayOfWeek = daysOfWeek[currentTime.getDay()];
        day.textContent = dayOfWeek;
}
currentDay()