var Body = {
    setColor: function (color) {
        document.querySelector("body").style.color = color;
    },
    setBackgroundColor: function (color) {
        /* The Document method querySelector() returns the first Element('tag')
        within the document that matches the specified selector, or group of selectors.
        If no matches are found, null is returned. */
        document.querySelector("body").style.backgroundColor = color;
    },
};
var Links = {
    setColor: function (color) {
        /* The Document method querySelectorAll() returns a static (not live) NodeList
        representing a list of the document's elements that match the specified group of selectors. */

        //JQuery
        $("a").css("color", color);

        //javascript
        // document.querySelectorAll("a").forEach(element => {
        //     element.style.color = color;
        // });
    },
};
function nightDayHandler(self) {
    if (self.value === "night") {
        Body.setBackgroundColor("black");
        Body.setColor("white");
        self.value = "day";

        Links.setColor("powderblue");
    } else {
        Body.setBackgroundColor("white");
        Body.setColor("black");
        self.value = "night";

        Links.setColor("blue");
    }
}

//for showing example file list in #grid #nav
var File = {
    fileList: [],
    setFileList: function () {
        for (let index = 1; index <= 9; index++) {
            this.fileList[index] = "ex" + index;
        }
        this.fileList.push("box");
        this.fileList.push("grid");
        this.fileList.push("mediaquery");
        this.fileList.push("fetch");
        this.fileList.push("hash");
    },
    writeFileList: function (list) {
        list.forEach((element) => {
            document.querySelector('#example').innerHTML +=
                "<li><a title=\""+ element +"\" \
                        href=\"example/"+ element + ".html\" \
                    >"+ element + "</a \
                ></li>";
        });
    },
};
function setExFileList() {
    File.setFileList();
    File.writeFileList(File.fileList);
}

function fetchPage(name) {
    fetch(name).then(function (response) {
        response.text().then(function (text) {
            document.querySelector("#article").innerHTML = text;
        });
    });
}