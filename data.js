/**
 * 《易经》六十四卦完整数据
 * 爻位从下到上编号 1-6，阳爻为 1，阴爻为 0
 */

function getLineName(position, isYin) {
  if (position === 0) return isYin ? '初六' : '初九';
  if (position === 5) return isYin ? '上六' : '上九';
  const posNames = ['', '二', '三', '四', '五'];
  return (isYin ? '六' : '九') + posNames[position];
}

const HEXAGRAMS = [
    {
    "id": 1,
    "name": "乾",
    "fullName": "乾为天",
    "pinyin": "qián",
    "lower": "乾",
    "upper": "乾",
    "binary": "111111",
    "guaci": "元，亨，利，贞。",
    "daxiang": "天行健，君子以自强不息。",
    "meaning": "刚健中正，自强不息",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "潜龙，勿用。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "见龙在田，利见大人。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "君子终日乾乾，夕惕若厉，无咎。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "或跃在渊，无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "飞龙在天，利见大人。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "亢龙，有悔。"
      }
    ],
    "extra": {
      "name": "用九",
      "text": "见群龙无首，吉。"
    }
  },
    {
    "id": 2,
    "name": "坤",
    "fullName": "坤为地",
    "pinyin": "kūn",
    "lower": "坤",
    "upper": "坤",
    "binary": "000000",
    "guaci": "元，亨，利牝马之贞。君子有攸往，先迷后得主，利。西南得朋，东北丧朋。安贞，吉。",
    "daxiang": "地势坤，君子以厚德载物。",
    "meaning": "柔顺承载，厚德载物",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "履霜，坚冰至。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "直方大，不习无不利。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "含章可贞。或从王事，无成有终。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "括囊，无咎无誉。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "黄裳，元吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "龙战于野，其血玄黄。"
      }
    ],
    "extra": {
      "name": "用六",
      "text": "利永贞。"
    }
  },
    {
    "id": 3,
    "name": "屯",
    "fullName": "水雷屯",
    "pinyin": "zhūn",
    "lower": "震",
    "upper": "坎",
    "binary": "100010",
    "guaci": "元，亨，利，贞。勿用有攸往，利建侯。",
    "daxiang": "云雷屯，君子以经纶。",
    "meaning": "初始艰难，需守正待时",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "磐桓，利居贞，利建侯。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "即鹿无虞，惟入于林中。君子几，不如舍。往吝。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "乘马班如，求婚媾。往吉，无不利。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "屯其膏，小贞吉，大贞凶。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "乘马班如，泣血涟如。"
      }
    ]
  },
    {
    "id": 4,
    "name": "蒙",
    "fullName": "山水蒙",
    "pinyin": "méng",
    "lower": "坎",
    "upper": "艮",
    "binary": "010001",
    "guaci": "亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。",
    "daxiang": "山下出泉，蒙。君子以果行育德。",
    "meaning": "蒙昧待启，教育启蒙",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "发蒙，利用刑人，用说桎梏。以往吝。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "包蒙，吉。纳妇，吉。子克家。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "勿用取女，见金夫，不有躬，无攸利。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "困蒙，吝。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "童蒙，吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "击蒙，不利为寇，利御寇。"
      }
    ]
  },
    {
    "id": 5,
    "name": "需",
    "fullName": "水天需",
    "pinyin": "xū",
    "lower": "乾",
    "upper": "坎",
    "binary": "111010",
    "guaci": "有孚，光亨，贞吉。利涉大川。",
    "daxiang": "云上于天，需。君子以饮食宴乐。",
    "meaning": "等待时机，心怀诚信",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "需于郊，利用恒，无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "需于沙，小有言，终吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "需于泥，致寇至。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "需于血，出自穴。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "需于酒食，贞吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "入于穴，有不速之客三人来，敬之终吉。"
      }
    ]
  },
    {
    "id": 6,
    "name": "讼",
    "fullName": "天水讼",
    "pinyin": "sòng",
    "lower": "坎",
    "upper": "乾",
    "binary": "010111",
    "guaci": "有孚，窒惕，中吉，终凶。利见大人，不利涉大川。",
    "daxiang": "天与水违行，讼。君子以作事谋始。",
    "meaning": "争讼之象，止争为吉",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "不永所事，小有言，终吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "不克讼，归而逋其邑人三百户，无眚。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "食旧德，贞厉，终吉。或从王事，无成。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "不克讼，复即命，渝，安贞吉。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "讼，元吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "或锡之鞶带，终朝三褫之。"
      }
    ]
  },
    {
    "id": 7,
    "name": "师",
    "fullName": "地水师",
    "pinyin": "shī",
    "lower": "坎",
    "upper": "坤",
    "binary": "010000",
    "guaci": "贞，丈人吉，无咎。",
    "daxiang": "地中有水，师。君子以容民畜众。",
    "meaning": "用兵之道，纪律严明",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "师出以律，否臧，凶。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "在师中，吉，无咎，王三锡命。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "师或舆尸，凶。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "师左次，无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "大君有命，开国承家，小人勿用。"
      }
    ]
  },
    {
    "id": 8,
    "name": "比",
    "fullName": "水地比",
    "pinyin": "bǐ",
    "lower": "坤",
    "upper": "坎",
    "binary": "000010",
    "guaci": "吉。原筮，元永贞，无咎。不宁方来，后夫凶。",
    "daxiang": "地上有水，比。先王以建万国，亲诸侯。",
    "meaning": "亲比团结，辅助相亲",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "有孚比之，无咎。有孚盈缶，终来有它，吉。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "比之自内，贞吉。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "比之匪人。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "外比之，贞吉。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "显比，王用三驱，失前禽。邑人不诫，吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "比之无首，凶。"
      }
    ]
  },
    {
    "id": 9,
    "name": "小畜",
    "fullName": "风天小畜",
    "pinyin": "xiǎo chù",
    "lower": "乾",
    "upper": "巽",
    "binary": "111011",
    "guaci": "亨。密云不雨，自我西郊。",
    "daxiang": "风行天上，小畜。君子以懿文德。",
    "meaning": "小有积蓄，以柔蓄刚",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "复自道，何其咎，吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "牵复，吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "舆说辐，夫妻反目。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "有孚，血去惕出，无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "有孚挛如，富以其邻。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "既雨既处，尚德载。妇贞厉。月几望，君子征凶。"
      }
    ]
  },
    {
    "id": 10,
    "name": "履",
    "fullName": "天泽履",
    "pinyin": "lǚ",
    "lower": "兑",
    "upper": "乾",
    "binary": "110111",
    "guaci": "履虎尾，不咥人，亨。",
    "daxiang": "上天下泽，履。君子以辩上下，定民志。",
    "meaning": "践履谨慎，如履虎尾",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "素履，往无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "履道坦坦，幽人贞吉。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "履虎尾，愬愬，终吉。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "夬履，贞厉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "视履考祥，其旋元吉。"
      }
    ]
  },
    {
    "id": 11,
    "name": "泰",
    "fullName": "地天泰",
    "pinyin": "tài",
    "lower": "乾",
    "upper": "坤",
    "binary": "111000",
    "guaci": "小往大来，吉，亨。",
    "daxiang": "天地交，泰。后以财成天地之道，辅相天地之宜，以左右民。",
    "meaning": "天地交泰，通达安泰",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "拔茅茹，以其汇，征吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "包荒，用冯河，不遐遗，朋亡，得尚于中行。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "翩翩，不富以其邻，不戒以孚。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "帝乙归妹，以祉元吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "城复于隍，勿用师，自邑告命，贞吝。"
      }
    ]
  },
    {
    "id": 12,
    "name": "否",
    "fullName": "天地否",
    "pinyin": "pǐ",
    "lower": "坤",
    "upper": "乾",
    "binary": "000111",
    "guaci": "否之匪人，不利君子贞，大往小来。",
    "daxiang": "天地不交，否。君子以俭德辟难，不可荣以禄。",
    "meaning": "天地不交，闭塞不通",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "拔茅茹，以其汇，贞吉，亨。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "包承，小人吉，大人否，亨。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "包羞。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "有命无咎，畴离祉。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "休否，大人吉。其亡其亡，系于苞桑。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "倾否，先否后喜。"
      }
    ]
  },
    {
    "id": 13,
    "name": "同人",
    "fullName": "天火同人",
    "pinyin": "tóng rén",
    "lower": "离",
    "upper": "乾",
    "binary": "101111",
    "guaci": "同人于野，亨。利涉大川，利君子贞。",
    "daxiang": "天与火，同人。君子以类族辨物。",
    "meaning": "与人和同，天下为公",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "同人于门，无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "同人于宗，吝。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "伏戎于莽，升其高陵，三岁不兴。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "乘其墉，弗克攻，吉。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "同人，先号咷而后笑，大师克相遇。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "同人于郊，无悔。"
      }
    ]
  },
    {
    "id": 14,
    "name": "大有",
    "fullName": "火天大有",
    "pinyin": "dà yǒu",
    "lower": "乾",
    "upper": "离",
    "binary": "111101",
    "guaci": "元，亨。",
    "daxiang": "火在天上，大有。君子以遏恶扬善，顺天休命。",
    "meaning": "大有收获，富有天下",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "无交害，匪咎，艰则无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "大车以载，有攸往，无咎。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "公用亨于天子，小人弗克。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "匪其彭，无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "厥孚交如，威如，吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "自天佑之，吉，无不利。"
      }
    ]
  },
    {
    "id": 15,
    "name": "谦",
    "fullName": "地山谦",
    "pinyin": "qiān",
    "lower": "艮",
    "upper": "坤",
    "binary": "001000",
    "guaci": "亨，君子有终。",
    "daxiang": "地中有山，谦。君子以裒多益寡，称物平施。",
    "meaning": "谦虚退让，谦受益",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "谦谦君子，用涉大川，吉。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "鸣谦，贞吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "劳谦，君子有终，吉。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "无不利，撝谦。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "不富以其邻，利用侵伐，无不利。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "鸣谦，利用行师征邑国。"
      }
    ]
  },
    {
    "id": 16,
    "name": "豫",
    "fullName": "雷地豫",
    "pinyin": "yù",
    "lower": "坤",
    "upper": "震",
    "binary": "000100",
    "guaci": "利建侯行师。",
    "daxiang": "雷出地奋，豫。先王以作乐崇德，殷荐之上帝，以配祖考。",
    "meaning": "欢乐愉悦，居安思危",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "鸣豫，凶。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "介于石，不终日，贞吉。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "盱豫，悔。迟有悔。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "由豫，大有得。勿疑，朋盍簪。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "贞疾，恒不死。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "冥豫，成有渝，无咎。"
      }
    ]
  },
    {
    "id": 17,
    "name": "随",
    "fullName": "泽雷随",
    "pinyin": "suí",
    "lower": "震",
    "upper": "兑",
    "binary": "100110",
    "guaci": "元，亨，利，贞。无咎。",
    "daxiang": "泽中有雷，随。君子以向晦入宴息。",
    "meaning": "随顺时变，择善而从",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "官有渝，贞吉。出门交有功。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "系小子，失丈夫。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "系丈夫，失小子。随有求得，利居贞。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "随有获，贞凶。有孚在道，以明，何咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "孚于嘉，吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "拘系之，乃从维之。王用亨于西山。"
      }
    ]
  },
    {
    "id": 18,
    "name": "蛊",
    "fullName": "山风蛊",
    "pinyin": "gǔ",
    "lower": "巽",
    "upper": "艮",
    "binary": "011001",
    "guaci": "元，亨，利涉大川。先甲三日，后甲三日。",
    "daxiang": "山下有风，蛊。君子以振民育德。",
    "meaning": "整治败坏，革除积弊",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "干父之蛊，有子，考无咎，厉终吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "干母之蛊，不可贞。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "干父之蛊，小有悔，无大咎。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "裕父之蛊，往见吝。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "干父之蛊，用誉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "不事王侯，高尚其事。"
      }
    ]
  },
    {
    "id": 19,
    "name": "临",
    "fullName": "地泽临",
    "pinyin": "lín",
    "lower": "兑",
    "upper": "坤",
    "binary": "110000",
    "guaci": "元，亨，利，贞。至于八月有凶。",
    "daxiang": "泽上有地，临。君子以教思无穷，容保民无疆。",
    "meaning": "居高临下，面临监临",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "咸临，贞吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "咸临，吉，无不利。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "甘临，无攸利。既忧之，无咎。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "至临，无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "知临，大君之宜，吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "敦临，吉，无咎。"
      }
    ]
  },
    {
    "id": 20,
    "name": "观",
    "fullName": "风地观",
    "pinyin": "guān",
    "lower": "坤",
    "upper": "巽",
    "binary": "000011",
    "guaci": "盥而不荐，有孚顒若。",
    "daxiang": "风行地上，观。先王以省方观民设教。",
    "meaning": "观仰瞻仰，省察观民",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "童观，小人无咎，君子吝。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "窥观，利女贞。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "观我生，进退。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "观国之光，利用宾于王。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "观我生，君子无咎。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "观其生，君子无咎。"
      }
    ]
  },
    {
    "id": 21,
    "name": "噬嗑",
    "fullName": "火雷噬嗑",
    "pinyin": "shì hé",
    "lower": "震",
    "upper": "离",
    "binary": "100101",
    "guaci": "亨。利用狱。",
    "daxiang": "雷电噬嗑。先王以明罚敕法。",
    "meaning": "咬合刑狱，明罚敕法",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "屦校灭趾，无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "噬肤灭鼻，无咎。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "噬腊肉，遇毒。小吝，无咎。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "噬干胏，得金矢。利艰贞，吉。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "噬干肉，得黄金。贞厉，无咎。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "何校灭耳，凶。"
      }
    ]
  },
    {
    "id": 22,
    "name": "贲",
    "fullName": "山火贲",
    "pinyin": "bì",
    "lower": "离",
    "upper": "艮",
    "binary": "101001",
    "guaci": "亨。小利有攸往。",
    "daxiang": "山下有火，贲。君子以明庶政，无敢折狱。",
    "meaning": "文饰修饰，文质彬彬",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "贲其趾，舍车而徒。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "贲其须。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "贲如濡如，永贞吉。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "贲如皤如，白马翰如。匪寇婚媾。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "贲于丘园，束帛戋戋，吝，终吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "白贲，无咎。"
      }
    ]
  },
    {
    "id": 23,
    "name": "剥",
    "fullName": "山地剥",
    "pinyin": "bō",
    "lower": "坤",
    "upper": "艮",
    "binary": "000001",
    "guaci": "不利有攸往。",
    "daxiang": "山附于地，剥。上以厚下安宅。",
    "meaning": "剥落侵蚀，顺势止剥",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "剥床以足，蔑贞，凶。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "剥床以辨，蔑贞，凶。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "剥之，无咎。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "剥床以肤，凶。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "贯鱼，以宫人宠，无不利。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "硕果不食，君子得舆，小人剥庐。"
      }
    ]
  },
    {
    "id": 24,
    "name": "复",
    "fullName": "地雷复",
    "pinyin": "fù",
    "lower": "震",
    "upper": "坤",
    "binary": "100000",
    "guaci": "亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。",
    "daxiang": "雷在地中，复。先王以至日闭关，商旅不行，后不省方。",
    "meaning": "一阳来复，回复正道",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "不远复，无祗悔，元吉。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "休复，吉。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "频复，厉，无咎。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "中行独复。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "敦复，无悔。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "迷复，凶，有灾眚。用行师，终有大败，以其国君，凶。至于十年，不克征。"
      }
    ]
  },
    {
    "id": 25,
    "name": "无妄",
    "fullName": "天雷无妄",
    "pinyin": "wú wàng",
    "lower": "震",
    "upper": "乾",
    "binary": "100111",
    "guaci": "元，亨，利，贞。其匪正有眚，不利有攸往。",
    "daxiang": "天下雷行，物与无妄。先王以茂对时育万物。",
    "meaning": "不妄为，顺乎自然",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "无妄，往吉。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "不耕获，不菑畲，则利有攸往。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "无妄之灾，或系之牛，行人之得，邑人之灾。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "可贞，无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "无妄之疾，勿药有喜。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "无妄，行有眚，无攸利。"
      }
    ]
  },
    {
    "id": 26,
    "name": "大畜",
    "fullName": "山天大畜",
    "pinyin": "dà chù",
    "lower": "乾",
    "upper": "艮",
    "binary": "111001",
    "guaci": "利贞。不家食，吉。利涉大川。",
    "daxiang": "天在山中，大畜。君子以多识前言往行，以畜其德。",
    "meaning": "大有积蓄，畜德养贤",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "有厉，利已。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "舆说輹。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "良马逐，利艰贞。曰闲舆卫，利有攸往。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "童牛之牿，元吉。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "豮豕之牙，吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "何天之衢，亨。"
      }
    ]
  },
    {
    "id": 27,
    "name": "颐",
    "fullName": "山雷颐",
    "pinyin": "yí",
    "lower": "震",
    "upper": "艮",
    "binary": "100001",
    "guaci": "贞吉。观颐，自求口实。",
    "daxiang": "山下有雷，颐。君子以慎言语，节饮食。",
    "meaning": "养生颐养，慎言节食",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "舍尔灵龟，观我朵颐，凶。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "颠颐，拂经，于丘颐，征凶。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "拂颐，贞凶。十年勿用，无攸利。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "颠颐，吉。虎视眈眈，其欲逐逐，无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "拂经，居贞吉，不可涉大川。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "由颐，厉吉，利涉大川。"
      }
    ]
  },
    {
    "id": 28,
    "name": "大过",
    "fullName": "泽风大过",
    "pinyin": "dà guò",
    "lower": "巽",
    "upper": "兑",
    "binary": "011110",
    "guaci": "栋桡，利有攸往，亨。",
    "daxiang": "泽灭木，大过。君子以独立不惧，遁世无闷。",
    "meaning": "大为过分，独立不惧",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "藉用白茅，无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "枯杨生稊，老夫得其女妻，无不利。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "栋桡，凶。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "栋隆，吉。有它，吝。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "枯杨生华，老妇得其士夫，无咎无誉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "过涉灭顶，凶，无咎。"
      }
    ]
  },
    {
    "id": 29,
    "name": "坎",
    "fullName": "坎为水",
    "pinyin": "kǎn",
    "lower": "坎",
    "upper": "坎",
    "binary": "010010",
    "guaci": "习坎，有孚，维心亨，行有尚。",
    "daxiang": "水洊至，习坎。君子以常德行，习教事。",
    "meaning": "重险陷险，诚信脱险",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "习坎，入于坎窞，凶。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "坎有险，求小得。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "来之坎坎，险且枕，入于坎窞，勿用。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "樽酒簋贰，用缶，纳约自牖，终无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "坎不盈，祗既平，无咎。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "系用徽纆，寘于丛棘，三岁不得，凶。"
      }
    ]
  },
    {
    "id": 30,
    "name": "离",
    "fullName": "离为火",
    "pinyin": "lí",
    "lower": "离",
    "upper": "离",
    "binary": "101101",
    "guaci": "利贞，亨。畜牝牛，吉。",
    "daxiang": "明两作，离。大人以继明照于四方。",
    "meaning": "光明附丽，继明四方",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "履错然，敬之，无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "黄离，元吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "日昃之离，不鼓缶而歌，则大耋之嗟，凶。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "突如其来如，焚如，死如，弃如。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "出涕沱若，戚嗟若，吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "王用出征，有嘉折首，获匪其丑，无咎。"
      }
    ]
  },
    {
    "id": 31,
    "name": "咸",
    "fullName": "泽山咸",
    "pinyin": "xián",
    "lower": "艮",
    "upper": "兑",
    "binary": "001110",
    "guaci": "亨，利贞，取女吉。",
    "daxiang": "山上有泽，咸。君子以虚受人。",
    "meaning": "感应交感，虚心受物",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "咸其拇。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "咸其腓，凶，居吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "咸其股，执其随，往吝。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "贞吉悔亡，憧憧往来，朋从尔思。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "咸其脢，无悔。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "咸其辅颊舌。"
      }
    ]
  },
    {
    "id": 32,
    "name": "恒",
    "fullName": "雷风恒",
    "pinyin": "héng",
    "lower": "巽",
    "upper": "震",
    "binary": "011100",
    "guaci": "亨，无咎，利贞，利有攸往。",
    "daxiang": "雷风恒。君子以立不易方。",
    "meaning": "恒久持久，立不易方",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "浚恒，贞凶，无攸利。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "悔亡。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "不恒其德，或承之羞，贞吝。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "田无禽。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "恒其德，贞，妇人吉，夫子凶。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "振恒，凶。"
      }
    ]
  },
    {
    "id": 33,
    "name": "遁",
    "fullName": "天山遁",
    "pinyin": "dùn",
    "lower": "艮",
    "upper": "乾",
    "binary": "001111",
    "guaci": "亨，小利贞。",
    "daxiang": "天下有山，遁。君子以远小人，不恶而严。",
    "meaning": "退避隐遁，远避小人",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "遁尾，厉，勿用有攸往。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "执之用黄牛之革，莫之胜说。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "系遁，有疾厉，畜臣妾吉。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "好遁，君子吉，小人否。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "嘉遁，贞吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "肥遁，无不利。"
      }
    ]
  },
    {
    "id": 34,
    "name": "大壮",
    "fullName": "雷天大壮",
    "pinyin": "dà zhuàng",
    "lower": "乾",
    "upper": "震",
    "binary": "111100",
    "guaci": "利贞。",
    "daxiang": "雷在天上，大壮。君子以非礼弗履。",
    "meaning": "大为壮盛，守正不暴",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "壮于趾，征凶，有孚。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "贞吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "贞吉悔亡，藩决不羸，壮于大舆之輹。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "丧羊于易，无悔。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "羝羊触藩，不能退，不能遂，无攸利。艰则吉。"
      }
    ]
  },
    {
    "id": 35,
    "name": "晋",
    "fullName": "火地晋",
    "pinyin": "jìn",
    "lower": "坤",
    "upper": "离",
    "binary": "000101",
    "guaci": "康侯用锡马蕃庶，昼日三接。",
    "daxiang": "明出地上，晋。君子以自昭明德。",
    "meaning": "晋升前进，自昭明德",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "晋如，摧如，贞吉。罔孚，裕无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "晋如，愁如，贞吉。受兹介福，于其王母。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "众允，悔亡。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "晋如鼫鼠，贞厉。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "悔亡，失得勿恤，往吉，无不利。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "晋其角，维用伐邑，厉吉无咎，贞吝。"
      }
    ]
  },
    {
    "id": 36,
    "name": "明夷",
    "fullName": "地火明夷",
    "pinyin": "míng yí",
    "lower": "离",
    "upper": "坤",
    "binary": "101000",
    "guaci": "利艰贞。",
    "daxiang": "明入地中，明夷。君子以莅众，用晦而明。",
    "meaning": "光明受伤，用晦而明",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "明夷于飞，垂其翼。君子于行，三日不食，有攸往，主人有言。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "明夷，夷于左股，用拯马壮，吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "明夷于南狩，得其大首，不可疾贞。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "入于左腹，获明夷之心，于出门庭。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "箕子之明夷，利贞。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "不明晦，初登于天，后入于地。"
      }
    ]
  },
    {
    "id": 37,
    "name": "家人",
    "fullName": "风火家人",
    "pinyin": "jiā rén",
    "lower": "离",
    "upper": "巽",
    "binary": "101011",
    "guaci": "利女贞。",
    "daxiang": "风自火出，家人。君子以言有物而行有恒。",
    "meaning": "家道正齐，言有物行有恒",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "闲有家，悔亡。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "无攸遂，在中馈，贞吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "富家，大吉。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "王假有家，勿恤吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "有孚威如，终吉。"
      }
    ]
  },
    {
    "id": 38,
    "name": "睽",
    "fullName": "火泽睽",
    "pinyin": "kuí",
    "lower": "兑",
    "upper": "离",
    "binary": "110101",
    "guaci": "小事吉。",
    "daxiang": "上火下泽，睽。君子以同而异。",
    "meaning": "乖违背离，求同存异",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "悔亡，丧马勿逐，自复。见恶人，无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "遇主于巷，无咎。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "见舆曳，其牛掣，其人天且劓，无初有终。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "睽孤，遇元夫，交孚，厉无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "悔亡，厥宗噬肤，往何咎。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "睽孤，见豕负涂，载鬼一车，先张之弧，后说之弧，匪寇婚媾，往遇雨则吉。"
      }
    ]
  },
    {
    "id": 39,
    "name": "蹇",
    "fullName": "水山蹇",
    "pinyin": "jiǎn",
    "lower": "艮",
    "upper": "坎",
    "binary": "001010",
    "guaci": "利西南，不利东北。利见大人，贞吉。",
    "daxiang": "山上有水，蹇。君子以反身修德。",
    "meaning": "行动艰难，反身修德",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "往蹇，来誉。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "王臣蹇蹇，匪躬之故。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "往蹇来反。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "往蹇来连。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "大蹇朋来。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "往蹇来硕，吉，利见大人。"
      }
    ]
  },
    {
    "id": 40,
    "name": "解",
    "fullName": "雷水解",
    "pinyin": "xiè",
    "lower": "坎",
    "upper": "震",
    "binary": "010100",
    "guaci": "利西南，无所往，其来复吉。有攸往，夙吉。",
    "daxiang": "雷雨作，解。君子以赦过宥罪。",
    "meaning": "解除险难，赦过宥罪",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "田获三狐，得黄矢，贞吉。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "负且乘，致寇至，贞吝。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "解而拇，朋至斯孚。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "君子维有解，吉。有孚于小人。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "公用射隼于高墉之上，获之，无不利。"
      }
    ]
  },
    {
    "id": 41,
    "name": "损",
    "fullName": "山泽损",
    "pinyin": "sǔn",
    "lower": "兑",
    "upper": "艮",
    "binary": "110001",
    "guaci": "有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。",
    "daxiang": "山下有泽，损。君子以惩忿窒欲。",
    "meaning": "减损克制，惩忿窒欲",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "已事遄往，无咎，酌损之。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "利贞，征凶，弗损益之。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "三人行，则损一人。一人行，则得其友。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "损其疾，使遄有喜，无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "或益之十朋之龟弗克违，元吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "弗损益之，无咎，贞吉。利有攸往，得臣无家。"
      }
    ]
  },
    {
    "id": 42,
    "name": "益",
    "fullName": "风雷益",
    "pinyin": "yì",
    "lower": "震",
    "upper": "巽",
    "binary": "100011",
    "guaci": "利有攸往，利涉大川。",
    "daxiang": "风雷益。君子以见善则迁，有过则改。",
    "meaning": "增益进取，见善则迁",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "利用为大作，元吉，无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "或益之十朋之龟弗克违，永贞吉。王用享于帝，吉。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "益之用凶事，无咎。有孚中行，告公用圭。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "中行，告公从。利用为依迁国。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "有孚惠心，勿问元吉。有孚惠我德。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "莫益之，或击之，立心勿恒，凶。"
      }
    ]
  },
    {
    "id": 43,
    "name": "夬",
    "fullName": "泽天夬",
    "pinyin": "guài",
    "lower": "乾",
    "upper": "兑",
    "binary": "111110",
    "guaci": "扬于王庭，孚号有厉。告自邑，不利即戎，利有攸往。",
    "daxiang": "泽上于天，夬。君子以施禄及下，居德则忌。",
    "meaning": "果决决断，决去小人",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "壮于前趾，往不胜为咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "惕号，莫夜有戎，勿恤。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "臀无肤，其行次且。牵羊悔亡，闻言不信。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "苋陆夬夬，中行无咎。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "无号，终有凶。"
      }
    ]
  },
    {
    "id": 44,
    "name": "姤",
    "fullName": "天风姤",
    "pinyin": "gòu",
    "lower": "巽",
    "upper": "乾",
    "binary": "011111",
    "guaci": "女壮，勿用取女。",
    "daxiang": "天下有风，姤。后以施命诰四方。",
    "meaning": "邂逅相遇，防微杜渐",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "系于金柅，贞吉。有攸往，见凶。羸豕孚蹢躅。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "包有鱼，无咎，不利宾。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "臀无肤，其行次且，厉，无大咎。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "包无鱼，起凶。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "以杞包瓜，含章，有陨自天。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "姤其角，吝，无咎。"
      }
    ]
  },
    {
    "id": 45,
    "name": "萃",
    "fullName": "泽地萃",
    "pinyin": "cuì",
    "lower": "坤",
    "upper": "兑",
    "binary": "000110",
    "guaci": "亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。",
    "daxiang": "泽上于地，萃。君子以除戎器，戒不虞。",
    "meaning": "聚集汇合，聚以正道",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "有孚不终，乃乱乃萃。若号，一握为笑，勿恤，往无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "引吉，无咎，孚乃利用禴。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "萃如嗟如，无攸利。往无咎，小吝。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "大吉，无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "萃有位，无咎。匪孚，元永贞，悔亡。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "赍咨涕洟，无咎。"
      }
    ]
  },
    {
    "id": 46,
    "name": "升",
    "fullName": "地风升",
    "pinyin": "shēng",
    "lower": "巽",
    "upper": "坤",
    "binary": "011000",
    "guaci": "元，亨，用见大人，勿恤，南征吉。",
    "daxiang": "地中生木，升。君子以顺德，积小以高大。",
    "meaning": "上升进取，积小高大",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "允升，大吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "孚乃利用禴，无咎。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "升虚邑。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "王用亨于岐山，吉，无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "贞吉，升阶。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "冥升，利于不息之贞。"
      }
    ]
  },
    {
    "id": 47,
    "name": "困",
    "fullName": "泽水困",
    "pinyin": "kùn",
    "lower": "坎",
    "upper": "兑",
    "binary": "010110",
    "guaci": "亨，贞，大人吉，无咎。有言不信。",
    "daxiang": "泽无水，困。君子以致命遂志。",
    "meaning": "困厄困境，致命遂志",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "臀困于株木，入于幽谷，三岁不觌。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "困于酒食，朱绂方来，利用享祀，征凶，无咎。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "困于石，据于蒺藜，入于其宫，不见其妻，凶。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "来徐徐，困于金车，吝，有终。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "劓刖，困于赤绂，乃徐有说，利用祭祀。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "困于葛藟，于臲卼，曰动悔，有悔，征吉。"
      }
    ]
  },
    {
    "id": 48,
    "name": "井",
    "fullName": "水风井",
    "pinyin": "jǐng",
    "lower": "巽",
    "upper": "坎",
    "binary": "011010",
    "guaci": "改邑不改井，无丧无得。往来井井。汔至，亦未繘井，羸其瓶，凶。",
    "daxiang": "木上有水，井。君子以劳民劝相。",
    "meaning": "水井养人，劳民劝相",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "井泥不食，旧井无禽。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "井谷射鲋，瓮敝漏。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "井渫不食，为我心恻。可用汲，王明，并受其福。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "井甃，无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "井冽寒泉食。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "井收勿幕，有孚元吉。"
      }
    ]
  },
    {
    "id": 49,
    "name": "革",
    "fullName": "泽火革",
    "pinyin": "gé",
    "lower": "离",
    "upper": "兑",
    "binary": "101110",
    "guaci": "己日乃孚，元，亨，利，贞，悔亡。",
    "daxiang": "泽中有火，革。君子以治历明时。",
    "meaning": "变革革命，顺天应人",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "巩用黄牛之革。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "己日乃革之，征吉，无咎。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "征凶，贞厉。革言三就，有孚。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "悔亡，有孚改命，吉。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "大人虎变，未占有孚。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "君子豹变，小人革面。征凶，居贞吉。"
      }
    ]
  },
    {
    "id": 50,
    "name": "鼎",
    "fullName": "火风鼎",
    "pinyin": "dǐng",
    "lower": "巽",
    "upper": "离",
    "binary": "011101",
    "guaci": "元，吉，亨。",
    "daxiang": "木上有火，鼎。君子以正位凝命。",
    "meaning": "鼎器养人，正位凝命",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "鼎颠趾，利出否，得妾以其子，无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "鼎有实，我仇有疾，不我能即，吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "鼎耳革，其行塞，雉膏不食。方雨亏悔，终吉。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "鼎折足，覆公餗，其形渥，凶。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "鼎黄耳金铉，利贞。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "鼎玉铉，大吉，无不利。"
      }
    ]
  },
    {
    "id": 51,
    "name": "震",
    "fullName": "震为雷",
    "pinyin": "zhèn",
    "lower": "震",
    "upper": "震",
    "binary": "100100",
    "guaci": "亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。",
    "daxiang": "洊雷震。君子以恐惧修省。",
    "meaning": "雷声震动，恐惧修省",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "震来虩虩，后笑言哑哑，吉。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "震来厉，亿丧贝，跻于九陵，勿逐，七日得。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "震苏苏，震行无眚。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "震遂泥。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "震往来厉，亿无丧，有事。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。"
      }
    ]
  },
    {
    "id": 52,
    "name": "艮",
    "fullName": "艮为山",
    "pinyin": "gèn",
    "lower": "艮",
    "upper": "艮",
    "binary": "001001",
    "guaci": "艮其背，不获其身。行其庭，不见其人，无咎。",
    "daxiang": "兼山，艮。君子以思不出其位。",
    "meaning": "停止静止，思不出位",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "艮其趾，无咎，利永贞。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "艮其腓，不拯其随，其心不快。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "艮其限，列其夤，厉，熏心。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "艮其身，无咎。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "艮其辅，言有序，悔亡。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "敦艮，吉。"
      }
    ]
  },
    {
    "id": 53,
    "name": "渐",
    "fullName": "风山渐",
    "pinyin": "jiàn",
    "lower": "艮",
    "upper": "巽",
    "binary": "001011",
    "guaci": "女归吉，利贞。",
    "daxiang": "山上有木，渐。君子以居贤德善俗。",
    "meaning": "渐进有序，循序渐进",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "鸿渐于干，小子厉，有言，无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "鸿渐于磐，饮食衎衎，吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "鸿渐于陆，夫征不复，妇孕不育，凶。利御寇。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "鸿渐于木，或得其桷，无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "鸿渐于陵，妇三岁不孕，终莫之胜，吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "鸿渐于陆，其羽可用为仪，吉。"
      }
    ]
  },
    {
    "id": 54,
    "name": "归妹",
    "fullName": "雷泽归妹",
    "pinyin": "guī mèi",
    "lower": "兑",
    "upper": "震",
    "binary": "110100",
    "guaci": "征凶，无攸利。",
    "daxiang": "泽上有雷，归妹。君子以永终知敝。",
    "meaning": "女归出嫁，知敝永终",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "归妹以娣，跛能履，征吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "眇能视，利幽人之贞。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "归妹以须，反归以娣。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "归妹愆期，迟归有时。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "帝乙归妹，其君之袂，不如其娣之袂良。月几望，吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "女承筐，无实，士刲羊，无血，无攸利。"
      }
    ]
  },
    {
    "id": 55,
    "name": "丰",
    "fullName": "雷火丰",
    "pinyin": "fēng",
    "lower": "离",
    "upper": "震",
    "binary": "101100",
    "guaci": "亨。王假之，勿忧，宜日中。",
    "daxiang": "雷电皆至，丰。君子以折狱致刑。",
    "meaning": "丰盛盛大，折狱致刑",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "遇其配主，虽旬无咎，往有尚。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "丰其蔀，日中见斗。往得疑疾，有孚发若，吉。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "丰其沛，日中见沫。折其右肱，无咎。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "丰其蔀，日中见斗。遇其夷主，吉。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "来章，有庆誉，吉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。"
      }
    ]
  },
    {
    "id": 56,
    "name": "旅",
    "fullName": "火山旅",
    "pinyin": "lǚ",
    "lower": "艮",
    "upper": "离",
    "binary": "001101",
    "guaci": "小亨，旅贞吉。",
    "daxiang": "山上有火，旅。君子以明慎用刑而不留狱。",
    "meaning": "旅行在外，明慎用刑",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "旅琐琐，斯其所取灾。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "旅即次，怀其资，得童仆贞。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "旅焚其次，丧其童仆，贞厉。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "旅于处，得其资斧，我心不快。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "射雉一矢亡，终以誉命。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "鸟焚其巢，旅人先笑后号咷。丧牛于易，凶。"
      }
    ]
  },
    {
    "id": 57,
    "name": "巽",
    "fullName": "巽为风",
    "pinyin": "xùn",
    "lower": "巽",
    "upper": "巽",
    "binary": "011011",
    "guaci": "小亨，利有攸往，利见大人。",
    "daxiang": "随风巽。君子以申命行事。",
    "meaning": "顺从谦逊，申命行事",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "进退，利武人之贞。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "巽在床下，用史巫纷若，吉，无咎。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "频巽，吝。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "悔亡，田获三品。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "贞吉悔亡，无不利。无初有终。先庚三日，后庚三日，吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "巽在床下，丧其资斧，贞凶。"
      }
    ]
  },
    {
    "id": 58,
    "name": "兑",
    "fullName": "兑为泽",
    "pinyin": "duì",
    "lower": "兑",
    "upper": "兑",
    "binary": "110110",
    "guaci": "亨，利贞。",
    "daxiang": "丽泽兑。君子以朋友讲习。",
    "meaning": "喜悦和悦，朋友讲习",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "和兑，吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "孚兑，吉，悔亡。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "来兑，凶。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "商兑未宁，介疾有喜。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "孚于剥，有厉。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "引兑。"
      }
    ]
  },
    {
    "id": 59,
    "name": "涣",
    "fullName": "风水涣",
    "pinyin": "huàn",
    "lower": "坎",
    "upper": "巽",
    "binary": "010011",
    "guaci": "亨。王假有庙，利涉大川，利贞。",
    "daxiang": "风行水上，涣。先王以享于帝立庙。",
    "meaning": "涣散离散，涣然冰释",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "用拯马壮，吉。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "涣奔其机，悔亡。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "涣其躬，无悔。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "涣其群，元吉。涣有丘，匪夷所思。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "涣汗其大号，涣王居，无咎。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "涣其血去，逖出，无咎。"
      }
    ]
  },
    {
    "id": 60,
    "name": "节",
    "fullName": "水泽节",
    "pinyin": "jié",
    "lower": "兑",
    "upper": "坎",
    "binary": "110010",
    "guaci": "亨。苦节不可贞。",
    "daxiang": "泽上有水，节。君子以制数度，议德行。",
    "meaning": "节制有度，制数度议德行",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "不出户庭，无咎。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "不出门庭，凶。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "不节若，则嗟若，无咎。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "安节，亨。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "甘节，吉，往有尚。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "苦节，贞凶，悔亡。"
      }
    ]
  },
    {
    "id": 61,
    "name": "中孚",
    "fullName": "风泽中孚",
    "pinyin": "zhōng fú",
    "lower": "兑",
    "upper": "巽",
    "binary": "110011",
    "guaci": "豚鱼吉，利涉大川，利贞。",
    "daxiang": "泽上有风，中孚。君子以议狱缓死。",
    "meaning": "中心诚信，议狱缓死",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "虞吉，有它不燕。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "得敌，或鼓或罢，或泣或歌。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "月几望，马匹亡，无咎。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "有孚挛如，无咎。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "翰音登于天，贞凶。"
      }
    ]
  },
    {
    "id": 62,
    "name": "小过",
    "fullName": "雷山小过",
    "pinyin": "xiǎo guò",
    "lower": "艮",
    "upper": "震",
    "binary": "001100",
    "guaci": "亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上，宜下，大吉。",
    "daxiang": "山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。",
    "meaning": "略有过越，行过乎恭",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "飞鸟以凶。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "过其祖，遇其妣。不及其君，遇其臣，无咎。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "弗过防之，从或戕之，凶。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "无咎，弗过遇之，往厉必戒，勿用永贞。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "密云不雨，自我西郊。公弋取彼在穴。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "弗遇过之，飞鸟离之，凶，是谓灾眚。"
      }
    ]
  },
    {
    "id": 63,
    "name": "既济",
    "fullName": "水火既济",
    "pinyin": "jì jì",
    "lower": "离",
    "upper": "坎",
    "binary": "101010",
    "guaci": "亨小，利贞，初吉终乱。",
    "daxiang": "水在火上，既济。君子以思患而豫防之。",
    "meaning": "既已完成，思患预防",
    "lines": [
      {
        "yin": false,
        "name": "初九",
        "text": "曳其轮，濡其尾，无咎。"
      },
      {
        "yin": true,
        "name": "六二",
        "text": "妇丧其茀，勿逐，七日得。"
      },
      {
        "yin": false,
        "name": "九三",
        "text": "高宗伐鬼方，三年克之。小人勿用。"
      },
      {
        "yin": true,
        "name": "六四",
        "text": "繻有衣袽，终日戒。"
      },
      {
        "yin": false,
        "name": "九五",
        "text": "东邻杀牛，不如西邻之禴祭，实受其福。"
      },
      {
        "yin": true,
        "name": "上六",
        "text": "濡其首，厉。"
      }
    ]
  },
    {
    "id": 64,
    "name": "未济",
    "fullName": "火水未济",
    "pinyin": "wèi jì",
    "lower": "坎",
    "upper": "离",
    "binary": "010101",
    "guaci": "亨。小狐汔济，濡其尾，无攸利。",
    "daxiang": "火在水上，未济。君子以慎辨物居方。",
    "meaning": "尚未完成，慎辨物居方",
    "lines": [
      {
        "yin": true,
        "name": "初六",
        "text": "濡其尾，吝。"
      },
      {
        "yin": false,
        "name": "九二",
        "text": "曳其轮，贞吉。"
      },
      {
        "yin": true,
        "name": "六三",
        "text": "未济，征凶，利涉大川。"
      },
      {
        "yin": false,
        "name": "九四",
        "text": "贞吉悔亡，震用伐鬼方，三年有赏于大国。"
      },
      {
        "yin": true,
        "name": "六五",
        "text": "贞吉无悔，君子之光，有孚吉。"
      },
      {
        "yin": false,
        "name": "上九",
        "text": "有孚于饮酒，无咎。濡其首，有孚失是。"
      }
    ]
  }
];

// 导出供使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HEXAGRAMS, getLineName };
}
if (typeof window !== 'undefined') {
  window.HEXAGRAMS = HEXAGRAMS;
  window.getLineName = getLineName;
}