export class ProductList {
    ref = null
    mainUrl = import.meta.env.VITE_API_MAIN_DISPATCH
    constructor(ref) {
        this.ref = ref
    }

    async getAllProductList(page = 1, limit = 10, hadleSuccsessFunc) {
        const url = this.mainUrl + import.meta.env.VITE_API_PRODUCTS_DISPATCH + `?page=${page}&limit=${limit}`
        await fetch(url).then((res) => {
            if (!res.ok) {
                throw new Error("HATALI ISLEM")
            } return res.json()
        }).then((data) => {
            console.log(data);
            hadleSuccsessFunc(data)
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    }


}