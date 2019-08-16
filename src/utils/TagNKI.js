class TagNKI {
    // filename
    constructor(path, tag_arr) {
        this.path = path;
        this.tag_arr = tag_arr;
    }
    toString() {
        return this.path
    }
    drop_tag(tag) {
        if (this.tag_arr.indexOf(tag) > -1) {
            console.log(this, 'drop_tag', tag, 'exist!')
        }
        else {
            console.log(this, 'drop_tag', tag, 'add!')
            this.tag_arr.push(tag)
        }
    }
}

export { TagNKI }