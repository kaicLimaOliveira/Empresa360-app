<template>
    <div class="back ">
        <div class="col">
            <div class="d-flex flex-column align-items-center justify-content-center">

                <h2>Page Not Found</h2>
                <span>Error 404</span>
                <RouterLink style="width: 100px;" to="/" class="btn btn-primary">
                    Home
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>

<style scoped>
div.back {
    background-color: #fff8e6;
}
</style>