const displayedTime = document.querySelector('#time')
const day = document.querySelector('#day')

const getTime = () => {
	const time = new Date().toISOString();
	currentTime = time.substr(11, 8)
	displayedTime.textContent = currentTime
}
setInterval(getTime, 1000)





const currentDay = () => {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentTime = new Date();
        const dayOfWeek = daysOfWeek[currentTime.getDay()];
        day.textContent = dayOfWeek;
}
currentDay()