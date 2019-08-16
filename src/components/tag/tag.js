class Category {
    constructor(name, tag_arr) {
        this.name = name
        this.tag_arr = tag_arr
    }
}
const fs = require('fs');
const ini = require('ini');


export default {
    data: () => ({
        categories: [

        ],
        cat: ''
    }),
    mounted: function () {
        this.load_tag_ini()
    },
    methods: {
        load_tag_ini() {
            const config = ini.parse(fs.readFileSync('./tag.ini', 'utf-8'));
            const instruments = config.Instruments;
            console.log('load tag.ini', instruments);
            for (let c in config) {
                let tag_arr = []
                for (let tag in config[c]) {
                    tag_arr.push(tag)
                }
                this.categories.push(new Category(c, tag_arr))
            }

        },
        close() {
            console.log('close')
        },
        on_drag_tag(ev, tag) {
            console.log('start drag tag', tag)
            ev.dataTransfer.setData("tag", tag);
        }
    }
}