export default {
    data: () => ({
        dados: ''
    }),
    methods: {
        getDataApi(url, queryParam = {}) {
            Object.keys(queryParam).forEach(key => {
              if(queryParam[key] == '') delete queryParam[key]
            })
      
            const urlQueryParams = new URLSearchParams(queryParam).toString()

            const urlFull = urlQueryParams ? `${url}&${urlQueryParams}` : url 

            const getJSON = async () => {
                const response = await fetch(urlFull);
                this.dados = await response.json();
            };

            getJSON();
        },
    },
}