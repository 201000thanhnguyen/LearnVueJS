export default {
    methods: {
        isValData() {
            this.errors = {};
            if (!this.note.content) {
                this.errors.content = 'Vui lòng nhập nội dung';
            }

            if (!this.note.createdDate) {
                this.errors.createdDate = 'Ngày tạo là bắt buộc';
            }

            if (Object.keys(this.errors).length > 0) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}