import axios from 'axios';

export const GET_PRODUCTS = '[E-COMMERCE APP] GET PRODUCTS';
export const SET_PRODUCTS_SEARCH_TEXT = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';

export function getProducts() {
    // const request = axios.get('/api/e-commerce-app/products');
    const request = axios.get('https://api.quickbutik.com/v1/products?apiKey=6015817645');
    // request.then(response =>console.log(response.data));

    // const request1 = new Promise((resolve, reject) => {
    //     let res = axios.get('https://api.quickbutik.com/v1/products?apiKey=6015817645');
    //     if(res){
    //         resolve(res);
    //     }
    //     else reject("failed");
    // });

    // request1.then(res=> console.log(res)).catch(res => console.log(res));

    // const request2 = async function req (){
    //     const response = await get('https://api.quickbutik.com/v1/products?apiKey=6015817645');
    //     return response;
    // }.then(res=> console.log(res));

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_PRODUCTS,
                payload: response.data
            })
        );
}

export function setProductsSearchText(event) {
    return {
        type: SET_PRODUCTS_SEARCH_TEXT,
        searchText: event.target.value
        // searchText: event.target.value
    }
}

