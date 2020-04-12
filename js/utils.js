const cache = (url, timeout, getAnyways) => {
    timeout = (timeout || 300) * 1000
    return new Promise(async resolve => {
        let data = localStorage.getItem(url);
        if (!data || getAnyways) {
            let response = await fetch(url);
            data = await response.json();
            data.timestamp = Date.now();
            data = JSON.stringify(data);
            localStorage.setItem(url, data);
        }
        resolve(data);
    })
    .then(data => JSON.parse(data))
    .then(data => {
        if ((data.timestamp + timeout) < Date.now()) {
            localStorage.removeItem(url);
            return cache(url, timeout);
        }
        return data;
    });
};
const sum = (a, b) => a + b;
const max = (a, b) => Math.max(a, b);
const get = s => o => o[s];
const sort = s => (a, b) => b[s] - a[s];

const getSkills = () => {
    const practiceLimit = Date.now() - 1000 * 60 * 60 * 24 * 100;
    return cache('https://www.duolingo.com/vocabulary/overview')
    .then(allSkills => {
        return allSkills.vocab_overview
        .filter(word => word.last_practiced_ms > practiceLimit)
        .reduce((skills, word) => {
            if (!skills[word.skill]) {
                skills[word.skill] = [];
        }
            skills[word.skill].push(word);
            return skills;
        }, {});
    });
};

export {
    cache,
    sum,
    max,
    get,
    sort,
    getSkills,
}
