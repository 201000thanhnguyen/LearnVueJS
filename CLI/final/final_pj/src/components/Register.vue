<template>
    <div class="row">
        <div class="col-md-12 my-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 col-lg-5">
                    <div class="card shadow-sm">
                        <div class="card-body p-4">
                            <h2 class="mb-4">Register</h2>
                            <form @submit.prevent="submitForm">
                                <div class="form-group">
                                    <label for="name">Name:</label>
                                    <input type="text" class="form-control" id="name" v-model="name"
                                        :class="{ 'is-invalid': errors.name }">
                                    <div class="invalid-feedback">{{ errors.name }}</div>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address:</label>
                                    <input type="text" class="form-control" id="email" v-model="email"
                                        :class="{ 'is-invalid': errors.email }">
                                    <div class="invalid-feedback">{{ errors.email }}</div>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <input type="password" class="form-control" id="password" v-model="password"
                                        :class="{ 'is-invalid': errors.password }">
                                    <div class="invalid-feedback">{{ errors.password }}</div>
                                </div>
                                <div class="form-group">
                                    <label for="confirm-password">Confirm Password:</label>
                                    <input type="password" class="form-control" id="confirm-password"
                                        v-model="confirmPassword" :class="{ 'is-invalid': errors.confirmPassword }">
                                    <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block mt-4">Đăng Ký</button>
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
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }
    },
    methods: {
        validateForm() {
            let errors = {};
            if (!this.name) {
                errors.name = 'Name is required';
            }
            if (!this.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(this.email)) {
                errors.email = 'Invalid email format';
            }
            if (!this.password) {
                errors.password = 'Password is required';
            } else if (this.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
            }
            if (!this.confirmPassword) {
                errors.confirmPassword = 'Confirm password is required';
            } else if (this.password !== this.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match';
            }
            this.errors = errors;
            return Object.keys(errors).length === 0;
        },
        submitForm() {
            if (this.validateForm()) {
                // submit form logic here
            }
        }
    }
}
</script>
  
<style>
.register-form {
    max-width: 400px;
    margin: auto;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
}

.is-invalid {
    border-color: #dc3545;
}

.invalid-feedback {
    display: block;
    color: #dc3545;
}
</style>