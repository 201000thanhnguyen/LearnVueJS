<template>
    <transition name="fade">
        <div v-if="modalVisible" class="modal-wrapper">
            <div class="modal d-block" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="note-title">Title</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="note-title" v-model="note.title" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="note-content">Content</label>
                                <div class="input-group">
                                    <textarea class="form-control" id="note-content" rows="3"
                                        v-model="note.content"></textarea>
                                </div>
                                <div class="invalid-feedback" :class="{ 'd-block': errors.content }">
                                    {{ errors.content }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="note-created-date">Created Date</label>
                                <div class="input-group">
                                    <input type="date" class="form-control" id="note-created-date"
                                        v-model="note.createdDate">
                                </div>
                                <div class="invalid-feedback" :class="{ 'd-block': errors.createdDate }">
                                    {{ errors.createdDate }}
                                </div>
                            </div>
                            <div class="form-group">
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" @click="sendObjNote">Save</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                @click="closeModal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="modalVisible" class="modal-backdrop fade show"></div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['visible'],
    data() {
        return {
            note: {
                title: '',
                content: '',
                createdDate: new Date().toISOString().slice(0, 10),
                tag: []
            },
            noteDefault: {
                title: '',
                content: '',
                createdDate: new Date().toISOString().slice(0, 10),
                tag: []
            },
            tagOptions: [
                "tag1", "tag2", "tag3"
            ],
            modalVisible: false,
            errors: {}
        }
    },
    watch: {
        visible(value) {
            this.modalVisible = value;
        },
    },
    methods: {
        closeModal() {
            this.$emit("changeValVisible");
        },
        sendObjNote() {
            if (this.isValData() > 0) {
                console.log(1);
            } else {
                this.$emit("changeValVisible", this.note);
                this.note = this.noteDefault;
            }
        },
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
    },
    created() {
        this.note.createdDate = new Date().toISOString().slice(0, 10);
    }
};
</script>

<style>
.modal.fade.show {
    animation: modal-fade-in 0.5s ease-out both;
}

@keyframes modal-fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>
