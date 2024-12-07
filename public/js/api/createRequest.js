/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let url = options.url;
    const formData = new FormData();
    if(options.data) {
        if(options.method === 'GET') {
            url +='?';
            for(let [key, value] of Object.entries(options.data)) {
                url += `${key}=${value}&`
            };
            url = url.slice(0, -1);
    
        } else {
            for(let [key, value] of Object.entries(options.data)) {
                formData.append(key, value);
            };
        };
    }
    
    try {
        xhr.open(options.method, url);
        xhr.send(formData);
    } catch (err) {
        console.log(err)
    }

    xhr.addEventListener('load', () => {
        if(xhr.response.success) {
            options.callback(xhr.response.error, xhr.response);
        } else {
            console.log(xhr.response.error)
        }
    });    
};