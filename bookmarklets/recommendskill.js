import { cache, sum, max, get, sort, getSkills } from '../js/utils';

(() => {
    const timeMultiplier = 1;
    const strengthMultiplier = 1;

    getSkills().then(allSkills => {
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