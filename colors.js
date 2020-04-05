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

        //JQueary
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

//for showing example file list in #gird #menu
var File = {
    fileList: [],
    setFileList: function (num) {
        for (let index = 1; index <= num; index++) {
            this.fileList[index] = "ex" + index;
        }
        this.fileList.push("box");
        this.fileList.push("grid");
        this.fileList.push("mediaquery");
    },
    writeFileList: function (list) {
        list.forEach((element) => {
            document.write(
                "<li>" +
                    "<a href='example/" +
                    element +
                    ".html' title='" +
                    element +
                    "'>" +
                    element +
                    "</a>" +
                    "</li>"
            );
        });
    },
};
function setExFileList(num) {
    File.setFileList(9);
    File.writeFileList(File.fileList);
}
