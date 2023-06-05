<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">Logo</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" active-class="active" exact>Trang chủ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link" active-class="active">Giới thiệu</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link" active-class="active">Liên hệ</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" active-class="active">Đăng
                            ký</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link btn btn-primary" active-class="active">Đăng nhập</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>