function luckBalance(k, contests) {
    let luck = 0;
    const importantContestPoints = [];
    for (const contest of contests) {
        if (contest[1] === 0) {
            luck = luck + contest[0];
        } else {
            importantContestPoints.push(contest[0]);
        }
    }
    const sorted = importantContestPoints.sort((x, y) => x - y).reverse();
    let pointer = 0;
    if (sorted.length < 1) {
        return luck;
    }
    while (pointer < sorted.length && pointer <  k) {
        luck += sorted[pointer];
        pointer++;
    }
    while (pointer < sorted.length) {
        luck -= sorted[pointer];
        pointer++;
    }
    return luck;
}