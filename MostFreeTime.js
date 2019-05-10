const MostFreeTime = (strArr) => {
  const minutesList = [];
  for (const entry of strArr) {
    const splitTimes = entry.split('-');
    const startTimeInMinutes = getMinutesOfTime(splitTimes[0]);
    const endTimeInMinutes = getMinutesOfTime(splitTimes[1]);
    const timeEntry = {
      start: startTimeInMinutes,
      end: endTimeInMinutes
    };
    minutesList.push(timeEntry);
  }
  minutesList.sort((a, b) => a.start - b.start);
  const eventsCount = minutesList.length;
  let maxEventDiff = 0;
  for (let i = 0; i < eventsCount - 1; i++) {
    const currentEvent = minutesList[i];
    const nextEvent = minutesList[i + 1];
    const diff = nextEvent.start - currentEvent.end;
    if (diff > maxEventDiff) {
      maxEventDiff = diff;
    }
  }
  let hours = parseInt(maxEventDiff / 60).toString();
  if (hours.length < 2) {
    hours = '0' + hours;
  }
  let minutes = (maxEventDiff % 60).toString();
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes;
};

const getMinutesOfTime = (splitTime) => {
  const splitStart = splitTime.split(':');
  const pm = splitStart[1][2] === 'P';
  let hourMinutes;
  const hour = parseInt(splitStart[0]);
  if (hour === 12 && !pm) {
    hourMinutes = 0;
  } else if (pm && hour !== 12) {
    hourMinutes = parseInt(splitStart[0]) * 60 + 12 * 60;
  } else {
    hourMinutes = parseInt(splitStart[0]) * 60;
  }
  const minutes = parseInt(splitStart[1][0] + splitStart[1][1]);
  return hourMinutes + minutes;
}

const inputOne = ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"];
const inputTwo = ["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"];
const inputThree = ["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"];

console.log(MostFreeTime(inputOne));
console.log(MostFreeTime(inputTwo));
console.log(MostFreeTime(inputThree));