<template>
    <div class="row">
        <div class="col-md-12 my-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 col-lg-5">
                    <div class="card shadow-sm">
                        <div class="card-body p-4">
                            <h1 class="mb-4">Đăng nhập</h1>
                            <form @submit.prevent="login" novalidate>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" v-model="email" :class="{ 'is-invalid': errors.email }"
                                        class="form-control" required>
                                    <!-- <div class="invalid-feedback">{{ errors.email }}</div> -->
                                    <small id="emailHelp" class="form-text text-danger">{{ errors.email }}</small>
                                </div>
                                <div class="form-group">
                                    <label for="password">Mật khẩu</label>
                                    <input type="password" id="password" v-model="password"
                                        :class="{ 'is-invalid': errors.password }" class="form-control" required>
                                    <div class="invalid-feedback">{{ errors.password }}</div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block mt-4">Đăng nhập</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            errors: {},
        };
    },
    methods: {
        login() {
            this.errors = {};

            if (!this.email) {
                this.errors.email = 'Vui lòng nhập email.';
            } else if (!this.validEmail(this.email)) {
                this.errors.email = 'Email không hợp lệ.';
            }

            if (!this.password) {
                this.errors.password = 'Vui lòng nhập mật khẩu.';
            } else if (this.password.length < 6) {
                this.errors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
            }

            if (Object.keys(this.errors).length === 0) {
                // Thực hiện đăng nhập
                console.log('Đăng nhập với email:', this.email, ', mật khẩu:', this.password);
            }
        },
        validEmail(email) {
            // Kiểm tra xem email có hợp lệ không
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
    },
};
</script>
  
<style>
/* Animation */
.btn-primary {
    transition: all .2s ease-in-out;
}

.btn-primary:hover {
    transform: scale(1.05);
}

.invalid-feedback {
    display: block;
    margin-top: .25rem;
    color: red;
}
</style>