import { TagNKI } from '../../utils/tagNKI';
import Instrument from "./Instrument";
export default {
    components: {
        Instrument,
    },
    data: () => ({
        kontakt_dir_1: '',
        nodes: [{
            text: 'User',
            disabled: false,
            href: 'breadcrumbs_dashboard',
        },
        {
            text: 'lrw',
            disabled: false,
            href: 'breadcrumbs_dashboard',
        }],
        items: [],
        item: ''
    }),
    mounted: function () {
        // document.getElementById("drag").ondragstart = event => {
        //     event.preventDefault()
        //     ipcRenderer.send("ondragstart", "C:\\test.nki")
        // }

        if (is_test) {
            walk_nki('C:/Users/lrw/Downloads/', this.items)
        }
    },
    methods: {
        on_drag_nki(event, tagNKI) {
            event.preventDefault()
            this.update_path_nodes(tagNKI)
            ipcRenderer.send("ondragstart", tagNKI.path)
        },
        update_path_nodes(tagNKI) {
            this.nodes = []
            for (let n of tagNKI.nodes()) {
                this.nodes.push({
                    text: n,
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                })
            }
        },
        allowDrop(event, nki_path) {
            event.preventDefault()
        },
        drop(event, tagNKI) {
            event.preventDefault()
            let tag = event.dataTransfer.getData("tag")
            if (tag) {
                tagNKI.drop_tag(tag)
            }
            console.log('on drop tag', event)
        },
        on_walk_kontakt_dir() {
            console.log('on_walk', this.kontakt_dir_1)
            this.items = []
            walk_nki(this.kontakt_dir_1, this.items)
        }
    }
}


const ipcRenderer = require('electron').ipcRenderer
let is_test = true
let walk_nki = (dir, nki_arr) => {
    // let nki_arr = []
    walkSync(dir, nki_arr)
    console.log(nki_arr)
}
var fs = fs || require('fs')
var path = path || require('path');

let is_ext = (str, ext) => {
    return path.extname(str).toLowerCase() == ext
}
var walkSync = function (dir, filelist) {
    var files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {

            if (is_ext(file, '.nki') ||
                is_ext(file, '.nkm')) {
                let nki_path = path.join(dir, file)
                let tagnki = new TagNKI(nki_path, [])
                tagnki.filename = file
                tagnki.ext = path.extname(file)
                filelist.push(tagnki);
            }
        }
    });
    return filelist;
};
