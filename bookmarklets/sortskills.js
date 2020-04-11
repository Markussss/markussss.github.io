import { cache, sum, max, get, sort } from '../js/utils';

(() => {
    const timeMultiplier = 1;
    const strengthMultiplier = 1;

    const skillElements = Array.from(document.querySelectorAll('div[data-test=skill]'));
    const skillParent = skillElements[0].parentNode;
    const whereToPutSkills = skillParent.parentNode;

    cache('https://www.duolingo.com/vocabulary/overview')
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
        .sort(sort('weight'))
        .map(({skill}) => skill)
        .map(skill => {
            return skillElements.filter(el => {
                let elementSkillName = el.textContent;
                return elementSkillName.substring(1) === skill || elementSkillName === skill;
            })[0];
        })
        .filter(el => !!el)
        .forEach(el => {
            whereToPutSkills.insertBefore(el, skillParent);
        });
    });
})();
