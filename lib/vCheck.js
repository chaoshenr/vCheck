var vcheck = {
    config: {
        checkClass: "vCheck",
        type: "checkbox",
        style: { //默认配置
            width: "20px",
            height: "20px",
            checkedIcon: "",
            uncheckIcon: ""
        }
    },
    vChecks: [],
    extend: function (options) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                this.config[key] = options[key];
            } 
        }
    },
    set: function (options) {
        var vcheckboxs = document.querySelectorAll("[type='checkbox']"); 
        that = this;
        that.extend(options);
        for (var v = 0; v < vcheckboxs.length; v++) {

            var v_checkbox      = vcheckboxs[v],
                box_label       = "",
                v_checkbox_ID   = v_checkbox.getAttribute("id"),
                i_check_wraper  = '',
                box_parent      = v_checkbox.parentNode,
                i_child_nodes   = i_check_wraper.childNodes

            that.vChecks.push(v_checkbox);

            i_check_wraper = document.createElement("div");
            i_check_wraper.setAttribute("name", "vCheck");

            box_label = document.createElement("label");
            box_label.setAttribute("for", v_checkbox_ID);

            box_parent.insertBefore(i_check_wraper, v_checkbox);
            box_parent.removeChild(v_checkbox);
            i_check_wraper.appendChild(box_label);
            i_check_wraper.appendChild(v_checkbox);

            // 设置自定义宽 高
            i_check_wraper.style.width = that.config.style.width;
            i_check_wraper.style.height = that.config.style.height;

            if (i_check_wraper.className) {
                i_check_wraper.className += " " + that.config.checkClass;
            }else {
                i_check_wraper.className = that.config.checkClass;
            }
            
            // 给每个input添加事件监听器
            addEventOption(v_checkbox, box_label);

            if (v_checkbox.checked) {                  
                box_label.style.background = "url("+that.config.style.checkedIcon+") no-repeat center";
            }else {
                box_label.style.background = "url("+that.config.style.uncheckIcon+") no-repeat center";  
            }
            
        }

        function addEventOption(input,label) {
            input.addEventListener("change", function () {
                if (input.checked) {
                    if (that.config.checked) {
                        that.config.checked(input);
                    }
                    label.style.background = "url("+that.config.style.checkedIcon+") no-repeat center";
                }else {
                    
                    if (that.config.uncheck) {
                        that.config.uncheck(input);
                    } 
                    label.style.background = "url("+that.config.style.uncheckIcon+") no-repeat center";
                }
            });
        }
        return this;
    },
    disabledAll: function () {
        for (var i = 0; i < this.vChecks.length; i++) {
            this.vChecks[i].setAttribute("disabled","true");
        }
    }
}