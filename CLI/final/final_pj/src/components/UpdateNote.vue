<template>
    <div class="row">
        <div class="col-md-12 my-5">
            <div class="card">
                <div class="card-header">aloha</div>
                <div class="card-body">
                    <form>
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label for="validationServer01">First name</label>
                                <input type="text" class="form-control is-valid" id="validationServer01" required
                                    v-model="note.title">
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="validationTextarea">Textarea</label>
                                <textarea class="form-control is-invalid" id="validationTextarea"
                                    placeholder="Required example textarea" rows="3" required v-model="note.content"></textarea>
                                <div class="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="note-created-date">Created Date</label>
                                <div class="input-group">
                                    <input type="date" class="form-control" id="note-created-date" v-model="note.createdDate">
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
                        <button class="btn btn-primary btn-block" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            note: {
                title: '',
                content: '',
                createdDate: '',
                tag: []
            },
            tagOptions: [
                "tag1", "tag2", "tag3"
            ],
        }
    },
    computed: {

    },
    watch: {
        
    },
    methods: {

    },
    created() {
        let noteId = this.$route.params.id
        this.$http.get(`http://localhost:8081/v1/note/get-note/${noteId}`).then((res) => {
            this.note = res.body;
            this.note.tag = res.body.tag.split(' ');
            console.log(this.note);
        })
    },
    
};
</script>

<style></style>
