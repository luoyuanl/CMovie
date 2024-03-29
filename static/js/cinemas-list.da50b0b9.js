webpackJsonp(["cinemas-list"], {
    1023: function (t, i, e) {
        "use strict";

        function s(t, i) {
            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
        }

        var o = function () {
            function t(i, e) {
                s(this, t), this.$elem = i, e = e || {}, this.opts = $.extend({}, i.data(), e), this.$halfStarList = i.find(".half-star"), this.score = this.opts.score || 0, this.tmpScore = this.score, this.binded = !1, this.noBindEvent = void 0 !== this.opts.disable && this.opts.disable, this.noBindEvent || this.bindEvents()
            }

            return t.prototype.bindEvents = function () {
                var t = this;
                t.binded || (t.$elem.on("mouseleave", function () {
                    t.set(t.score)
                }), t.$halfStarList.on("mouseenter", function () {
                    t.set(t.$halfStarList.index($(this)) + 1)
                }).on("click", function () {
                    t.set(t.tmpScore, !0)
                }), t.binded = !0)
            }, t.prototype.set = function (t, i) {
                i ? (this.score = t, this.$elem.trigger("change", t)) : (this.tmpScore = t, this.$elem.trigger("tmp-change", t)), t >= 1 ? (this.$halfStarList.filter(":lt(" + t + ")").addClass("active"), this.$halfStarList.filter(":gt(" + (t - 1) + ")").removeClass("active")) : this.$halfStarList.removeClass("active")
            }, t.prototype.disable = function () {
                var t = this;
                t.binded && (t.$elem.off("mouseleave"), t.$halfStarList.off("mouseenter").off("click"), t.binded = !1)
            }, t.prototype.enable = function () {
                this.bindEvents()
            }, t
        }();
        $.fn.scoreStar = function (t) {
            return this.each(function () {
                var i = $(this);
                i.data("scoreStar", new o(i, t))
            }), this
        }
    }, 1024: function (module, exports) {
        function jBox(type, options) {
            this.options = {
                id: null,
                width: "auto",
                height: "auto",
                minWidth: null,
                maxHeight: null,
                minWidth: null,
                maxHeight: null,
                attach: null,
                trigger: "click",
                preventDefault: !1,
                title: null,
                content: null,
                getTitle: null,
                getContent: null,
                ajax: {url: null, data: "", reload: !1, getData: "data-ajax", setContent: !0, spinner: !0},
                target: null,
                position: {x: "center", y: "center"},
                outside: null,
                offset: 0,
                attributes: {x: "left", y: "top"},
                adjustPosition: !1,
                adjustTracker: !1,
                adjustDistance: 5,
                fixed: !1,
                reposition: !1,
                repositionOnOpen: !0,
                repositionOnContent: !0,
                pointer: !1,
                pointTo: "target",
                fade: 180,
                animation: null,
                theme: "Default",
                addClass: "",
                overlay: !1,
                zIndex: 1e4,
                delayOpen: 0,
                delayClose: 0,
                closeOnEsc: !1,
                closeOnClick: !1,
                closeOnMouseleave: !1,
                closeButton: !1,
                constructOnInit: !1,
                blockScroll: !1,
                appendTo: jQuery("body"),
                draggable: null,
                dragOver: !0,
                onInit: function () {
                },
                onCreated: function () {
                },
                onOpen: function () {
                },
                onClose: function () {
                },
                onCloseComplete: function () {
                },
                confirmButton: "Submit",
                cancelButton: "Cancel",
                confirm: null,
                cancel: null,
                autoClose: 7e3,
                color: null,
                stack: !0,
                audio: !1,
                volume: 100,
                src: "href",
                gallery: "data-jbox-image",
                imageLabel: "title",
                imageFade: 600,
                imageSize: "contain"
            }, this.defaultOptions = {
                Tooltip: {
                    getContent: "title",
                    trigger: "mouseenter",
                    position: {x: "center", y: "top"},
                    outside: "y",
                    pointer: !0,
                    adjustPosition: !0,
                    reposition: !0
                },
                Mouse: {
                    target: "mouse",
                    position: {x: "right", y: "bottom"},
                    offset: 15,
                    trigger: "mouseenter",
                    adjustPosition: "flip"
                },
                Modal: {
                    target: jQuery(window),
                    fixed: !0,
                    blockScroll: !0,
                    closeOnEsc: !0,
                    closeOnClick: "overlay",
                    closeButton: !0,
                    overlay: !0,
                    animation: "zoomOut"
                },
                Confirm: {
                    target: jQuery(window),
                    fixed: !0,
                    attach: jQuery("[data-confirm]"),
                    getContent: "data-confirm",
                    content: "Do you really want to do this?",
                    minWidth: 320,
                    maxWidth: 460,
                    blockScroll: !0,
                    closeOnEsc: !0,
                    closeOnClick: "overlay",
                    closeButton: !0,
                    overlay: !0,
                    animation: "zoomOut",
                    preventDefault: !0,
                    _onAttach: function (t) {
                        if (!this.options.confirm) {
                            var i = t.attr("onclick") ? t.attr("onclick") : t.attr("href") ? t.attr("target") ? 'window.open("' + t.attr("href") + '", "' + t.attr("target") + '");' : 'window.location.href = "' + t.attr("href") + '";' : "";
                            t.prop("onclick", null).data("jBox-Confirm-submit", i)
                        }
                    },
                    _onCreated: function () {
                        this.footer = jQuery('<div class="jBox-Confirm-footer"/>'), jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).click(function () {
                            this.options.cancel && this.options.cancel(), this.close()
                        }.bind(this)).appendTo(this.footer), this.submitButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer), this.footer.appendTo(this.container)
                    },
                    _onOpen: function () {
                        this.submitButton.off("click.jBox-Confirm" + this.id).on("click.jBox-Confirm" + this.id, function () {
                            this.options.confirm ? this.options.confirm() : eval(this.source.data("jBox-Confirm-submit")), this.close()
                        }.bind(this))
                    }
                },
                Notice: {
                    target: jQuery(window),
                    fixed: !0,
                    position: {x: 20, y: 20},
                    attributes: {x: "right", y: "top"},
                    animation: "zoomIn",
                    closeOnClick: "box",
                    _onInit: function () {
                        this.open(), this.options.delayClose = this.options.autoClose, this.options.delayClose && this.close()
                    },
                    _onCreated: function () {
                        this.options.color && this.wrapper.addClass("jBox-Notice-color jBox-Notice-" + this.options.color), this.wrapper.data("jBox-Notice-position", this.options.attributes.x + "-" + this.options.attributes.y)
                    },
                    _onOpen: function () {
                        jQuery.each(jQuery(".jBox-Notice"), function (t, i) {
                            if (i = jQuery(i), i.attr("id") != this.id && i.data("jBox-Notice-position") == this.options.attributes.x + "-" + this.options.attributes.y) return this.options.stack ? void i.css("margin-" + this.options.attributes.y, parseInt(i.css("margin-" + this.options.attributes.y)) + this.wrapper.outerHeight() + 10) : void i.data("jBox").close({ignoreDelay: !0})
                        }.bind(this)), this.options.audio && this.audio({
                            url: this.options.audio,
                            valume: this.options.volume
                        })
                    },
                    _onCloseComplete: function () {
                        this.destroy()
                    }
                },
                Image: {
                    target: jQuery(window),
                    fixed: !0,
                    blockScroll: !0,
                    closeOnEsc: !0,
                    closeOnClick: "overlay",
                    closeButton: !0,
                    overlay: !0,
                    animation: "zoomOut",
                    width: 800,
                    height: 533,
                    attach: jQuery("[data-jbox-image]"),
                    preventDefault: !0,
                    _onInit: function () {
                        this.images = this.currentImage = {}, this.imageZIndex = 1, this.attachedElements && jQuery.each(this.attachedElements, function (t, i) {
                            if (i = jQuery(i), !i.data("jBox-image-gallery")) {
                                var e = i.attr(this.options.gallery) || "default";
                                !this.images[e] && (this.images[e] = []), this.images[e].push({
                                    src: i.attr(this.options.src),
                                    label: i.attr(this.options.imageLabel) || ""
                                }), "title" == this.options.imageLabel && i.removeAttr("title"), i.data("jBox-image-gallery", e), i.data("jBox-image-id", this.images[e].length - 1)
                            }
                        }.bind(this));
                        var t = function (t, i, e, s) {
                            if (!jQuery("#jBox-image-" + t + "-" + i).length) {
                                var o = jQuery("<div/>", {
                                    id: "jBox-image-" + t + "-" + i,
                                    class: "jBox-image-container"
                                }).css({
                                    backgroundImage: "url(" + this.images[t][i].src + ")",
                                    backgroundSize: this.options.imageSize,
                                    opacity: s ? 1 : 0,
                                    zIndex: e ? 0 : this.imageZIndex++
                                }).appendTo(this.content);
                                jQuery("<div/>", {
                                    id: "jBox-image-label-" + t + "-" + i,
                                    class: "jBox-image-label" + (s ? " active" : "")
                                }).html(this.images[t][i].label).appendTo(this.imageLabel);
                                !s && !e && o.animate({opacity: 1}, this.options.imageFade)
                            }
                        }.bind(this), i = function (t, i) {
                            jQuery(".jBox-image-label.active").removeClass("active"), jQuery("#jBox-image-label-" + t + "-" + i).addClass("active")
                        };
                        this.showImage = function (e) {
                            if ("open" != e) {
                                var s = this.currentImage.gallery,
                                    o = this.currentImage.id + (1 * ("prev" == e) ? -1 : 1);
                                o = o > this.images[s].length - 1 ? 0 : o < 0 ? this.images[s].length - 1 : o
                            } else {
                                var s = this.source.data("jBox-image-gallery"), o = this.source.data("jBox-image-id");
                                jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({display: this.images[s].length > 1 ? "block" : "none"})
                            }
                            if (this.currentImage = {
                                gallery: s,
                                id: o
                            }, jQuery("#jBox-image-" + s + "-" + o).length) jQuery("#jBox-image-" + s + "-" + o).css({
                                zIndex: this.imageZIndex++,
                                opacity: 0
                            }).animate({opacity: 1}, "open" == e ? 0 : this.options.imageFade), i(s, o); else {
                                this.wrapper.addClass("jBox-loading");
                                jQuery('<img src="' + this.images[s][o].src + '">').load(function () {
                                    t(s, o, !1), i(s, o), this.wrapper.removeClass("jBox-loading")
                                }.bind(this))
                            }
                            var n = o + 1;
                            n = n > this.images[s].length - 1 ? 0 : n < 0 ? this.images[s].length - 1 : n, !jQuery("#jBox-image-" + s + "-" + n).length && jQuery('<img src="' + this.images[s][n].src + '">').load(function () {
                                t(s, n, !0)
                            })
                        }
                    },
                    _onCreated: function () {
                        this.imageLabel = jQuery("<div/>", {id: "jBox-image-label"}).appendTo(this.wrapper), this.wrapper.append(jQuery("<div/>", {
                            class: "jBox-image-pointer-prev",
                            click: function () {
                                this.showImage("prev")
                            }.bind(this)
                        })).append(jQuery("<div/>", {
                            class: "jBox-image-pointer-next", click: function () {
                                this.showImage("next")
                            }.bind(this)
                        }))
                    },
                    _onOpen: function () {
                        jQuery("body").addClass("jBox-image-open"), jQuery(document).on("keyup.jBox-" + this.id, function (t) {
                            37 == t.keyCode && this.showImage("prev"), 39 == t.keyCode && this.showImage("next")
                        }.bind(this)), this.showImage("open")
                    },
                    _onClose: function () {
                        jQuery("body").removeClass("jBox-image-open"), jQuery(document).off("keyup.jBox-" + this.id)
                    },
                    _onCloseComplete: function () {
                        this.wrapper.find(".jBox-image-container").css("opacity", 0)
                    }
                }
            }, "string" == jQuery.type(type) && (this.type = type, type = this.defaultOptions[type]), this.options = jQuery.extend(!0, this.options, type, options), null === this.options.id && (this.options.id = "jBoxID" + jBox._getUniqueID()), this.id = this.options.id, ("center" == this.options.position.x && "x" == this.options.outside || "center" == this.options.position.y && "y" == this.options.outside) && (this.options.outside = !1), (!this.options.outside || "xy" == this.options.outside) && (this.options.pointer = !1), "object" != jQuery.type(this.options.offset) && (this.options.offset = {
                x: this.options.offset,
                y: this.options.offset
            }), this.options.offset.x || (this.options.offset.x = 0), this.options.offset.y || (this.options.offset.y = 0), "object" != jQuery.type(this.options.adjustDistance) ? this.options.adjustDistance = {
                top: this.options.adjustDistance,
                right: this.options.adjustDistance,
                bottom: this.options.adjustDistance,
                left: this.options.adjustDistance
            } : this.options.adjustDistance = jQuery.extend({
                top: 5,
                left: 5,
                right: 5,
                bottom: 5
            }, this.options.adjustDistance), this.align = this.options.outside && "xy" != this.options.outside ? this.options.position[this.options.outside] : "center" != this.options.position.y && "number" != jQuery.type(this.options.position.y) ? this.options.position.x : "center" != this.options.position.x && "number" != jQuery.type(this.options.position.x) ? this.options.position.y : this.options.attributes.x, this.options.outside && "xy" != this.options.outside && (this.outside = this.options.position[this.options.outside]);
            var userAgent = navigator.userAgent.toLowerCase();
            return this.IE8 = -1 != userAgent.indexOf("msie") && 8 == parseInt(userAgent.split("msie")[1]), this.prefix = -1 != userAgent.indexOf("webkit") ? "-webkit-" : "", this._getOpp = function (t) {
                return {left: "right", right: "left", top: "bottom", bottom: "top", x: "y", y: "x"}[t]
            }, this._getXY = function (t) {
                return {left: "x", right: "x", top: "y", bottom: "y", center: "x"}[t]
            }, this._getTL = function (t) {
                return {left: "left", right: "left", top: "top", bottom: "top", center: "left", x: "left", y: "top"}[t]
            }, this._supportsSVG = function () {
                return document.createElement("svg").getAttributeNS
            }, this._createSVG = function (t, i) {
                var e = document.createElementNS("http://www.w3.org/2000/svg", t);
                return jQuery.each(i, function (t, i) {
                    e.setAttribute(i[0], i[1] || "")
                }), e
            }, this._appendSVG = function (t, i) {
                return i.appendChild(t)
            }, this._create = function () {
                if (!this.wrapper) {
                    if (this.wrapper = jQuery("<div/>", {
                        id: this.id,
                        class: "jBox-wrapper" + (this.type ? " jBox-" + this.type : "") + (this.options.theme ? " jBox-" + this.options.theme : "") + (this.options.addClass ? " " + this.options.addClass : "") + (this.IE8 ? " jBox-IE8" : "")
                    }).css({
                        position: this.options.fixed ? "fixed" : "absolute",
                        display: "none",
                        opacity: 0,
                        zIndex: this.options.zIndex
                    }).data("jBox", this), this.options.closeOnMouseleave && this.wrapper.mouseleave(function (t) {
                        !this.source || !(t.relatedTarget == this.source[0] || -1 !== jQuery.inArray(this.source[0], jQuery(t.relatedTarget).parents("*"))) && this.close()
                    }.bind(this)), "box" == this.options.closeOnClick && this.wrapper.on("touchend click", function () {
                        this.close({ignoreDelay: !0})
                    }.bind(this)), this.container = jQuery("<div/>", {class: "jBox-container"}).appendTo(this.wrapper), this.content = jQuery("<div/>", {class: "jBox-content"}).css({
                        width: this.options.width,
                        height: this.options.height,
                        minWidth: this.options.minWidth,
                        minHeight: this.options.minHeight,
                        maxWidth: this.options.maxWidth,
                        maxHeight: this.options.maxHeight
                    }).appendTo(this.container), this.options.closeButton) {
                        if (this.closeButton = jQuery("<div/>", {class: "jBox-closeButton jBox-noDrag"}).on("touchend click", function (t) {
                            this.isOpen && this.close({ignoreDelay: !0})
                        }.bind(this)), this._supportsSVG()) {
                            var t = this._createSVG("svg", [["viewBox", "0 0 24 24"]]);
                            this._appendSVG(this._createSVG("path", [["d", "M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]]), t), this.closeButton.append(t)
                        } else this.wrapper.addClass("jBox-nosvg");
                        "box" != this.options.closeButton && (!0 !== this.options.closeButton || this.options.overlay || this.options.title) || (this.wrapper.addClass("jBox-closeButton-box"), this.closeButton.appendTo(this.container))
                    }
                    if (this.wrapper.appendTo(this.options.appendTo), this.options.pointer) {
                        if (this.pointer = {
                            position: "target" != this.options.pointTo ? this.options.pointTo : this._getOpp(this.outside),
                            xy: "target" != this.options.pointTo ? this._getXY(this.options.pointTo) : this._getXY(this.outside),
                            align: "center",
                            offset: 0
                        }, this.pointer.element = jQuery("<div/>", {class: "jBox-pointer jBox-pointer-" + this.pointer.position}).appendTo(this.wrapper), this.pointer.dimensions = {
                            x: this.pointer.element.outerWidth(),
                            y: this.pointer.element.outerHeight()
                        }, "string" == jQuery.type(this.options.pointer)) {
                            var i = this.options.pointer.split(":");
                            i[0] && (this.pointer.align = i[0]), i[1] && (this.pointer.offset = parseInt(i[1]))
                        }
                        this.pointer.alignAttribute = "x" == this.pointer.xy ? "bottom" == this.pointer.align ? "bottom" : "top" : "right" == this.pointer.align ? "right" : "left", this.wrapper.css("padding-" + this.pointer.position, this.pointer.dimensions[this.pointer.xy]), this.pointer.element.css(this.pointer.alignAttribute, "center" == this.pointer.align ? "50%" : 0).css("margin-" + this.pointer.alignAttribute, this.pointer.offset), this.pointer.margin = {}, this.pointer.margin["margin-" + this.pointer.alignAttribute] = this.pointer.offset, "center" == this.pointer.align && this.pointer.element.css(this.prefix + "transform", "translate(" + ("y" == this.pointer.xy ? -.5 * this.pointer.dimensions.x + "px" : 0) + ", " + ("x" == this.pointer.xy ? -.5 * this.pointer.dimensions.y + "px" : 0) + ")"), this.pointer.element.css("x" == this.pointer.xy ? "width" : "height", parseInt(this.pointer.dimensions[this.pointer.xy]) + parseInt(this.container.css("border-" + this.pointer.alignAttribute + "-width"))), this.wrapper.addClass("jBox-pointerPosition-" + this.pointer.position)
                    }
                    if (this.setContent(this.options.content, !0), this.setTitle(this.options.title, !0), this.options.draggable) {
                        ("title" == this.options.draggable ? this.titleContainer : this.options.draggable.length > 0 ? this.options.draggable : this.options.draggable.selector ? jQuery(this.options.draggable.selector) : this.wrapper).addClass("jBox-draggable").on("mousedown", function (t) {
                            if (2 != t.button && !jQuery(t.target).hasClass("jBox-noDrag") && !jQuery(t.target).parents(".jBox-noDrag").length) {
                                this.options.dragOver && this.wrapper.css("zIndex") <= jBox.zIndexMax && (jBox.zIndexMax += 1, this.wrapper.css("zIndex", jBox.zIndexMax));
                                var i = this.wrapper.outerHeight(), e = this.wrapper.outerWidth(),
                                    s = this.wrapper.offset().top + i - t.pageY,
                                    o = this.wrapper.offset().left + e - t.pageX;
                                jQuery(document).on("mousemove.jBox-draggable-" + this.id, function (t) {
                                    this.wrapper.offset({top: t.pageY + s - i, left: t.pageX + o - e})
                                }.bind(this)), t.preventDefault()
                            }
                        }.bind(this)).on("mouseup", function () {
                            jQuery(document).off("mousemove.jBox-draggable-" + this.id)
                        }.bind(this)), jBox.zIndexMax = jBox.zIndexMax ? Math.max(jBox.zIndexMax, this.options.zIndex) : this.options.zIndex
                    }
                    this.options.onCreated.bind(this)(), this.options._onCreated && this.options._onCreated.bind(this)()
                }
            }, this.options.constructOnInit && this._create(), this.options.attach && this.attach(), this._positionMouse = function (t) {
                this.pos = {left: t.pageX, top: t.pageY};
                var i = function (t, i) {
                    return "center" == this.options.position[i] ? void (this.pos[t] -= Math.ceil(this.dimensions[i] / 2)) : (this.pos[t] += t == this.options.position[i] ? -1 * this.dimensions[i] - this.options.offset[i] : this.options.offset[i], this.pos[t])
                }.bind(this);
                this.wrapper.css({left: i("left", "x"), top: i("top", "y")}), this.targetDimensions = {
                    x: 0,
                    y: 0,
                    left: t.pageX,
                    top: t.pageY
                }, this._adjustPosition()
            }, this._attachEvents = function () {
                if (this.options.closeOnEsc && jQuery(document).on("keyup.jBox-" + this.id, function (t) {
                    27 == t.keyCode && this.close({ignoreDelay: !0})
                }.bind(this)), !0 !== this.options.closeOnClick && "body" != this.options.closeOnClick || jQuery(document).on("touchend.jBox-" + this.id + " click.jBox-" + this.id, function (t) {
                    this.blockBodyClick || "body" == this.options.closeOnClick && (t.target == this.wrapper[0] || this.wrapper.has(t.target).length) || this.close({ignoreDelay: !0})
                }.bind(this)), (this.options.adjustPosition && this.options.adjustTracker || this.options.reposition) && !this.fixed && this.outside) {
                    var t, i = 0, e = function () {
                        var e = (new Date).getTime();
                        t || (e - i > 150 && (this.options.reposition && this.position(), this.options.adjustTracker && this._adjustPosition(), i = e), t = setTimeout(function () {
                            t = null, i = (new Date).getTime(), this.options.reposition && this.position(), this.options.adjustTracker && this._adjustPosition()
                        }.bind(this), 150))
                    }.bind(this);
                    this.options.adjustTracker && "resize" != this.options.adjustTracker && jQuery(window).on("scroll.jBox-" + this.id, function (t) {
                        e()
                    }.bind(this)), (this.options.adjustTracker && "scroll" != this.options.adjustTracker || this.options.reposition) && jQuery(window).on("resize.jBox-" + this.id, function (t) {
                        e()
                    }.bind(this))
                }
                "mouse" == this.options.target && jQuery("body").on("mousemove.jBox-" + this.id, function (t) {
                    this._positionMouse(t)
                }.bind(this))
            }, this._detachEvents = function () {
                this.options.closeOnEsc && jQuery(document).off("keyup.jBox-" + this.id), (!0 === this.options.closeOnClick || "body" == this.options.closeOnClick) && jQuery(document).off("touchend.jBox-" + this.id + " click.jBox-" + this.id), (this.options.adjustPosition && this.options.adjustTracker || this.options.reposition) && (jQuery(window).off("scroll.jBox-" + this.id), jQuery(window).off("resize.jBox-" + this.id)), "mouse" == this.options.target && jQuery("body").off("mousemove.jBox-" + this.id)
            }, this._addOverlay = function () {
                this.overlay || (this.overlay = jQuery("#jBox-overlay").length ? jQuery("#jBox-overlay").css({zIndex: Math.min(jQuery("#jBox-overlay").css("z-index"), this.options.zIndex - 1)}) : jQuery("<div/>", {id: "jBox-overlay"}).css({
                    display: "none",
                    opacity: 0,
                    zIndex: this.options.zIndex - 1
                }).appendTo(jQuery("body")), ("overlay" == this.options.closeButton || !0 === this.options.closeButton) && (jQuery("#jBox-overlay .jBox-closeButton").length > 0 ? jQuery("#jBox-overlay .jBox-closeButton").on("touchend click", function () {
                    this.isOpen && this.close({ignoreDelay: !0})
                }.bind(this)) : this.overlay.append(this.closeButton)), "overlay" == this.options.closeOnClick && this.overlay.on("touchend click", function () {
                    this.isOpen && this.close({ignoreDelay: !0})
                }.bind(this)));
                var t = this.overlay.data("jBox") || {};
                t["jBox-" + this.id] = !0, this.overlay.data("jBox", t), "block" != this.overlay.css("display") && (this.options.fade ? this.overlay.stop() && this.overlay.animate({opacity: 1}, {
                    queue: !1,
                    duration: this.options.fade,
                    start: function () {
                        this.overlay.css({display: "block"})
                    }.bind(this)
                }) : this.overlay.css({display: "block", opacity: 1}))
            }, this._removeOverlay = function () {
                if (this.overlay) {
                    var t = this.overlay.data("jBox");
                    delete t["jBox-" + this.id], this.overlay.data("jBox", t), jQuery.isEmptyObject(t) && (this.options.fade ? this.overlay.stop() && this.overlay.animate({opacity: 0}, {
                        queue: !1,
                        duration: this.options.fade,
                        complete: function () {
                            this.overlay.css({display: "none"})
                        }.bind(this)
                    }) : this.overlay.css({display: "none", opacity: 0}))
                }
            }, this._generateCSS = function () {
                if (!this.IE8) {
                    "object" != jQuery.type(this.options.animation) && (this.options.animation = {
                        pulse: {
                            open: "pulse",
                            close: "zoomOut"
                        },
                        zoomIn: {open: "zoomIn", close: "zoomIn"},
                        zoomOut: {open: "zoomOut", close: "zoomOut"},
                        move: {open: "move", close: "move"},
                        slide: {open: "slide", close: "slide"},
                        flip: {open: "flip", close: "flip"},
                        tada: {open: "tada", close: "zoomOut"}
                    }[this.options.animation]), this.options.animation.open && (this.options.animation.open = this.options.animation.open.split(":")), this.options.animation.close && (this.options.animation.close = this.options.animation.close.split(":")), this.options.animation.openDirection = this.options.animation.open ? this.options.animation.open[1] : null, this.options.animation.closeDirection = this.options.animation.close ? this.options.animation.close[1] : null, this.options.animation.open && (this.options.animation.open = this.options.animation.open[0]), this.options.animation.close && (this.options.animation.close = this.options.animation.close[0]), this.options.animation.open && (this.options.animation.open += "Open"), this.options.animation.close && (this.options.animation.close += "Close");
                    var t = {
                        pulse: {duration: 350, css: [["0%", "scale(1)"], ["50%", "scale(1.1)"], ["100%", "scale(1)"]]},
                        zoomInOpen: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(0.9)"], ["100%", "scale(1)"]]
                        },
                        zoomInClose: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(1)"], ["100%", "scale(0.9)"]]
                        },
                        zoomOutOpen: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(1.1)"], ["100%", "scale(1)"]]
                        },
                        zoomOutClose: {
                            duration: this.options.fade || 180,
                            css: [["0%", "scale(1)"], ["100%", "scale(1.1)"]]
                        },
                        moveOpen: {
                            duration: this.options.fade || 180,
                            positions: {top: {"0%": -12}, right: {"0%": 12}, bottom: {"0%": 12}, left: {"0%": -12}},
                            css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
                        },
                        moveClose: {
                            duration: this.options.fade || 180,
                            timing: "ease-in",
                            positions: {
                                top: {"100%": -12},
                                right: {"100%": 12},
                                bottom: {"100%": 12},
                                left: {"100%": -12}
                            },
                            css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
                        },
                        slideOpen: {
                            duration: 400,
                            positions: {top: {"0%": -400}, right: {"0%": 400}, bottom: {"0%": 400}, left: {"0%": -400}},
                            css: [["0%", "translate%XY(%Vpx)"], ["100%", "translate%XY(0px)"]]
                        },
                        slideClose: {
                            duration: 400,
                            timing: "ease-in",
                            positions: {
                                top: {"100%": -400},
                                right: {"100%": 400},
                                bottom: {"100%": 400},
                                left: {"100%": -400}
                            },
                            css: [["0%", "translate%XY(0px)"], ["100%", "translate%XY(%Vpx)"]]
                        },
                        flipOpen: {
                            duration: 600,
                            css: [["0%", "perspective(400px) rotateX(90deg)"], ["40%", "perspective(400px) rotateX(-15deg)"], ["70%", "perspective(400px) rotateX(15deg)"], ["100%", "perspective(400px) rotateX(0deg)"]]
                        },
                        flipClose: {
                            duration: this.options.fade || 300,
                            css: [["0%", "perspective(400px) rotateX(0deg)"], ["100%", "perspective(400px) rotateX(90deg)"]]
                        },
                        tada: {
                            duration: 800,
                            css: [["0%", "scale(1)"], ["10%, 20%", "scale(0.9) rotate(-3deg)"], ["30%, 50%, 70%, 90%", "scale(1.1) rotate(3deg)"], ["40%, 60%, 80%", "scale(1.1) rotate(-3deg)"], ["100%", "scale(1) rotate(0)"]]
                        }
                    };
                    jQuery.each(["pulse", "tada"], function (i, e) {
                        t[e + "Open"] = t[e + "Close"] = t[e]
                    });
                    var i = function (i, e) {
                        return keyframe_css = "@" + this.prefix + "keyframes jBox-animation-" + this.options.animation[i] + "-" + i + (e ? "-" + e : "") + " {", jQuery.each(t[this.options.animation[i]].css, function (s, o) {
                            var n = e ? o[1].replace("%XY", this._getXY(e).toUpperCase()) : o[1];
                            t[this.options.animation[i]].positions && (n = n.replace("%V", t[this.options.animation[i]].positions[e][o[0]])), keyframe_css += o[0] + " {" + this.prefix + "transform:" + n + ";}"
                        }.bind(this)), keyframe_css += "}", keyframe_css += ".jBox-animation-" + this.options.animation[i] + "-" + i + (e ? "-" + e : "") + " {", keyframe_css += this.prefix + "animation-duration: " + t[this.options.animation[i]].duration + "ms;", keyframe_css += this.prefix + "animation-name: jBox-animation-" + this.options.animation[i] + "-" + i + (e ? "-" + e : "") + ";", keyframe_css += t[this.options.animation[i]].timing ? this.prefix + "animation-timing-function: " + t[this.options.animation[i]].timing + ";" : "", keyframe_css += "}", keyframe_css
                    }.bind(this), e = "";
                    jQuery.each(["open", "close"], function (s, o) {
                        if (!this.options.animation[o] || !t[this.options.animation[o]] || "close" == o && !this.options.fade) return "";
                        t[this.options.animation[o]].positions ? jQuery.each(["top", "right", "bottom", "left"], function (t, s) {
                            e += i(o, s)
                        }) : e += i(o)
                    }.bind(this)), jQuery("<style/>").append(e).appendTo(jQuery("head"))
                }
            }, this._blockBodyClick = function () {
                this.blockBodyClick = !0, setTimeout(function () {
                    this.blockBodyClick = !1
                }.bind(this), 10)
            }, this.options.animation && this._generateCSS(), this._animate = function (t) {
                if (!this.IE8) {
                    if (t || (t = this.isOpen ? "open" : "close"), !this.options.fade && "close" == t) return null;
                    var i = this.options.animation[t + "Direction"] || ("center" != this.align ? this.align : this.options.attributes.x);
                    this.flipped && this._getXY(i) == this._getXY(this.align) && (i = this._getOpp(i));
                    var e = "jBox-animation-" + this.options.animation[t] + "-" + t + " jBox-animation-" + this.options.animation[t] + "-" + t + "-" + i;
                    this.wrapper.addClass(e);
                    var s = 1e3 * parseFloat(this.wrapper.css(this.prefix + "animation-duration"));
                    "close" == t && (s = Math.min(s, this.options.fade)), setTimeout(function () {
                        this.wrapper.removeClass(e)
                    }.bind(this), s)
                }
            }, this._abortAnimation = function () {
                if (!this.IE8) {
                    var t = this.wrapper.attr("class").split(" ").filter(function (t) {
                        return 0 !== t.lastIndexOf("jBox-animation", 0)
                    });
                    this.wrapper.attr("class", t.join(" "))
                }
            }, this._adjustPosition = function () {
                if (!this.options.adjustPosition) return null;
                this.positionAdjusted && (this.wrapper.css(this.pos), this.pointer && this.wrapper.css("padding", 0).css("padding-" + this._getOpp(this.outside), this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-" + this.pointer.position), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this._getOpp(this.outside)).css(this.pointer.margin), this.positionAdjusted = !1, this.flipped = !1);
                var t = jQuery(window), i = {
                    x: t.width(),
                    y: t.height(),
                    top: this.options.fixed && this.target.data("jBox-fixed") ? 0 : t.scrollTop(),
                    left: this.options.fixed && this.target.data("jBox-fixed") ? 0 : t.scrollLeft()
                };
                i.bottom = i.top + i.y, i.right = i.left + i.x;
                var e = i.top > this.pos.top - (this.options.adjustDistance.top || 0),
                    s = i.right < this.pos.left + this.dimensions.x + (this.options.adjustDistance.right || 0),
                    o = i.bottom < this.pos.top + this.dimensions.y + (this.options.adjustDistance.bottom || 0),
                    n = i.left > this.pos.left - (this.options.adjustDistance.left || 0),
                    a = n ? "left" : s ? "right" : null, r = e ? "top" : o ? "bottom" : null;
                if (a || r) {
                    "move" == this.options.adjustPosition || a != this.outside && r != this.outside || ("mouse" == this.target && (this.outside = "right"), ("top" == this.outside || "left" == this.outside ? i[this._getXY(this.outside)] - (this.targetDimensions[this._getTL(this.outside)] - i[this._getTL(this.outside)]) - this.targetDimensions[this._getXY(this.outside)] + this.options.offset[this._getXY(this.outside)] : this.targetDimensions[this._getTL(this.outside)] - i[this._getTL(this.outside)] - this.options.offset[this._getXY(this.outside)]) > this.dimensions[this._getXY(this.outside)] + parseInt(this.options.adjustDistance[this._getOpp(this.outside)]) && (this.wrapper.css(this._getTL(this.outside), this.pos[this._getTL(this.outside)] + (this.dimensions[this._getXY(this.outside)] + this.options.offset[this._getXY(this.outside)] * ("top" == this.outside || "left" == this.outside ? -2 : 2) + this.targetDimensions[this._getXY(this.outside)]) * ("top" == this.outside || "left" == this.outside ? 1 : -1)), this.pointer && this.wrapper.removeClass("jBox-pointerPosition-" + this.pointer.position).addClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).css("padding", 0).css("padding-" + this.outside, this.pointer.dimensions[this._getXY(this.outside)]), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this.outside), this.positionAdjusted = !0, this.flipped = !0));
                    var p = "x" == this._getXY(this.outside) ? r : a;
                    if (this.pointer && "flip" != this.options.adjustPosition && this._getXY(p) == this._getOpp(this._getXY(this.outside))) {
                        if ("center" == this.pointer.align) var h = this.dimensions[this._getXY(p)] / 2 - this.pointer.dimensions[this._getOpp(this.pointer.xy)] / 2 - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) * (p != this._getTL(p) ? -1 : 1); else var h = p == this.pointer.alignAttribute ? parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) : this.dimensions[this._getXY(p)] - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - this.pointer.dimensions[this._getXY(p)];
                        spaceDiff = p == this._getTL(p) ? i[this._getTL(p)] - this.pos[this._getTL(p)] + this.options.adjustDistance[p] : -1 * (i[this._getOpp(this._getTL(p))] - this.pos[this._getTL(p)] - this.options.adjustDistance[p] - this.dimensions[this._getXY(p)]), p == this._getOpp(this._getTL(p)) && this.pos[this._getTL(p)] - spaceDiff < i[this._getTL(p)] + this.options.adjustDistance[this._getTL(p)] && (spaceDiff -= i[this._getTL(p)] + this.options.adjustDistance[this._getTL(p)] - (this.pos[this._getTL(p)] - spaceDiff)), spaceDiff = Math.min(spaceDiff, h), spaceDiff <= h && spaceDiff > 0 && (this.pointer.element.css("margin-" + this.pointer.alignAttribute, parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - spaceDiff * (p != this.pointer.alignAttribute ? -1 : 1)), this.wrapper.css(this._getTL(p), this.pos[this._getTL(p)] + spaceDiff * (p != this._getTL(p) ? -1 : 1)), this.positionAdjusted = !0)
                    }
                }
            }, this.options.onInit.bind(this)(), this.options._onInit && this.options._onInit.bind(this)(), this
        }

        jBox.prototype.attach = function (t, i) {
            return t || (t = jQuery(this.options.attach.selector || this.options.attach)), i || (i = this.options.trigger), t && t.length && jQuery.each(t, function (t, e) {
                e = jQuery(e), e.data("jBox-attached-" + this.id) || ("title" == this.options.getContent && void 0 != e.attr("title") && e.data("jBox-getContent", e.attr("title")).removeAttr("title"), this.attachedElements || (this.attachedElements = []), this.attachedElements.push(e[0]), e.on(i + ".jBox-attach-" + this.id, function (t) {
                    if (this.timer && clearTimeout(this.timer), "mouseenter" != i || !this.isOpen || this.source[0] != e[0]) {
                        if (this.isOpen && this.source && this.source[0] != e[0]) var s = !0;
                        this.source = e, !this.options.target && (this.target = e), "click" == i && this.options.preventDefault && t.preventDefault(), this["click" != i || s ? "open" : "toggle"]()
                    }
                }.bind(this)), "mouseenter" == this.options.trigger && e.on("mouseleave", function (t) {
                    this.options.closeOnMouseleave && (t.relatedTarget == this.wrapper[0] || jQuery(t.relatedTarget).parents("#" + this.id).length) || this.close()
                }.bind(this)), e.data("jBox-attached-" + this.id, i), this.options._onAttach && this.options._onAttach.bind(this)(e))
            }.bind(this)), this
        }, jBox.prototype.detach = function (t) {
            return t || (t = this.attachedElements || []), t && t.length && jQuery.each(t, function (t, i) {
                i = jQuery(i), i.data("jBox-attached-" + this.id) && (i.off(i.data("jBox-attached-" + this.id) + ".jBox-attach-" + this.id), i.data("jBox-attached-" + this.id, null)), this.attachedElements = jQuery.grep(this.attachedElements, function (t) {
                    return t != i[0]
                })
            }.bind(this)), this
        }, jBox.prototype.setTitle = function (t, i) {
            var e = this.wrapper.height(), s = this.wrapper.width();
            return null == t || void 0 == t ? this : (!this.wrapper && this._create(), this.title || (this.titleContainer = jQuery("<div/>", {class: "jBox-title"}), this.title = jQuery("<div/>").appendTo(this.titleContainer), this.wrapper.addClass("jBox-hasTitle"), ("title" == this.options.closeButton || !0 === this.options.closeButton && !this.options.overlay) && (this.wrapper.addClass("jBox-closeButton-title"), this.closeButton.appendTo(this.titleContainer)), this.titleContainer.insertBefore(this.content)), this.title.html(t), !i && this.options.repositionOnContent && (e != this.wrapper.height() || s != this.wrapper.width()) && this.position(), this)
        }, jBox.prototype.setContent = function (t, i) {
            if (null == t) return this;
            !this.wrapper && this._create();
            var e = this.wrapper.height(), s = this.wrapper.width(), o = jQuery("body").height(),
                n = jQuery("body").width();
            switch (this.content.children("[data-jbox-content-appended]").appendTo("body").css({display: "none"}), jQuery.type(t)) {
                case"string":
                    this.content.html(t);
                    break;
                case"object":
                    this.content.html(""), t.attr("data-jbox-content-appended", 1).appendTo(this.content).css({display: "block"})
            }
            var a = {x: n - jQuery("body").width(), y: o - jQuery("body").height()};
            return !i && this.options.repositionOnContent && (e != this.wrapper.height() || s != this.wrapper.width()) && this.position({adjustOffset: a}), this
        }, jBox.prototype.setDimensions = function (t, i, e) {
            !this.wrapper && this._create(), this.content.css(t, i), (void 0 == e || e) && this.position()
        }, jBox.prototype.setWidth = function (t, i) {
            this.setDimensions("width", t, i)
        }, jBox.prototype.setHeight = function (t, i) {
            this.setDimensions("height", t, i)
        }, jBox.prototype.position = function (t) {
            if (t || (t = {}), this.target = t.target || this.target || this.options.target || jQuery(window), this.dimensions = {
                x: this.wrapper.outerWidth(),
                y: this.wrapper.outerHeight()
            }, "mouse" != this.target) {
                if ("center" == this.options.position.x && "center" == this.options.position.y) return this.wrapper.css({
                    left: "50%",
                    top: "50%",
                    marginLeft: -.5 * this.dimensions.x + this.options.offset.x,
                    marginTop: -.5 * this.dimensions.y + this.options.offset.y
                }), this;
                var i = this.target.offset();
                !this.target.data("jBox-fixed") && this.target.data("jBox-fixed", this.target[0] != jQuery(window)[0] && ("fixed" == this.target.css("position") || this.target.parents().filter(function () {
                    return "fixed" == jQuery(this).css("position")
                }).length > 0) ? "fixed" : "static"), "fixed" == this.target.data("jBox-fixed") && this.options.fixed && (i.top = i.top - jQuery(window).scrollTop(), i.left = i.left - jQuery(window).scrollLeft()), this.targetDimensions = {
                    x: this.target.outerWidth(),
                    y: this.target.outerHeight(),
                    top: i ? i.top : 0,
                    left: i ? i.left : 0
                }, this.pos = {};
                var e = function (t) {
                    if (-1 == jQuery.inArray(this.options.position[t], ["top", "right", "bottom", "left", "center"])) return void (this.pos[this.options.attributes[t]] = this.options.position[t]);
                    var i = this.options.attributes[t] = "x" == t ? "left" : "top";
                    if (this.pos[i] = this.targetDimensions[i], "center" == this.options.position[t]) return void (this.pos[i] += Math.ceil((this.targetDimensions[t] - this.dimensions[t]) / 2));
                    i != this.options.position[t] && (this.pos[i] += this.targetDimensions[t] - this.dimensions[t]), (this.options.outside == t || "xy" == this.options.outside) && (this.pos[i] += this.dimensions[t] * (i != this.options.position[t] ? 1 : -1))
                }.bind(this);
                if (e("x"), e("y"), this.options.pointer && "number" != jQuery.type(this.options.position.x) && "number" != jQuery.type(this.options.position.y)) {
                    var s = 0;
                    switch (this.pointer.align) {
                        case"center":
                            "center" != this.options.position[this._getOpp(this.options.outside)] && (s += this.dimensions[this._getOpp(this.options.outside)] / 2);
                            break;
                        default:
                            switch (this.options.position[this._getOpp(this.options.outside)]) {
                                case"center":
                                    s += (this.dimensions[this._getOpp(this.options.outside)] / 2 - this.pointer.dimensions[this._getOpp(this.options.outside)] / 2) * (this.pointer.align == this._getTL(this.pointer.align) ? 1 : -1);
                                    break;
                                default:
                                    s += this.pointer.align != this.options.position[this._getOpp(this.options.outside)] ? this.dimensions[this._getOpp(this.options.outside)] * (-1 !== jQuery.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1) + this.pointer.dimensions[this._getOpp(this.options.outside)] / 2 * (-1 !== jQuery.inArray(this.pointer.align, ["top", "left"]) ? -1 : 1) : this.pointer.dimensions[this._getOpp(this.options.outside)] / 2 * (-1 !== jQuery.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1)
                            }
                    }
                    s *= this.options.position[this._getOpp(this.options.outside)] == this.pointer.alignAttribute ? -1 : 1, s += this.pointer.offset * (this.pointer.align == this._getOpp(this._getTL(this.pointer.align)) ? 1 : -1), this.pos[this._getTL(this._getOpp(this.pointer.xy))] += s
                }
                return t.adjustOffset && t.adjustOffset.x && (this.pos[this.options.attributes.x] += parseInt(t.adjustOffset.x) * ("left" == this.options.attributes.x ? 1 : -1)), t.adjustOffset && t.adjustOffset.y && (this.pos[this.options.attributes.y] += parseInt(t.adjustOffset.y) * ("top" == this.options.attributes.y ? 1 : -1)), this.pos[this.options.attributes.x] += this.options.offset.x, this.pos[this.options.attributes.y] += this.options.offset.y, this.wrapper.css(this.pos), this._adjustPosition(), this
            }
        }, jBox.prototype.open = function (t) {
            if (t || (t = {}), this.isDestroyed) return !1;
            if (!this.wrapper && this._create(), this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;
            var i = function () {
                this.source && this.options.getTitle && this.source.attr(this.options.getTitle) && this.setTitle(this.source.attr(this.options.getTitle)), this.source && this.options.getContent && (this.source.data("jBox-getContent") ? this.setContent(this.source.data("jBox-getContent"), !0) : this.source.attr(this.options.getContent) && this.setContent(this.source.attr(this.options.getContent), !0)), this.options.onOpen.bind(this)(), this.options._onOpen && this.options._onOpen.bind(this)(), (this.options.ajax && this.options.ajax.url && (!this.ajaxLoaded || this.options.ajax.reload) || t.ajax && t.ajax.url) && this.ajax(t.ajax || null), (!this.positionedOnOpen || this.options.repositionOnOpen) && this.position({target: t.target}) && (this.positionedOnOpen = !0), this.isClosing && this._abortAnimation(), this.isOpen || (this.isOpen = !0, this._attachEvents(), this.options.blockScroll && jQuery("body").addClass("jBox-blockScroll-" + this.id), this.options.overlay && this._addOverlay(), this.options.animation && !this.isClosing && this._animate("open"), this.options.fade ? this.wrapper.stop().animate({opacity: 1}, {
                    queue: !1,
                    duration: this.options.fade,
                    start: function () {
                        this.isOpening = !0, this.wrapper.css({display: "block"})
                    }.bind(this),
                    always: function () {
                        this.isOpening = !1
                    }.bind(this)
                }) : this.wrapper.css({display: "block", opacity: 1}))
            }.bind(this);
            return !this.options.delayOpen || this.isOpen || this.isClosing || t.ignoreDelay ? i() : this.timer = setTimeout(i, this.options.delayOpen), this
        }, jBox.prototype.close = function (t) {
            if (t || (t = {}), this.isDestroyed) return !1;
            if (this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;
            var i = function () {
                this.options.onClose.bind(this)(), this.options._onClose && this.options._onClose.bind(this)(), this.isOpen && (this.isOpen = !1, this._detachEvents(), this.options.blockScroll && jQuery("body").removeClass("jBox-blockScroll-" + this.id), this.options.overlay && this._removeOverlay(), this.options.animation && !this.isOpening && this._animate("close"), this.options.fade ? this.wrapper.stop().animate({opacity: 0}, {
                    queue: !1,
                    duration: this.options.fade,
                    start: function () {
                        this.isClosing = !0
                    }.bind(this),
                    complete: function () {
                        this.wrapper.css({display: "none"}), this.options.onCloseComplete && this.options.onCloseComplete.bind(this)(), this.options._onCloseComplete && this.options._onCloseComplete.bind(this)()
                    }.bind(this),
                    always: function () {
                        this.isClosing = !1
                    }.bind(this)
                }) : (this.wrapper.css({
                    display: "none",
                    opacity: 0
                }), this.options._onCloseComplete && this.options._onCloseComplete.bind(this)()))
            }.bind(this);
            return t.ignoreDelay ? i() : this.timer = setTimeout(i, Math.max(this.options.delayClose, 10)), this
        }, jBox.prototype.toggle = function (t) {
            return this[this.isOpen ? "close" : "open"](t), this
        }, jBox.prototype.disable = function () {
            return this.isDisabled = !0, this
        }, jBox.prototype.enable = function () {
            return this.isDisabled = !1, this
        }, jBox.prototype.ajax = function (t) {
            t || (t = {}), this.options.ajax.getData && !t.data && this.source && void 0 != this.source.attr(this.options.ajax.getData) && (t.data = this.source.attr(this.options.ajax.getData) || "");
            var i = jQuery.extend(!0, {}, this.options.ajax);
            this.ajaxRequest && this.ajaxRequest.abort();
            var e = t.beforeSend || i.beforeSend || function () {
            }, s = t.complete || i.complete || function () {
            }, o = jQuery.extend(!0, i, t);
            return o.beforeSend = function () {
                o.spinner && (this.wrapper.addClass("jBox-loading"), this.spinner = jQuery(!0 !== o.spinner ? o.spinner : '<div class="jBox-spinner"></div>').appendTo(this.container)), e.bind(this)()
            }.bind(this), o.complete = function (t) {
                this.wrapper.removeClass("jBox-loading"), this.spinner && this.spinner.remove(), o.setContent && this.setContent(t.responseText), this.ajaxLoaded = !0, s.bind(this)(t)
            }.bind(this), this.ajaxRequest = jQuery.ajax(o), this
        }, jBox.prototype.audio = function (t) {
            if (t || (t = {}), jBox._audio || (jBox._audio = {}), !t.url || this.IE8) return this;
            if (!jBox._audio[t.url]) {
                var i = jQuery("<audio/>");
                jQuery("<source/>", {src: t.url + ".mp3"}).appendTo(i), jQuery("<source/>", {src: t.url + ".ogg"}).appendTo(i), jBox._audio[t.url] = i[0]
            }
            jBox._audio[t.url].volume = Math.min(void 0 != t.volume ? t.volume : (void 0 != this.options.volume ? this.options.volume : 100) / 100, 1), jBox._audio[t.url].pause();
            try {
                jBox._audio[t.url].currentTime = 0
            } catch (t) {
            }
            return jBox._audio[t.url].play(), this
        }, jBox.prototype.destroy = function () {
            return this.detach().close({ignoreDelay: !0}), this.wrapper && this.wrapper.remove(), this.isDestroyed = !0, this
        }, jBox._getUniqueID = function () {
            var t = 1;
            return function () {
                return t++
            }
        }(), jQuery.fn.jBox = function (t, i) {
            return t || (t = {}), i || (i = {}), new jBox(t, jQuery.extend(i, {attach: this}))
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var i = Array.prototype.slice.call(arguments, 1), e = this, s = function () {
            }, o = function () {
                return e.apply(this instanceof s && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
            };
            return s.prototype = this.prototype, o.prototype = new s, o
        }), module.exports = jBox
    }, 1235: function (t, i, e) {
        "use strict";

        function s(t, i) {
            if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t) {
            var i = "";
            return t > 0 && t <= 2 ? i = "超烂啊" : t > 2 && t <= 4 ? i = "比较差" : t > 4 && t <= 6 ? i = "一般般" : t > 6 && t <= 8 ? i = "比较好" : t > 8 && t <= 9 ? i = "棒极了" : t > 9 && t <= 10 && (i = "完美"), i
        }

        function n() {
            y.data("score") ? (x.text("看过"), y.addClass("active")) : y.data("wish") ? (x.text("已想看"), y.addClass("active")) : (x.text("想看"), y.removeClass("active"))
        }

        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : system.myComment, i = t.score,
                e = void 0 === i ? 0 : i, s = t.content, a = void 0 === s ? "" : s;
            e ? (f.addClass("active"), g.text(2 * e + "分，" + o(2 * e)), y.addClass("active").data("score", e).data("wish", !1), x.text("看过")) : (f.removeClass("active"), g.text("评分"), y.data("score", 0)), n(), a ? v.text("我的短评") : v.text("写短评")
        }

        e(1023);
        var r = e(212), p = e(397), h = e(395), c = e(1236), l = e(1024), u = window.system.districtFilter,
            d = window.system.subwayFilter, m = $('.tags-line[data-type="district"]'), f = $(".action .score-btn"),
            g = f.find(".score-btn-msg"), y = $(".action .wish"), x = y.find(".wish-msg"), j = window.system.movieId,
            v = $(".comment-entry");
        $('li[data-type="district"]').on("click", ".tags li a:not(.float-filter .tags li a)", function (t) {
            t.preventDefault();
            var i = $(this).data("id"), e = {};
            $(".float-filter").remove(), -2 === i ? (e = {
                lineItems: d,
                stationItems: [],
                lineTag: "lineId",
                stationTag: "stationId",
                query: window.system.query,
                type: "line",
                ignore: ""
            }, e.lineItems.length > 0 && m.append(c.render({data: e}))) : (e = {
                subItems: u["" + i] ? u["" + i].subItems : [],
                tag: "areaId",
                query: window.system.query,
                extra: "districtId=" + i,
                type: "area",
                ignore: "districtId lineId stationId"
            }, e.subItems && e.subItems.length > 5 ? m.append(c.render({data: e})) : location.search = $(this).attr("href"))
        }), $('li[data-type="district"]').on("click", ".tags li .subway-tag", function (t) {
            t.preventDefault();
            var i = $(this).data("id");
            $(".float-filter").remove();
            for (var e = void 0, s = 0, o = d.length; s < o; s++) if (d[s].id === i) {
                e = d[s].subItems;
                break
            }
            var n = {
                lineItems: d,
                stationItems: e,
                query: window.system.query,
                extra: "districtId=-2&lineId=" + i,
                type: "line",
                ignore: "districtId lineId stationId areaId",
                activeId: i
            };
            n.lineItems.length > 0 && m.append(c.render({data: n}))
        });
        var b = function () {
            if (!system.user) return function () {
                Promise.reject(new Error("用户未登录"))
            };
            var t = {userId: system.user.id, token: system.user.token, nick: system.user.username};
            return function (i, e) {
                var s = null;
                return s = e ? $.ajax({
                    method: "PUT",
                    url: (0, p.utmParam)("/ajax/proxy/mmdb/comment/" + j + "/" + e + ".json"),
                    data: $.extend({business: 1, clientType: "web"}, t, i),
                    dataType: "json"
                }) : $.post((0, p.utmParam)("/ajax/proxy/mmdb/comments/movie/" + j + ".json"), $.extend({
                    business: 1,
                    clientType: "web"
                }, t, i)), s.then(function (t) {
                    return t.error || ($.extend(system.myComment, i), a()), t
                })
            }
        }();
        y.on("click", (0, r.checkLogin)((0, p.noRepeatRequest)(function (t) {
            var i = $(this);
            if (i.data("score")) return b({score: 0, content: ""}, system.myComment.id).then(function (t) {
                t.error || f.data("jBoxWidget").commentForm.scoreStarWidget.enable()
            });
            var e = i.data("wish") ? "delete" : "post";
            return $.ajax({url: "/ajax/movie/" + j + "/wish", method: e, dataType: "json"}).then(function (t) {
                !1 === t.hasLogin ? (0, r.login)() : t.error || (i.data("wish", "post" === e), n())
            })
        })));
        var B = function () {
            function t(i) {
                s(this, t), this.$elem = i, this.commentData = system.myComment, this.scoreStarWidget = i.find(".score-star").scoreStar({disable: system.user.isProfessional && !!this.commentData.score}).data("scoreStar"), this.$contentContainer = i.find(".content-container"), this.$contentInput = i.find("[name=content]"), this.$scoreInput = i.find("[name=score]"), this.$scoreMsgContainer = i.find(".score-msg-container"), this.$scoreMsg = i.find(".score-message"), this.$scoreNum = i.find(".score .num"), this.$noScore = i.find(".no-score"), this.$wordCountInfo = i.find(".word-count-info"), this.$submitBtn = i.find("[type=submit]"), this.bindEvents()
            }

            return t.prototype.bindEvents = function () {
                var t = this;
                this.$elem.on("submit", function (i) {
                    if (i.preventDefault(), !t.$submitBtn.hasClass("disabled")) {
                        var e = {score: t.$scoreInput.val(), content: t.$contentInput.val()};
                        b(e, t.commentData.id).then(function (i) {
                            i.error || (t.$elem.trigger("submit-success", t.commentData), system.user.isProfessional && t.scoreStarWidget.disable())
                        })
                    }
                }), this.$contentInput.on("keyup paste", function () {
                    t.updateWordCountInfo()
                }).on("focus", function () {
                    t.$contentContainer.addClass("focus")
                }).on("blur", function () {
                    t.$contentContainer.removeClass("focus")
                }), this.scoreStarWidget.$elem.on("change", function (i, e) {
                    t.setScore(e / 2)
                }).on("tmp-change", function (i, e) {
                    t.updateScoreMsg(e)
                })
            }, t.prototype.fetch = function () {
                var t = this;
                $.get("/ajax/movie/" + j + "/comment").then(function (i) {
                    !i.error && i.data.comment && (t.commentData = i.data.comment)
                })
            }, t.prototype.setScore = function (t) {
                this.$scoreInput.val(t), this.updateScoreMsg(2 * t), this.updateSubmitBtn()
            }, t.prototype.setContent = function (t) {
                this.$contentInput.val(t), this.updateSubmitBtn(), this.updateWordCountInfo()
            }, t.prototype.updateWordCountInfo = function () {
                var t = this.$contentInput.val().length;
                return this.updateSubmitBtn(), t >= 1 && t < 6 ? void this.$wordCountInfo.removeClass("error").text("还需输入" + (6 - t) + "个字") : t >= 280 && t <= 300 ? void this.$wordCountInfo.removeClass("error").text("还可以输入" + (300 - t) + "个字") : t > 300 ? void this.$wordCountInfo.addClass("error").text("超出" + (t - 300) + "个字") : void this.$wordCountInfo.removeClass("error").text("")
            }, t.prototype.updateScoreMsg = function (t) {
                t = t || this.scoreStarWidget.score, t ? (this.$scoreMsg.text(o(t)), this.$scoreNum.text(t), this.$scoreMsgContainer.addClass("active")) : this.$scoreMsgContainer.removeClass("active")
            }, t.prototype.updateSubmitBtn = function () {
                var t = this.$contentInput.val().length;
                !Number(this.$scoreInput.val()) || t >= 1 && t < 6 || t > 300 || system.user.isProfessional && !t ? this.$submitBtn.addClass("disabled") : this.$submitBtn.removeClass("disabled")
            }, t.prototype.reset = function () {
                var t = this.commentData, i = t.content, e = void 0 === i ? "" : i, s = t.score,
                    o = void 0 === s ? 0 : s;
                this.setContent(e), this.scoreStarWidget.set(2 * o, !0)
            }, t
        }();
        f.on("click", (0, r.checkLogin)(function () {
            var t = $(this), i = t.data("jBoxWidget");
            i || (i = new l("Modal", {
                id: "comment-form-container",
                width: 550,
                height: 450,
                blockScroll: !1,
                content: $("#comment-form-container").html(),
                onOpen: function () {
                    (0, h.disableScroll)();
                    var t = $(".jBox-container .content-container textarea");
                    if (t.on("mousewheel", function (i) {
                        t.scrollTop(t.scrollTop() - i.originalEvent.wheelDelta)
                    }), t.placeholder({customClass: "ie8-placeholder"}), !this.commentForm) {
                        var i = this;
                        this.commentForm = new B(this.content.find("#comment-form")), this.commentForm.$elem.on("submit-success", function (t, e) {
                            i.close()
                        }), this.content.find(".close").on("click", function () {
                            i.close()
                        })
                    }
                },
                onClose: function () {
                    (0, h.enableScroll)()
                }
            }), t.data("jBoxWidget", i)), i.open()
        })), e(1237)
    }, 1236: function (t, i, e) {
        var s, o = e(123);
        s = o.currentEnv ? o.currentEnv : o.currentEnv = new o.Environment([], void 0);
        var n = (e(124)(s), o.webpackDependencies || (o.webpackDependencies = {})), a = e(125);
        !function () {
            (o.nunjucksPrecompiled = o.nunjucksPrecompiled || {})["pages/cinemas/float-filter.html"] = function () {
                function t(t, i, e, s, o) {
                    var n = null, a = null, r = "";
                    try {
                        var p = null,
                            h = s.makeMacro(["subItems", "tag", "query", "ignore", "extra"], [], function (o, r, p, h, c, l) {
                                e = e.push(!0), l = l || {}, l.hasOwnProperty("caller") && e.set("caller", l.caller), e.set("subItems", o), e.set("tag", r), e.set("query", p), e.set("ignore", h), e.set("extra", c);
                                var u = "";
                                u += '\n  <ul class="tags">\n    ', e = e.push();
                                var d = o;
                                if (d) for (var m = d.length, f = 0; f < d.length; f++) {
                                    var g = d[f];
                                    e.set("item", g), e.set("loop.index", f + 1), e.set("loop.index0", f), e.set("loop.revindex", m - f), e.set("loop.revindex0", m - f - 1), e.set("loop.first", 0 === f), e.set("loop.last", f === m - 1), e.set("loop.length", m), u += '\n      <li>\n        <a data-act="tag-click" data-val="{TagName:\'', u += s.suppressValue(s.memberLookup(g, "name"), t.opts.autoescape), u += '\'}" href="', u += s.suppressValue((n = 4, a = 85, s.callWrap(s.contextOrFrameLookup(i, e, "assignQuery"), "assignQuery", i, [p, r, s.memberLookup(g, "id"), h, c])), t.opts.autoescape), u += '">', u += s.suppressValue(s.memberLookup(g, "name"), t.opts.autoescape), u += "</a>\n      </li>\n    "
                                }
                                return e = e.pop(), u += "\n  </ul>\n", e = e.pop(), new s.SafeString(u)
                            });
                        i.addExport("areaFilter"), i.setVariable("areaFilter", h), r += "\n\n";
                        var c = s.makeMacro(["lineItems", "stationItems", "query", "ignore", "extra", "activeId"], [], function (o, r, p, h, c, l, u) {
                            e = e.push(!0), u = u || {}, u.hasOwnProperty("caller") && e.set("caller", u.caller), e.set("lineItems", o), e.set("stationItems", r), e.set("query", p), e.set("ignore", h), e.set("extra", c), e.set("activeId", l);
                            var d = "";
                            d += '\n  <ul class="tags">\n    ', e = e.push();
                            var m = o;
                            if (m) for (var f = m.length, g = 0; g < m.length; g++) {
                                var y = m[g];
                                e.set("item", y), e.set("loop.index", g + 1), e.set("loop.index0", g), e.set("loop.revindex", f - g), e.set("loop.revindex0", f - g - 1), e.set("loop.first", 0 === g), e.set("loop.last", g === f - 1), e.set("loop.length", f), d += '\n      <li class="', d += s.suppressValue(l == s.memberLookup(y, "id") ? "active" : "", t.opts.autoescape), d += '">\n        ', -1 === s.memberLookup(y, "id") ? (d += '\n          <a data-act="tag-click" data-val="{TagName:\'', d += s.suppressValue(s.memberLookup(y, "name"), t.opts.autoescape), d += '\'}" href="', d += s.suppressValue((n = 15, a = 87, s.callWrap(s.contextOrFrameLookup(i, e, "assignQuery"), "assignQuery", i, [p, "lineId", s.memberLookup(y, "id"), "stationId, districtId, areaId", "districtId=-2"])), t.opts.autoescape), d += '">', d += s.suppressValue(s.memberLookup(y, "name"), t.opts.autoescape), d += "</a>\n        ") : (d += '\n          <a class="subway-tag" data-id="', d += s.suppressValue(s.memberLookup(y, "id"), t.opts.autoescape), d += '" data-act="tag-click" data-val="{TagName:\'', d += s.suppressValue(s.memberLookup(y, "name"), t.opts.autoescape), d += '\'}" href="javascript:void(0)">', d += s.suppressValue(s.memberLookup(y, "name"), t.opts.autoescape), d += "</a>\n        "), d += "\n      </li>\n    "
                            }
                            if (e = e.pop(), d += "\n  </ul>\n\n  ", s.memberLookup(r, "length") > 0) {
                                d += '\n    <ul class="tags station-tags">\n    ', e = e.push();
                                var x = r;
                                if (x) for (var j = x.length, v = 0; v < x.length; v++) {
                                    var b = x[v];
                                    e.set("item", b), e.set("loop.index", v + 1), e.set("loop.index0", v), e.set("loop.revindex", j - v), e.set("loop.revindex0", j - v - 1), e.set("loop.first", 0 === v), e.set("loop.last", v === j - 1), e.set("loop.length", j), d += '\n      <li>\n        <a data-act="tag-click" data-val="{TagName:\'', d += s.suppressValue(s.memberLookup(b, "name"), t.opts.autoescape), d += '\'}" href="', d += s.suppressValue((n = 27, a = 85, s.callWrap(s.contextOrFrameLookup(i, e, "assignQuery"), "assignQuery", i, [p, "stationId", s.memberLookup(b, "id"), h, c])), t.opts.autoescape), d += '">', d += s.suppressValue(s.memberLookup(b, "name"), t.opts.autoescape), d += "</a>\n      </li>\n    "
                                }
                                e = e.pop(), d += "\n    </ul>\n  "
                            }
                            return d += "\n", e = e.pop(), new s.SafeString(d)
                        });
                        i.addExport("lineFilter"), i.setVariable("lineFilter", c), r += '\n\n<div class="float-filter">\n  ', "area" == s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "type") ? (r += "\n    ", r += s.suppressValue((n = 36, a = 15, s.callWrap(h, "areaFilter", i, [s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "subItems"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "tag"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "query"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "ignore"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "extra")])), t.opts.autoescape), r += "\n  ") : (r += "\n    ", r += s.suppressValue((n = 38, a = 15, s.callWrap(c, "lineFilter", i, [s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "lineItems"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "stationItems"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "query"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "ignore"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "extra"), s.memberLookup(s.contextOrFrameLookup(i, e, "data"), "activeId")])), t.opts.autoescape), r += "\n  "), r += "\n</div>\n", p ? p.rootRenderFunc(t, i, e, s, o) : o(null, r)
                    } catch (t) {
                        o(s.handleError(t, n, a))
                    }
                }

                return {root: t}
            }()
        }(), t.exports = a(o, s, o.nunjucksPrecompiled["pages/cinemas/float-filter.html"], n)
    }, 1237: function (t, i) {
    }, 397: function (t, i, e) {
        "use strict";
        var s = e(398), o = function (t) {
            return t && t.__esModule ? t : {default: t}
        }(s), n = /[\?&](utm_term|utm_medium|utm_source|utm_content|utm_campaign)=([^&]+)/g, a = void 0;
        t.exports = {
            noRepeatRequest: function (t) {
                var i = !1;
                return function () {
                    if (!i) {
                        i = !0;
                        var e = t.apply(this, arguments);
                        e && e.then ? e.then(function () {
                            i = !1
                        }).fail(function () {
                            i = !1
                        }) : (console.error("fail to no repeat request"), i = !1)
                    }
                }
            }, utmParam: function (t) {
                if (!a) {
                    if (a = {}, location.search.replace(n, function (t, i, e) {
                        a[i] = e
                    }), !(a.utm_term || a.utm_medium || a.utm_source || a.utm_content || a.utm_campaign)) {
                        decodeURIComponent(o.default.get("_lx_utm")).replace(n, function (t, i, e) {
                            a[i] = e
                        })
                    }
                    a.uuid = o.default.get("uuid"), a.ci = ci
                }
                var i = "";
                for (var e in a) if (a.hasOwnProperty(e) && null != a[e]) {
                    if (~t.indexOf("&" + e + "=") || ~t.indexOf("?" + e + "=")) continue;
                    i += "&" + e + "=" + a[e]
                }
                return ~t.indexOf("?") || (i = i.replace("&", "?")), t + i
            }
        }
    }
}, [1235]);