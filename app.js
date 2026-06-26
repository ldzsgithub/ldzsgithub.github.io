/**
 * 《易经》六十四卦速查 — 四栏布局
 * 左：卦爻 | 中上：辞 | 中下：十翼 | 右：解释
 */

(function () {
  "use strict";

  var HEX_UNICODE_BASE = 0x4dc0;

  // 状态
  var currentHexId = 1;
  var selectedYao = -1;       // -1=卦, 0-5=爻, 6=用九/用六
  var selectedPassage = null;  // null 或 { type, index }
  var currentJing = "upper";

  var gridEl = document.getElementById("hexGrid");
  var displayEl = document.getElementById("hexDisplay");
  var jingTabs = document.querySelectorAll(".jing-tab");

  // ---- 切换上经/下经 ----
  jingTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      currentJing = this.getAttribute("data-jing");
      jingTabs.forEach(function (t) {
        t.classList.toggle("active", t.getAttribute("data-jing") === currentJing);
      });
      if (currentJing === "upper" && currentHexId > 30) currentHexId = 1;
      else if (currentJing === "lower" && currentHexId < 31) currentHexId = 31;
      selectedYao = -1;
      selectedPassage = null;
      renderGrid();
      renderMainContent();
    });
  });

  // ---- 渲染卦象网格 ----
  function renderGrid() {
    gridEl.innerHTML = "";
    var start = currentJing === "upper" ? 1 : 31;
    var end = currentJing === "upper" ? 30 : 64;
    HEXAGRAMS.forEach(function (hex) {
      if (hex.id < start || hex.id > end) return;
      var btn = document.createElement("div");
      btn.className = "hex-btn" + (hex.id === currentHexId ? " active" : "");
      btn.setAttribute("data-id", hex.id);
      btn.innerHTML = '<span class="hex-num">' + hex.id + "</span><span class=\"hex-name\">" + hex.name + "</span>";
      btn.addEventListener("click", function () { selectHex(hex.id); });
      gridEl.appendChild(btn);
    });
  }

  function selectHex(id) {
    currentHexId = id;
    selectedYao = -1;
    selectedPassage = null;
    var btns = gridEl.querySelectorAll(".hex-btn");
    btns.forEach(function (b) {
      b.classList.toggle("active", parseInt(b.getAttribute("data-id"), 10) === id);
    });
    renderMainContent();
  }

  function selectYao(idx) {
    selectedYao = (selectedYao === idx) ? -1 : idx;
    selectedPassage = null;
    renderMainContent();
  }

  function selectPassage(type, index) {
    if (selectedPassage && selectedPassage.type === type && selectedPassage.index === index) {
      selectedPassage = null;
    } else {
      selectedPassage = { type: type, index: index };
    }
    renderMainContent();
  }

  // ---- 渲染主内容 ----
  function renderMainContent() {
    var hex = HEXAGRAMS.find(function (h) { return h.id === currentHexId; });
    if (!hex) return;
    var shiyi = SHIYI[hex.id];
    if (!shiyi) return;

    var unicode = String.fromCharCode(HEX_UNICODE_BASE + hex.id - 1);
    var isHexSelected = selectedYao === -1;

    // 左栏：爻线
    var yaoLinesHtml = "";
    hex.lines.forEach(function (line, idx) {
      var cls = line.yin ? "yao-line yin" : "yao-line yang";
      if (idx === selectedYao) cls += " selected";
      var barHtml = line.yin ? '<span class="bar"></span><span class="bar"></span>' : '<span class="bar"></span>';
      yaoLinesHtml += '<div class="' + cls + '" data-idx="' + idx + '">' +
        '<span class="yao-label">' + line.name + "</span>" +
        '<span class="yao-bar">' + barHtml + "</span>" +
        "</div>";
    });
    var extraHtml = "";
    if (hex.extra) {
      var eCls = "yao-line yang extra-yao";
      if (selectedYao === 6) eCls += " selected";
      extraHtml = '<div class="yao-extra-sep"></div>' +
        '<div class="' + eCls + '" data-idx="6">' +
        '<span class="yao-label">' + hex.extra.name + "</span>" +
        '<span class="yao-bar"><span class="bar"></span></span>' +
        "</div>";
    }

    // 中上：辞
    var contentHtml = "";
    if (isHexSelected) {
      contentHtml =
        '<div class="content-title">' + hex.name + ' · 卦辞</div>' +
        '<div class="content-text">' + hex.guaci + "</div>";
    } else if (selectedYao >= 0 && selectedYao < 6) {
      contentHtml =
        '<div class="content-title">' + hex.lines[selectedYao].name + " · 爻辞</div>" +
        '<div class="content-text">' + hex.lines[selectedYao].text + "</div>";
    } else if (selectedYao === 6 && hex.extra) {
      contentHtml =
        '<div class="content-title">' + hex.extra.name + "</div>" +
        '<div class="content-text">' + hex.extra.text + "</div>";
    }

    // 中下：十翼关联
    var shiyiHtml = "";
    if (isHexSelected) {
      // 卦选中时：彖传 + 大象传 + (文言传)
      var tuanSel = selectedPassage && selectedPassage.type === "tuan" ? " selected" : "";
      shiyiHtml +=
        '<div class="shiyi-section' + tuanSel + '" data-type="tuan" data-index="0">' +
          '<div class="shiyi-label">彖传</div>' +
          '<div class="shiyi-text">' + shiyi.tuan.text + "</div>" +
        "</div>";
      var dxSel = selectedPassage && selectedPassage.type === "daxiang" ? " selected shiyi-daxiang" : "";
      shiyiHtml +=
        '<div class="shiyi-section shiyi-daxiang' + dxSel + '" data-type="daxiang" data-index="0">' +
          '<div class="shiyi-label">大象传</div>' +
          '<div class="shiyi-text">' + hex.daxiang + "</div>" +
        "</div>";
      if (shiyi.wenyan) {
        // 卦选中时仅显示总论性质的文言传段落（yao === -1）
        shiyi.wenyan.forEach(function (w, wi) {
          if (w.yao !== undefined && w.yao !== -1) return;
          var wSel = selectedPassage && selectedPassage.type === "wenyan" && selectedPassage.index === wi ? " selected shiyi-wenyan" : "";
          shiyiHtml +=
            '<div class="shiyi-section shiyi-wenyan' + wSel + '" data-type="wenyan" data-index="' + wi + '">' +
              '<div class="shiyi-label">文言传</div>' +
              '<div class="shiyi-text">' + w.text + "</div>" +
            "</div>";
        });
      }
    } else if (selectedYao >= 0 && selectedYao < 6) {
      // 爻选中时：小象传 + (仅与该爻相关的文言传段落)
      var xxSel = selectedPassage && selectedPassage.type === "xiaoxiang" && selectedPassage.index === selectedYao ? " selected" : "";
      shiyiHtml +=
        '<div class="shiyi-section' + xxSel + '" data-type="xiaoxiang" data-index="' + selectedYao + '">' +
          '<div class="shiyi-label">小象传</div>' +
          '<div class="shiyi-text">' + shiyi.xiaoxiang[selectedYao].text + "</div>" +
        "</div>";
      if (shiyi.wenyan) {
        // 仅显示 yao 字段匹配当前选中爻的文言传段落
        shiyi.wenyan.forEach(function (w, wi) {
          if (w.yao !== undefined && w.yao !== selectedYao) return;
          var wSel = selectedPassage && selectedPassage.type === "wenyan" && selectedPassage.index === wi ? " selected shiyi-wenyan" : "";
          shiyiHtml +=
            '<div class="shiyi-section shiyi-wenyan' + wSel + '" data-type="wenyan" data-index="' + wi + '">' +
              '<div class="shiyi-label">文言传</div>' +
              '<div class="shiyi-text">' + w.text + "</div>" +
            "</div>";
        });
      }
    } else if (selectedYao === 6 && hex.extra) {
      // 用九/用六：仅显示小象传，不显示文言传（用九/用六无专属文言传段落）
      var xx6Sel = selectedPassage && selectedPassage.type === "xiaoxiang6" ? " selected" : "";
      shiyiHtml +=
        '<div class="shiyi-section' + xx6Sel + '" data-type="xiaoxiang6" data-index="0">' +
          '<div class="shiyi-label">小象传</div>' +
          '<div class="shiyi-text">' + (shiyi.extraXiaoxiang ? shiyi.extraXiaoxiang.text : "无") + "</div>" +
        "</div>";
    }

    // 右栏：解释
    var explainHtml = "";
    if (selectedPassage) {
      var type = selectedPassage.type;
      var index = selectedPassage.index;
      var label = "";
      var sourceText = "";
      var explainText = "";
      var clsSuffix = "";

      if (type === "tuan") {
        label = "彖传解读";
        sourceText = shiyi.tuan.text;
        explainText = shiyi.tuan.explain;
      } else if (type === "daxiang") {
        label = "大象传解读";
        clsSuffix = " shiyi-daxiang";
        sourceText = hex.daxiang;
        explainText = shiyi.daxiangExplain;
      } else if (type === "xiaoxiang") {
        label = "小象传解读";
        sourceText = shiyi.xiaoxiang[index].text;
        explainText = shiyi.xiaoxiang[index].explain;
      } else if (type === "wenyan") {
        label = "文言传解读";
        clsSuffix = " shiyi-wenyan";
        sourceText = shiyi.wenyan[index].text;
        explainText = shiyi.wenyan[index].explain;
      } else if (type === "xiaoxiang6") {
        label = "小象传解读";
        sourceText = shiyi.extraXiaoxiang ? shiyi.extraXiaoxiang.text : "";
        explainText = shiyi.extraXiaoxiang ? shiyi.extraXiaoxiang.explain : "";
      }

      explainHtml =
        '<div class="explain-title' + clsSuffix + '">' + label + "</div>" +
        '<div class="explain-source">' + sourceText + "</div>" +
        '<div class="explain-content' + clsSuffix + '">' + explainText + "</div>";
    } else {
      explainHtml =
        '<div class="explain-empty">' +
          '<div class="empty-icon">📖</div>' +
          "点击中下十翼段落查看解读" +
        "</div>";
    }

    // 组装 HTML
    displayEl.innerHTML =
      '<div class="hex-detail">' +
        // 左栏
        '<div class="hex-visual">' +
          '<div class="hex-symbol-area' + (isHexSelected ? " selected" : "") + '" id="hexSymbolArea">' +
            '<div class="hex-unicode">' + unicode + "</div>" +
            '<div class="hex-name-large">' + hex.name + "</div>" +
            '<div class="hex-fullname">' + hex.fullName + "</div>" +
            '<div class="hex-meta-inline">第' + hex.id + '卦 · 下' + hex.lower + " 上" + hex.upper + "</div>" +
          "</div>" +
          '<div class="yao-container">' + yaoLinesHtml + extraHtml + "</div>" +
        "</div>" +
        // 中上：辞
        '<div class="content-panel">' + contentHtml + "</div>" +
        // 中下：十翼
        '<div class="shiyi-panel">' + shiyiHtml + "</div>" +
        // 右栏：解释
        '<div class="explain-panel">' + explainHtml + "</div>" +
      "</div>";

    // 绑定卦名区点击
    var symbolArea = document.getElementById("hexSymbolArea");
    if (symbolArea) {
      symbolArea.addEventListener("click", function () {
        selectedYao = -1;
        selectedPassage = null;
        renderMainContent();
      });
    }

    // 绑定爻线点击
    displayEl.querySelectorAll(".yao-line").forEach(function (el) {
      el.addEventListener("click", function () {
        selectYao(parseInt(this.getAttribute("data-idx"), 10));
      });
    });

    // 绑定十翼段点击
    displayEl.querySelectorAll(".shiyi-section").forEach(function (el) {
      el.addEventListener("click", function () {
        selectPassage(this.getAttribute("data-type"), parseInt(this.getAttribute("data-index"), 10));
      });
    });
  }

  // ---- 键盘导航 ----
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (currentHexId > 1) {
        selectHex(currentHexId - 1);
        if (currentHexId <= 30 && currentJing === "lower") {
          currentJing = "upper";
          jingTabs.forEach(function (t) { t.classList.toggle("active", t.getAttribute("data-jing") === currentJing); });
          renderGrid();
        }
      }
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (currentHexId < 64) {
        selectHex(currentHexId + 1);
        if (currentHexId >= 31 && currentJing === "upper") {
          currentJing = "lower";
          jingTabs.forEach(function (t) { t.classList.toggle("active", t.getAttribute("data-jing") === currentJing); });
          renderGrid();
        }
      }
    }
  });

  // ---- 初始化 ----
  renderGrid();
  renderMainContent();
})();
