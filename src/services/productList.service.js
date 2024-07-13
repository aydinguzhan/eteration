export class ProductListService {
    ref = null
    mainUrl = import.meta.env.VITE_API_MAIN_DISPATCH
    constructor(ref) {
        this.ref = ref
    }

    async getAllProductList(page = 1, limit, hadleSuccsessFunc) {
        const url = this.mainUrl + import.meta.env.VITE_API_PRODUCTS_DISPATCH + `?page=${page}&limit=${limit}`
        await fetch(url).then((res) => {
            if (!res.ok) {
                throw new Error("HATALI ISLEM")
            } return res.json()
        }).then((data) => {

            data.forEach((i) => {
                i.rating = Math.floor((Math.random() * 5) + 1)


            })
            hadleSuccsessFunc(data)
        }).catch(error => {
            console.log(error)
        });

    }

    async getDetailProduct(id, hadleSuccsessFunc) {

        const url = this.mainUrl + import.meta.env.VITE_API_PRODUCTS_DISPATCH + `/${id}`
        await fetch(url).then((res) => {
            if (!res.ok) {
                throw new Error("HATALI ISLEM")
            } return res.json()
        }).then((data) => {




            hadleSuccsessFunc(data)
        }).catch(error => {
            console.error(error);
        });
    }


}