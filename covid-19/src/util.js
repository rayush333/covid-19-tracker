export const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.cases>=b.cases)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByActive = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.active>=b.active)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByDeaths = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.deaths>=b.deaths)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByTodayCases = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.todayCases>=b.todayCases)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByRecovered = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.recovered>=b.recovered)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByTests = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.tests>=b.tests)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByCasesPerMillion = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.casesPerOneMillion>=b.casesPerOneMillion)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByTodayDeaths = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.todayDeaths>=b.todayDeaths)
        return -1;
        return 1;
    });
    return sortedData;
}
export const sortByTodayRecovered = (data) => {
    const sortedData = [...data];
    sortedData.sort((a,b) => {
        if(a.todayRecovered>=b.todayRecovered)
        return -1;
        return 1;
    });
    return sortedData;
}