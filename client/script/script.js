
export const calculatePercentange = (totalLectures, attendedLectures) => {
    const percentage = (attendedLectures / totalLectures) * 100;
    return percentage;
};

export const calculateRequiredLectures = (totalLectures, attendedLectures, percentage) => {
    let currentTotalLectures = totalLectures;
    let currentAttendedLectures = attendedLectures;
    let currentPercentage = percentage;
    
    while (currentPercentage < 75) {
        currentAttendedLectures += 1;
        currentTotalLectures += 1;
        currentPercentage = calculatePercentange(currentTotalLectures, currentAttendedLectures);
    }

    return currentAttendedLectures - attendedLectures;
}

export const calculateAttendanceStats = (totalLectures, attendedLectures)=> {
    const percentage = calculatePercentange(totalLectures, attendedLectures);

    if (percentage > 75) {
        return "Hmph! for now you are in the safe zone."
    } else {
        const requiredLecutres =  calculateRequiredLectures(totalLectures, attendedLectures);
        return `you need to attend ${requiredLecutres} lectures more to get in safe zone.`
    }
}