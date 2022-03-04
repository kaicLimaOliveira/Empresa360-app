export default {
    data: () => ({
        dados: ''
    }),
    methods: {
        getDataApi(url) {
            const getJSON = async () => {
                const response = await fetch(url);

                this.dados = await response.json();
            };

            getJSON();
        },
    },
}