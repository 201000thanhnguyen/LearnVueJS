<template>
    <div class="row">
        <div class="col-md-12 my-5">
            <div class="card">
                <div class="card-header">aloha</div>
                <div class="card-body">
                    <form>
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label for="note-title">Title</label>
                                <input type="text" class="form-control" id="note-title" required v-model="note.title">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="note-content">Content</label>
                                <textarea class="form-control" :class="{ 'is-invalid': errors.content }" id="note-content"
                                    placeholder="Required example textarea" rows="3" required
                                    v-model="note.content"></textarea>
                                <div class="invalid-feedback" :class="{ 'd-block': errors.content }">
                                    {{ errors.content }}
                                </div>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="note-created-date">Created Date</label>
                                <div class="input-group">
                                    <input type="date" class="form-control" :class="{ 'is-invalid': errors.createdDate }"
                                        id="note-created-date" v-model="note.createdDate" required="false">
                                </div>
                                <div class="invalid-feedback" :class="{ 'd-block': errors.createdDate }">
                                    {{ errors.createdDate }}
                                </div>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="note-tag">Tag</label>
                                <div>
                                    <div class="form-check form-check-inline" v-for="tagOption in tagOptions"
                                        :key="tagOption">
                                        <input class="form-check-input" type="checkbox" :id="tagOption" v-model="note.tag"
                                            :value="tagOption">
                                        <label class="form-check-label" :for="tagOption">{{ tagOption }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block" type="button" @click.prevent="sendObjNote">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ValidInputNote from '../mixin/ValidInputNote';
export default {
    data() {
        return {
            note: {},
            tagOptions: [
                "tag1", "tag2", "tag3"
            ],
            errors: {}
        }
    },
    computed: {

    },
    watch: {

    },
    methods: {
        sendObjNote() {
            if (this.isValData() > 0) {
                console.log(this.note);
            } else {
                this.note.tag = this.note.tag.join(" ");
                this.$http.put(`http://localhost:8081/v1/note/update-note`, this.note).then((res) => {
                    if (res.status == 200) {
                        this.note.tag = this.note.tag.split(" ");
                        if (confirm("tiếp tục chỉnh sửa: ")) {

                        } else {
                            this.$router.push('/');
                        }
                    } else {
                        this.note.tag = this.note.tag.split(" ");
                    }
                });
            }
        }
    },
    created() {
        let noteId = this.$route.params.id
        this.$http.get(`http://localhost:8081/v1/note/get-note/${noteId}`).then((res) => {
            this.note = res.body;
            this.note.tag = res.body.tag.split(' ');
            console.log(this.note);
        })
    },
    mixins: [ValidInputNote]
};
</script>

<style></style>
