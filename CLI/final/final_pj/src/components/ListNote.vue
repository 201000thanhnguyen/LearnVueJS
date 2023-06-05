<template>
    <div class="container">
        <h1 class="text-center my-4">List Note</h1>
        <div class="card">
            <div class="card-header">
                <button class="btn btn-primary btn-sm" @click="showModal">Add Note</button>
                <ModalCreateNote :visible="isModalVisible" @changeValVisible="setValVisible"></ModalCreateNote>
            </div>
            <div class="card-body">

                <body>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col">Create Date</th>
                                <!-- <th scope="col">Thẻ</th> -->
                                <th scope="col">Actions</th> <!-- Thêm cột Hành động -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(note, index) in notes" :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ note.title }}</td>
                                <td>{{ formatContent(note.content) }}</td>
                                <td>{{ formatDate(note.createdDate) }}</td>
                                <!-- <td>{{ note.tag }}</td> -->
                                <td class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle btn-sm" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Action
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <button class="dropdown-item btn-sm" @click="viewDetail(note)">Detail</button>
                                        <button class="dropdown-item btn-sm" @click="edit(note)">Update</button>
                                        <button class="dropdown-item btn-sm" @click="deleteNote(index)">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </body>
            </div>
        </div>
    </div>
</template>
  
<script>
import ModalCreateNote from './ModalCreateNote.vue';
export default {
    components: {
        ModalCreateNote
    },
    data() {
        return {
            notes: [
                { title: 'Note 1', content: 'Nội dung note 1', createdDate: '2023-06-01', tag: 'tag 1' },
                { title: 'Note 2', content: 'Nội dung note 2', createdDate: '2023-06-02', tag: 'tag 2' },
                { title: 'Note 3', content: 'Nội dung note 3', createdDate: '2023-06-03', tag: 'tag 3' },
            ],
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        viewDetail(note) {
            // Xử lý khi bấm nút Chi tiết
        },
        edit(note) {
            // Xử lý khi bấm nút Sửa
        },
        deleteNote(index) {
            // Xử lý khi bấm nút Xóa
        },
        setValVisible(objNote) {
            this.isModalVisible = false;
            objNote.tag = objNote.tag.join(" ");
            this.$http.post('http://localhost:8081/v1/note/add', objNote).then(function (res) {
                // console.log(res);
                this.$http.get('http://localhost:8081/v1/note').then((data) => {
                    this.notes = data.body.slice(0, 10);
                });
            });
        },
        formatDate(date) {
            const d = new Date(date);
            return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        },
        formatContent(content) {
            if (content.length > 100) {
                return content.slice(0, 80) + '...';
            }
            return content;
        },
    },
    mounted() {

    },
    created() {
        this.$http.get('http://localhost:8081/v1/note').then((data) => {
            this.notes = data.body.slice(0, 10);
            console.log(data);
        });
    }
};
</script>

<style scoped></style>