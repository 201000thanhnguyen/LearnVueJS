<template>
    <div id="add-blog" class="row">
        <div class="col-md-12 mt-5">
            <div class="row">
                <div class="col-md-6 offset-3">
                    <h3 class="text-center">add a new blog</h3>
                </div>
                <div class="col-md-6 offset-3">
                    <form v-if="!submitted">
                        <div class="form-group">
                            <label for="blogTitle">blog title</label>
                            <input type="text" name="blogTitle" id="blogTitle" class="form-control" placeholder=""
                                aria-describedby="helpId" v-model="blog.blogTitle">
                        </div>
                        <div class="form-group">
                            <label for="blogContent">blog content</label>
                            <textarea class="form-control" name="blogContent" id="blogContent" rows="3"
                                v-model.lazy="blog.blogContent"></textarea>
                        </div>
                        <div class="form-group">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="checkbox1" value="option1"
                                    v-model="blog.categories">
                                <label class="form-check-label" for="checkbox1">Option 1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="checkbox2" value="option2"
                                    v-model="blog.categories">
                                <label class="form-check-label" for="checkbox2">Option 2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="checkbox3" value="option3"
                                    v-model="blog.categories">
                                <label class="form-check-label" for="checkbox3">Option 3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="checkbox4" value="option4"
                                    v-model="blog.categories">
                                <label class="form-check-label" for="checkbox4">Option 4</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="blogContent">author</label>
                            <select class="form-control" v-model="blog.author">
                                <option v-for="(author, index) in authors" :key="index">{{ author }}</option>
                            </select>
                        </div>
                        <button type="button" class="btn btn-primary" @click.prevent="post">submit</button>
                    </form>
                </div>
                <div class="col-md-6 offset-3" v-if="submitted">
                    <h3> done add post </h3>
                </div>
                <div class="col-md-6 offset-3">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="mb-3">preview</h3>
                            <p>blog title: {{ blog.blogTitle }}</p>
                            <p>blog content: </p>
                            <p>{{ blog.blogContent }}</p>
                            <p>blog content: </p>
                            <ul>
                                <li v-for="(cate, index) in blog.categories" :key="index">{{ cate }}</li>
                            </ul>
                            <p>author: {{ blog.author }}</p>
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
            blog: {
                blogTitle: "",
                blogContent: "",
                categories: [],
                author: ""
            },
            authors: ['aloha1', 'bbaoi2', 'poisiii3', 'mmmama'],
            submitted: false
        }
    },
    methods: {
        post() {
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.blogTitle,
                body: this.blog.blogContent,
                userId: 1
            }).then(function (data) {
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>
  
<style></style>
  