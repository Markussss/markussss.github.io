(() => {
    const sum = (a, b) => a + b;
    const max = (a, b) => Math.max(a, b);
    const get = s => o => o[s];
    const sort = s => (a, b) => b[s] - a[s];

    const timeMultiplier = 1;
    const strengthMultiplier = 1;

    fetch('https://www.duolingo.com/vocabulary/overview')
    .then(response => {
        return response.json();
    })
    .then(allSkills => {
        allSkills = allSkills.vocab_overview.reduce((skills, word) => {
            if (!skills[word.skill]) {
                skills[word.skill] = [];
        }
            skills[word.skill].push(word);
            return skills;
        }, {});
        var skillStrengths = Object.keys(allSkills).map(skill => {
            let skillStrength = allSkills[skill].map(word => word.strength).reduce(sum, 0) / allSkills[skill].length;
            let lastPracticeMs = allSkills[skill].map(word => word.last_practiced_ms).reduce(max, -Infinity);
            let lastPractice = new Date(lastPracticeMs);
        return {skill, skillStrength, lastPractice, lastPracticeMs};
        })
        .sort(sort('lastPracticeMS'))
        .map(({skill, skillStrength, lastPractice}, timeWeight) => {
            return {skill, skillStrength, lastPractice, timeWeight};
        })
        .sort(sort('skillStrength'))
        .map(({skill, lastPractice, timeWeight}, strengthWeight) => {
            return {skill, lastPractice, timeWeight, strengthWeight};
        })
        .map(({skill, lastPractice, timeWeight, strengthWeight}) => {
            return {
                skill,
                lastPractice,
                weight: (timeWeight * timeMultiplier) + (strengthWeight * strengthMultiplier),
            };
        })
        .sort(sort('weight'));
        alert(skillStrengths[0].skill);
    });
})();