import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const boats = [
            {
                id: 1, name: 'Mr. Nice',
                continent: 'Europe',
                country: 'Italy',
                state: 'Sicily',
                city: 'Siena',
                charter_type: "Bareboat",
                cabins: 2,
                heads: 2,
                price: 1200,
                discounts: 0.4
            },
            {
                id: 2, name: 'Narco',
                continent: 'Asia',
                country: 'Italy',
                state: 'Sicily',
                city: 'Tonnarella',
                charter_type: "Bareboat",
                cabins: 2,
                heads: 4,
                price: 1400,
                discounts: 0.4
            },
            {
                id: 3, name: 'Pamina',
                continent: 'Asia',
                country: 'Italy',
                state: 'Sicily',
                city: 'Tonnarella',
                charter_type: "Bareboat",
                cabins: 2,
                heads: 4,
                price: 1500,
                discounts: 0.2,
            },
            {
                id: 4, name: 'RIO',
                continent: 'Asia',
                country: 'Italy',
                state: 'Sardinia',
                city: 'Cagliari',
                charter_type: "Bareboat",
                cabins: 3,
                heads: 3,
                price: 1200,
                discounts: 0.15,
            },
        ];

        return { boats };
    }
}