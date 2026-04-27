let photo = document.createElement("img")
const scientists = [
    {
        name: "Иван Петрович Павлов",
        year: "(1849-1936)",
        achievement: "За работу в области физиологии пищеварения",
        image: "https://aif-s3.aif.ru/images/017/983/1527895b0999e2f340ce85d026903978.jpg",
        description: "Физиолог, лауреат Нобелевской премии по физиологии и медицине 1904 года. Получил награду «за работу в области физиологии пищеварения». Исследовал условные и безусловные рефлексы, проводил эксперименты на животных (чаще всего на собаках), что привело к понятию «собака Павлова»"
        
    },
    {
        name: "Илья Ильич Мечников",
        year: "(1845-1916)",
        achievement: "За труды по исследованию иммунитета",
        image: "https://avatars.mds.yandex.net/i?id=d212927aa97aeee88fb593a676a8f941-5352919-images-thumbs&n=13",
        description: "Биолог, иммунолог, патолог. Нобелевская премия 1908 года совместно с Паулем Эрлихом «за труды по исследованию иммунитета». Основатель русской научной школы по геронтологии."
    },
    {
        name: "Николай Николаевич Семёнов",
        year: "(1896-1986)",
        achievement: "За исследования в области механизма химических реакций",
        image: "https://rkwt.ru/upload/iblock/2d2/125letsodnyarozhdeniyanikolayanikolaevichasemenova.jpg",
        description: "Химик, лауреат Нобелевской премии по химии 1956 года. Получил награду совместно с британским учёным Сирилом Хиншелвудом за исследования в области химических реакций, в частности за разработку теории цепных реакций."
    },
    {
        name: "Лев Давидович Ландау",
        year: "(1908-1968)",
        achievement: "За теоретические исследования конденсированного состояния, в особенности жидкого гелия",
        image: "https://i.bigenc.ru/resizer/resize?sign=0lGO_kg0Vw1o_51R5II4Gg&filename=vault/bedcb4299ca28c563018b74e24359b60.webp&width=1920",
        description: "Физик, лауреат Нобелевской премии по физике 1962 года. Получил премию «за пионерские теории конденсированных сред, в особенности жидкого гелия». Объяснил сверхтекучесть жидкого гелия, используя новый математический аппарат."
    },
    {
        name: "Пётр Леонидович Капица",
        year: "(1894-1984)",
        achievement: "За базовые исследования и открытия в физике низких температур",
        image: "https://cdn-storage-media.tass.ru/resize/1312x868/tass_media/2022/03/13/5/1647214692493902_53Lxsg1-.jpg",
        description: "Физик, лауреат Нобелевской премии по физике 1978 года. Получил премию «за базовые исследования и открытия в физике низких температур». Разработал новый способ сжижения воздуха, открыл сверхтекучесть жидкого гелия. "
    },
    {
        name: "Алексей Иванович Екимов",
        year: "(1945- жив по сей день)",
        achievement: "За открытие и синтез квантовых точек",
        image: "https://s.yimg.com/ny/api/res/1.2/II7n99nrScgJuOjAI9rSUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://media.zenfs.com/en/ap.org/52581a24d7a6bb47882d1a23feda7f4d",
        description: "Химик, лауреат Нобелевской премии по химии 2022 года. Получил премию «за открытие и синтез квантовых точек»."
    }
];

// Функция для отображения карточек учёных
function displayScientists(scientistsList) {
    const grid = document.getElementById('scientists-grid');
    grid.innerHTML = '';

    scientistsList.forEach(scientist => {
        const card = document.createElement('div');
        card.className = 'scientist-card';
        card.innerHTML = `
            <img src="${scientist.image}" alt="${scientist.name}">
            <div class="card-content">
                <h3>${scientist.name}</h3>
                <p class="year">Годы жизни: ${scientist.year}</p>
                <p><strong>Достижение:</strong> ${scientist.achievement}</p>
                <p>${scientist.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Функция поиска
function setupSearch() {
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        const filteredScientists = scientists.filter(scientist =>
            scientist.name.toLowerCase().includes(searchTerm) ||
            scientist.year.toString().includes(searchTerm)
        );

        displayScientists(filteredScientists);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayScientists(scientists);
    setupSearch();
});

// Выполнил КДП 2009
