export class Util {
    ref;
    constructor(ref) {
        this.ref = ref
    }

    navbarItemsCreated(pages, setPage) {
        return [
            {
                label: 'Keşfet',
                icon: 'pi pi-home',
                command: () => setPage(pages.main)
            },





        ];
    }

    moneyFormatter(data = 0) {
        let USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return (USDollar.format(data))
    }

    counterandUniqData(data) {
        const idCounts = data.reduce((acc, car) => {
            if (acc[car.id]) {
                acc[car.id] += 1;
            } else {
                acc[car.id] = 1;
            }
            return acc;
        }, {});

        const unique = [];
        const addedIds = new Set();

        data.forEach(car => {
            if (!addedIds.has(car.id)) {
                unique.push({
                    ...car,
                    count: idCounts[car.id]
                });
                addedIds.add(car.id);
            }
        });
        return unique
    }

    paymendCalculator(data) {
        let total = 0
        data.forEach((i) => total += +i.price)

        return total
    }

    getRatingPopularty = (product) => {
        switch (product.rating) {
            case 5:
                return 'success';

            case 3:
                return 'warning';

            case 1:
                return 'danger';

            default:
                return null;
        }
    };

    setCookie(data) {
        const date = new Date()
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));

        document.cookie = JSON.stringify(data)

    }
    getCookie() {
        const data = JSON.parse(document.cookie)
        console.log(data)
    }
}