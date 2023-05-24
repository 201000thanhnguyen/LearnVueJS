<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <div class="form-group">
                        <label for="searchBlog">search blog</label>
                        <input type="text" class="form-control" name="searchBlog" id="searchBlog" aria-describedby="helpId"
                            placeholder="aloha" v-model="keySearch">
                    </div>
                </div>
                <!-- <div class="col-md-6 my-3" v-for="blog in blogs" :key="blog.id"> -->
                <div class="col-md-6 my-3" v-for="blog in filterBlogs" :key="blog.id">
                    <div class="card">
                        <div class="card-header text-overflow" :title="blog.title" v-rainbow>{{ blog.title | toUpperCase1
                        }}
                        </div>
                        <div class="card-body" v-rainbow2>{{ blog.body | toLowerCase }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchMixins from '../mixins/SearchMixins';
export default {
    data() {
        return {
            blogs: [],
            keySearch: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
            (data) => {
                this.blogs = data.body.slice(0, 10);
                console.log(this.blogs);
            }
        )
    },
    computed: {
        
    },
    filters: {
        toLowerCase(value) {
            return value.toLowerCase();
        }
    },
    directives: {
        'rainbow2': {
            bind(el, binding, vnode) {
                el.style.color = "#" + Math.random().toString().slice(2, 8);
            }
        }
    },
    mixins: [SearchMixins]
}
</script>

<style scoped>
.text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>