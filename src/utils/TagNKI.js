class TagNKI {
    // filename
    // ext
    constructor(path, tag_arr) {
        this.path = path;
        this.tag_arr = tag_arr;
    }
    nodes() {
        let a = this.path.split('\\')
        let a2 = []
        for (let i = 0; i < a.length; i++) {
            if (i == a.length - 1)
                continue;
            a2.push(a[i])
        }
        console.log('nki nodes', a2)
        return a2;  
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