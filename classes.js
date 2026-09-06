const subjectFilter =
    document.getElementById("subjectFilter");

const levelFilter =
    document.getElementById("levelFilter");

const languageFilter =
    document.getElementById("languageFilter");

const classSearch =
    document.getElementById("classSearch");


function filterClasses() {

    const subject =
        subjectFilter.value;

    const level =
        levelFilter.value;

    const language =
        languageFilter.value;

    const search =
        classSearch.value
            .toLowerCase()
            .trim();


    const classCards =
        document.querySelectorAll(
            ".class-card"
        );


    classCards.forEach((card) => {

        const cardSubject =
            card.dataset.subject;

        const cardLevel =
            card.dataset.level;

        const cardLanguage =
            card.dataset.language;

        const cardText =
            card.textContent
                .toLowerCase();


        const subjectMatch =
            subject === "all" ||
            cardSubject === subject;

        const levelMatch =
            level === "all" ||
            cardLevel === level;

        const languageMatch =
            language === "all" ||
            cardLanguage === language;

        const searchMatch =
            cardText.includes(search);


        const shouldShow =
            subjectMatch &&
            levelMatch &&
            languageMatch &&
            searchMatch;


        card.style.display =
            shouldShow
                ? "flex"
                : "none";

    });

}


subjectFilter.addEventListener(
    "change",
    filterClasses
);

levelFilter.addEventListener(
    "change",
    filterClasses
);

languageFilter.addEventListener(
    "change",
    filterClasses
);

classSearch.addEventListener(
    "input",
    filterClasses
);
