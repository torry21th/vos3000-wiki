window.VOS3000_DOCS = [
  {
    "no": "1",
    "title": "概述",
    "slug": "s-1",
    "level": 1,
    "sourcePage": 6,
    "endPage": 6,
    "endpoint": "",
    "pages": [
      {
        "number": 6,
        "html": "./assets/html-pages/page-006.html",
        "label": "PDF 第 6 页"
      }
    ],
    "searchText": "1 概述 本文档描述在昆石 VOS3000 标准接口。 部分接口需购买特定功能组件才可实施， 请在使用接口时核\n实您安装的产品具备该功能。\n接口综述:\n⚫ 接口格式采用 JSON 定义，采用 UTF-8 格式编码\n⚫ 接口采用 POST 方式提交至 VOS3000 WEB 服务\n⚫ 对于接口返回码，非 0 表示失败。失败原因参考返回码定义\n⚫ HTML 头部信息 Content-Type 设置为 text/html;charset=UTF-8\n⚫ 一般返回错误格式样例{\"retCode\":-10007,\"exception\":\"Not found, operation failed.\"}\n⚫ 对于有性能以及压力要求的接口请求， 建议安排相同机器环境， 测试后方可实际环\n境部署。"
  },
  {
    "no": "2",
    "title": "配置",
    "slug": "s-2",
    "level": 1,
    "sourcePage": 7,
    "endPage": 8,
    "endpoint": "",
    "pages": [
      {
        "number": 7,
        "html": "./assets/html-pages/page-007.html",
        "label": "PDF 第 7 页"
      },
      {
        "number": 8,
        "html": "./assets/html-pages/page-008.html",
        "label": "PDF 第 8 页"
      }
    ],
    "searchText": "2 配置 "
  },
  {
    "no": "2.1",
    "title": "接入配置",
    "slug": "s-2-1",
    "level": 2,
    "sourcePage": 7,
    "endPage": 8,
    "endpoint": "",
    "pages": [
      {
        "number": 7,
        "html": "./assets/html-pages/page-007.html",
        "label": "PDF 第 7 页"
      },
      {
        "number": 8,
        "html": "./assets/html-pages/page-008.html",
        "label": "PDF 第 8 页"
      }
    ],
    "searchText": "2.1 接入配置 位置：接口管理-Web 访问控制\n⚫ Web 服务器设备：设备名称\n⚫ 目录名称：允许访问的接口目录范围\n◼ /external/server：正式接口\n◼ /external/server/GetCustomer：细化具体接口使用范围-查询账户\n◼ /external/test/server：浏览器可视化调试界面\n⚫ 允许接入 IP：访问接口时使用的 IP 地址\n⚫ 备注"
  },
  {
    "no": "2.2",
    "title": "接口地址",
    "slug": "s-2-2",
    "level": 2,
    "sourcePage": 7,
    "endPage": 8,
    "endpoint": "",
    "pages": [
      {
        "number": 7,
        "html": "./assets/html-pages/page-007.html",
        "label": "PDF 第 7 页"
      },
      {
        "number": 8,
        "html": "./assets/html-pages/page-008.html",
        "label": "PDF 第 8 页"
      }
    ],
    "searchText": "2.2 接口地址 http://IP 地址:HTTP 端口/目录名称\nhttps://IP 地址:HTTPS 端口/目录名称"
  },
  {
    "no": "2.3",
    "title": "调试界面",
    "slug": "s-2-3",
    "level": 2,
    "sourcePage": 7,
    "endPage": 8,
    "endpoint": "",
    "pages": [
      {
        "number": 7,
        "html": "./assets/html-pages/page-007.html",
        "label": "PDF 第 7 页"
      },
      {
        "number": 8,
        "html": "./assets/html-pages/page-008.html",
        "label": "PDF 第 8 页"
      }
    ],
    "searchText": "2.3 调试界面 当接口完成部署，您可以根据以下链接或咨询技术供应商进行配置与调试\nhttps://www.linknat.com/#/support/faqdetail/33\n每个接受请求接口都准备了测试页面供调用参考。\n可测试接口汇总页面\n测试接口交互格式样例"
  },
  {
    "no": "3",
    "title": "功能操作",
    "slug": "s-3",
    "level": 1,
    "sourcePage": 9,
    "endPage": 11,
    "endpoint": "",
    "pages": [
      {
        "number": 9,
        "html": "./assets/html-pages/page-009.html",
        "label": "PDF 第 9 页"
      },
      {
        "number": 10,
        "html": "./assets/html-pages/page-010.html",
        "label": "PDF 第 10 页"
      },
      {
        "number": 11,
        "html": "./assets/html-pages/page-011.html",
        "label": "PDF 第 11 页"
      }
    ],
    "searchText": "3 功能操作 表格头域说明\n⚫ 必须: M 表示必填字段 O 表示可选字段\n⚫ 类型:\n◼ String 表示长度为 255 以内的字符串\n◼ LongString 表示长度为 65535 以内的字符串\n◼ 其余类型定义遵照 Java 基础类型定义"
  },
  {
    "no": "3.1",
    "title": "创建账户",
    "slug": "s-3-1",
    "level": 2,
    "sourcePage": 9,
    "endPage": 11,
    "endpoint": "/external/server/CreateCustomer",
    "pages": [
      {
        "number": 9,
        "html": "./assets/html-pages/page-009.html",
        "label": "PDF 第 9 页"
      },
      {
        "number": 10,
        "html": "./assets/html-pages/page-010.html",
        "label": "PDF 第 10 页"
      },
      {
        "number": 11,
        "html": "./assets/html-pages/page-011.html",
        "label": "PDF 第 11 页"
      }
    ],
    "searchText": "3.1 创建账户 接口地址/external/server/CreateCustomer\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码 （具备唯一性的可显标识）\nname M String 账户名称\nmoney O Double 开户初始余额（默认:0）\nlimitMoney O Double 开户初始透支限额（默认:0）\nfeeRateGroup O String 计费费率\ntype O Integer 账户类型\n0:普通账户（默认）\n1:电话卡\n2:结算账户\nlockType O Integer 锁定类型\n0:未锁定（默认）\n1:锁定\nagentAccount O String 代理商账号\n参数名称 必须 类型 描述信息\nphoneBookLimit O Integer 电话簿上限（默认:0）\nvalidTime O Long 账户有效期（UTC 1970-01-01 至今\n的毫秒数）\n0:使用系统参数决定的过期时间\nctdBillingType O Integer 代理商回拨计费模式\n0:普通（默认）\n1:流量\nmemo O String 备注信息\ninfoCustomerAdditional O InfoCustomerAdditional 账户补充信息\nInfoCustomerAdditional 格式\n参数名称 必须 类型 描述信息\ncardType O Integer 证件类型\n0:身份证（默认）\n1:护照\n2:军官证\n3:工作证\n4:学生证\n5:其他证件\ncardNumber O String 证件号码\naddress O String 地址\npostCode O String 邮政编码\nlinkMan O String 联系人\ntelephone O String 电话号码\nfax O String 传真\nemail O String 邮件地址\nemailCc O String 抄送地址\nemailBcc O String 密送地址\nreportType O Integer 报表发送类型\n0:不发送（默认）\n1:每日\n2:每周\n3:每月\ncompanyName O String 公司名称\nbank O String 银行名称\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.2",
    "title": "修改账户",
    "slug": "s-3-2",
    "level": 2,
    "sourcePage": 12,
    "endPage": 12,
    "endpoint": "/external/server/ModifyCustomer",
    "pages": [
      {
        "number": 12,
        "html": "./assets/html-pages/page-012.html",
        "label": "PDF 第 12 页"
      }
    ],
    "searchText": "3.2 修改账户 接口地址/external/server/ModifyCustomer\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码 （具备唯一性的可显标识）\nname O String 账户名称\nlimitMoney O Double 开户初始透支限额（默认:0）\nfeeRateGroup O String 计费费率\ntype O Integer 账户类型\n0:普通账户（默认）\n1:电话卡\n2:结算账户\nlockType O Integer 锁定类型\n0:未锁定（默认）\n1:锁定\nagentAccount O String 代理商账号\nphoneBookLimit O Integer 电话簿上限（默认:0）\nvalidTime O Long 账户有效期（UTC 1970-01-01 至今\n的毫秒数）\nctdBillingType O Integer 代理商回拨计费模式\n0:普通\n1:流量\nmemo O String 备注信息\ninfoCustomerAdditional O InfoCustomerAdditional 账户补充信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.3",
    "title": "删除账户",
    "slug": "s-3-3",
    "level": 2,
    "sourcePage": 13,
    "endPage": 13,
    "endpoint": "/external/server/DeleteCustomer",
    "pages": [
      {
        "number": 13,
        "html": "./assets/html-pages/page-013.html",
        "label": "PDF 第 13 页"
      }
    ],
    "searchText": "3.3 删除账户 接口地址/external/server/DeleteCustomer\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 计费账户号码（具备唯一性的可显\n标识）\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.4",
    "title": "查询账户",
    "slug": "s-3-4",
    "level": 2,
    "sourcePage": 14,
    "endPage": 15,
    "endpoint": "/external/server/GetCustomer",
    "pages": [
      {
        "number": 14,
        "html": "./assets/html-pages/page-014.html",
        "label": "PDF 第 14 页"
      },
      {
        "number": 15,
        "html": "./assets/html-pages/page-015.html",
        "label": "PDF 第 15 页"
      }
    ],
    "searchText": "3.4 查询账户 接口地址/external/server/GetCustomer\n请求格式\n参数名称 必须 类型 描述信息\naccounts O String[] 账 户 号 码 列 表 （ 与 e164s 、\nfilterAgentAccount 三 项 至 少 选 其\n一）\ne164s O String[] 电话号码列表\nfilterAgentAccount O FilterAgentAccount 代理商账户（表示仅查询该代理商\n的下属账户）\ntype O Integer 账户类型\n0:普通账户\n1:电话卡\n2:结算账户\nFilterAgentAccount 格式\n参数名称 必须 类型 描述信息\nfilterAgentAccount M String 代理商账户号码\nquerySonMode M int 0:所有下属账户\n1:直属下属账户\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoCustomers O InfoCustomer[] 账户信息\nInfoCustomer 格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码 （具备唯一性的可显标识）\nname M String 账户名称\nmoney M double 开户初始余额（默认:0）\nlimitMoney M double 开户初始透支限额（默认:0）\n参数名称 必须 类型 描述信息\nfeeRateGroup M String 计费费率\n空串:无费率组\ntype M int 账户类型\n0:普通账户（默认）\n1:电话卡\n2:结算账户\nlockType M int 锁定类型\n0:未锁定（默认）\n1:锁定\nagentAccount M String 代理商账号\n空串:无代理商\nphoneBookLimit M int 电话簿上限（默认:0）\ncanceled M boolean true:已注销\nfalse:未注销\nstartTime M long 账户有效期（UTC 1970-01-01 至今\n的毫秒数）\n0:使用系统参数决定的过期时间\nvalidTime M long 账户有效期（UTC 1970-01-01 至今\n的毫秒数）\n0:使用系统参数决定的过期时间\ntodayConsumption M double 今日消费\nctdBillingType M int 代理商回拨计费模式\n0:普通\n1:流量\ncategory M int 账户类别\n0:普通账户\n1:代理商账户\nbindedE164s M String [] 绑定号码列表\nmemo M String 备注信息\ninfoCustomerAdditional M InfoCustomerAdditional 账户补充信息"
  },
  {
    "no": "3.5",
    "title": "查询所有账户",
    "slug": "s-3-5",
    "level": 2,
    "sourcePage": 16,
    "endPage": 26,
    "endpoint": "",
    "pages": [
      {
        "number": 16,
        "html": "./assets/html-pages/page-016.html",
        "label": "PDF 第 16 页"
      },
      {
        "number": 17,
        "html": "./assets/html-pages/page-017.html",
        "label": "PDF 第 17 页"
      },
      {
        "number": 18,
        "html": "./assets/html-pages/page-018.html",
        "label": "PDF 第 18 页"
      },
      {
        "number": 19,
        "html": "./assets/html-pages/page-019.html",
        "label": "PDF 第 19 页"
      },
      {
        "number": 20,
        "html": "./assets/html-pages/page-020.html",
        "label": "PDF 第 20 页"
      },
      {
        "number": 21,
        "html": "./assets/html-pages/page-021.html",
        "label": "PDF 第 21 页"
      },
      {
        "number": 22,
        "html": "./assets/html-pages/page-022.html",
        "label": "PDF 第 22 页"
      },
      {
        "number": 23,
        "html": "./assets/html-pages/page-023.html",
        "label": "PDF 第 23 页"
      },
      {
        "number": 24,
        "html": "./assets/html-pages/page-024.html",
        "label": "PDF 第 24 页"
      },
      {
        "number": 25,
        "html": "./assets/html-pages/page-025.html",
        "label": "PDF 第 25 页"
      },
      {
        "number": 26,
        "html": "./assets/html-pages/page-026.html",
        "label": "PDF 第 26 页"
      }
    ],
    "searchText": "3.5 查询所有账户 /external/server/GetAllCustomers\n请求格式\n参数名称 必须 类型 描述信息\nKey O integer 查询所有账户\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\naccounts O String 所有账户名称"
  },
  {
    "no": "3.6",
    "title": "创建话机",
    "slug": "s-3-6",
    "level": 2,
    "sourcePage": 16,
    "endPage": 26,
    "endpoint": "/external/server/CreatePhone",
    "pages": [
      {
        "number": 16,
        "html": "./assets/html-pages/page-016.html",
        "label": "PDF 第 16 页"
      },
      {
        "number": 17,
        "html": "./assets/html-pages/page-017.html",
        "label": "PDF 第 17 页"
      },
      {
        "number": 18,
        "html": "./assets/html-pages/page-018.html",
        "label": "PDF 第 18 页"
      },
      {
        "number": 19,
        "html": "./assets/html-pages/page-019.html",
        "label": "PDF 第 19 页"
      },
      {
        "number": 20,
        "html": "./assets/html-pages/page-020.html",
        "label": "PDF 第 20 页"
      },
      {
        "number": 21,
        "html": "./assets/html-pages/page-021.html",
        "label": "PDF 第 21 页"
      },
      {
        "number": 22,
        "html": "./assets/html-pages/page-022.html",
        "label": "PDF 第 22 页"
      },
      {
        "number": 23,
        "html": "./assets/html-pages/page-023.html",
        "label": "PDF 第 23 页"
      },
      {
        "number": 24,
        "html": "./assets/html-pages/page-024.html",
        "label": "PDF 第 24 页"
      },
      {
        "number": 25,
        "html": "./assets/html-pages/page-025.html",
        "label": "PDF 第 25 页"
      },
      {
        "number": 26,
        "html": "./assets/html-pages/page-026.html",
        "label": "PDF 第 26 页"
      }
    ],
    "searchText": "3.6 创建话机 接口地址/external/server/CreatePhone\n请求格式\n参数名称 必须 类型 描述信息\nautoCreateAccount M boolean 创建话机时同时创建计费账户\ne164 M String 话机号码\naccount O String 话机所属账户\npassword O String 话机密码\ndisplayNumber O String 去电显示\nlockType O Integer 锁定类型\n0:无锁定\n1:锁定呼出\n2:锁定呼入\n3:全部锁定\ncallLevel O Integer 权限类型\n1:网内通话\n2:本地市话\n4:国内长途\n5:国际长途\n参数名称 必须 类型 描述信息\nfeerateGroup O String 话机私有计费费率（请参考操作手\n册费率相关描述）通常 情况不使用\n此设置\nmonthlyMoneyMinimum O Double 月最低消费额\nmonthlyMoneyMaximum O Double 月最高消费额\nmonthlyRentFee O Double 月租\nrewriteRulesOutCallee O LongString 呼出被叫拨号规则，需符合拨号规\n则书写格式\nrewriteRulesInCallee O LongString 呼入被叫拨号规则，需符合拨号规\n则书写格式\nrewriteRulesInCaller O LongString 呼入主叫拨号规则，需符合拨号规\n则书写格式\nroutingGatewayGroupsAll\now\nO Boolean true:仅允许设定的网关群组作为落\n地\nfalse:禁止设定的网关群组作为落地\nroutingGatewayGroups O String 落地网关群组名称（空表示所有）\nequipment O String 话机所属软交换（空表示属于所有\n软交换）\ncalleeBilling O Boolean true:开启被叫计费\nfalse:普通计费（主叫计费）\ncustomerPassword O String Web 查询密码\nlineCallIn O Integer 呼入线路数量限制\nlineCallOut O Integer 呼出数量限制\nlineCapacity O Integer 同时呼叫数限制（含呼入与呼出）\nphonebookLimit O Integer 电话簿数量限制\ncallerLimitE164GroupsAll\now\nO Boolean true:允许主叫号码组呼入\nfalse:禁止主叫号码组呼入\ncallerLimitE164Groups O String 当话机为被叫时 允许/禁止的主叫\n号码组（空表示所有）\ncalleeLimitE164Allow O Boolean true:允许呼出的被叫号码组\nfalse:禁止呼出的被叫号码组\ncalleeLimitE164Groups O String 当话机为主叫时 允许/禁止的被叫\n号码组（空表示所有）\ndids O String 一机多号\nmemo O String 备注\n参数名称 必须 类型 描述信息\ninfoPhoneValueAdded O InfoPhoneValueAdded 话机增值业务\ninfoPhoneAdditional O InfoPhoneAdditional 话机补充设置\nInfoPhoneValueAdded格式\n参数名称 必须 类型 描述信息\ncallerIdDisplay O Boolean true:开启来电显示\nfalse:关闭来电显示\ncallTransfer O Boolean true:允许呼叫转移\nfalse:禁止呼叫转移\ndoNotDisturb O Boolean true:开启免打扰\nfalse:关闭免打扰\nperiodForwarding O Boolean true:开启时段前转\nfalse:关闭时段前转\ninfoPhoneValueAddedPeri\nodForwardings\nO InfoPhoneValueAddedPeri\nodForwarding[]\n时段转移设置\nunconditionalForward O Boolean true:开启无条件前转\nfalse:关闭无条件前转\nunconditionalForwardE164 O InfoPhoneValueAddedFor\nwardE164\n无条件前转号码\nnoAnswerForward O Boolean true:开启无应答前转\nfalse:关闭无应答前转\nnoAnswerForwardE164 O InfoPhoneValueAddedFor\nwardE164\n无应答前转号码\nofflineForward O Boolean true:开启不在线前转\nfalse:关闭不在线前转\nofflineForwardE164 O InfoPhoneValueAddedFor\nwardE164\n不在线前转号码\nbusyForward O Boolean true:开启遇忙前转\nfalse:关闭遇忙前转\nbusyForwardE164 O InfoPhoneValueAddedFor\nwardE164\n遇忙前转号码\ncallForwardDisplay O Integer 呼叫前转去电显示\n0:默认，使用系统参数值\n1:原始主叫\n2:本机号码\n参数名称 必须 类型 描述信息\ncallTransferNormalDisplay O Integer 普通呼叫转移去电显示\n0:默认，使用系统参数值\n1:原始主叫\n2:本机号码\ncallTransferAskDisplay O Integer 询问式呼叫转移去电显示\n0:默认，使用系统参数值\n1:原始主叫\n2:本机号码\ncolorRing O Boolean true:开启彩铃\nfalse:关闭彩铃\nremoteColorRingPassthrou\ngh\nO Boolean true:开启彩铃透传\nfalse:关闭彩铃透传\ncolorRingName O String 彩铃名称\nlanguage O String 无法接通语音提示 /余额不足语音\n提示/通话剩余时长插播 使用的语\n言\nunableToConnectV oicePro\nmpts\nO Integer 无法接通语音提示\n0:默认，使用系统参数值\n1:开启\n2:关闭\ncallRemainingTimePrompt\ns\nO Integer 通话剩余时长插播\n0:默认，使用系统参数值\n1:提示剩余金额\n2:提示剩余分钟数\n3:不进行提示\nbalanceNotEnoughAlarm O Integer 余额不足语音提示\n0:默认，使用系统参数值\n1:开启\n2:关闭\nvoiceMail O Boolean true:语音信箱开通\nfalse:语音信箱关闭\nvoiceMailCheckPassword O Boolean true:接入语音信箱校验密码\nfalse:接入语音信箱不校验密码\nvoiceMailMaxNumber O Integer 语音信箱保留的条数\n-1:由系统参数决定\n参数名称 必须 类型 描述信息\nvoiceMailExpireDay O Integer 语音信箱留言过期天数\n-1:由系统参数决定\nvoiceMailAudioType O Integer 0:默认\n1:自定义\nInfoPhoneValueAddedPeriodForwarding格式\n参数名称 必须 类型 描述信息\nweekOfDay O String 星期几生效设定，可使用逗号分隔\n多个生效天如 0,1\n不设置默认为 0,1,2,3,4,5,6\n0:星期日\n1:星期一\n2:星期二\n3:星期三\n4:星期四\n5:星期五\n6:星期六\n全星期生效可设置为 0,1,2,3,4,5,6\nbeginSecondInDay O Integer 起始时间（当前时间与当天 0 点的\n秒偏差）\n不设置默认为 0\n取值范围 0-86400\nendSecondInDay O Integer 终止时间（当前时间与当天 0 点的\n秒偏差）\n不设置默认为 86400\n取值范围 0-86400\nforwardE164 O InfoPhoneValueAddedFor\nwardE164\n前转号码\nInfoPhoneValueAddedForwardE164格式\n参数名称 必须 类型 描述信息\nforwardMethod O Integer 前转方式，不设置则默认为 0\n0:顺序\n2:随机\n3:同振\n参数名称 必须 类型 描述信息\nalertSecond O Integer 前转后振铃时长（单位:秒），对最\n后一个前转号码无效\n不设置默认为-1\n-1:使用默认值\ne164 O String 前转号码， 可使用逗号分隔多个号\n码\nInfoPhoneAdditional 格式\n参数名称 必须 类型 描述信息\nregisterType O Integer 注册方式\n0:静态\n1:动态\n2:对接网关\nprotocol O Integer 协议\n0:H323\n1:SIP\nip O String 静态注册方式时的 IP 地址\nport O Integer 静态注册方式时的端口\nlocalIp O String 静态注册方式时使用的本地IP 地址\nrtpRelay O Integer 媒体转发\n0:自动\n1:开启\n2:关闭\n3:必须开启\nrtpInterruptDetection O Integer 媒体中断监测\n0:无\n1:服务器至远端\n2:远端至服务器\n3:双向\ncallDurationLimit O Integer 通话时长限制（单位:秒）\n-1:默认，使用系统参数设置值\n0:无，不限制通话时长\nuseCallerPhoneDisplay O Integer 非电话簿主叫话机使用其去电显示\n0:默认，使用系统参数设置值\n1:开启\n2:关闭\n参数名称 必须 类型 描述信息\nnoBillingToPhone O Integer 当对方是话机设备时免计费\n0:默认，使用系统参数设置值\n1:开启\n2:关闭\ndisplayCallerShortNumber O Boolean true:显示主叫短号\nfalse:不显示主叫短号\nuseRoutingGatewayNotOn\nline\nO Integer 不在线尝试落地网关路由\n0:默认，使用系统参数设置值\n1:开启\n2:关闭\nminProfitPercentEnable O Boolean 是否开启最低利润率限制\nminProfitPercent O Integer 最低利润率限制若设置为 10 表示\n利润率为 10%\n取值范围-10000 至 10000\nmaxSecondRatesEnable O Boolean 最高秒费率限制\ntrue:开启\nfalse 关闭\nmaxSecondRates O Double 最高秒费率值（若分钟费率为 0.6，\n此值应该设置为 0.01）\nfirstRoutingPolicy O Integer 第一路由策略\n0:无\n1:接通率\n2:最少秒费率\nsecondRoutingPolicy O Integer 第二路由策略\n0:无\n1:接通率\n2:最少秒费率\nsipAuthenticationMethod O Integer SIP 呼叫时认证方式\n0:根据 IP 地址\n1:根据 IP 地址和端口\nsipRemoteAlertingMethod O Integer 远端回铃方式\n0:透传\n1:183+SDP\n2:180+SDP\nsipTimerSupport O Boolean true:允许 timer 协议（RFC4028）\nfalse:禁止 timer 协议\n参数名称 必须 类型 描述信息\nsip100RelSupport O Boolean true:开启 100rel 协议\nfalse:关闭 100rel 协议\nsipT38Support O Boolean true:允许 t38 协议\nfalse:禁止 t38 协议\nsipPrivacySupport O Boolean true:识别 Privacy\nfalse:忽略 Privacy\nsipPrivacy O Integer 0:无\n1:透传\n2:id\n3:none\nsipPPreferredIdentity O Integer 0:无\n1:透传\n2:主叫号码\nsipPAssertedIdentity O Integer 0:无\n1:透传\n2:主叫号码\ndtmfReceiveMethod O Integer DTMF 接收方式\n0:所有\n10:RFC2833\n20:信令方式\n30:关闭\ndtmfSIPSendMethod O Integer SIP DTMF 发送方式\n0:自动\n10:RFC2833\n50:SIP INFO\n60:关闭\nsipCodecAssign O Boolean true:指定 SIP 媒体编码\nfalse:自动协商 SIP 媒体编码\nsipCodecs O String [] 媒体编码范围\naudio/AMR\naudio/DVI4\naudio/G722\naudio/G723\naudio/G726-16\naudio/G726-24\naudio/G726-32\naudio/G726-40\naudio/G728\n参数名称 必须 类型 描述信息\naudio/G729\naudio/G729D\naudio/G729E\naudio/GSM\naudio/GSM-EFR\naudio/iLBC\naudio/L8\naudio/L16\naudio/LPC\naudio/MPA\naudio/parityfec\naudio/PCMA\naudio/PCMU\naudio/QCELP\naudio/RED\naudio/VDVI\naudio/Speex\naudio/Speex-FEC\naudio/Speex-Wideband\naudio/Speex-Wideband-FEC\naudio/SILK\nvideo/BT656\nvideo/CelB\nvideo/JPEG\nvideo/H261\nvideo/H263\nvideo/H263-1998\nvideo/H263-2000\nvideo/H264\nvideo/MPV\nvideo/MP2T\nvideo/MP1S\nvideo/MP2P\nvideo/parityfec\nvideo/RED\nvideo/BMPEG\nvideo/nv\nvideo/VP8\naudioCodecTranscodingEn\nable\nO Boolean true:允许使用编码转换\nfalse:不允许使用编码转换\nrtpIncludeDtmfInband O Boolean true:媒体包含带内(inband)DTMF\nfalse: 媒 体 不 包 含 带 内\n参数名称 必须 类型 描述信息\n(inband)DTMF\nrtpNeedDtmfInband O Boolean true:需使用带内(inband)DTMF 发送\nfalse: 不 额 外 使 用 带内\n(inband)DTMF 发送\nivrEquipmentType O Integer 语音设备类型\n-1:无\n1:直拨回拨\n2:企业总机\n3:增值业务\nivrServiceName O String 语音业务名称\nivrCallbackBillingMode O Integer 回拨计费\n0:接入号对应话机\n1:在用电话卡\n2:自适应（顺序:绑定号码－在用电\n话卡－主叫号对应话机－接入号对\n应话机）\n3:主叫号对应话机\nivrCallbackMergeBillingM\node\nO Integer 回拨第二路叠加计费方式\n0:无\n1:叠加接入号到第二路\n2:叠加主叫号码到第二路\nivrDirectMergeBillingMod\ne\nO Integer 直拨第二路叠加计费方式\n0:无\n1:叠加接入号到第二路\n2:叠加主叫号码到第二路\nivrSecondBillingMode O Integer 第二路计费方式\n0:接入号对应话机\n1:在用电话卡\n3:主叫号对应话机\nivrCallbackBillingSecordN\notConnectedOnAccessE16\nO Boolean true:第二路未接通则 按照接入号对\n应话机计费\nfalse:此参数不生效\nivrCallbackBillingSecordC\nonnectedOnSecondAccoun\nt\nO Boolean true:第二路接通则按照第二路账户\n计费\nfalse:此参数不生效\nivrAccessV erifyActivePho\nneCard\nO Boolean true:主叫号码校验在用电话卡\n参数名称 必须 类型 描述信息\nivrAccessV erifyBindedE16\nO Boolean true:主叫号码校验绑定号码\nivrAccessV erifyCallerE164\nPhone\nO Boolean true:主叫号码校验平台话机\nivrAccessV erifyAccessE16\n4Phone\nO Boolean true:被叫号码校验接入号存在账户\nivrEnablePhoneSetting O Boolean true:启用话机设设置\nfalse:不启用话机设置\nlrnEnable O Boolean LRN 查询\ntrue:启用\nfalse:禁用\nlrnEatPrefixLength O Integer LRN 查询时忽略被叫号码前缀的长\n度\nlrnFailureAction O Integer 查询失败后的行为\n0:拒绝此次呼叫\n1:使用原有号码继续后续处理\nlrnInterstateBillingPrefix O String LRN 查询后非同地区计费前缀\nlrnUndeterminedBillingPre\nfix\nO String LRN 查询后有一个或两个号码无法\n获知其地区时的计费前缀\nrewriteCalleeMobileAreaE\nnable\nO Boolean true:开启手机区号添加\nfalse:关闭手机区号添加\nrewriteCalleeMobileArea O String 开启或关闭手机区号添加的地区信\n息，采用逗号分隔多个地区\ncallStateReport O Boolean 开启或关闭呼叫状态通知\nsipRequestAddress O Integer 0:Socket\n1:Contact Port\n2:Contact\nsipResponseAddress O Integer 0:Socket\n1:Via Port\n2:Via\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\npassword O String 当创建请求未设置密码时，系统自\n动生成随机密码"
  },
  {
    "no": "3.7",
    "title": "修改话机",
    "slug": "s-3-7",
    "level": 2,
    "sourcePage": 27,
    "endPage": 28,
    "endpoint": "/external/server/ModifyPhone",
    "pages": [
      {
        "number": 27,
        "html": "./assets/html-pages/page-027.html",
        "label": "PDF 第 27 页"
      },
      {
        "number": 28,
        "html": "./assets/html-pages/page-028.html",
        "label": "PDF 第 28 页"
      }
    ],
    "searchText": "3.7 修改话机 接口地址/external/server/ModifyPhone\n请求格式\n参数名称 必须 类型 描述信息\ne164 M String 创建话机时同时创建计费账户\npassword O String 话机密码\ndisplayNumber O String 去电显示\nlockType O Integer 锁定类型\n0:无锁定\n1:锁定呼出\n2:锁定呼入\n3:全部锁定\ncallLevel O Integer 权限类型\n1:网内通话\n2:本地市话\n3:国内长途\n4:国际长途\nfeerateGroup O String 话机私有计费费率（请参考操作手\n册费率相关描述）通常情况不使用\n此设置\nmonthlyMoneyMinimum O Double 月最低消费额\nmonthlyMoneyMaximum O Double 月最高消费额\nmonthlyRentFee O Double 月租\nrewriteRulesOutCallee O LongString 呼出被叫拨号规则，需符合 拨号规\n则书写格式\nrewriteRulesInCallee O LongString 呼入被叫拨号规则，需符合拨号规\n则书写格式\nrewriteRulesInCaller O LongString 呼入主叫拨号规则，需符合拨号规\n则书写格式\nroutingGatewayGroupsAll\now\nO Boolean true:仅允许设定的网关群组作为落\n地\nfalse:禁止设定的网关群组作为落地\nroutingGatewayGroups O String 落地网关群组名称（空表示所有）\naccount O String 话机所属账户\n参数名称 必须 类型 描述信息\nequipment O String 话机所属软交换（空表示属于所有\n软交换）\ncalleeBilling O Boolean true:开启被叫计费\nfalse:普通计费（主叫计费）\ncustomerPassword O String Web 查询密码\nlineCallIn O Integer 呼入线路数量限制\nlineCallOut O Integer 呼出数量限制\nlineCapacity O Integer 同时呼叫数限制（含呼入与呼出）\nphonebookLimit O Integer 电话簿数量限制\ncallerLimitE164GroupsAll\now\nO Boolean true:允许主叫号码组呼入\nfalse:禁止主叫号码组呼入\ncallerLimitE164Groups O String 当话机为被叫时 允许/禁止的主叫\n号码组（空表示所有）\ncalleeLimitE164Allow O Boolean true:允许呼出的被叫号码组\nfalse:禁止呼出的被叫号码组\ncalleeLimitE164Groups O String 当话机为主叫时 允许/禁止的被叫\n号码组（空表示所有）\ndids O String 一机多号\nmemo O String 备注\ninfoPhoneValueAdded O InfoPhoneValueAdded 话机增值业务\ninfoPhoneAdditional O InfoPhoneAdditional 话机补充设置\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.8",
    "title": "删除话机",
    "slug": "s-3-8",
    "level": 2,
    "sourcePage": 29,
    "endPage": 29,
    "endpoint": "/external/server/DeletePhone",
    "pages": [
      {
        "number": 29,
        "html": "./assets/html-pages/page-029.html",
        "label": "PDF 第 29 页"
      }
    ],
    "searchText": "3.8 删除话机 接口地址/external/server/DeletePhone\n请求格式\n参数名称 必须 类型 描述信息\ne164 M String 电话号码\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.9",
    "title": "查询话机",
    "slug": "s-3-9",
    "level": 2,
    "sourcePage": 30,
    "endPage": 31,
    "endpoint": "/external/server/GetPhone",
    "pages": [
      {
        "number": 30,
        "html": "./assets/html-pages/page-030.html",
        "label": "PDF 第 30 页"
      },
      {
        "number": 31,
        "html": "./assets/html-pages/page-031.html",
        "label": "PDF 第 31 页"
      }
    ],
    "searchText": "3.9 查询话机 接口地址/external/server/GetPhone\n请求格式\n参数名称 必须 类型 描述信息\ne164s O String [] 电话号码列表(若 accounts 不设置则\n此参数必选)\naccounts O String [] 账户号码列表(若 e164s 不设置则此\n参数必选)\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoPhones O InfoPhone [] 话机信息\nInfoPhone 格式\n参数名称 必须 类型 描述信息\ne164 M String 创建话机时同时创建计费账户\npassword O String 话机密码\ndisplayNumber O String 去电显示\nlockType O Integer 锁定类型\n0:无锁定\n1:锁定呼出\n2:锁定呼入\n3:全部锁定\ncallLevel O Integer 权限类型\n1:网内通话\n2:本地市话\n3:国内长途\n4:国际长途\nfeerateGroup O String 话机私有计费费率（请参考操作手\n册费率相关描述）通常情况不使用\n此设置\nmonthlyMoneyMinimum O Double 月最低消费额\n参数名称 必须 类型 描述信息\nmonthlyMoneyMaximum O Double 月最高消费额\nmonthlyRentFee O Double 月租\nrewriteRulesOutCallee O LongString 呼出被叫拨号规则，需符合拨号规\n则书写格式\nrewriteRulesInCallee O LongString 呼入被叫拨号规则，需符合拨号规\n则书写格式\nrewriteRulesInCaller O LongString 呼入主叫拨号规则，需符合拨号规\n则书写格式\nroutingGatewayGroupsAll\now\nO Boolean true:仅允许设定的网关群组作为落\n地\nfalse:禁止设定的网关群组作为落地\nroutingGatewayGroups O String 落地网关群组名称（空表示所有）\naccount O String 话机所属账户\nequipment O String 话机所属软交换\n空:表示属于所有软交换\n未选择:表示不属于任何软交换\ncalleeBilling O Boolean true:开启被叫计费\nfalse:普通计费（主叫计费）\ncustomerPassword O String Web 查询密码\nlineCallIn O Integer 呼入线路数量限制\nlineCallOut O Integer 呼出数量限制\nlineCapacity O Integer 同时呼叫数限制（含呼入与呼出）\nphonebookLimit O Integer 电话簿数量限制\ncallerLimitE164GroupsAll\now\nO Boolean true:允许主叫号码组呼入\nfalse:禁止主叫号码组呼入\ncallerLimitE164Groups O String 当话机为被叫时 允许/禁止的主叫\n号码组（空表示所有）\ncalleeLimitE164Allow O Boolean true:允许呼出的被叫号码组\nfalse:禁止呼出的被叫号码组\ncalleeLimitE164Groups O String 当话机为主叫时 允许/禁止的被叫\n号码组（空表示所有）\ndids O String 一机多号\nmemo O String 备注\ninfoPhoneValueAdded O InfoPhoneValueAdded 话机增值业务\ninfoPhoneAdditional O InfoPhoneAdditional 话机补充设置"
  },
  {
    "no": "3.10",
    "title": "查询在线话机",
    "slug": "s-3-10",
    "level": 2,
    "sourcePage": 32,
    "endPage": 32,
    "endpoint": "/external/server/GetPhoneOnline",
    "pages": [
      {
        "number": 32,
        "html": "./assets/html-pages/page-032.html",
        "label": "PDF 第 32 页"
      }
    ],
    "searchText": "3.10 查询在线话机 接口地址/external/server/GetPhoneOnline\n请求格式\n参数名称 必须 类型 描述信息\ne164s M String [] 电话号码列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoPhoneOnlines O InfoPhoneOnline [] 在线话机信息\nInfoPhoneOnline 格式\n参数名称 必须 类型 描述信息\ne164 M String 电话号码\ncurrentCall M int 当前呼叫总数\nremoteIp M String 远端地址\nlocalIp M String 本地地址\nregisterTime M long 注册时间（UTC 1970-01-01 至今的\n毫秒数）\nupdateTime M long 上次更新时间（UTC 1970-01-01 至\n今的毫秒数）\nprotocol M int 协议类型\n0:H323\n1:SIP\ncryptoType M int 加密类型\n0:未加密\n1:RC4\nproductId M String 设备名称"
  },
  {
    "no": "3.11",
    "title": "创建对接网关",
    "slug": "s-3-11",
    "level": 2,
    "sourcePage": 33,
    "endPage": 44,
    "endpoint": "/external/server/CreateGatewayMapping",
    "pages": [
      {
        "number": 33,
        "html": "./assets/html-pages/page-033.html",
        "label": "PDF 第 33 页"
      },
      {
        "number": 34,
        "html": "./assets/html-pages/page-034.html",
        "label": "PDF 第 34 页"
      },
      {
        "number": 35,
        "html": "./assets/html-pages/page-035.html",
        "label": "PDF 第 35 页"
      },
      {
        "number": 36,
        "html": "./assets/html-pages/page-036.html",
        "label": "PDF 第 36 页"
      },
      {
        "number": 37,
        "html": "./assets/html-pages/page-037.html",
        "label": "PDF 第 37 页"
      },
      {
        "number": 38,
        "html": "./assets/html-pages/page-038.html",
        "label": "PDF 第 38 页"
      },
      {
        "number": 39,
        "html": "./assets/html-pages/page-039.html",
        "label": "PDF 第 39 页"
      },
      {
        "number": 40,
        "html": "./assets/html-pages/page-040.html",
        "label": "PDF 第 40 页"
      },
      {
        "number": 41,
        "html": "./assets/html-pages/page-041.html",
        "label": "PDF 第 41 页"
      },
      {
        "number": 42,
        "html": "./assets/html-pages/page-042.html",
        "label": "PDF 第 42 页"
      },
      {
        "number": 43,
        "html": "./assets/html-pages/page-043.html",
        "label": "PDF 第 43 页"
      },
      {
        "number": 44,
        "html": "./assets/html-pages/page-044.html",
        "label": "PDF 第 44 页"
      }
    ],
    "searchText": "3.11 创建对接网关 接口地址/external/server/CreateGatewayMapping\n请求格式\n参数名称 必须 类型 描述信息\nname M String 对接网关名称\npassword O String 对接网关注册密码\nlockType O Integer 锁定类型\n0:无锁定\n3:全部锁定\ncallLevel O Integer 权限类型\n1:网内通话\n2:本地市话\n4:国内长途\n5:国际长途\ncapacity O Integer 线路上限\npriority O Integer 优先级\ngatewayGroups O LongString 所属网关群组（逗号分隔多个群组\n名称）\nroutingGatewayGroupsAll\now\nO Boolean true:允许使用落地群组\nfalse:禁止使用落地群组\nroutingGatewayGroups O LongString 限制的落地网关群组名称，空串表\n示所有\nregisterType O Integer 注册类型\n0:静态\n1:动态\n3:IMS 边缘设备\nremoteIps O LongString 对接网关 IP 地址列表 （逗号分隔多\n个 IP 地址）\ncallerE164CheckEnable O Boolean true:检查主叫号码规范性\nfalse:不检查主叫号码规范性\ncallerE164CheckCity O Boolean true:允许主叫号码为城市号码\nfalse:不允许主叫号码为城市号码\ncallerE164CheckMobile O Boolean true:允许主叫号码为移动号码\nfalse:不允许主叫号码为移动号码\n参数名称 必须 类型 描述信息\ncallerE164CheckOther O Boolean true:允许主叫号码为非城市号码与\n非移动号码\nfalse:不允许主叫号码为非城市号码\n与非移动号码\ncalleeE164CheckEnable O Boolean true:检查被叫号码规范性\nfalse:不检查被叫号码规范性\ncalleeE164CheckCity O Boolean true:允许被叫号码为城市号码\nfalse:不允许被叫号码为城市号码\ncalleeE164CheckMobile O Boolean true:允许被叫号码为移动号码\nfalse:不允许被叫号码为移动号码\ncalleeE164CheckOther O Boolean true:允许被叫号码为非城市号码与\n非移动号码\nfalse:不允许被叫号码为非城市号码\n与非移动号码\ncustomerPassword O String WEB 查询密码\nrtpForwardType O Integer 媒体转发类型\n0:自动\n1:开启\n2:关闭\n3:必须开启\nmediaCheckDirection O Integer 媒体中断检测（仅在通话进行了媒\n体转发时有效）\n0:不检测\n1:检测是否有媒体报文传输给远端\n2:检测是否收到来自远端的媒体报\n文\n3:检测远端与本地有双向的媒体报\n文\ncalleeE164Restrict O Integer 被叫号码限制\n0:不限制\n1:限制被叫号码必须是平台存在 的\n话机号码\n2:限制被叫号码必须不是平台存在\n的话机号码\n参数名称 必须 类型 描述信息\nmaxCallDurationLower O Integer 大于 0:最长通话时间下限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationUpper 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationUpper 保持一致）\nmaxCallDurationUpper O Integer 大于 0:最长通话时间上限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationLower 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationLower 保持一致）\nallowPhoneBilling O Boolean 当主叫号码与平台话机号码匹配，\n可使用话机号码的账户对呼叫进行\n计费\nallowBindedE164Billing O Boolean 当主叫号码与绑定号码匹配，可使\n用绑定号码的账户对呼叫进行计费\nenablePhoneSetting O Boolean 当主叫号码与平台话机号码匹配，\n则主叫使用平台话机的配置进行后\n续处理\ndenySameCityCodesAllow O Boolean true:允许 denySameCityCodes 设置\n的区号进行同城呼叫\nfalse:禁止 denySameCityCodes 设置\n的区号进行同城呼叫\ndenySameCityCodes O LongString 同城呼叫功能限制的城市区号列表\n（使用逗号分隔多个区号）\ncheckMobileAreaAllow O Boolean true:允许呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\nfalse:禁止呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\ncheckMobileArea O LongString 移动号码呼叫功能限制的城市区号\n列表（使用逗号分隔多个区号）\ncalloutCalleePrefixesAllow O Boolean true:允许 calloutCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\nfalse:禁止 calloutCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\ncalloutCalleePrefixes O LongString 被叫号码限制功能中被叫号码前缀\n列表（可使用逗号分隔）\ncalloutCallerPrefixesAllow O Boolean true:允许 calloutCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\nfalse:禁止 calloutCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\n参数名称 必须 类型 描述信息\ncalloutCallerPrefixes O LongString 主叫号码限制功能中主叫号码前缀\n列表（可使用逗号分隔）\nrewriteRulesOutCallee O LongString 被叫拨号规则\nrewriteRulesOutCaller O LongString 主叫拨号规则\nrewriteRulesInMobileArea\nAllow\nO Boolean true:开启 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nfalse:关闭 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nrewriteRulesInMobileArea O LongString 移动号码需添加区号的地区（可使\n用逗号分隔）\ntimeoutCallProceeding O Integer 呼叫未振铃或接通允许的最长持续\n时长（单位:秒）\n-1:使用系统参数设置值\n0:无限制\nsipResponseAddressMetho\nO Integer SIP Response 信令的地址\n0:回应至原始请求的地址\n1:回应至原始请求的 IP，但端口使\n用 Via 头部中标识的端口\n2:回应至 Via 头部中标识的地址\nsipRequestAddressMethod O Integer SIP Request 信令的地址\n0:请求至原始请求的地址\n1:请求至原始请求的 IP，但端口使\n用 Contact 头部中标识的端口\n2:请求至 Contact 头部中标识的地址\ndtmfSendMethodH323 O Integer H323 协议，软交换发送 DTMF 方\n式\n0:自动\n10:RFC2833\n20:H.245 alphanumeric\n30:H.245 signal\n40:Q.931 keypad\n60:关闭\n参数名称 必须 类型 描述信息\ndtmfSendMethodSIP O Integer SIP 协议:软交换发送主叫 DTMF 方\n式\n0:自动\n10:RFC2833\n50:SIP Info\n60:关闭\ndtmfReceiveMethod O Integer 软交换接收主叫 DTMF 方式\n0:所有\n10:RFC2833\n20:信令\n30:关闭\ndtmfSendPayloadTypeH32\nO Integer Dtmf 为 RFC2833 在 H323 协议时使\n用的 Payload Type\ndtmfSendPayloadTypeSIP O Integer Dtmf 为 RFC2833 在 SIP 协议时使用\n的 Payload Type\ndtmfReceivePayloadType O Integer Dtmf 为 RFC2833 软交换接收 Dtmf\n信号使用的 Payload Type\nq931ProgressIndicator O Integer H323 协议中 Q931ProgressIndicator\n的填写方式\n-1:自动\n0:关闭\n1:ProgressNotEndToEndISDN\n2:ProgressDestinationNonISDN\n3:ProgressOriginNotISDN\n4:ProgressReturnedToISDN\n5:ProgressServiceChange\n8:ProgressInbandInformationAvailabl\ne\naccount O String 对接网关的计费账户号码\ncallFailedQ931CauseValue O String 将失败 的终止原因转换为 设定的\nH323 终止原因，格式为<原始终止\n原因>:<目标终止原因>\n原始终止原因 0:其它\n目标终止原因 0:不替换\n大于 0:请参考 H323/SIP 协议通话中\n断定义规范\n参数名称 必须 类型 描述信息\ncallFailedSipCode O String 将失败的终止原因转换为设定的\nSIP 终止原因，格式为<原始终止原\n因>:<目标终止原因>\n原始终止原因 0:其它\n目标终止原因 0:不替换\n大于 0:请参考 H323/SIP 协议通话中\n断定义规范\nsipRemoteRingSignal O Integer SIP 远端回铃信令\n0:自动\n1:183+SDP\n2:180+SDP\nsipCalleeE164Domain O Integer SIP 被叫号码取得方式\n0:从信令头部 To 中取得\n1:从信令头部 Invite 中取得\n2:从信令头部 Diversion 中取得\nsipCallerE164Domain O Integer SIP 主叫号码取得方式\n0:从信令头部 From 中取得\n1:从信令头部 RemotePartId 中取得\n2:从信令头部 Display 中取得\n3:从信令头部 P-Asserted-Identity 中\n取得\n4:从信令头部 P-Preferred-Identity 中\n取得\nh323CalleeE164Domain O Integer H323 被叫号码取得方式\n0:从信令 CalledPartyNumber 中取得\n1:从信令 DestinationAddress 中取得\nh323CallerE164Domain O Integer H323 主叫号码取得方式\n0:从信令 CallingPartyNumber 中取\n得\n1:从信令 SourceAddress 中取得\n2:从信令 Display 中取得\nmemo O String 备注信息\nsipAuthenticationMethod O Integer SIP 呼叫认证方式\n0:根据 IP 地址认证\n1:根据 IP 地址与端口共同认证\nh323FastStart O Boolean true:启用 H323 的 fast start 功能\nfalse:关闭 H323 的 fast start 功能\n参数名称 必须 类型 描述信息\nh323H245Tunneling O Boolean true:启用 H323 的 H245 tunneling 功\n能\nfalse:关闭 H323 的 H245 tunneling\n功能\nh323H245InSetup O Boolean true:在 H323 的 Setup 信令中包含\nH245 信令\nfalse:在 H323 的 Setup 信令中不包含\nH245 信令\nh323AutoCallProceeding O Boolean true:H323 协议收到呼叫请求后立即\n回应 CallProceeding\nfalse:H323 协议收到呼叫后不立即\n回应 CallProceeding\nh323CallProceedingFromS\nIPTrying\nO Boolean 主叫为 H323 协议被叫为 SIP 协议\n时，被叫接收 Trying 信令对应的主\n叫信令处理方式\ntrue:转换为 CallProceeding 回应主\n叫\nfalse:不进行信令转换\nh323AlertingFromSIP183S\ndp\nO Boolean 主叫为 H323 协议被叫为 SIP 协议\n时， 被叫接收183+SDP 回应时对应\n的主叫处理方式\ntrue:转换为 Alerting 回应主叫\nfalse:转换为 CallProceeding 回应主\n叫\nh323T38 O Boolean true:H323 协议时支持 T38 信令\nfalse:H323 协议时忽略 T38 信令\nsipTimer O Boolean true:支持 SIP Timer 协议 （RFC4028）\nfalse:禁止 SIP Timer 协议\nsip100Rel O Boolean true:支持 SIP 100rel 协议\nfalse:禁止 SIP 100rel 协议\nsipT38 O Boolean true:支持 SIP T38 协议\nfalse:禁止 SIP T38 协议\nsipPrivacySupport O Boolean true:识别 Privacy\nfalse:忽略 Privacy\ngroupE164Change O Boolean true:启用号码变换功能\nfalse:关闭号码变换功能\n参数名称 必须 类型 描述信息\ncallerAllowLength O Integer 主叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncalleeAllowLength O Integer 被叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncallerLimitE164GroupsAll\now\nO Boolean true:允许 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\nfalse:禁止 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\ncallerLimitE164Groups O String 主叫号码组列表 （可使用逗号分隔）\ncalleeLimitE164GroupsAll\now\nO Boolean true:允许 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\nfalse:禁止 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\ncalleeLimitE164Groups O String 被叫号码组列表 （可使用逗号分隔）\nminProfitPercentEnable O Boolean 是否开启最低利润率限制\nminProfitPercent O Integer 最低利润率限制若设置为 10 表示\n利润率为 10%\n取值范围-10000 至 10000\nmaxSecondRatesEnable O Boolean 最高秒费率限制\ntrue:开启\nfalse 关闭\nmaxSecondRates O Double 最高秒费率值（若分钟费率为 0.6，\n此值应该设置为 0.01）\nfirstRoutePolicy O Integer 第一路由策略:\n0:无\n1:接通率\n2:最小秒费率\nsecondRoutePolicy O Integer 第二路由策略:\n0:无\n1:接通率\n2:最小秒费率\n参数名称 必须 类型 描述信息\nh323G729SendMode O Integer H323 G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729SendMode O Integer SIP G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729Annexb O Integer G729 annexb 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nsipG723Annexa O Integer G723 annexa 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nh323CodecAssign O Boolean true:限制 H323 音频 /视频编码为\nh323Codecs 设定值\nfalse:软交换自动协商\nh323Codecs O Vector<String> H323 音频/视频列表\nsipCodecAssign O Boolean true: 限制 SIP 音频 / 视 频 编 码为\nSIPCodecs 设定值\nfalse:软交换自动协商\nsipCodecs O Vector<String> SIP 音频/视频列表\naudioCodecTranscodingEn\nable\nO Boolean true:允许使用编码转换\nfalse:不允许使用编码转换\n参数名称 必须 类型 描述信息\nrtpIncludeDtmfInband O Boolean true:媒体包含带内(inband)DTMF\nfalse: 媒 体 不 包 含 带 内\n(inband)DTMF\nrtpNeedDtmfInband O Boolean true:需使用带内(inband)DTMF 发送\nfalse: 不 额 外 使 用 带 内\n(inband)DTMF 发送\nforwardSignalRewriteE164\nGroupEnable\nO Boolean true:开启呼叫前转信令拨号规则\nfalse:关闭呼叫前转信令拨号规则\nforwardSignalRewriteE164\nGroup\nO String 呼叫前转信令改使用的号码群组名\n称\nsoftswitchName O String 软交换名称\nlrnEnable O Boolean LRN 查询\ntrue:启用\nfalse:禁用\nlrnEatPrefixLength O Integer LRN 查询时忽略被叫号码前缀的长\n度\nlrnFailureAction O Integer 查询失败后的行为\n0:拒绝此次呼叫\n1:使用原有号码继续后续处理\nlrnInterstateBillingPrefix O String LRN 查询后非同地区计费前缀\nlrnUndeterminedBillingPre\nfix\nO String LRN 查询后有一个或两个号码无法\n获知其地区时的计费前缀\nlanguage O String 无法接通提示所使用的语言\nmediaRecord O Boolean 录音\ntrue:开启\nfalse:关闭\ndynamicBlackListInStanda\nlone\nO Boolean 独立模式下启用动态黑名单\ntrue:开启\nfalse:关闭\ncalculateRouteQuality O Integer 实时计算路由质量\n0：默认\n1：开启\n2：关闭\nproportionCalleePrefixs O ProportionCalleePrefix[] 按比例被叫添加路由前缀\nProportionCalleePrefix 格式\n参数名称 必须 类型 描述信息\nproportion M int 比例值\naddPrefix M String 添加前缀\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.12",
    "title": "修改对接网关",
    "slug": "s-3-12",
    "level": 2,
    "sourcePage": 45,
    "endPage": 54,
    "endpoint": "/external/server/ModifyGatewayMapping",
    "pages": [
      {
        "number": 45,
        "html": "./assets/html-pages/page-045.html",
        "label": "PDF 第 45 页"
      },
      {
        "number": 46,
        "html": "./assets/html-pages/page-046.html",
        "label": "PDF 第 46 页"
      },
      {
        "number": 47,
        "html": "./assets/html-pages/page-047.html",
        "label": "PDF 第 47 页"
      },
      {
        "number": 48,
        "html": "./assets/html-pages/page-048.html",
        "label": "PDF 第 48 页"
      },
      {
        "number": 49,
        "html": "./assets/html-pages/page-049.html",
        "label": "PDF 第 49 页"
      },
      {
        "number": 50,
        "html": "./assets/html-pages/page-050.html",
        "label": "PDF 第 50 页"
      },
      {
        "number": 51,
        "html": "./assets/html-pages/page-051.html",
        "label": "PDF 第 51 页"
      },
      {
        "number": 52,
        "html": "./assets/html-pages/page-052.html",
        "label": "PDF 第 52 页"
      },
      {
        "number": 53,
        "html": "./assets/html-pages/page-053.html",
        "label": "PDF 第 53 页"
      },
      {
        "number": 54,
        "html": "./assets/html-pages/page-054.html",
        "label": "PDF 第 54 页"
      }
    ],
    "searchText": "3.12 修改对接网关 接口地址/external/server/ModifyGatewayMapping\n请求格式\n参数名称 必须 类型 描述信息\nname M String 对接网关名称\npassword O String 对接网关注册密码\nlockType O Integer 锁定类型\n0:无锁定\n3:全部锁定\ncallLevel O Integer 权限类型\n1:网内通话\n2:本地市话\n4:国内长途\n5:国际长途\ncapacity O Integer 线路上限\npriority O Integer 优先级\ngatewayGroups O LongString 所属网关群组（逗号分隔多个群组\n名称）\nroutingGatewayGroupsAll\now\nO Boolean true:允许使用落地群组\nfalse:禁止使用落地群组\nroutingGatewayGroups O LongString 限制的落地网关群组名称，空串表\n示所有\nregisterType O Integer 注册类型\n0:静态\n1:动态\n3:IMS 边缘设备\nremoteIps O LongString 对接网关 IP 地址列表 （逗号分隔多\n个 IP 地址）\ncallerE164CheckEnable O Boolean true:检查主叫号码规范性\nfalse:不检查主叫号码规范性\ncallerE164CheckCity O Boolean true:允许主叫号码为城市号码\nfalse:不允许主叫号码为城市号码\ncallerE164CheckMobile O Boolean true:允许主叫号码为移动号码\nfalse:不允许主叫号码为移动号码\n参数名称 必须 类型 描述信息\ncallerE164CheckOther O Boolean true:允许主叫号码为非城市号码与\n非移动号码\nfalse:不允许主叫号码为非城市号码\n与非移动号码\ncalleeE164CheckEnable O Boolean true:检查被叫号码规范性\nfalse:不检查主叫号码规范性\ncalleeE164CheckCity O Boolean true:允许被叫号码为城市号码\nfalse:不允许被叫号码为城市号码\ncalleeE164CheckMobile O Boolean true:允许被叫号码为移动号码\nfalse:不允许被叫号码为移动号码\ncalleeE164CheckOther O Boolean true:允许被叫号码为非城市号码与\n非移动号码\nfalse:不允许被叫号码为非城市号码\n与非移动号码\ncustomerPassword O String WEB 查询密码\nrtpForwardType O Integer 媒体转发类型\n0:自动\n1:开启\n2:关闭\n3:必须开启\nmediaCheckDirection O Integer 媒体中断检测（仅在通话进行了媒\n体转发时有效）\n0:不检测\n1:检测是否有媒体报文传输给远端\n2:检测是否收到来自远端的媒体报\n文\n3:检测远端与本地有双向的媒体报\n文\ncalleeE164Restrict O Integer 被叫号码限制\n0:不限制\n1:限制被叫号码必须是平台存在的\n话机号码\n2:限制被叫号码必须不是平台存在\n的话机号码\n参数名称 必须 类型 描述信息\nmaxCallDurationLower O Integer 大于 0:最长通话时间下限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationUpper 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationUpper 保持一致）\nmaxCallDurationUpper O Integer 大于 0:最长通话时间上限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationLower 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationLower 保持一致）\nallowPhoneBilling O Boolean 当主叫号码与平台话机号码匹配，\n可使用话机号码的账户对呼叫进行\n计费\nallowBindedE164Billing O Boolean 当主叫号码与绑定号码匹配，可使\n用绑定号码的账户对呼叫进行计费\nenablePhoneSetting O Boolean 当主叫号码与平台话机号码匹配，\n则主叫使用平台话机的配置进行后\n续处理\ndenySameCityCodesAllow O Boolean true:允许 denySameCityCodes 设置\n的区号进行同城呼叫\nfalse:禁止 denySameCityCodes 设置\n的区号进行同城呼叫\ndenySameCityCodes O LongString 同城呼叫功能限制的城市区号列表\n（使用逗号分隔多个区号）\ncheckMobileAreaAllow O Boolean true:允许呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\nfalse:禁止呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\ncheckMobileArea O LongString 移动号码呼叫功能限制的城市区号\n列表（使用逗号分隔多个区号）\ncalloutCalleePrefixesAllow O Boolean true:允许 calloutCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\nfalse:禁止 calloutCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\ncalloutCalleePrefixes O LongString 被叫号码限制功能中被叫号码前缀\n列表（可使用逗号分隔）\ncalloutCallerPrefixesAllow O Boolean true:允许 calloutCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\nfalse:禁止 calloutCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\n参数名称 必须 类型 描述信息\ncalloutCallerPrefixes O LongString 主叫号码限制功能中主叫号码 前缀\n列表（可使用逗号分隔）\nrewriteRulesOutCallee O LongString 被叫拨号规则\nrewriteRulesOutCaller O LongString 主叫拨号规则\nrewriteRulesInMobileArea\nAllow\nO Boolean true:开启 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nfalse:关闭 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nrewriteRulesInMobileArea O LongString 移动号码需添加区号的地区（可使\n用逗号分隔）\ntimeoutCallProceeding O Integer 呼叫未振铃或接通允许的最长持续\n时长（单位:秒）\n-1:使用系统参数设置值\n0:无限制\nsipResponseAddressMetho\nO Integer SIP Response 信令的地址\n0:回应至原始请求的地址\n1:回应至原始请求的 IP，但端口使\n用 Via 头部中标识的端口\n2:回应至 Via 头部中标识的地址\nsipRequestAddressMethod O Integer SIP Request 信令的地址\n0:请求至原始请求的地址\n1:请求至原始请求的 IP，但端口使\n用 Contact 头部中标识的端口\n2:请求至 Contact 头部中标识的地址\ndtmfSendMethodH323 O Integer H323 协议，软交换发送 DTMF 方\n式\n0:自动\n10:RFC2833\n20:H.245 alphanumeric\n30:H.245 signal\n40:Q.931 keypad\n60:关闭\ndtmfSendMethodSIP O Integer SIP 协议，软交换发送 DTMF 方式\n0:自动\n10:RFC2833\n50:SIP Info\n60:关闭\n参数名称 必须 类型 描述信息\ndtmfReceiveMethod O Integer 软交换接收主叫 DTMF 方式\n0:所有\n10:RFC2833\n20:信令\n30:关闭\ndtmfSendPayloadTypeH32\nO Integer Dtmf 为 RFC2833 在 H323 协议时使\n用的 Payload Type\ndtmfSendPayloadTypeSIP O Integer Dtmf 为 RFC2833 在 SIP 协议时使用\n的 Payload Type\ndtmfReceivePayloadType O Integer Dtmf 为 RFC2833 软交换接收 Dtmf\n信号使用的 Payload Type\nq931ProgressIndicator O Integer H323 协议中 Q931ProgressIndicator\n的填写方式\n-1:自动\n0:关闭\n1:ProgressNotEndToEndISDN\n2:ProgressDestinationNonISDN\n3:ProgressOriginNotISDN\n4:ProgressReturnedToISDN\n5:ProgressServiceChange\n8:ProgressInbandInformationAvailabl\ne\naccount O String 对接网关的计费账户号码\ncallFailedQ931CauseValue O String 将失败的终止原因转换为设定的\nH323 终止原因，格式为<原始终止\n原因>:<目标终止原因>\n原始终止原因 0:其它\n目标终止原因 0:不替换\n大于 0:请参考 H323/SIP 协议通话中\n断定义规范\ncallFailedSipCode O String 将失 败的 终止原因转换为设定的\nSIP 终止原因，格式为<原始终止原\n因>:<目标终止原因>\n原始终止原因 0:其它\n目标终止原因 0:不替换\n大于 0:请参考 H323/SIP 协议通话中\n断定义规范\n参数名称 必须 类型 描述信息\nsipRemoteRingSignal O Integer SIP 远端回铃信令\n0:自动\n1:183+SDP\n2:180+SDP\nsipCalleeE164Domain O Integer SIP 被叫号码取得方式\n0:从信令头部 To 中取得\n1:从信令头部 Invite 中取得\n2:从信令头部 Diversion 中取得\nsipCallerE164Domain O Integer SIP 主叫号码取得方式\n0:从信令头部 From 中取得\n1:从信令头部 RemotePartId 中取得\n2:从信令头部 Display 中取得\n3:从信令头部 P-Asserted-Identity 中\n取得\n4:从信令头部 P-Preferred-Identity 中\n取得\nh323CalleeE164Domain O Integer H323 被叫号码取得方式\n0:从信令 CalledPartyNumber 中取得\n1:从信令 DestinationAddress 中取得\nh323CallerE164Domain O Integer H323 主叫号码取得方式\n0:从信令 CallingPartyNumber 中取\n得\n1:从信令 SourceAddress 中取得\n2:从信令 Display 中取得\nmemo O String 备注信息\nsipAuthenticationMethod O Integer SIP 呼叫认证方式\n0:根据 IP 地址认证\n1:根据 IP 地址与端口共同认证\nh323FastStart O Boolean true:启用 H323 的 fast start 功能\nfalse:关闭 H323 的 fast start 功能\nh323H245Tunneling O Boolean true:启用 H323 的 H245 tunneling 功\n能\nfalse:关闭 H323 的 H245 tunneling\n功能\nh323H245InSetup O Boolean true:在 H323 的 Setup 信令中包含\nH245 信令\nfalse:在 H323 的 Setup 信令中不包含\nH245 信令\n参数名称 必须 类型 描述信息\nh323AutoCallProceeding O Boolean true:H323 协议收到呼叫请求后立即\n回应 CallProceeding\nfalse:H323 协议收到呼叫后不立即\n回应 CallProceeding\nh323CallProceedingFromS\nIPTrying\nO Boolean 主叫为 H323 协议被叫为 SIP 协议\n时，被叫接收 Trying 信令对应的主\n叫信令处理方式\ntrue:转换为 CallProceeding 回应主\n叫\nfalse:不进行信令转换\nh323AlertingFromSIP183S\ndp\nO Boolean 主叫为 H323 协议被叫为 SIP 协议\n时， 被叫接收183+SDP 回应时对应\n的主叫处理方式\ntrue:转换为 Alerting 回应主叫\nfalse:转换为 CallProceeding 回应主\n叫\nh323T38 O Boolean true:H323 协议时支持 T38 信令\nfalse:H323 协议时忽略 T38 信令\nsipTimer O Boolean true:支持 SIP Timer 协议 （RFC4028）\nfalse:禁止 SIP Timer 协议\nsip100Rel O Boolean true:支持 SIP 100rel 协议\nfalse:禁止 SIP 100rel 协议\nsipT38 O Boolean true:支持 SIP T38 协议\nfalse:禁止 SIP T38 协议\nsipPrivacySupport O Boolean true:识别 Privacy\nfalse:忽略 Privacy\ngroupE164Change O Boolean true:启用号码变换功能\nfalse:关闭号码变换功能\ncallerAllowLength O Integer 主叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncalleeAllowLength O Integer 被叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\n参数名称 必须 类型 描述信息\ncallerLimitE164GroupsAll\now\nO Boolean true:允许 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\nfalse:禁止 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\ncallerLimitE164Groups O String 主叫号码组列表 （可使用逗号分隔）\ncalleeLimitE164GroupsAll\now\nO Boolean true:允许 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\nfalse:禁止 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\ncalleeLimitE164Groups O String 被叫号码组列表 （可使用逗号分隔）\nminProfitPercentEnable O Boolean 是否开启最低利润率限制\nminProfitPercent O Integer 最低利润率限制若设置为 10 表示\n利润率为 10%\n取值范围-10000 至 10000\nmaxSecondRatesEnable O Boolean 最高秒费率限制\ntrue:开启\nfalse 关闭\nmaxSecondRates O Double 最高秒费率值（若分钟费率为 0.6，\n此值应该设置为 0.01）\nfirstRoutePolicy O Integer 第一路由策略:\n0:无\n1:接通率\n2:最小秒费率\nsecondRoutePolicy O Integer 第二路由策略:\n0:无\n1:接通率\n2:最小秒费率\nh323G729SendMode O Integer H323 G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\n参数名称 必须 类型 描述信息\nsipG729SendMode O Integer SIP G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729Annexb O Integer G729 annexb 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nsipG723Annexa O Integer G723 annexa 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nh323CodecAssign O Boolean true:限制 H323 音频 /视频编码为\nh323Codecs 设定值\nfalse:软交换自动协商\nh323Codecs O Vector<String> H323 音频/视频列表\nsipCodecAssign O Boolean true: 限制 SIP 音频 / 视 频 编 码 为\nSIPCodecs 设定值\nfalse:软交换自动协商\nsipCodecs O Vector<String> SIP 音频/视频列表\naudioCodecTranscodingEn\nable\nO Boolean true:允许使用编码转换\nfalse:不允许使用编码转换\nrtpIncludeDtmfInband O Boolean true:媒体包含带内(inband)DTMF\nfalse: 媒 体 不 包 含 带 内\n(inband)DTMF\nrtpNeedDtmfInband O Boolean true:需使用带内(inband)DTMF 发送\nfalse: 不 额 外 使 用 带 内\n(inband)DTMF 发送\nforwardSignalRewriteE164\nGroupEnable\nO Boolean true:开启呼叫前转信令拨号规则\nfalse:关闭呼叫前转信令拨号规则\n参数名称 必须 类型 描述信息\nforwardSignalRewriteE164\nGroup\nO String 呼叫前转信令改使用的号码群组名\n称\nlrnEnable O Boolean LRN 查询\ntrue:启用\nfalse:禁用\nlrnEatPrefixLength O Integer LRN 查询时忽略被叫号码前缀的长\n度\nlrnFailureAction O Integer 查询失败后的行为\n0:拒绝此次呼叫\n1:使用原有号码继续后续处理\nlrnInterstateBillingPrefix O String LRN 查询后非同地区计费前缀\nlrnUndeterminedBillingPre\nfix\nO String LRN 查询后有一个或两个号码无法\n获知其地区时的计费前缀\nlanguage O String 无法接通提示所使用的语言\nmediaRecord O Boolean 录音\ntrue:开启\nfalse:关闭\ndynamicBlackListInStanda\nlone\nO Boolean 独立模式下启用动态黑名单\ntrue:开启\nfalse:关闭\ncalculateRouteQuality O Integer 实时计算路由质量\n0：默认\n1：开启\n2：关闭\nproportionCalleePrefixs O ProportionCalleePrefix[] 按比例被叫添加路由前缀\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.13",
    "title": "查询对接网关",
    "slug": "s-3-13",
    "level": 2,
    "sourcePage": 55,
    "endPage": 65,
    "endpoint": "/external/server/GetGatewayMapping",
    "pages": [
      {
        "number": 55,
        "html": "./assets/html-pages/page-055.html",
        "label": "PDF 第 55 页"
      },
      {
        "number": 56,
        "html": "./assets/html-pages/page-056.html",
        "label": "PDF 第 56 页"
      },
      {
        "number": 57,
        "html": "./assets/html-pages/page-057.html",
        "label": "PDF 第 57 页"
      },
      {
        "number": 58,
        "html": "./assets/html-pages/page-058.html",
        "label": "PDF 第 58 页"
      },
      {
        "number": 59,
        "html": "./assets/html-pages/page-059.html",
        "label": "PDF 第 59 页"
      },
      {
        "number": 60,
        "html": "./assets/html-pages/page-060.html",
        "label": "PDF 第 60 页"
      },
      {
        "number": 61,
        "html": "./assets/html-pages/page-061.html",
        "label": "PDF 第 61 页"
      },
      {
        "number": 62,
        "html": "./assets/html-pages/page-062.html",
        "label": "PDF 第 62 页"
      },
      {
        "number": 63,
        "html": "./assets/html-pages/page-063.html",
        "label": "PDF 第 63 页"
      },
      {
        "number": 64,
        "html": "./assets/html-pages/page-064.html",
        "label": "PDF 第 64 页"
      },
      {
        "number": 65,
        "html": "./assets/html-pages/page-065.html",
        "label": "PDF 第 65 页"
      }
    ],
    "searchText": "3.13 查询对接网关 接口地址/external/server/GetGatewayMapping\n请求格式\n参数名称 必须 类型 描述信息\nnames M String [] 网关名称\n不设置表示获取所有对接网关信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoGatewayMappings O InfoGatewayMapping [] 话机信息\n类型 InfoGatewayMapping 格式\n参数名称 必须 类型 描述信息\nname M String 对接网关名称\nlockType M int 锁定类型\n0:无锁定\n1:锁定呼出\n2:锁定呼入\n3:全部锁定\ncallLevel M int 权限类型\n1:网内通话\n2:本地市话\n4:国内长途\n5:国际长途\ncapacity M int 线路上限\npriority M int 优先级\ngatewayGroups M LongString 所属网关群组（逗号分隔多个群组\n名称）\nroutingGatewayGroupsAll\now\nM boolean true:允许使用落地群组\nfalse:禁止使用落地群组\nroutingGatewayGroups M LongString 限制的落地网关群组名称，空串表\n示所有\n参数名称 必须 类型 描述信息\nregisterType M int 注册类型\n0:静态\n1:动态\n3:IMS 边缘设备\nremoteIps M LongString 对接网关 IP 地址列表 （逗号分隔多\n个 IP 地址）\ncallerE164CheckEnable M boolean true:检查主叫号码规范性\nfalse:不检查主叫号码规范性\ncallerE164CheckCity M boolean true:允许主叫号码为城市号码\nfalse:不允许主叫号码为城市号码\ncallerE164CheckMobile M boolean true:允许主叫号码为移动号码\nfalse:不允许主叫号码为移动号码\ncallerE164CheckOther M boolean true:允许主叫号码为非城市号码与\n非移动号码\nfalse:不允许主叫号码为非城市号码\n与非移动号码\ncalleeE164CheckEnable M boolean true:检查主叫号码规范性\nfalse:不检查主叫号码规范性\ncalleeE164CheckCity M boolean true:允许主叫号码为城市号码\nfalse:不允许主叫号码为城市号码\ncalleeE164CheckMobile M boolean true:允许主叫号码为移动号码\nfalse:不允许主叫号码为移动号码\ncalleeE164CheckOther M boolean true:允许主叫号码为非城市号码与\n非移动号码\nfalse:不允许主叫号码为非城市号码\n与非移动号码\nrtpForwardType M int 媒体转发类型\n0:自动\n1:开启\n2:关闭\n3:必须开启\n参数名称 必须 类型 描述信息\nmediaCheckDirection M int 媒体中断检测（仅在通话进行了媒\n体转发时有效）\n0:不检测\n1:检测是否有媒体报文传输给远端\n2:检测是否收到来自远端的媒体报\n文\n3:检测远端与本地有双向的媒体报\n文\ncalleeE164Restrict M int 被叫号码限制\n0:不限制\n1:限制被叫号码必须是平台存在的\n话机号码\n2:限制被叫号码必须不是平台存在\n的话机号码\nmaxCallDurationLower M int 大于 0:最长通话时间下限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationUpper 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationUpper 保持一致）\nmaxCallDurationUpper M int 大于 0:最长通话时间上限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationLower 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationLower 保持一致）\nallowPhoneBilling M boolean 当主叫号码与平台话机号码匹配，\n可使用话机号码的账户对呼叫进行\n计费\nallowBindedE164Billing M boolean 当主叫号码与绑定号码匹配，可使\n用绑定号码的账户对呼叫进行计费\nenablePhoneSetting M boolean 当主叫号码与平台话机号码匹配，\n则主叫使用平台话机的配置进行后\n续处理\ndenySameCityCodesAllow M boolean true:允许 denySameCityCodes 设置\n的区号进行同城呼叫\nfalse:禁止 denySameCityCodes 设置\n的区号进行同城呼叫\ndenySameCityCodes M LongString 同城呼叫功能限制的城市区号列表\n（使用逗号分隔多个区号）\n参数名称 必须 类型 描述信息\ncheckMobileAreaAllow M boolean true:允许呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\nfalse:禁止呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\ncheckMobileArea M LongString 移动号码呼叫功能限制的城市区 号\n列表（使用逗号分隔多个区号）\ncalloutCalleePrefixesAllow M boolean true:允许 calloutCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\nfalse:禁止 calloutCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\ncalloutCalleePrefixes M LongString 被叫号码限制功能中被叫号码前缀\n列表（可使用逗号分隔）\ncalloutCallerPrefixesAllow M boolean true:允许 calloutCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\nfalse:禁止 calloutCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\ncalloutCallerPrefixes M LongString 主叫号码限制功能中主 叫号码前缀\n列表（可使用逗号分隔）\nrewriteRulesOutCallee M LongString 被叫拨号规则\nrewriteRulesOutCaller M LongString 主叫拨号规则\nrewriteRulesInMobileArea\nAllow\nM boolean true:开启 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nfalse:关闭 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nrewriteRulesInMobileArea M LongString 移动号码需添加区号的地区（可使\n用逗号分隔）\ntimeoutCallProceeding M int 呼叫未振铃或接通允许的最长持续\n时长（单位:秒）\n-1:使用系统参数设置值\n0:无限制\nsipResponseAddressMetho\nM int SIP Response 信令的地址\n0:回应至原始请求的地址\n1:回应至原始请求的 IP，但端口使\n用 Via 头部中标识的端口\n2:回应至 Via 头部中标识的地址\n参数名称 必须 类型 描述信息\nsipRequestAddressMethod M int SIP Request 信令的地址\n0:请求至原始请求的地址\n1:请求至原始请求的 IP，但端口使\n用 Contact 头部中标识的端口\n2:请求至 Contact 头部中标识的地址\ndtmfSendMethodH323 M int H323 协议，软交换发送 DTMF 方\n式\n0:自动\n10:RFC2833\n20:H.245 alphanumeric\n30:H.245 signal\n40:Q.931 keypad\n60:关闭\ndtmfSendMethodSIP M int SIP 协议，软交换发送 DTMF 方式\n0:自动\n10:RFC2833\n50:SIP Info\n60:关闭\ndtmfReceiveMethod M int 软交换接收主叫 DTMF 方式\n0:所有\n10:RFC2833\n20:信令\n30:关闭\ndtmfSendPayloadTypeH32\nM int Dtmf 为 RFC2833 在 H323 协议时使\n用的 Payload Type\ndtmfSendPayloadTypeSIP M int Dtmf 为 RFC2833 在 SIP 协议时使用\n的 Payload Type\ndtmfReceivePayloadType M int Dtmf 为 RFC2833 软交换接收 Dtmf\n信号使用的 Payload Type\n参数名称 必须 类型 描述信息\nq931ProgressIndicator M int H323 协议中 Q931ProgressIndicator\n的填写方式\n-1:自动\n0:关闭\n1:ProgressNotEndToEndISDN\n2:ProgressDestinationNonISDN\n3:ProgressOriginNotISDN\n4:ProgressReturnedToISDN\n5:ProgressServiceChange\n8:ProgressInbandInformationAvailabl\ne\naccount M String 对接网关的计费账户号码\naccountName M String 对接网关的计费账户名称\npassword M String 对接网关注册密码\ncustomerPassword M String 对接网关 web 查询密码\ncallFailedQ931CauseValue M String 将失败的终止原因转换为设定的\nH323 终止原因，格式为<原始终止\n原因>:<目标终止原因>\n原始终止原因 0:其它\n目标终止原因 0:不替换\n大于 0:请参考 H323/SIP 协议通话中\n断定义规范\ncallFailedSipCode M String 将失败的终止原因转换为设定的\nSIP 终止原因，格式为<原始终止原\n因>:<目标终止原因>\n原始终止原因 0:其它\n目标终止原因 0:不替换\n大于 0:请参考 H323/SIP 协议通话中\n断定义规范\nsipRemoteRingSignal M int SIP 远端回铃信令\n0:自动\n1:183+SDP\n2:180+SDP\nsipCalleeE164Domain M int SIP 被叫号码取得方式\n0:从信令头部 To 中取得\n1:从信令头部 Invite 中取得\n2:从信令头部 Diversion 中取得\n参数名称 必须 类型 描述信息\nsipCallerE164Domain M int SIP 主叫号码取得方式\n0:从信令头部 From 中取得\n1:从信令头部 RemotePartId 中取得\n2:从信令头部 Display 中取得\n3:从信令头部 P-Asserted-Identity 中\n取得\n4:从信令头部 P-Preferred-Identity 中\n取得\nh323CalleeE164Domain M int H323 被叫号码取得方式\n0:从信令 CalledPartyNumber 中取得\n1:从信令 DestinationAddress 中取得\nh323CallerE164Domain M int H323 主叫号码取得方式\n0:从信令 CallingPartyNumber 中取\n得\n1:从信令 SourceAddress 中取得\n2:从信令 Display 中取得\nmemo M String 备注信息\nsipAuthenticationMethod M int SIP 呼叫认证方式\n0:根据 IP 地址认证\n1:根据 IP 地址与端口共同认证\nh323FastStart M boolean true:启用 H323 的 fast start 功能\nfalse:关闭 H323 的 fast start 功能\nh323H245Tunneling M boolean true:启用 H323 的 H245 tunneling 功\n能\nfalse:关闭 H323 的 H245 tunneling\n功能\nh323H245InSetup M boolean true:在 H323 的 Setup 信令中包含\nH245 信令\nfalse:在 H323 的 Setup 信令中不包含\nH245 信令\nh323AutoCallProceeding M boolean true:H323 协议收到呼叫请求后立即\n回应 CallProceeding\nfalse:H323 协议收到呼叫后不立即\n回应 CallProceeding\n参数名称 必须 类型 描述信息\nh323CallProceedingFromS\nIPTrying\nM boolean 主叫为 H323 协议被叫为 SIP 协议\n时，被叫接收 Trying 信令对应的主\n叫信令处理方式\ntrue:转换为 CallProceeding 回应主\n叫\nfalse:不进行信令转换\nh323AlertingFromSIP183S\ndp\nM boolean 主叫为 H323 协议被叫为 SIP 协议\n时， 被叫接收183+SDP 回应时对应\n的主叫处理方式\ntrue:转换为 Alerting 回应主叫\nfalse:转换为 CallProceeding 回应主\n叫\nh323T38 M boolean true:H323 协议时支持 T38 信令\nfalse:H323 协议时忽略 T38 信令\nsipTimer M boolean true:支持 SIP Timer 协议 （RFC4028）\nfalse:禁止 SIP Timer 协议\nsip100Rel M boolean true:支持 SIP 100rel 协议\nfalse:禁止 SIP 100rel 协议\nsipT38 M boolean true:支持 SIP T38 协议\nfalse:禁止 SIP T38 协议\nsipPrivacySupport O Boolean true:识别 Privacy\nfalse:忽略 Privacy\ngroupE164Change M boolean true:启用号码变换功能\nfalse:关闭号码变换功能\ncallerAllowLength M int 主叫号码允许的号码长度\ncalleeAllowLength M int 被叫号码允许的号码长度\ncallerLimitE164GroupsAll\now\nM boolean true:允许 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\nfalse:禁止 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\ncallerLimitE164Groups M String 主叫号码组列表 （可使用逗号分隔）\ncalleeLimitE164GroupsAll\now\nM boolean true:允许 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\nfalse:禁止 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\ncalleeLimitE164Groups M String 被叫号码组列表 （可使用逗号分隔）\nminProfitPercentEnable M boolean 是否开启最低利润率限制\n参数名称 必须 类型 描述信息\nminProfitPercent M int 最低利润率限制若设置为 10 表示\n利润率为 10%\n取值范围-10000 至 10000\nmaxSecondRatesEnable M boolean 最高秒费率限制\ntrue:开启\nfalse 关闭\nmaxSecondRates M double 最高秒费率值\nfirstRoutePolicy M int 第一路由策略:\n0:无\n1:接通率\n2:最小秒费率\nsecondRoutePolicy M int 第二路由策略:\n0:无\n1:接通率\n2:最小秒费率\nh323G729SendMode M int H323 G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729SendMode M int SIP G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729Annexb M int G729 annexb 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\n参数名称 必须 类型 描述信息\nsipG723Annexa M int G723 annexa 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nh323CodecAssign M boolean true:限制 H323 音频 /视频编码为\nh323Codecs 设定值\nfalse:软交换自动协商\nh323Codecs M Vector<String> H323 音频/视频列表\nsipCodecAssign M boolean true: 限制 SIP 音频 / 视 频 编 码 为\nSIPCodecs 设定值\nfalse:软交换自动协商\nsipCodecs M Vector<String> SIP 音频/视频列表\naudioCodecTranscodingEn\nable\nM boolean true:允许使用编码转换\nfalse:不允许使用编码转换\nrtpIncludeDtmfInband M boolean true:媒体包含带内(inband)DTMF\nfalse: 媒 体 不 包 含 带 内\n(inband)DTMF\nrtpNeedDtmfInband M boolean true:需使用带内(inband)DTMF 发送\nfalse: 不 额 外 使 用 带 内\n(inband)DTMF 发送\nsoftswitchName M String 软交换名称\n未设置:表示不属于任何软交换\n空串:表示属于所有软交换\nforwardSignalRewriteE164\nGroupEnable\nM boolean true:开启呼叫前转信令拨号规则\nfalse:关闭呼叫前转信令拨号规则\nforwardSignalRewriteE164\nGroup\nM String 呼叫前转信令改使用的号码群组名\n称\nlrnEnable M boolean LRN 查询\ntrue:启用\nfalse:禁用\nlrnEatPrefixLength M int LRN 查询时忽略被叫号码前缀的长\n度\nlrnFailureAction M int 查询失败后的行为\n0:拒绝此次呼叫\n1:使用原有号码继续后续处理\n参数名称 必须 类型 描述信息\nlrnInterstateBillingPrefix M String LRN 查询后非同地区计费前缀\nlrnUndeterminedBillingPre\nfix\nM String LRN 查询后有一个或两个号码无法\n获知其地区时的计费前缀\nlanguage M String 无法接通提示所使用的语言\nmediaRecord O Boolean 录音\ntrue:开启\nfalse:关闭\ndynamicBlackListInStanda\nlone\nO Boolean 独立模式下启用动态黑名单\ntrue:开启\nfalse:关闭\ncalculateRouteQuality O Integer 实时计算路由质量\n0：默认\n1：开启\n2：关闭\nproportionCalleePrefixs O ProportionCalleePrefix[] 按比例被叫添加路由前缀"
  },
  {
    "no": "3.14",
    "title": "删除对接网关",
    "slug": "s-3-14",
    "level": 2,
    "sourcePage": 66,
    "endPage": 66,
    "endpoint": "/external/server/DeleteGatewayMapping",
    "pages": [
      {
        "number": 66,
        "html": "./assets/html-pages/page-066.html",
        "label": "PDF 第 66 页"
      }
    ],
    "searchText": "3.14 删除对接网关 接口地址/external/server/DeleteGatewayMapping\n请求格式\n参数名称 必须 类型 描述信息\nname M String 对接网关名称\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.15",
    "title": "查询在线对接网关",
    "slug": "s-3-15",
    "level": 2,
    "sourcePage": 67,
    "endPage": 68,
    "endpoint": "/external/server/GetGatewayMappingOnline",
    "pages": [
      {
        "number": 67,
        "html": "./assets/html-pages/page-067.html",
        "label": "PDF 第 67 页"
      },
      {
        "number": 68,
        "html": "./assets/html-pages/page-068.html",
        "label": "PDF 第 68 页"
      }
    ],
    "searchText": "3.15 查询在线对接网关 接口地址/external/server/GetGatewayMappingOnline\n请求格式\n参数名称 必须 类型 描述信息\nnames O String [] 对接网关名称\n不设置:表示此过滤条件无效\nsoftswitchName O String 软交换名称\n不设置:表示此过滤条件无效，查询\n所有的软交换\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoGatewayMappingOnlin\nes\nO InfoGatewayMappingOnli\nne []\n套餐订单列表\n类型 InfoGatewayMappingOnline 格式\n参数名称 必须 类型 描述信息\nid M int 对接网关 ID\nname M String 对接网关名称\ncurrentCall M int 当前呼叫总数\ncapacity M int 呼叫线路上限\nasr M double 呼叫应答率\nacd M long 平均通话时长（单位:秒）\nremoteIps M String 远端地址（逗号分隔多个 IP）\nnatIp O String NA T内部地址，仅在网关与软交换\n间存在地址转换设备时有效\nlocalIp M String 注册本地地址\nregisterTime M long 注册时间（UTC 1970-01-01 至今的\n毫秒数）\n0:静态网关\n参数名称 必须 类型 描述信息\nupdateTime M long 上次更新时间（UTC 1970-01-01 至\n今的毫秒数）\n0:静态网关\nkeepTime M long 在线时间（单位:秒）\n0:静态网关\ncryptoType M int 加密类型\n0:未加密\n1:RC4\nsoftswitchName M String 软交换名称\nsoftswitchIp M String 软交换 IP"
  },
  {
    "no": "3.16",
    "title": "创建落地网关",
    "slug": "s-3-16",
    "level": 2,
    "sourcePage": 69,
    "endPage": 80,
    "endpoint": "/external/server/CreateGatewayRouting",
    "pages": [
      {
        "number": 69,
        "html": "./assets/html-pages/page-069.html",
        "label": "PDF 第 69 页"
      },
      {
        "number": 70,
        "html": "./assets/html-pages/page-070.html",
        "label": "PDF 第 70 页"
      },
      {
        "number": 71,
        "html": "./assets/html-pages/page-071.html",
        "label": "PDF 第 71 页"
      },
      {
        "number": 72,
        "html": "./assets/html-pages/page-072.html",
        "label": "PDF 第 72 页"
      },
      {
        "number": 73,
        "html": "./assets/html-pages/page-073.html",
        "label": "PDF 第 73 页"
      },
      {
        "number": 74,
        "html": "./assets/html-pages/page-074.html",
        "label": "PDF 第 74 页"
      },
      {
        "number": 75,
        "html": "./assets/html-pages/page-075.html",
        "label": "PDF 第 75 页"
      },
      {
        "number": 76,
        "html": "./assets/html-pages/page-076.html",
        "label": "PDF 第 76 页"
      },
      {
        "number": 77,
        "html": "./assets/html-pages/page-077.html",
        "label": "PDF 第 77 页"
      },
      {
        "number": 78,
        "html": "./assets/html-pages/page-078.html",
        "label": "PDF 第 78 页"
      },
      {
        "number": 79,
        "html": "./assets/html-pages/page-079.html",
        "label": "PDF 第 79 页"
      },
      {
        "number": 80,
        "html": "./assets/html-pages/page-080.html",
        "label": "PDF 第 80 页"
      }
    ],
    "searchText": "3.16 创建落地网关 接口地址/external/server/CreateGatewayRouting\n请求格式\n参数名称 必须 类型 描述信息\nname M String 落地网关名称\nprefix O String 落地网关前缀（可使用逗号分隔）\nprefixStyle O Integer 前缀匹配方式\n0:终结模式\n1:延续模式\npassword O String 落地网关注册密码\ncustomerPassword O String 落地网关 web 查询密码\ngatewayGroups O String 所属网关群组（逗号分隔多个群组\n名称）\ncapacity O Integer 线路上限\nlockType O Integer 锁定类型\n0:无锁定\n3:全部锁定\npriority O Integer 优先级\nregisterType O Integer 注册类型\n0:静态\n1:动态\n2:注册（向其他平台进行注册）\n3:IMS 边缘设备\nremoteIp O String 落地网关远端地址\nrtpForwardType O Integer 媒体转发类型\n0:自动\n1:开启\n2:关闭\n3:必须开启\nencrypt O Boolean true:加密\nfalse:不加密\nprotocol O Integer 信令协议\n0:H323\n1:SIP\n参数名称 必须 类型 描述信息\nsignalPort O Integer 信令端口\nlocalIp O String 本地地址\n空:表示由系统自行选择本地地址\nmediaCheckDirection O Integer 媒体中断检测（仅在通话进行了媒\n体转发时有效）\n0:不检测\n1:检测是否有媒体报文传输给远端\n2:检测是否收到来自远端的媒体报\n文\n3:检测远端与本地有双向的媒体报\n文\nmaxCallDurationLower O Integer 大于 0:最长通话时间下限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationUpper 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationUpper 保持一致）\nmaxCallDurationUpper O Integer 大于 0:最长通话时间上限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationLower 保持一致）\n0: 无 限 制 （ 需与\nmaxCallDurationLower 保持一致）\ncalleeE164Restrict O Integer 被叫号码限制\n0:不限制\n1:限制被叫号码必须是平台存在的\n话机号码\n2:限制被叫号码必须不是平台存在\n的话机号码\ncallerE164CheckEnable O Boolean true:检查主叫号码规范性\nfalse:不检查主叫号码规范性\ncallerE164CheckCity O Boolean true:允许主叫号码为城市号码\nfalse:不允许主叫号码为城市号码\ncallerE164CheckMobile O Boolean true:允许主叫号码为移动号码\nfalse:不允许主叫号码为移动号码\ncallerE164CheckOther O Boolean true:允许主叫号码为非城市号码与\n非移动号码\nfalse:不允许主叫号码为非城市号码\n与非移动号码\n参数名称 必须 类型 描述信息\ncalleeE164CheckEnable O Boolean true:检查被叫号码规范性\nfalse:不检查被叫号码规范性\ncalleeE164CheckCity O Boolean true:允许被号码为城市号码\nfalse:不允许被叫号码为城市号码\ncalleeE164CheckMobile O Boolean true:允许被叫号码为移动号码\nfalse:不允许被叫号码为移动号码\ncalleeE164CheckOther O Boolean true:允许被叫号码为非城市号码与\n非移动号码\nfalse:不允被主叫号码为非城市号码\n与非移动号码\ncallinCallerPrefixesAllow O Boolean true:允许 callinCallerPrefixes 设置的\n前缀列表作为主叫号码前缀\nfalse:禁止 callinCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\ncallinCallerPrefixes O LongString 主叫号码限制功能中主叫号码前缀\n列表（可使用逗号分隔）\ncallinCalleePrefixesAllow O Boolean true:允许 callinCalleePrefixes 设置的\n前缀列表作为被叫号码前缀\nfalse:禁止 callinCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\ncallinCalleePrefixes O LongString 被叫号码限制功能中被叫号码前缀\n列表（可使用逗号分隔）\ncallinForwardPrefixesAllo\nw\nO Boolean true:允许 callinForwardPrefixes 设置\n的前缀列表作为前转号码前缀\nfalse:禁止 callinForwardPrefixes 设\n置的前缀列表作为前转号码前缀\ncallinForwardPrefixes O LongString 前转号码限制功能中前转号码前缀\n列表（可使用逗号分隔）\nrewriteRulesInCaller O LongString 主叫拨号规则\nrewriteRulesInCallee O LongString 被叫拨号规则\nrewriteRulesInMobileArea\nAllow\nO Boolean true:开启 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nfalse:关闭 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nrewriteRulesInMobileArea O LongString 移动号码需添加区号的地区（可使\n用逗号分隔）\n参数名称 必须 类型 描述信息\ntimeoutSetup O Integer H323 Setup 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutCallProceeding O Integer H323 CallProceeding 超时时间（单\n位:秒）\n0:表示使用系统参数设定值\ntimeoutCallProceedingOlc O Integer H323 CallProceeding 包含 Open\nLogical Channel 超时时间 （单位:秒）\n0:表示使用系统参数设定值\ntimeoutAlerting O Integer H323 Alerting 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutInvite O Integer SIP Invite 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutTrying O Integer SIP Trying 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutSessionProgressSd\np\nO Integer SIP SessionProgress 含 SDP 超时时\n间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutSessionProgress O Integer SIP SessionProgress 超时时间 （单位:\n秒）\n0:表示使用系统参数设定值\ntimeoutRinging O Integer SIP Ring 超时时间（单位:秒）\n0:表示使用系统参数设定值\ndenyCallerCalleeAllow O Boolean true:允许 denyCallerCallee 设置的主\n叫向对应被叫进行呼叫\nfalse:禁止 denyCallerCallee 设置的\n主向叫对应被叫进行呼叫\ndenyCallerCallee O LongString 主叫向对应被叫进行呼叫的限制列\n表 格 式 为[< 主 叫 号 码>:< 被 叫 号\n码>[,<主叫号码>:<被叫号码>]…]\n例如:025:010,021:023\ndenySameCityCodesAllow O Boolean true:允许 denySameCityCodes 设置\n的区号进行同城呼叫\nfalse:禁止 denySameCityCodes 设置\n的区号进行同城呼叫\ndenySameCityCodes O LongString 同城呼叫功能限制的城市区号列表\n（使用逗号分隔多个区号）\n参数名称 必须 类型 描述信息\ncheckMobileAreaAllow O Boolean true:允许呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\nfalse:禁止呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\ncheckMobileArea O LongString 移动号码呼叫功能限制的城市区号\n列表（使用逗号分隔多个区号）\nswitchAllowRing\nO Boolean 收到振铃信令 18x 后的网关切换方\n式\nfalse:禁止\ntrue:允许\nswitchAllowSdp\nO Boolean SIP 协议时，当信令内包含 Sdp 时\n的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowRtp\nO Boolean 当在媒体转发时收到来自远端的媒\n体报文时的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowBusy\nO Boolean 当收到被叫忙后的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowErrorCode\nO Boolean 收到列表内错误码，后续网关切换\n方式\nfalse:禁止\ntrue:允许\nsipResponseAddressMetho\nO Integer SIP Response 信令的地址\n0:回应至原始请求的地址\n1:回应至原始请求的 IP，但端口使\n用 Via 头部中标识的端口\n2:回应至 Via 头部中标识的地址\nsipRequestAddressMethod O Integer SIP Request 信令的地址\n0:请求至原始请求的地址\n1:请求至原始请求的 IP，但端口使\n用 Contact 头部中标识的端口\n2:请求至 Contact 头部中标识的地址\n参数名称 必须 类型 描述信息\ndtmfSendMethodH323 O Integer H323 协议，软交换发送 DTMF 方\n式\n0:自动\n10:RFC2833\n20:H.245 alphanumeric\n30:H.245 signal\n40:Q.931 keypad\n60:关闭\ndtmfSendMethodSIP O Integer SIP 协议，软交换发送 DTMF 方式\n0:自动\n10:RFC2833\n50:SIP Info\n60:关闭\ndtmfReceiveMethod O Integer 软交换接收主叫 DTMF 方式\n0:所有\n10:RFC2833\n20:信令\n30:关闭\ndtmfSendPayloadTypeH32\nO Integer Dtmf 为 RFC2833 在 H323 协议时使\n用的 Payload Type\ndtmfSendPayloadTypeSIP O Integer Dtmf 为 RFC2833 在 SIP 协议时使用\n的 Payload Type\ndtmfReceivePayloadType O Integer Dtmf 为 RFC2833 软交换接收 Dtmf\n信号使用的 Payload Type\nq931NumberingPlan O Integer Q931NumberingPlan\n-1:默认，使用系统参数设定\n0:UnknownPlan\n1:ISDNPlan\n3:DataPlan\n4:TelexPlan\n8:NationalStandardPlan\n9:PrivatePlan\n15:ReservedPlan\n参数名称 必须 类型 描述信息\nq931NumberType O Integer Q931NumberType\n-1:默认，使用系统参数设定\n0:UnknownType\n1:InternationalType\n2:NationalType\n3:NetworkSpecificType\n4:SubscriberType\n6:AbbreviatedType\n7:ReservedType\nq931PresentationIndicator O Integer Q931PresentationIndicator\n-1:默认，使用系统参数设定\n0:Presentation allowed\n1:Presentation restricted\n2:Number not available due to\ninterworking\n3:Reserved\n4:无\nq931ScreeningIndicator O Integer Q931ScreeningIndicator\n-1:默认，使用系统参数设定\n0:User-provided，not screened\n1:User-provided，verified and passed\n2:User-provided，verified and failed\n3:Network provided\n4:无\nclearingAccount O String 结算账户名称\nh323FastStart O Boolean true:启用 H323 的 fast start 功能\nfalse:关闭 H323 的 fast start 功能\nh323H245Tunneling O Boolean true:启用 H323 的 H245 tunneling 功\n能\nfalse:关闭 H323 的 H245 tunne ling\n功能\nh323H245InSetup O Boolean true:在 H323 的 Setup 信令中包含\nH245 信令\nfalse:在 H323 的 Setup 信令中不包含\nH245 信令\nh323T38 O Boolean true:H323 协议时支持 T38 信令\nfalse:H323 协议时忽略 T38 信令\nsipTimer O Boolean true:支持 SIP Timer 协议 （RFC4028）\nfalse:禁止 SIP Timer 协议\n参数名称 必须 类型 描述信息\nsip100Rel O Boolean true:支持 SIP 100rel 协议\nfalse:禁止 SIP 100rel 协议\nsipT38 O Boolean true:支持 SIP T38 协议\nfalse:禁止 SIP T38 协议\nsipDisplay O Boolean true: 在 向 远 端 发 送 信 令 时 包 含\nDisplay 头部 false:在向远端发送信\n令时不包含 Display 头部\nsipRemotePartyId O Boolean true: 在 向 远 端 发 送 信 令 时 包 含\nRemotePartyId 头部\nfalse:在向远端发送信令时不包含\nRemotePartyId 头部\nsipPrivacy O Integer 0:无\n1:透传\n2:id\n3:none\nsipPPreferredIdentity O Integer 0:无\n1:透传\n2:主叫号码\nsipPAssertedIdentity O Integer 0:无\n1:透传\n2:主叫号码\ngroupE164Change O Boolean true:启用号码变换功能\nfalse:关闭号码变换功能\ncallerAllowLength O Integer 主叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncalleeAllowLength O Integer 被叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncallerLimitE164GroupsAll\now\nO Boolean true:允许 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\nfalse:禁止 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\ncallerLimitE164Groups O String 主叫号码组列表 （可使用逗号分隔）\n参数名称 必须 类型 描述信息\ncalleeLimitE164GroupsAll\now\nO Boolean true:允许 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\nfalse:禁止 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\ncalleeLimitE164Groups O String 被叫号码组列表 （可使用逗号分隔）\nh323G729SendMode O Integer H323 G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729SendMode O Integer SIP G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729Annexb O Integer G729 annexb 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nsipG723Annexa O Integer G723 annexa 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nh323CodecAssign O Boolean true:限制 H323 音频 /视频编码为\nh323Codecs 设定值\nfalse:软交换自动协商\nh323Codecs O Vector<String> H323 音频/视频列表\n参数名称 必须 类型 描述信息\nsipCodecAssign O Boolean true: 限制 SIP 音频 / 视 频编码为\nSIPCodecs 设定值\nfalse:软交换自动协商\nsipCodecs O Vector<String> SIP 音频/视频列表\naudioCodecTranscodingEn\nable\nO Boolean true:允许使用编码转换\nfalse:不允许使用编码转换\nrtpIncludeDtmfInband O Boolean true:媒体包含带内(inband)DTMF\nfalse: 媒 体 不 包 含 带 内\n(inband)DTMF\nrtpNeedDtmfInband O Boolean true:需使用带内(inband)DTMF 发送\nfalse: 不 额 外 使 用 带 内\n(inband)DTMF 发送\nfeerateRestrict O Boolean true:校验被叫号码费率\nfalse:不校验费率\nleastCostRouting O Boolean 最低秒费率排序（在 feerateRestrict\n为 true 时有效）\ntrue:启用\nfalse:关闭\nminProfitPercentEnable O Boolean feerateRestrict 为 true 时有效\n是否开启最低利润率限制\nminProfitPercent O Integer 最低利润率限制若设置为 10 表示\n利润率为 10%\n取值范围-10000 至 10000\nmaxSecondRatesEnable O Boolean 最高秒费率限制\ntrue:开启\nfalse 关闭\nmaxSecondRates O Double 最高秒费率值（若分钟费率为 0.6，\n此值应该设置为 0.01）\nenablePhoneDisplay O Boolean true:主叫为话机时使用话机的去电\n显示作为主叫号码\nfalse:主叫为话机时使用话机的号码\n显示作为主叫号码\nclearingAccountUseCallou\ntE164\nO Boolean true:使用拨号规则后的被叫号码作\n为结算账户计费被叫\nfalse:使用拨号规则前的被叫号码作\n为结算账户计费被叫\nsoftswitchName O String 软交换名称\n参数名称 必须 类型 描述信息\nforwardSignalRewriteE164\nGroupEnable\nO Boolean true:开启呼叫前转信令拨号规则\nfalse:关闭呼叫前转信令拨号规则\nforwardSignalRewriteE164\nGroup\nO String 呼叫前转信令改使用的号码群组名\n称\nmemo O String 备注\ndynamicBlackListInStanda\nlone\nO Boolean 独立模式下启用动态黑名单\ntrue:开启\nfalse:关闭\nmediaRecord O Boolean 录音\ntrue:开启\nfalse:关闭\nexternalNumberVerifyBits O Long 智能黑名单，该参数采用 bit 位控\n制，每一位表示开启某项功能\n1<<0:开启智能黑名单\n1<<1:保险营销\n1<<2:股票推荐\n1<<3:房产新盘\n1<<4:教育培训\n1<<5:M0/M1 催收\n1<<6:房产中介\n1<<7:问卷调查\n1<<8:车险回访\n1<<9:客服通知\n1<<10:金融营销\n1<<11:语音验证码\nexternalNumberVerifyRew\nriteCaller\nO String 智能黑名单主叫拨号规则\nexternalNumberVerifyRew\nriteCallee\nO String 智能黑名单被叫拨号规则\nscheduledCallinPrefixes O InfoScheduledCallinPrefix\nes []\n时段呼叫限制\nrewriteRulesInCallerUseE1\n64GroupEnable\nO Boolean 主叫号码池\nfalse：关闭\ntrue：启用\nrewriteRulesInCallerUseE1\n64Group\nO String 主叫号码池\n号码组组名称\nrewriteRulesInCallerUseE1\n64Line\nO Integer 主叫号码池号码复用次数\n参数名称 必须 类型 描述信息\nsignalPortLocal O Integer 信令本地端口\ncalculateRouteQuality O Integer 实时计算路由质量\n0：默认\n1：开启\n2：关闭\nInfoScheduledCallinPrefixes 格式\n参数名称 必须 类型 描述信息\ndays M int [] 星期几\n0:星期日\n1:星期一\n2:星期二\n3:星期三\n4:星期四\n5:星期五\n6:星期六\nbeginTime M int 一日中的起始秒\n取值范围(0~86400)\nendTime M int 一日中的终止秒\n取值范围(0~86400)\naction M int 操作\n0:禁止\n1:允许\ntype M int 方式\n0:主叫\n1:被叫\nprefixes M String [] 前缀列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.17",
    "title": "修改落地网关",
    "slug": "s-3-17",
    "level": 2,
    "sourcePage": 81,
    "endPage": 92,
    "endpoint": "/external/server/ModifyGatewayRouting",
    "pages": [
      {
        "number": 81,
        "html": "./assets/html-pages/page-081.html",
        "label": "PDF 第 81 页"
      },
      {
        "number": 82,
        "html": "./assets/html-pages/page-082.html",
        "label": "PDF 第 82 页"
      },
      {
        "number": 83,
        "html": "./assets/html-pages/page-083.html",
        "label": "PDF 第 83 页"
      },
      {
        "number": 84,
        "html": "./assets/html-pages/page-084.html",
        "label": "PDF 第 84 页"
      },
      {
        "number": 85,
        "html": "./assets/html-pages/page-085.html",
        "label": "PDF 第 85 页"
      },
      {
        "number": 86,
        "html": "./assets/html-pages/page-086.html",
        "label": "PDF 第 86 页"
      },
      {
        "number": 87,
        "html": "./assets/html-pages/page-087.html",
        "label": "PDF 第 87 页"
      },
      {
        "number": 88,
        "html": "./assets/html-pages/page-088.html",
        "label": "PDF 第 88 页"
      },
      {
        "number": 89,
        "html": "./assets/html-pages/page-089.html",
        "label": "PDF 第 89 页"
      },
      {
        "number": 90,
        "html": "./assets/html-pages/page-090.html",
        "label": "PDF 第 90 页"
      },
      {
        "number": 91,
        "html": "./assets/html-pages/page-091.html",
        "label": "PDF 第 91 页"
      },
      {
        "number": 92,
        "html": "./assets/html-pages/page-092.html",
        "label": "PDF 第 92 页"
      }
    ],
    "searchText": "3.17 修改落地网关 接口地址/external/server/ModifyGatewayRouting\n请求格式\n参数名称 必须 类型 描述信息\nname M String 落地网关名称\nprefix O String 落地网关前缀（可使用逗号分隔）\nprefixStyle O Integer 前缀匹配方式\n0:终结模式\n1:延续模式\npassword O String 落地网关注册密码\ncustomerPassword O String 落地网关 web 查询密码\ngatewayGroups O String 所属网关群组（逗号分隔 多个群组\n名称）\ncapacity O Integer 线路上限\nlockType O Integer 锁定类型\n0:无锁定\n3:全部锁定\npriority O Integer 优先级\nregisterType O Integer 注册类型\n0:静态\n1:动态\n2:注册（向其他平台进行注册）\n3:IMS 边缘设备\nremoteIp O String 落地网关远端地址\nrtpForwardType O Integer 媒体转发类型\n0:自动\n1:开启\n2:关闭\n3:必须开启\nencrypt O Boolean true:加密\nfalse:不加密\nprotocol O Integer 信令协议\n0:H323\n1:SIP\n参数名称 必须 类型 描述信息\nsignalPort O Integer 信令端口\nlocalIp O String 本地地址\n空:表示由系统自行选择本地地址\nmediaCheckDirection O Integer 媒体中断检测（仅在通话进行了媒\n体转发时有效）\n0:不检测\n1:检测是否有媒体报文传输给远端\n2:检测是否收到来自远端的媒体报\n文\n3:检测远端与本地有双向的媒体报\n文\nmaxCallDurationLower O Integer 大于 0:最长通话时间下限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationUpper 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationUpper 保持一致）\nmaxCallDurationUpper O Integer 大于 0:最长通话时间上限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationLower 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationLower 保持一致）\ncalleeE164Restrict O Integer 被叫号码限制\n0:不限制\n1:限制被叫号码必须是平台存在的\n话机号码\n2:限制被叫号码必须不是平台存在\n的话机号码\ncallerE164CheckEnable O Boolean true:检查主叫号码规范性\nfalse:不检查主叫号码规范性\ncallerE164CheckCity O Boolean true:允许主叫号码为城市号码\nfalse:不允许主叫号码为城市号码\ncallerE164CheckMobile O Boolean true:允许主叫号码为移动号码\nfalse:不允许主叫号码为移动号码\ncallerE164CheckOther O Boolean true:允许主叫号码为非城市号码与\n非移动号码\nfalse:不允许主叫号码为非城市号码\n与非移动号码\n参数名称 必须 类型 描述信息\ncalleeE164CheckEnable O Boolean true:检查被叫号码规范性\nfalse:不检查被叫号码规范性\ncalleeE164CheckCity O Boolean true:允许被号码为城市号码\nfalse:不允许被叫号码为城市号码\ncalleeE164CheckMobile O Boolean true:允许被叫号码为移动号码\nfalse:不允许被叫号码为移动号码\ncalleeE164CheckOther O Boolean true:允许被叫号码为非城市号码与\n非移动号码\nfalse:不允被主叫号码为非城市号码\n与非移动号码\ncallinCallerPrefixesAllow O Boolean true:允许 callinCallerPrefixes 设置的\n前缀列表作为主叫号码前缀\nfalse:禁止 callinCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\ncallinCallerPrefixes O LongString 主叫号码限制功能中主叫号码前缀\n列表（可使用逗号分隔）\ncallinCalleePrefixesAllow O Boolean true:允许 callinCalleePrefixes 设置的\n前缀列表作为被叫号码前缀\nfalse:禁止 callinCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\ncallinCalleePrefixes O LongString 被叫号码限制功能中被叫号码前缀\n列表（可使用逗号分隔）\ncallinForwardPrefixesAllo\nw\nO Boolean true:允许 callinForwardPrefixes 设置\n的前缀列表作为前转号码前缀\nfalse:禁止 callinForwardPrefixes 设\n置的前缀列表作为前转号码前缀\ncallinForwardPrefixes O LongString 前转号码限制功能中前转号码前缀\n列表（可使用逗号分隔）\nrewriteRulesInCaller O LongString 主叫拨号规则\nrewriteRulesInCallee O LongString 被叫拨号规则\nrewriteRulesInMobileArea\nAllow\nO Boolean true:开启 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nfalse:关闭 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nrewriteRulesInMobileArea O LongString 移动号码需添加区号的地区（可使\n用逗号分隔）\n参数名称 必须 类型 描述信息\ntimeoutSetup O Integer H323 Setup 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutCallProceeding O Integer H323 CallProceeding 超时时间（单\n位:秒）\n0:表示使用系统参数设定值\ntimeoutCallProceedingOlc O Integer H323 CallProceeding 包含 Open\nLogical Channel 超时时间 （单位:秒）\n0:表示使用系统参数设定值\ntimeoutAlerting O Integer H323 Alerting 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutInvite O Integer SIP Invite 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutTrying O Integer SIP Trying 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutSessionProgressSd\np\nO Integer SIP SessionProgress 含 SDP 超时时\n间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutSessionProgress O Integer SIP SessionProgress 超时时间 （单位:\n秒）\n0:表示使用系统参数设定值\ntimeoutRinging O Integer SIP Ring 超时时间（单位:秒）\n0:表示使用系统参数设定值\ndenyCallerCalleeAllow O Boolean true:允许 denyCallerCallee 设置的主\n叫向对应被叫进行呼叫\nfalse:禁止 denyCallerCallee 设置的\n主向叫对应被叫进行呼叫\ndenyCallerCallee O LongString 主叫向对应被叫进行呼叫的限制列\n表 格 式 为[< 主 叫 号 码>:< 被 叫 号\n码>[,<主叫号码>:<被叫号码>]…]\n例如:025:010,021:023\ndenySameCityCodesAllow O Boolean true:允许 denySameCityCodes 设置\n的区号进行同城呼叫\nfalse:禁止 denySameCityCodes 设置\n的区号进行同城呼叫\ndenySameCityCodes O LongString 同城呼叫功能限制的城市区号列表\n（使用逗号分隔多个区号）\n参数名称 必须 类型 描述信息\ncheckMobileAreaAllow O Boolean true:允许呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\nfalse:禁止呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\ncheckMobileArea O LongString 移动号码呼叫功能限制的城市区号\n列表（使用逗号分隔多个区号）\nswitchAllowRing\nO Boolean 收到振铃信令 18x 后的网关切换方\n式\nfalse:禁止\ntrue:允许\nswitchAllowSdp\nO Boolean SIP 协议时，当信令内包含 Sdp 时\n的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowRtp\nO Boolean 当在媒体转发时收到来自远端的媒\n体报文时的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowBusy\nO Boolean 当收到被叫忙后的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowErrorCode\nO Boolean 收到列表内错误码，后续网关切换\n方式\nfalse:禁止\ntrue:允许\nsipResponseAddressMetho\nO Integer SIP Response 信令的地址\n0:回应至原始请求的地址\n1:回应至原始请求的 IP，但端口使\n用 Via 头部中标识的端口\n2:回应至 Via 头部中标识的地址\nsipRequestAddressMethod O Integer SIP Request 信令的地址\n0:请求至原始请求的地址\n1:请求至原始请求的 IP，但端口使\n用 Contact 头部中标识的端口\n2:请求至 Contact 头部中标识的地址\n参数名称 必须 类型 描述信息\ndtmfSendMethodH323 O Integer H323 协议，软交换发送 DTMF 方\n式\n0:自动\n10:RFC2833\n20:H.245 alphanumeric\n30:H.245 signal\n40:Q.931 keypad\n60:关闭\ndtmfSendMethodSIP O Integer SIP 协议，软交换发送 DTMF 方式\n0:自动\n10:RFC2833\n50:SIP Info\n60:关闭\ndtmfReceiveMethod O Integer 软交换接收主叫 DTMF 方式\n0:所有\n10:RFC2833\n20:信令\n30:关闭\ndtmfSendPayloadTypeH32\nO Integer Dtmf 为 RFC2833 在 H323 协议时使\n用的 Payload Type\ndtmfSendPayloadTypeSIP O Integer Dtmf 为 RFC2833 在 SIP 协议时使用\n的 Payload Type\ndtmfReceivePayloadType O Integer Dtmf 为 RFC2833 软交换接收 Dtmf\n信号使用的 Payload Type\nq931NumberingPlan O Integer Q931NumberingPlan\n-1:默认，使用系统参数设定\n0:UnknownPlan\n1:ISDNPlan\n3:DataPlan\n4:TelexPlan\n8:NationalStandardPlan\n9:PrivatePlan\n15:ReservedPlan\n参数名称 必须 类型 描述信息\nq931NumberType O Integer Q931NumberType\n-1:默认，使用系统参数设定\n0:UnknownType\n1:InternationalType\n2:NationalType\n3:NetworkSpecificType\n4:SubscriberType\n6:AbbreviatedType\n7:ReservedType\nq931PresentationIndicator O Integer Q931PresentationIndicator\n-1:默认，使用系统参数设定\n0:Presentation allowed\n1:Presentation restricted\n2:Number not available due to\ninterworking\n3:Reserved\n4:无\nq931ScreeningIndicator O Integer Q931ScreeningIndicator\n-1:默认，使用系统参数设定\n0:User-provided，not screened\n1:User-provided，verified and passed\n2:User-provided，verified and failed\n3:Network provided\n4:无\nclearingAccount O String 结算账户名称\nh323FastStart O Boolean true:启用 H323 的 fast start 功能\nfalse:关闭 H323 的 fast start 功能\nh323H245Tunneling O Boolean true:启用 H323 的 H245 tunneling 功\n能\nfalse:关闭 H323 的 H245 tunneling\n功能\nh323H245InSetup O Boolean true:在 H323 的 Setup 信令中包含\nH245 信令\nfalse:在 H323 的 Setup 信令中不包含\nH245 信令\nh323T38 O Boolean true:H323 协议时支持 T38 信令\nfalse:H323 协议时忽略 T38 信令\nsipTimer O Boolean true:支持 SIP Timer 协议 （RFC4028）\nfalse:禁止 SIP Timer 协议\n参数名称 必须 类型 描述信息\nsip100Rel O Boolean true:支持 SIP 100rel 协议\nfalse:禁止 SIP 100rel 协议\nsipT38 O Boolean true:支持 SIP T38 协议\nfalse:禁止 SIP T38 协议\nsipDisplay O Boolean true: 在 向 远 端 发 送 信 令 时 包 含\nDisplay 头部 false:在向远端发送信\n令时不包含 Display 头部\nsipRemotePartyId O Boolean true: 在 向 远 端 发 送 信 令 时 包 含\nRemotePartyId 头部\nfalse:在向远端发送信令时不包含\nRemotePartyId 头部\nsipPrivacy O Integer 0:无\n1:透传\n2:id\n3:none\nsipPPreferredIdentity O Integer 0:无\n1:透传\n2:主叫号码\nsipPAssertedIdentity O Integer 0:无\n1:透传\n2:主叫号码\ngroupE164Change O Boolean true:启用号码变换功能\nfalse:关闭号码变换功能\ncallerAllowLength O Integer 主叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncalleeAllowLength O Integer 被叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncallerLimitE164GroupsAll\now\nO Boolean true:允许 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\nfalse:禁止 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\ncallerLimitE164Groups O String 主叫号码组列表 （可使用逗号分隔）\n参数名称 必须 类型 描述信息\ncalleeLimitE164GroupsAll\now\nO Boolean true:允许 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\nfalse:禁止 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\ncalleeLimitE164Groups O String 被叫号码组列表 （可使用逗号分隔）\nh323G729SendMode O Integer H323 G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729SendMode O Integer SIP G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729Annexb O Integer G729 annexb 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nsipG723Annexa O Integer G723 annexa 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nh323CodecAssign O Boolean true:限制 H323 音频 /视频编码为\nh323Codecs 设定值\nfalse:软交换自动协商\nh323Codecs O Vector<String> H323 音频/视频列表\n参数名称 必须 类型 描述信息\nsipCodecAssign O Boolean true: 限制 SIP 音频 / 视 频 编 码 为\nSIPCodecs 设定值\nfalse:软交换自动协商\nsipCodecs O Vector<String> SIP 音频/视频列表\naudioCodecTranscodingEn\nable\nO Boolean true:允许使用编码转换\nfalse:不允许使用编码转换\nrtpIncludeDtmfInband O Boolean true:媒体包含带内(inband)DTMF\nfalse: 媒 体 不 包 含 带 内\n(inband)DTMF\nrtpNeedDtmfInband O Boolean true:需使用带内(inband)DTMF 发送\nfalse: 不 额 外 使 用 带 内\n(inband)DTMF 发送\nfeerateRestrict O Boolean true:校验被叫号码费率\nfalse:不校验费率\nleastCostRouting O Boolean 最低秒费率排序（在 feerateRestrict\n为 true 时有效）\ntrue:启用\nfalse:关闭\nminProfitPercentEnable O Boolean feerateRestrict 为 true 时有效\n是否开启最低利润率限制\nminProfitPercent O Integer 最低利润率限制若设置为 10 表示\n利润率为 10%\n取值范围-10000 至 10000\nmaxSecondRatesEnable O Boolean 最高秒费率限制\ntrue:开启\nfalse 关闭\nmaxSecondRates O Double 最高秒费率值（若分钟费率为 0.6，\n此值应该设置为 0.01）\nenablePhoneDisplay O Boolean true:主叫为话机时使用话机的去电\n显示作为主叫号码\nfalse:主叫为话机时使用话机的号码\n显示作为主叫号码\nclearingAccountUseCallou\ntE164\nO Boolean true:使用拨号规则后的被叫号码作\n为结算账户计费被叫\nfalse:使用拨号规则前的被叫号码作\n为结算账户计费被叫\nsoftswitchName O String 软交换名称\n参数名称 必须 类型 描述信息\nforwardSignalRewriteE164\nGroupEnable\nO Boolean true:开启呼叫前转信令拨号规则\nfalse:关闭呼叫前转信令拨号规则\nforwardSignalRewriteE164\nGroup\nO String 呼叫前转信令改使用的号码群组名\n称\nmemo O String 备注\ndynamicBlackListInStanda\nlone\nO Boolean 独立模式下启用动态黑名单\ntrue:开启\nfalse:关闭\nmediaRecord O Boolean 录音\ntrue:开启\nfalse:关闭\nexternalNumberVerifyBits O Long 智能黑名单，该参数采用 bit 位控\n制，每一位表示开启某项功能\n1<<0:开启智能黑名单\n1<<1:保险营销\n1<<2:股票推荐\n1<<3:房产新盘\n1<<4:教育培训\n1<<5:M0/M1 催收\n1<<6:房产中介\n1<<7:问卷调查\n1<<8:车险回访\n1<<9:客服通知\n1<<10:金融营销\n1<<11:语音验证码\nexternalNumberVerifyRew\nriteCaller\nO String 智能黑名单主叫拨号规则\nexternalNumberVerifyRew\nriteCallee\nO String 智能黑名单被叫拨号规则\nscheduledCallinPrefixes O InfoScheduledCallinPrefix\nes []\n时段呼叫限制\nrewriteRulesInCallerUseE1\n64GroupEnable\nO Boolean 主叫号码池\nfalse：关闭\ntrue：启用\nrewriteRulesInCallerUseE1\n64Group\nO String 主叫号码池\n号码组组名称\nrewriteRulesInCallerUseE1\n64Line\nO Integer 主叫号码池号码复用次数\n参数名称 必须 类型 描述信息\nsignalPortLocal O Integer 信令本地端口\ncalculateRouteQuality O Integer 实时计算路由质量\n0：默认\n1：开启\n2：关闭\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.18",
    "title": "删除落地网关",
    "slug": "s-3-18",
    "level": 2,
    "sourcePage": 93,
    "endPage": 93,
    "endpoint": "/external/server/DeleteGatewayRouting",
    "pages": [
      {
        "number": 93,
        "html": "./assets/html-pages/page-093.html",
        "label": "PDF 第 93 页"
      }
    ],
    "searchText": "3.18 删除落地网关 接口地址/external/server/DeleteGatewayRouting\n请求格式\n参数名称 必须 类型 描述信息\nname M String 落地网关名称\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.19",
    "title": "查询落地网关",
    "slug": "s-3-19",
    "level": 2,
    "sourcePage": 94,
    "endPage": 105,
    "endpoint": "/external/server/GetGatewayRouting",
    "pages": [
      {
        "number": 94,
        "html": "./assets/html-pages/page-094.html",
        "label": "PDF 第 94 页"
      },
      {
        "number": 95,
        "html": "./assets/html-pages/page-095.html",
        "label": "PDF 第 95 页"
      },
      {
        "number": 96,
        "html": "./assets/html-pages/page-096.html",
        "label": "PDF 第 96 页"
      },
      {
        "number": 97,
        "html": "./assets/html-pages/page-097.html",
        "label": "PDF 第 97 页"
      },
      {
        "number": 98,
        "html": "./assets/html-pages/page-098.html",
        "label": "PDF 第 98 页"
      },
      {
        "number": 99,
        "html": "./assets/html-pages/page-099.html",
        "label": "PDF 第 99 页"
      },
      {
        "number": 100,
        "html": "./assets/html-pages/page-100.html",
        "label": "PDF 第 100 页"
      },
      {
        "number": 101,
        "html": "./assets/html-pages/page-101.html",
        "label": "PDF 第 101 页"
      },
      {
        "number": 102,
        "html": "./assets/html-pages/page-102.html",
        "label": "PDF 第 102 页"
      },
      {
        "number": 103,
        "html": "./assets/html-pages/page-103.html",
        "label": "PDF 第 103 页"
      },
      {
        "number": 104,
        "html": "./assets/html-pages/page-104.html",
        "label": "PDF 第 104 页"
      },
      {
        "number": 105,
        "html": "./assets/html-pages/page-105.html",
        "label": "PDF 第 105 页"
      }
    ],
    "searchText": "3.19 查询落地网关 接口地址/external/server/GetGatewayRouting\n请求格式\n参数名称 必须 类型 描述信息\nnames M String [] 网关名称\n不设置表示获取所有对接网关信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoGatewayRoutings O InfoGatewayRouting [] 话机信息\n类型 InfoGatewayRouting 格式\n参数名称 必须 类型 描述信息\nname M String 落地网关名称\nprefix M String 落地网关前缀（可使用逗号分隔）\nprefixStyle M int 前缀匹配方式\n0:终结模式\n1:延续模式\npassword M String 落地网关注册密码\ncustomerPassword M String 落地网关 web 查询密码\ngatewayGroups M String 所属网关群组（逗号分隔多个群组\n名称）\ncapacity M int 线路上限\nlockType M int 锁定类型\n0:无锁定\n3:全部锁定\npriority M int 优先级\n参数名称 必须 类型 描述信息\nregisterType M int 注册类型\n0:静态\n1:动态\n2:注册（向其他平台进行注册）\n3:IMS 边缘设备\nremoteIp M String 落地网关远端地址\nrtpForwardType M int 媒体转发类型\n0:自动\n1:开启\n2:关闭\n3:必须开启\nencrypt M boolean true:加密\nfalse:不加密\nprotocol M int 信令协议\n0:H323\n1:SIP\nsignalPort M int 信令端口\nlocalIp M String 本地地址\n空:表示由系统自行选择本地地址\nmediaCheckDirection M int 媒体中断检测（仅在通话进行了媒\n体转发时有效）\n0:不检测\n1:检测是否有媒体报文传输给远端\n2:检测是否收到来自远端的媒体报\n文\n3:检测远端与本地有双向的媒体报\n文\nmaxCallDurationLower M int 大于 0:最长通话时间下限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationUpper 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationUpper 保持一致）\nmaxCallDurationUpper M int 大于 0:最长通话时间上限\n-1: 使 用 系 统 参 数 值 （ 需 与\nmaxCallDurationLower 保持一致）\n0: 无 限 制 （ 需 与\nmaxCallDurationLower 保持一致）\n参数名称 必须 类型 描述信息\ncalleeE164Restrict M int 被叫号码限制\n0:不限制\n1:限制被叫号码必须是平台 存在的\n话机号码\n2:限制被叫号码必须不是平台存在\n的话机号码\ncallerE164CheckEnable M boolean true:检查主叫号码规范性\nfalse:不检查主叫号码规范性\ncallerE164CheckCity M boolean true:允许主叫号码为城市号码\nfalse:不允许主叫号码为城市号码\ncallerE164CheckMobile M boolean true:允许主叫号码为移动号码\nfalse:不允许主叫号码为移动号码\ncallerE164CheckOther M boolean true:允许主叫号码为非城市号码与\n非移动号码\nfalse:不允许主叫号码为非城市号码\n与非移动号码\ncalleeE164CheckEnable M boolean true:检查被叫号码规范性\nfalse:不检查被叫号码规范性\ncalleeE164CheckCity M boolean true:允许被号码为城市号码\nfalse:不允许被叫号码为城市号码\ncalleeE164CheckMobile M boolean true:允许被叫号码为移动号码\nfalse:不允许被叫号码为移动号码\ncalleeE164CheckOther M boolean true:允许被叫号码为非城市号码与\n非移动号码\nfalse:不允被主叫号码为非城市号码\n与非移动号码\ncallinCallerPrefixesAllow M boolean true:允许 callinCallerPrefixes 设置的\n前缀列表作为主叫号码前缀\nfalse:禁止 callinCallerPrefixes 设置\n的前缀列表作为主叫号码前缀\ncallinCallerPrefixes M LongString 主叫号码限制功能中主叫号 码前缀\n列表（可使用逗号分隔）\ncallinCalleePrefixesAllow M boolean true:允许 callinCalleePrefixes 设置的\n前缀列表作为被叫号码前缀\nfalse:禁止 callinCalleePrefixes 设置\n的前缀列表作为被叫号码前缀\ncallinCalleePrefixes M LongString 被叫号码限制功能中被叫号码前缀\n列表（可使用逗号分隔）\n参数名称 必须 类型 描述信息\ncallinForwardPrefixesAllo\nw\nM boolean true:允许 callinForwardPrefixes 设置\n的前缀列表作为前转号码前缀\nfalse:禁止 callinForwardPrefixes 设\n置的前缀列表作为前转号码前缀\ncallinForwardPrefixes M LongString 前转号码限制功能中前转号码前缀\n列表（可使用逗号分隔）\nrewriteRulesInCaller M LongString 主叫拨号规则\nrewriteRulesInCallee M LongString 被叫拨号规则\nrewriteRulesInMobileArea\nAllow\nM boolean true:开启 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nfalse:关闭 rewriteRulesInMobileArea\n所设置的区号对应城市的移动号码\n添加区号\nrewriteRulesInMobileArea M LongString 移动号码需添加区号的地区（可使\n用逗号分隔）\ntimeoutSetup M int H323 Setup 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutCallProceeding M int H323 CallProceeding 超时时间（单\n位:秒）\n0:表示使用系统参数设定值\ntimeoutCallProceedingOlc M int H323 CallProceeding 包含 Open\nLogical Channel 超时时间 （单位:秒）\n0:表示使用系统参数设定值\ntimeoutAlerting M int H323 Alerting 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutInvite M int SIP Invite 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutTrying M int SIP Trying 超时时间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutSessionProgressSd\np\nM int SIP SessionProgress 含 SDP 超时时\n间（单位:秒）\n0:表示使用系统参数设定值\ntimeoutSessionProgress M int SIP SessionProgress 超时时间 （单位:\n秒）\n0:表示使用系统参数设定值\n参数名称 必须 类型 描述信息\ntimeoutRinging M int SIP Ring 超时时间（单位:秒）\n0:表示使用系统参数设定值\ndenyCallerCalleeAllow M boolean true:允许 denyCallerCallee 设置的主\n叫向对应被叫进行呼叫\nfalse:禁止 denyCallerCallee 设置的\n主向叫对应被叫进行呼叫\ndenyCallerCallee M LongString 主叫向对应被叫进行呼叫的限制列\n表 格 式 为[< 主 叫 号 码>:< 被 叫 号\n码>[,<主叫号码>:<被叫号码>]…]\n例如:025:010,021:023\ndenySameCityCodesAllow M boolean true:允许 denySameCityCodes 设置\n的区号进行同城呼叫\nfalse:禁止 denySameCityCodes 设置\n的区号进行同城呼叫\ndenySameCityCodes M LongString 同城呼叫功能限制的城市区号列表\n（使用逗号分隔多个区号）\ncheckMobileAreaAllow M boolean true:允许呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\nfalse:禁止呼叫 checkMobileArea 设\n置的区号对应城市的移动号码\ncheckMobileArea M LongString 移动号码呼叫功能限制的城市区号\n列表（使用逗号分隔多个区号）\nswitchAllowRing\nO Boolean 收到振铃信令 18x 后的网关切换方\n式\nfalse:禁止\ntrue:允许\nswitchAllowSdp\nO Boolean SIP 协议时，当信令内包含 Sdp 时\n的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowRtp\nO Boolean 当在媒体转发时收到来自远端的媒\n体报文时的后续处理方式\nfalse:禁止\ntrue:允许\nswitchAllowBusy\nO Boolean 当收到被叫忙后的后续处理方式\nfalse:禁止\ntrue:允许\n参数名称 必须 类型 描述信息\nswitchAllowErrorCode\nO Boolean 收到列表内错误码，后续网关切换\n方式\nfalse:禁止\ntrue:允许\nsipResponseAddressMetho\nM int SIP Response 信令的地址\n0:回应至原始请求的地址\n1:回应至原始请求的 IP，但端口使\n用 Via 头部中标识的端口\n2:回应至 Via 头部中标识的地址\nsipRequestAddressMethod M int SIP Request 信令的地址\n0:请求至原始请求的地址\n1:请求至原始请求的 IP，但端口使\n用 Contact 头部中标识的端口\n2:请求至 Contact 头部中标识的地址\ndtmfSendMethodH323 M int H323 协议，软交换发送 DTMF 方\n式\n0:自动\n10:RFC2833\n20:H.245 alphanumeric\n30:H.245 signal\n40:Q.931 keypad\n60:关闭\ndtmfSendMethodSIP M int SIP 协议，软交换发送 DTMF 方式\n0:自动\n10:RFC2833\n50:SIP Info\n60:关闭\ndtmfReceiveMethod M int 软交换接收主叫 DTMF 方式\n0:所有\n10:RFC2833\n20:信令\n30:关闭\ndtmfSendPayloadTypeH32\nM int Dtmf 为 RFC2833 在 H323 协议时使\n用的 Payload Type\ndtmfSendPayloadTypeSIP M int Dtmf 为 RFC2833 在 SIP 协议时使用\n的 Payload Type\ndtmfReceivePayloadType M int Dtmf 为 RFC2833 软交换接收 Dtmf\n信号使用的 Payload Type\n参数名称 必须 类型 描述信息\nq931NumberingPlan M int Q931NumberingPlan\n-1:默认，使用系统参数设定\n0:UnknownPlan\n1:ISDNPlan\n3:DataPlan\n4:TelexPlan\n8:NationalStandardPlan\n9:PrivatePlan\n15:ReservedPlan\nq931NumberType M int Q931NumberType\n-1:默认，使用系统参数设定\n0:UnknownType\n1:InternationalType\n2:NationalType\n3:NetworkSpecificType\n4:SubscriberType\n6:AbbreviatedType\n7:ReservedType\nq931PresentationIndicator M int Q931PresentationIndicator\n-1:默认，使用系统参数设定\n0:Presentation allowed\n1:Presentation restricted\n2:Number no t available due to\ninterworking\n3:Reserved\n4:无\nq931ScreeningIndicator M int Q931ScreeningIndicator\n-1:默认，使用系统参数设定\n0:User-provided，not screened\n1:User-provided，verified and passed\n2:User-provided，verified and failed\n3:Network provided\n4:无\nclearingAccount M String 结算账户名称\nh323FastStart M boolean true:启用 H323 的 fast start 功能\nfalse:关闭 H323 的 fast start 功能\nh323H245Tunneling M boolean true:启用 H323 的 H245 tunneling 功\n能\nfalse:关闭 H323 的 H245 tunneling\n功能\n参数名称 必须 类型 描述信息\nh323H245InSetup M boolean true:在 H323 的 Setup 信令中包含\nH245 信令\nfalse:在 H323 的 Setup 信令中不包含\nH245 信令\nh323T38 M boolean true:H323 协议时支持 T38 信令\nfalse:H323 协议时忽略 T38 信令\nsipTimer M boolean true:支持 SIP Timer 协议 （RFC4028）\nfalse:禁止 SIP Timer 协议\nsip100Rel M boolean true:支持 SIP 100rel 协议\nfalse:禁止 SIP 100rel 协议\nsipT38 M boolean true:支持 SIP T38 协议\nfalse:禁止 SIP T38 协议\nsipDisplay M boolean true: 在 向 远 端 发 送 信 令 时 包 含\nDisplay 头部 false:在向远端发送信\n令时不包含 Display 头部\nsipRemotePartyId M boolean true: 在 向 远 端 发 送 信 令 时 包 含\nRemotePartyId 头部\nfalse:在向远端发送信令时不包含\nRemotePartyId 头部\nsipPrivacy O Integer 0:无\n1:透传\n2:id\n3:none\nsipPPreferredIdentity O Integer 0:无\n1:透传\n2:主叫号码\nsipPAssertedIdentity O Integer 0:无\n1:透传\n2:主叫号码\ngroupE164Change M boolean true:启用号码变换功能\nfalse:关闭号码变换功能\ncallerAllowLength M int 主叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\n参数名称 必须 类型 描述信息\ncalleeAllowLength M int 被叫号码允许的号码长度掩码\n0:表示允许所有长度\n1<<x:表示允许长度为 x 的号码（x\n小于 32）\ncallerLimitE164GroupsAll\now\nM boolean true:允许 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\nfalse:禁止 callerLimitE164Groups 所\n设置的号码组作为主叫号码呼叫\ncallerLimitE164Groups M String 主叫号码组列表 （可使用逗号分隔）\ncalleeLimitE164GroupsAll\now\nM boolean true:允许 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\nfalse:禁止 calleeLimitE164Groups 所\n设置的号码组作为被叫号码呼叫\ncalleeLimitE164Groups M String 被叫号码组列表 （可使用逗号分隔）\nh323G729SendMode M int H323 G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729SendMode M int SIP G729 协商模式\n0:自动\n1:将 G729a 与 G729 当作 G729 协\n商\n2:将 G729a 与 G729 当作 G729a 协\n商\n3:将 G729 或 G729 作为 G729 与\nG729a 进行协商\nsipG729Annexb M int G729 annexb 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\n参数名称 必须 类型 描述信息\nsipG723Annexa M int G723 annexa 参数填写方式\n0:自动\n1:annex=yes\n2:annex=no\n3:无 annex\n4:透传对端的 annex\nh323CodecAssign M boolean true:限制 H323 音频 /视频编码为\nh323Codecs 设定值\nfalse:软交换自动协商\nh323Codecs M Vector<String> H323 音频/视频列表\nsipCodecAssign M boolean true: 限制 SIP 音频 / 视 频 编 码 为\nSIPCodecs 设定值\nfalse:软交换自动协商\nsipCodecs M Vector<String> SIP 音频/视频列表\naudioCodecTranscodingEn\nable\nM boolean true:允许使用编码转换\nfalse:不允许使用编码转换\nrtpIncludeDtmfInband M boolean true:媒体包含带内(inband)DTMF\nfalse: 媒 体 不 包 含 带 内\n(inband)DTMF\nrtpNeedDtmfInband M boolean true:需使用带内(inband)DTMF 发送\nfalse: 不 额 外 使 用 带 内\n(inband)DTMF 发送\nfeerateRestrict M boolean true:校验被叫号码费率\nfalse:不校验费率\nleastCostRouting M boolean 最低秒费率排序（在 feerateRestrict\n为 true 时有效）\ntrue:启用\nfalse:关闭\nminProfitPercentEnable M boolean feerateRestrict 为 true 时有效\n是否开启最低利润率限制\nminProfitPercent M int 最低利润率限制若设置为 10 表示\n利润率为 10%\n取值范围-10000 至 10000\nmaxSecondRatesEnable M boolean 最高秒费率限制\ntrue:开启\nfalse 关闭\nmaxSecondRates M double 最高秒费率值\n参数名称 必须 类型 描述信息\nenablePhoneDisplay M boolean true:主叫为话机时使用话机的去电\n显示作为主叫号码\nfalse:主叫为话机时使用话机的号码\n显示作为主叫号码\nclearingAccountUseCallou\ntE164\nM boolean true:使用拨号规则后的被叫号码作\n为结算账户计费被叫\nfalse:使用拨号规则前的被叫号码作\n为结算账户计费被叫\nsoftswitchName O String 软交换名称\n未设置:表示不属于任何软交换\n空串:表示属于所有软交换\nforwardSignalRewriteE164\nGroupEnable\nO Boolean true:开启呼叫前转信令拨号规则\nfalse:关闭呼叫前转信令拨号规则\nforwardSignalRewriteE164\nGroup\nO String 呼叫前转信令改使用的号码群组名\n称\nmemo O String 备注\ndynamicBlackListInStanda\nlone\nO Boolean 独立模式下启用动态黑名单\ntrue:开启\nfalse:关闭\nmediaRecord O Boolean 录音\ntrue:开启\nfalse:关闭\nexternalNumberVerifyBits O Long 智能黑名单，该参数采用 bit 位控\n制，每一位表示开启某项功能\n1<<0:开启智能黑名单\n1<<1:保险营销\n1<<2:股票推荐\n1<<3:房产新盘\n1<<4:教育培训\n1<<5:M0/M1 催收\n1<<6:房产中介\n1<<7:问卷调查\n1<<8:车险回访\n1<<9:客服通知\n1<<10:金融营销\n1<<11:语音验证码\nexternalNumberVerifyRew\nriteCaller\nO String 智能黑名单主叫拨号规则\n参数名称 必须 类型 描述信息\nexternalNumberVerifyRew\nriteCallee\nO String 智能黑名单被叫拨号规则\nscheduledCallinPrefixes O InfoScheduledCallinPrefix\nes []\n时段呼叫限制\nrewriteRulesInCallerUseE1\n64GroupEnable\nO Boolean 主叫号码池\nfalse：关闭\ntrue：启用\nrewriteRulesInCallerUseE1\n64Group\nO String 主叫号码池\n号码组组名称\nrewriteRulesInCallerUseE1\n64Line\nO Integer 主叫号码池号码复用次数\nsignalPortLocal O Integer 信令本地端口\ncalculateRouteQuality O Integer 实时计算路由质量\n0：默认\n1：开启\n2：关闭"
  },
  {
    "no": "3.20",
    "title": "查询在线落地网关",
    "slug": "s-3-20",
    "level": 2,
    "sourcePage": 106,
    "endPage": 107,
    "endpoint": "/external/server/GetGatewayRoutingOnline",
    "pages": [
      {
        "number": 106,
        "html": "./assets/html-pages/page-106.html",
        "label": "PDF 第 106 页"
      },
      {
        "number": 107,
        "html": "./assets/html-pages/page-107.html",
        "label": "PDF 第 107 页"
      }
    ],
    "searchText": "3.20 查询在线落地网关 接口地址/external/server/GetGatewayRoutingOnline\n请求格式\n参数名称 必须 类型 描述信息\nnames O String [] 对接网关名称\n不设置:表示此过滤条件无效\nsoftswitchName O String 软交换名称\n不设置:表示此过滤条件无效，查询\n所有的软交换\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoGatewayRoutingOnlin\nes\nO InfoGatewayRoutingOnlin\ne []\n套餐订单列表\n类型 InfoGatewayRoutingOnline 格式\n参数名称 必须 类型 描述信息\nid M int 落地网关 ID\nname M String 落地网关名称\nprefix M String 落地网关前缀\ncurrentCall M int 当前呼叫总数\ncapacity M int 呼叫线路上限\nasr M double 呼叫应答率\nresponseRatio M double 呼叫回应率\nconnectedRatio M double 呼叫接通率\nacd M long 平均通话时长（单位:秒）\nremoteIp M String 远端地址\nnatIp O String NA T内部地址，仅在网关与软交换\n间存在地址转换设备时有效\nlocalIp M String 注册本地地址\n参数名称 必须 类型 描述信息\nregisterTime M long 注册时间（UTC 1970-01-01 至今的\n毫秒数）\n0:静态网关\nupdateTime M long 上次更新时间（UTC 1970-01-01 至\n今的毫秒数）\n0:静态网关\nkeepTime M long 在线时间（单位:秒）\n0:静态网关\ncryptoType M int 加密类型\n0:未加密\n1:RC4\nregisterName O String 向其他平台注册的标识，仅在网关\n类型为注册时有效\nretryAfter M long 网关禁用时长(毫秒)， 禁用是由于落\n地网关回应 Retry-After 头域造成的\nsoftswitchName M String 软交换名称\nsoftswitchIp M String 软交换 IP"
  },
  {
    "no": "3.21",
    "title": "查询当前通话",
    "slug": "s-3-21",
    "level": 2,
    "sourcePage": 108,
    "endPage": 110,
    "endpoint": "/external/server/GetCurrentCall",
    "pages": [
      {
        "number": 108,
        "html": "./assets/html-pages/page-108.html",
        "label": "PDF 第 108 页"
      },
      {
        "number": 109,
        "html": "./assets/html-pages/page-109.html",
        "label": "PDF 第 109 页"
      },
      {
        "number": 110,
        "html": "./assets/html-pages/page-110.html",
        "label": "PDF 第 110 页"
      }
    ],
    "searchText": "3.21 查询当前通话 接口地址/external/server/GetCurrentCall\n该接口不建议频繁使用，过于频繁的调用可能导致系统性能低下\n请求格式\n参数名称 必须 类型 描述信息\ncallerE164s O String [] 主叫号码\n不设置:表示此过滤条件无效\ncalleeE164s O String [] 被叫号码\n不设置:表示此过滤条件无效\ngatewayMappingName O String 对接网关\n不设置:表示此过滤条件无效\ngatewayRoutingName O String 落地网关\n不设置:表示此过滤条件无效\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoCurrentCalls O InfoCurrentCall [] 当前通话列表\n类型 InfoCurrentCall 格式\n参数名称 必须 类型 描述信息\ncallerE164 M String 主叫号码\ncalleeE164 M String 被叫号码\ncallerGatewayId M String 主叫网关\ncalleeGatewayId M String 被叫网关\nconnectedTime M long 呼叫接通时间\n当 未 接 通 时 表 示 呼 叫 接 入 时 间\n（UTC 1970-01-01 至今的毫秒数）\n参数名称 必须 类型 描述信息\nkeepTime M long 大于等于 0:呼叫持续时长 （单位:毫\n秒）\n-1:呼叫初始化（Setup）\n-2:呼叫接续中（CallProceeding）\n-3: 呼叫接续中（ CallProceeding\n（RTP））\n-4:呼叫接续中（Progress）\n-5:振铃（Alerting）\n-6:接通（Connet）\n-7:呼叫初始化（Invite）\n-8:呼叫接续中（Trying）\n-9:呼叫接续中（SessionProgress）\n-10: 呼 叫 接 续 中 （SessionProgress\n（SDP））\n-11:振铃（Ringing）\n-12:接通（Ok）\n-13:挂断（Release）\n-14:呼叫转移中（Transfering）\n-15:呼叫转移成功（TransferOk）\n-16:呼叫转移失败（TransferFailed）\n-17:放弃呼叫转移（TransferCancel）\ncallCodec M String 呼叫编码\ncallerCodec M String 主叫编码集\ncalleeCodec M String 被叫编码集\ncallerRtpIp M String 主叫 Rtp 地址信息 （含音频与视频）\ncalleeRtpIp M String 被叫 Rtp 地址信息 （含音频与视频）\ncallerReceiveDtmf M int 软交换接收主叫 DTMF 方式\n0:自动\n10:RFC2833\n20:H.245 alphanumeric\n30:H.245 signal\n40:Q.931 keypad\n50:SIP Info\n60:关闭\ncallerSendDtmf M int 软交换发送给主叫的 DTMF 方式，\n取值同 callerReceiveDtmf\ncalleeReceiveDtmf M int 软交换接受被叫 DTMF 方式，取值\n同 callerReceiveDtmf\n参数名称 必须 类型 描述信息\ncalleeSendDtmf M int 软交换发送给被叫的 DTMF 方式，\n取值同 callerReceiveDtmf\ncallerInfoRtpFlowAudio M InfoRtpFlow 主叫语音流量信息\ncalleeInfoRtpFlowAudio M InfoRtpFlow 被叫语音流量信息\ncallerInfoRtpFlowVideo M InfoRtpFlow 主叫视频流量信息\ncalleeInfoRtpFlowVideo M InfoRtpFlow 被叫视频流量信息\ncallerTerminal M String 主叫设备名称\ncalleeTerminal M String 被叫设备名称\ncallerCryptoType M int 主叫加密类型\n0:未加密\n1:RC4\ncalleeCryptoType M int 被叫加密类型\n0:未加密\n1:RC4\ncallerLocalIp M String 主叫信令本地地址\ncalleeLocalIp M String 被叫信令本地地址\ncallId M int 呼叫在软交换中的唯一标识\nInfoRtpFlow 格式\n参数名称 必须 类型 描述信息\nrtpPackets M int 接受报文数量\nrtpBytes M int 接收字节数量\nrtpDuration M long 持续时间（单位:微秒）"
  },
  {
    "no": "3.22",
    "title": "充值",
    "slug": "s-3-22",
    "level": 2,
    "sourcePage": 111,
    "endPage": 111,
    "endpoint": "/external/server/Pay",
    "pages": [
      {
        "number": 111,
        "html": "./assets/html-pages/page-111.html",
        "label": "PDF 第 111 页"
      }
    ],
    "searchText": "3.22 充值 接口地址/external/server/Pay\n请求格式\n参数名称 必须 类型 描述信息\nownerName M String 充值对象名称\nownerType M int 充值对象名称类型\n2:账户\n6:平台话机\n11:在用电话卡卡号\n25:绑定号码\n44:对接网关\nmoney M double 充值金额\nmemo O String 充值备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoPay O InfoPay 缴费历史记录\nInfoPay 格式\n参数名称 必须 类型 描述信息\naccount M String 账户名称\nmoney M double 账户余额\nvalidTime M long 有效期（UTC 1970-01-01 至今的毫\n秒数 ）\npayMoney M double 充值金额"
  },
  {
    "no": "3.23",
    "title": "创建套餐",
    "slug": "s-3-23",
    "level": 2,
    "sourcePage": 112,
    "endPage": 113,
    "endpoint": "/external/server/CreateSuite",
    "pages": [
      {
        "number": 112,
        "html": "./assets/html-pages/page-112.html",
        "label": "PDF 第 112 页"
      },
      {
        "number": 113,
        "html": "./assets/html-pages/page-113.html",
        "label": "PDF 第 113 页"
      }
    ],
    "searchText": "3.23 创建套餐 接口地址/external/server/CreateSuite\n请求格式\n参数名称 必须 类型 描述信息\nname M String 套餐名称\nrentPeriod M int 租用周期（需大于 0）\nrentType M int 租用类型\n0:天\n1:月\n2:年\n3:一次性 (rentPeriod 含义变更为可\n用秒数)\nnonholonomicOrder M boolean true:允许非完整订阅\nfalse:不允许非完整订阅\nrentFee M double 租金\nminConsumption M double 最低消费额\nlowerConsumption M double 生效消费下限\ngiftMoney M double 赠送金额\ninfoGiftTimes O InfoGiftTime [] 赠送时长\nmemo O String 备注\nInfoGiftTime 格式\n参数名称 必须 类型 描述信息\nprefix M LongString 地区前缀（可使用逗号分隔多个前\n缀）\nstartTime M int 一 天 的 起 始 时 间 （ 取 值 范 围\n0–86400） ， 该时间为与当日0 点的\n偏差秒数\nendTime M int 一 天 的 终 止 时 间 （ 取 值 范 围\n0–86400） ， 该时间为与当日0 点的\n偏差秒数\ngiftTime M int 赠送的秒数\nbillingTime M int 赠送时长的计费周期\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\nid O Integer 套餐 Id"
  },
  {
    "no": "3.24",
    "title": "删除套餐",
    "slug": "s-3-24",
    "level": 2,
    "sourcePage": 114,
    "endPage": 114,
    "endpoint": "/external/server/DeleteSuite",
    "pages": [
      {
        "number": 114,
        "html": "./assets/html-pages/page-114.html",
        "label": "PDF 第 114 页"
      }
    ],
    "searchText": "3.24 删除套餐 接口地址/external/server/DeleteSuite\n请求格式\n参数名称 必须 类型 描述信息\nid M int 套餐 Id\nforce O int 0:不强制删除， 需检查依赖关系 （默\n认）\n1:强制删除，并取消依赖关系\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.25",
    "title": "查询套餐",
    "slug": "s-3-25",
    "level": 2,
    "sourcePage": 115,
    "endPage": 115,
    "endpoint": "/external/server/GetSuite",
    "pages": [
      {
        "number": 115,
        "html": "./assets/html-pages/page-115.html",
        "label": "PDF 第 115 页"
      }
    ],
    "searchText": "3.25 查询套餐 接口地址/external/server/GetSuite\n请求格式\n参数名称 必须 类型 描述信息\nids O int [] 套餐 Id 数组，当不设置此值时，表\n示获取所有套餐信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoSuites O InfoSuite [] 套餐信息\nInfoSuite 格式\n参数名称 必须 类型 描述信息\nid M int 套餐 Id\nname M String 套餐名称\nrentPeriod M int 租用周期\nrentType M int 租用类型\n0:天\n1:月\n2:年\n3:一次性 (rentPeriod 含义变更为可\n用秒数)\nnonholonomicOrder M boolean true:允许非完整订阅\nfalse:不允许非完整订阅\nrentFee M double 租金\nminConsumption M double 最低消费额\nlowerConsumption M double 生效消费下限\ngiftMoney M double 赠送金额\ninfoGiftTimes O InfoGiftTime [] 赠送时长\nmemo O String 备注"
  },
  {
    "no": "3.26",
    "title": "创建套餐订单",
    "slug": "s-3-26",
    "level": 2,
    "sourcePage": 116,
    "endPage": 117,
    "endpoint": "/external/server/CreateSuiteOrder",
    "pages": [
      {
        "number": 116,
        "html": "./assets/html-pages/page-116.html",
        "label": "PDF 第 116 页"
      },
      {
        "number": 117,
        "html": "./assets/html-pages/page-117.html",
        "label": "PDF 第 117 页"
      }
    ],
    "searchText": "3.26 创建套餐订单 接口地址/external/server/CreateSuiteOrder\n请求格式\n参数名称 必须 类型 描述信息\nownerName M String 所有者名称\nownerType M int 所有者类型\n2:账户\n6:话机\nsuiteId M int 套餐 Id\navailableTime M long 生效时间（UTC 1970-01-01 至今的\n毫秒数，需为服务器时区的 0 点）\n0:表示生效时间为服务器时区当日\n0 点，并立即生效\nexpireTime O Long 失效时间 （GMT 1970-01-01 至今的\n毫秒数 ）\n不选或 9223372036854775807 表示\n无限制\n当套餐 rentType 为“一次性”时:若不\n设置此值，则一次性套餐的失效时\n间为 :availableTime + 套餐的\nrentPeriod *1000;若设置此值则根据\n此值设定失效时间，对于一次性套\n餐，一旦创建订单即转换为生效套\n餐，订单自动删除\npriority O Integer 优先级\n不设置或 2147483647 表示无优先\n级\nfailedProcessMode O Integer 当账户余额不足以支付租金时的处\n理模式\n0（默认）:等待下次充值\n1:等待下一个租用周期（仅在套餐\n租用单位为日或月时有效）\n2:删除\nrentPercent O Double 租金百分比\n默认值:100\nmemo O String 订单备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\nid O Integer 成功后返回创建套餐订单的 id"
  },
  {
    "no": "3.27",
    "title": "修改套餐订单",
    "slug": "s-3-27",
    "level": 2,
    "sourcePage": 118,
    "endPage": 118,
    "endpoint": "/external/server/ModifySuiteOrder",
    "pages": [
      {
        "number": 118,
        "html": "./assets/html-pages/page-118.html",
        "label": "PDF 第 118 页"
      }
    ],
    "searchText": "3.27 修改套餐订单 接口地址/external/server/ModifySuiteOrder\n请求格式\n参数名称 必须 类型 描述信息\nid M int 套餐订单 id\nexpireTime O Long 失效时间（UTC 1970-01-01 至今的\n毫秒数，需为服务器时区的 0 点）\n9223372036854775807:表示无限制\npriority O Integer 优先级\n不设置或 2147483647 表示无优先\n级\nfailedProcessMode O Integer 当账户余额不足以支付租金时的处\n理模式\n0（默认）:等待下次充值\n1:等待下一个租用周期（仅在套餐\n租用单位为日或月时有效）\n2:删除\nrentPercent O Double 租金百分比\nmemo O String 订单备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.28",
    "title": "删除套餐订单",
    "slug": "s-3-28",
    "level": 2,
    "sourcePage": 119,
    "endPage": 119,
    "endpoint": "/external/server/DeleteSuiteOrder",
    "pages": [
      {
        "number": 119,
        "html": "./assets/html-pages/page-119.html",
        "label": "PDF 第 119 页"
      }
    ],
    "searchText": "3.28 删除套餐订单 接口地址/external/server/DeleteSuiteOrder\n请求格式\n参数名称 必须 类型 描述信息\nid M int 套餐订单的 id\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.29",
    "title": "查询套餐订单",
    "slug": "s-3-29",
    "level": 2,
    "sourcePage": 120,
    "endPage": 120,
    "endpoint": "/external/server/GetSuiteOrder",
    "pages": [
      {
        "number": 120,
        "html": "./assets/html-pages/page-120.html",
        "label": "PDF 第 120 页"
      }
    ],
    "searchText": "3.29 查询套餐订单 接口地址/external/server/GetSuiteOrder\n请求格式\n参数名称 必须 类型 描述信息\nownerName M String 所有者名称\nownerType M int 所有者类型\n2:账户\n6:话机\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoSuiteOrders O InfoSuiteOrder [] 套餐订单列表\nInfoSuiteOrder 格式\n参数名称 必须 类型 描述信息\nid M int 套餐订单 Id\nsuiteId M int 套餐 Id\navailableTime M long 生效时间（UTC 1970-01-01 至今的\n毫秒数）\nexpireTime M long 失效时间（UTC 1970-01-01 至今的\n毫秒数）另 :9223372036854775807\n表示无限制\npriority M int 优先级\nrentPercent M double 租金百分比\nmemo M String 订单备注"
  },
  {
    "no": "3.30",
    "title": "查询生效套餐",
    "slug": "s-3-30",
    "level": 2,
    "sourcePage": 121,
    "endPage": 122,
    "endpoint": "/external/server/GetCurrentSuite",
    "pages": [
      {
        "number": 121,
        "html": "./assets/html-pages/page-121.html",
        "label": "PDF 第 121 页"
      },
      {
        "number": 122,
        "html": "./assets/html-pages/page-122.html",
        "label": "PDF 第 122 页"
      }
    ],
    "searchText": "3.30 查询生效套餐 接口地址/external/server/GetCurrentSuite\n请求格式\n参数名称 必须 类型 描述信息\nownerName M String 所有者名称\nownerType M int 所有者类型\n2:账户\n6:话机\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoCurrentSuites O InfoCurrentSuite [] 套餐订单列表\n类型 InfoCurrentSuite 格式\n参数名称 必须 类型 描述信息\nid M int 生效套餐 Id\nsuiteId M int 套餐 Id\nsuiteOrderId M int 套餐订单 Id\nrentPeriod M int 租用周期\nrentType M int 租用类型\n0:天\n1:月\n2:年\n3:一次性 (rentPeriod 含义变更为可\n用秒数)\nrentFee M double 租金\nexpireTime M long 失效时间\n（UTC 1970-01-01 至今的毫秒数）\nminConsumption M double 最低消费额\ncurrentConsumption M double 周期内消费\nlowerConsumption M double 生效消费下限\n参数名称 必须 类型 描述信息\ngiftMoney M double 赠送金额\ninfoGiftTimes O InfoGiftTime [] 赠送时长\nmemo O String 备注"
  },
  {
    "no": "3.31",
    "title": "删除生效套餐",
    "slug": "s-3-31",
    "level": 2,
    "sourcePage": 123,
    "endPage": 123,
    "endpoint": "/external/server/DeleteCurrentSuite",
    "pages": [
      {
        "number": 123,
        "html": "./assets/html-pages/page-123.html",
        "label": "PDF 第 123 页"
      }
    ],
    "searchText": "3.31 删除生效套餐 接口地址/external/server/DeleteCurrentSuite\n请求格式\n参数名称 必须 类型 描述信息\nid M int 生效套餐 Id\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.32",
    "title": "创建在用电话卡",
    "slug": "s-3-32",
    "level": 2,
    "sourcePage": 124,
    "endPage": 124,
    "endpoint": "/external/server/CreateActivePhoneCard",
    "pages": [
      {
        "number": 124,
        "html": "./assets/html-pages/page-124.html",
        "label": "PDF 第 124 页"
      }
    ],
    "searchText": "3.32 创建在用电话卡 接口地址/external/server/CreateActivePhoneCard\n请求格式\n参数名称 必须 类型 描述信息\npin M String 卡号\naccount M String 在用电话卡所属账户\npassword O String 密码\ndisplayE164 O String 去电显示\nbindLimit O Integer 绑定号码上限\n不设置:表示无限制\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\npassword O Integer 当创建请求未设置密码时，系统自\n动生成随机密码"
  },
  {
    "no": "3.33",
    "title": "修改在用电话卡",
    "slug": "s-3-33",
    "level": 2,
    "sourcePage": 125,
    "endPage": 125,
    "endpoint": "/external/server/ModifyActivePhoneCard",
    "pages": [
      {
        "number": 125,
        "html": "./assets/html-pages/page-125.html",
        "label": "PDF 第 125 页"
      }
    ],
    "searchText": "3.33 修改在用电话卡 接口地址/external/server/ModifyActivePhoneCard\n请求格式\n参数名称 必须 类型 描述信息\npin M String 卡号\naccount O String 在用电话卡所属账户\npassword O String 密码\ndisplayE164 O String 去电显示\nbindLimit O Integer 绑定号码上限\n不设置:表示无限制\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.34",
    "title": "删除在用电话卡",
    "slug": "s-3-34",
    "level": 2,
    "sourcePage": 126,
    "endPage": 126,
    "endpoint": "/external/server/DeleteActivePhoneCard",
    "pages": [
      {
        "number": 126,
        "html": "./assets/html-pages/page-126.html",
        "label": "PDF 第 126 页"
      }
    ],
    "searchText": "3.34 删除在用电话卡 接口地址/external/server/DeleteActivePhoneCard\n请求格式\n参数名称 必须 类型 描述信息\npin M String 卡号\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.35",
    "title": "查询在用电话卡",
    "slug": "s-3-35",
    "level": 2,
    "sourcePage": 127,
    "endPage": 127,
    "endpoint": "/external/server/GetActivePhoneCard",
    "pages": [
      {
        "number": 127,
        "html": "./assets/html-pages/page-127.html",
        "label": "PDF 第 127 页"
      }
    ],
    "searchText": "3.35 查询在用电话卡 接口地址/external/server/GetActivePhoneCard\n请求格式\n参数名称 必须 类型 描述信息\npins O String [] 卡号列表(若 accounts 不设置则此参\n数必选)\naccounts O String [] 账户号码列表(若 pins 不设置则此\n参数必选)\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoActivePhoneCards O InfoActivePhoneCard [] 在用电话卡信息\nInfoActivePhoneCard 格式\n参数名称 必须 类型 描述信息\npin M String 卡号\naccount M String 在用电话卡所属账户\npassword M String 密码\ndisplayE164 M String 去电显示\nbindLimit M int 绑定号码上限\n不设置:表示无限制\nactiveTime M long 激活时间（UTC 1970-01-01 至今的\n毫秒数 ）\nmemo M String 备注"
  },
  {
    "no": "3.36",
    "title": "创建绑定号码",
    "slug": "s-3-36",
    "level": 2,
    "sourcePage": 128,
    "endPage": 128,
    "endpoint": "/external/server/CreateBindedE164",
    "pages": [
      {
        "number": 128,
        "html": "./assets/html-pages/page-128.html",
        "label": "PDF 第 128 页"
      }
    ],
    "searchText": "3.36 创建绑定号码 接口地址/external/server/CreateBindedE164\n请求格式\n参数名称 必须 类型 描述信息\ne164 M String 绑定号码\npin M String 卡号\ndisplayE164 O String 去电显示\nrewriteRulesOutCallee O LongString 呼出拨号规则\nlanguage O String 语言\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.37",
    "title": "修改绑定号码",
    "slug": "s-3-37",
    "level": 2,
    "sourcePage": 129,
    "endPage": 129,
    "endpoint": "/external/server/ModifyBindedE164",
    "pages": [
      {
        "number": 129,
        "html": "./assets/html-pages/page-129.html",
        "label": "PDF 第 129 页"
      }
    ],
    "searchText": "3.37 修改绑定号码 接口地址/external/server/ModifyBindedE164\n请求格式\n参数名称 必须 类型 描述信息\ne164 M String 绑定号码\npin O String 卡号\ndisplayE164 O String 去电显示\nrewriteRulesOutCallee O LongString 呼出拨号规则\nlanguage O String 语言\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.38",
    "title": "删除绑定号码",
    "slug": "s-3-38",
    "level": 2,
    "sourcePage": 130,
    "endPage": 130,
    "endpoint": "/external/server/DeleteBindedE164",
    "pages": [
      {
        "number": 130,
        "html": "./assets/html-pages/page-130.html",
        "label": "PDF 第 130 页"
      }
    ],
    "searchText": "3.38 删除绑定号码 接口地址/external/server/DeleteBindedE164\n请求格式\n参数名称 必须 类型 描述信息\ne164 M String 绑定号码\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.39",
    "title": "查询绑定号码",
    "slug": "s-3-39",
    "level": 2,
    "sourcePage": 131,
    "endPage": 131,
    "endpoint": "/external/server/GetBindedE164",
    "pages": [
      {
        "number": 131,
        "html": "./assets/html-pages/page-131.html",
        "label": "PDF 第 131 页"
      }
    ],
    "searchText": "3.39 查询绑定号码 接口地址/external/server/GetBindedE164\n请求格式\n包含参数必选其一\n参数名称 必须 类型 描述信息\ne164s O String [] 绑定号码列表\npin O String 在用电话卡卡号\naccount O String 账户号码\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoBindedE164s O InfoBindedE164 [] 绑定号码信息\nInfoBindedE164 格式\n参数名称 必须 类型 描述信息\ne164 M String 绑定号码\npin M String 卡号\naccount M String 在用电话卡所属账户\ndisplayE164 M String 去电显示\nrewriteRulesOutCallee M LongString 呼出拨号规则\nbindTime M long 绑定时间（UTC 1970-01-01 至今的\n毫秒数 ）\nlanguage M String 语言\nmemo M String 备注"
  },
  {
    "no": "3.40",
    "title": "查询费率组",
    "slug": "s-3-40",
    "level": 2,
    "sourcePage": 132,
    "endPage": 132,
    "endpoint": "/external/server/GetFeeRateGroup",
    "pages": [
      {
        "number": 132,
        "html": "./assets/html-pages/page-132.html",
        "label": "PDF 第 132 页"
      }
    ],
    "searchText": "3.40 查询费率组 接口地址/external/server/GetFeeRateGroup\n请求格式\n参数名称 必须 类型 描述信息\nnames O String [] 费率组名称列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoFeeRateGroups O InfoFeeRateGroup [] 费率组信息\nInfoFeeRateGroup 格式\n参数名称 必须 类型 描述信息\nname M String 费率组名称\nmemo M String 备注"
  },
  {
    "no": "3.41",
    "title": "创建费率组",
    "slug": "s-3-41",
    "level": 2,
    "sourcePage": 133,
    "endPage": 133,
    "endpoint": "/external/server/CreateFeeRateGroup",
    "pages": [
      {
        "number": 133,
        "html": "./assets/html-pages/page-133.html",
        "label": "PDF 第 133 页"
      }
    ],
    "searchText": "3.41 创建费率组 接口地址/external/server/CreateFeeRateGroup\n请求格式\n参数名称 必须 类型 描述信息\nname M String 费率组名称\nfakeMinute O Integer 电话卡 60 秒等效时长\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.42",
    "title": "修改费率组",
    "slug": "s-3-42",
    "level": 2,
    "sourcePage": 134,
    "endPage": 134,
    "endpoint": "/external/server/ModifyFeeRateGroup",
    "pages": [
      {
        "number": 134,
        "html": "./assets/html-pages/page-134.html",
        "label": "PDF 第 134 页"
      }
    ],
    "searchText": "3.42 修改费率组 接口地址/external/server/ModifyFeeRateGroup\n请求格式\n参数名称 必须 类型 描述信息\nname M String 费率组名称\nfakeMinute O Integer 电话卡 60 秒等效时长\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.43",
    "title": "删除费率组",
    "slug": "s-3-43",
    "level": 2,
    "sourcePage": 135,
    "endPage": 135,
    "endpoint": "/external/server/DeleteFeeRateGroup",
    "pages": [
      {
        "number": 135,
        "html": "./assets/html-pages/page-135.html",
        "label": "PDF 第 135 页"
      }
    ],
    "searchText": "3.43 删除费率组 接口地址/external/server/DeleteFeeRateGroup\n请求格式\n参数名称 必须 类型 描述信息\nname M String 费率组名称\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.44",
    "title": "查询费率",
    "slug": "s-3-44",
    "level": 2,
    "sourcePage": 136,
    "endPage": 137,
    "endpoint": "/external/server/GetFeeRate",
    "pages": [
      {
        "number": 136,
        "html": "./assets/html-pages/page-136.html",
        "label": "PDF 第 136 页"
      },
      {
        "number": 137,
        "html": "./assets/html-pages/page-137.html",
        "label": "PDF 第 137 页"
      }
    ],
    "searchText": "3.44 查询费率 接口地址/external/server/GetFeeRate\n请求格式\n参数名称 必须 类型 描述信息\nfeeRateGroup M String 费率组名称\nareaCodes O String [] 地区信息列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoFeeRates O InfoFeeRate [] 费率信息\nInfoFeeRate 格式\n参数名称 必须 类型 描述信息\nfeePrefix M String 费率前缀\nareaCode M String 地区前缀\ntype M int 费率类型\n1:网内通话\n2:本地市话\n4:国内长途\n5:国际长途\nareaName M String 地区名称\ninfoFeeRateSections M InfoFeeRateSection [] 分段费率\nfee M double 计费费率\nperiod M int 计费周期\nlockType M int 锁定类型\n0:无锁定\n1:锁定\nivrFee M double 电话卡提示费率\nivrPeriod M int 电话卡提示计费周期\nInfoFeeRateSection 格式\n参数名称 必须 类型 描述信息\nfee M double 金额\ntime M int 计费时长\nposition M int 序号"
  },
  {
    "no": "3.45",
    "title": "查询号码变换表",
    "slug": "s-3-45",
    "level": 2,
    "sourcePage": 138,
    "endPage": 138,
    "endpoint": "/external/server/GetE164Convert",
    "pages": [
      {
        "number": 138,
        "html": "./assets/html-pages/page-138.html",
        "label": "PDF 第 138 页"
      }
    ],
    "searchText": "3.45 查询号码变换表 接口地址/external/server/GetE164Convert\n请求格式\n参数名称 必须 类型 描述信息\naccount O String 账户号码\ne164 O String 电话号码\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoE164Converts O InfoE164Convert [] 缴费历史记录\nInfoE164Convert 格式\n参数名称 必须 类型 描述信息\nid M int 唯一标识\naccount M String 账户名称\ne164 M String 电话号码\nmappingGatewayCallerE1\nM String 对接网关呼入主叫号码\nroutingGatewayCalleeE16\nM String 落地网关呼出被叫号码\nmemo M String 缴费后账户余额"
  },
  {
    "no": "3.46",
    "title": "查询缴费记录",
    "slug": "s-3-46",
    "level": 2,
    "sourcePage": 139,
    "endPage": 140,
    "endpoint": "/external/server/GetPayHistory",
    "pages": [
      {
        "number": 139,
        "html": "./assets/html-pages/page-139.html",
        "label": "PDF 第 139 页"
      },
      {
        "number": 140,
        "html": "./assets/html-pages/page-140.html",
        "label": "PDF 第 140 页"
      }
    ],
    "searchText": "3.46 查询缴费记录 接口地址/external/server/GetPayHistory\n请求格式\n参数名称 必须 类型 描述信息\naccount O String 账户号码（当 agentAccount 不设置\n时，此参数必须设置）\nagentAccount O String 代理商账户号码 （当account 不设置\n时，此参数必须设置）\nbeginTime M String 开始时间\n格式:yyyyMMddHHmmss\nendTime M String 终止时间\n格式:yyyyMMddHHmmss\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoPayHistorys O InfoPayHistory[] 缴费历史记录\nInfoPayHistory 格式\n参数名称 必须 类型 描述信息\naccount M String 账户名称\nfee M double 缴费金额\ntype M int 类型\n0:充值\n1:扣费\n2:开户\n3:归零\npayType M int 方式\n0:现金\n2:充值卡\n5:其他\ncustomerMoney M double 缴费后账户余额\n参数名称 必须 类型 描述信息\npayTime M long 缴费时间（UTC 1970-01-01 至今的\n毫秒数 ）\nmemo M String 备注"
  },
  {
    "no": "3.47",
    "title": "查询历史话单",
    "slug": "s-3-47",
    "level": 2,
    "sourcePage": 141,
    "endPage": 143,
    "endpoint": "/external/server/GetCdr",
    "pages": [
      {
        "number": 141,
        "html": "./assets/html-pages/page-141.html",
        "label": "PDF 第 141 页"
      },
      {
        "number": 142,
        "html": "./assets/html-pages/page-142.html",
        "label": "PDF 第 142 页"
      },
      {
        "number": 143,
        "html": "./assets/html-pages/page-143.html",
        "label": "PDF 第 143 页"
      }
    ],
    "searchText": "3.47 查询历史话单 接口地址/external/server/GetCdr\n该接口设计目的主要用于第三方账务处理使用，由于性能问题，不应该用于频繁操作情况\n请求格式\n参数名称 必须 类型 描述信息\naccounts M String [] 账户号码列表\ncallerE164 O String 主叫号码\ncalleeE164 O String 被叫号码\ncallerGateway O String 主叫网关\ncalleeGateway O String 被叫网关\nbeginTime M String 开始时间\n格式:yyyyMMdd\nendTime M String 终止时间\n格式:yyyyMMdd\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoCdrs O InfoCdr [] 话单信息\nInfoCdr 格式\n参数名称 必须 类型 描述信息\ncallerE164 M String 计费主叫号码\ncallerAccessE164 M String 呼入主叫号码\ncallerProductId M String 主叫设备名称\ncallerToGatewayE164 M String 呼出主叫号码\ncallerGateway M String 主叫网关\ncallerip M String 主叫 IP 地址\ncalleeE164 M String 计费被叫号码\ncalleeAccessE164 M String 呼入被叫被叫\ncalleeProductId M String 被叫设备名称\n参数名称 必须 类型 描述信息\ncalleeToGatewayE164 M String 呼出被叫号码\ncalleeGateway M String 被叫网关\ncalleeip M String 被叫 IP 地址\nstart M long 起始时间（UTC 1970-01-01 至今的\n毫秒数 ）\nstop M long 终止时间（UTC 1970-01-01 至今的\n毫秒数 ）\nholdTime M int 通话的时长（秒）\nfeeTime M int 通话计费时长（秒）\nfee M double 账户扣费金额\nfeePrefix M String 计费地区前缀\nsuiteFee M double 套餐费用\nsuiteFeeTime M int 套餐赠送时长（秒）\nagentFee M double 代理商扣费金额\nagentFeeTime M int 代理商计费时长（秒）\nagentFeePrefix M String 代理商计费地区前缀\nagentSuiteFee M double 代理商套餐费用\nagentSuiteFeeTime M int 代理商赠送时长（秒）\ncallLevel M int 通话级别\n1:网内通话\n2:本地市话\n4:国内长途\n5:国际长途\naccount M String 账户号码\naccountName M String 账户名称\nagentAccount M String 代理商账户号码\nagentName M String 代理商账户名称\nendDirection M int 挂断方\n0:主叫\n1:被叫\n2:服务器\nendReason M int 终止原因:请参考《终止原因》说明\n参数名称 必须 类型 描述信息\ncalleeBilling M int 计费方式\n0:主叫计费\n1:被叫计费\n2:外部计费\nbillingMode M int 计费模式\n0:根据话机所在账户计费\n1:根据对接网关所在账户计费\n2:根据绑定号码所在账户计费\n3:根据在用电话卡所在账户计费\nflowNo M long 话单唯一标识"
  },
  {
    "no": "3.48",
    "title": "查询账户明细报表",
    "slug": "s-3-48",
    "level": 2,
    "sourcePage": 144,
    "endPage": 145,
    "endpoint": "/external/server/GetReportCustomerFee",
    "pages": [
      {
        "number": 144,
        "html": "./assets/html-pages/page-144.html",
        "label": "PDF 第 144 页"
      },
      {
        "number": 145,
        "html": "./assets/html-pages/page-145.html",
        "label": "PDF 第 145 页"
      }
    ],
    "searchText": "3.48 查询账户明细报表 接口地址/external/server/GetReportCustomerFee\n请求格式\n参数名称 必须 类型 描述信息\naccounts M String [] 账户号码列表\nperiod M int 统计周期（天）\n-2:按月统计\nbeginTime M String 开始时间\n格式:yyyyMMdd\nendTime M String 终止时间\n格式:yyyyMMdd\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoReportCustomerFees O InfoReportCustomerFee [] 账户消费明细记录\nInfoReportCustomerFee 格式\n参数名称 必须 类型 描述信息\nbeginTime M long 起始时间（UTC 1970-01-01 至今的\n毫秒数 ）\nendTime M long 终止时间（UTC 1970-01-01 至今的\n毫秒数 ）\naccount M String 账户号码\naccountName M String 账户名称\ncdrCount M long 话单总计\ntotalFee M double 费用总计\ntotalTime M long 计费时长总计（秒）\ntotalSuiteFee M double 套餐费用总计\ntotalSuiteFeeTime M long 套餐赠送时长总计（秒）\nnetFee M double 网内通话费用\nnetTime M long 网内通话计费时长（秒）\n参数名称 必须 类型 描述信息\nnetCount M int 网内通话数量\nlocalFee M double 本地通话费用\nlocalTime M long 本地通话计费时长（秒）\nlocalCount M int 本地通话数量\ndomesticFee M double 国内长途费用\ndomesticTime M long 国内通话计费时长（秒）\ndomesticCount M int 国内通话数量\ninternationalFee M double 国际长途费用\ninternationalTime M long 国际长途计费时长（秒）\ninternationalCount M int 国际长途数量"
  },
  {
    "no": "3.49",
    "title": "查询话机明细报表",
    "slug": "s-3-49",
    "level": 2,
    "sourcePage": 146,
    "endPage": 147,
    "endpoint": "/external/server/GetReportPhoneFee",
    "pages": [
      {
        "number": 146,
        "html": "./assets/html-pages/page-146.html",
        "label": "PDF 第 146 页"
      },
      {
        "number": 147,
        "html": "./assets/html-pages/page-147.html",
        "label": "PDF 第 147 页"
      }
    ],
    "searchText": "3.49 查询话机明细报表 接口地址/external/server/GetReportPhoneFee\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码\ne164s O String [] 话机号码列表\nperiod M int 统计周期（天）\n-2:按月统计\nbeginTime M String 开始时间\n格式:yyyyMMdd\nendTime M String 终止时间\n格式:yyyyMMdd\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoReportPhoneFees O InfoReportPhoneFee [] 话机消费明细记录\nInfoReportPhoneFee 格式\n参数名称 必须 类型 描述信息\nbeginTime M long 起始时间（UTC 1970-01-01 至今的\n毫秒数 ）\nendTime M long 终止时间（UTC 1970-01-01 至今的\n毫秒数 ）\ne164 M String 话机号码\ncalleeBilling M int 0:主叫计费\n1:被叫计费\naccount M String 账户号码\naccountName M String 账户名称\nagentAccount M String 代理商账号\ncdrCount M long 话单总计\ntotalFee M double 费用总计\n参数名称 必须 类型 描述信息\ntotalTime M long 计费时长总计（秒）\ntotalSuiteFee M double 套餐费用总计\ntotalSuiteFeeTime M long 套餐赠送时长总计（秒）\nnetFee M double 网内通话费用\nnetTime M long 网内通话计费时长（秒）\nnetCount M int 网内通话数量\nlocalFee M double 本地通话费用\nlocalTime M long 本地通话计费时长（秒）\nlocalCount M int 本地通话数量\ndomesticFee M double 国内长途费用\ndomesticTime M long 国内通话计费时长（秒）\ndomesticCount M int 国内通话数量\ninternationalFee M double 国际长途费用\ninternationalTime M long 国际长途计费时长（秒）\ninternationalCount M int 国际长途数量"
  },
  {
    "no": "3.50",
    "title": "查询账户地区明细报表",
    "slug": "s-3-50",
    "level": 2,
    "sourcePage": 148,
    "endPage": 149,
    "endpoint": "/external/server/GetReportCustomerLocationFee",
    "pages": [
      {
        "number": 148,
        "html": "./assets/html-pages/page-148.html",
        "label": "PDF 第 148 页"
      },
      {
        "number": 149,
        "html": "./assets/html-pages/page-149.html",
        "label": "PDF 第 149 页"
      }
    ],
    "searchText": "3.50 查询账户地区明细报表 接口地址/external/server/GetReportCustomerLocationFee\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码\nareaCode O String 地区前缀\nperiod M int 统计周期（天）\n-2:按月统计\nbeginTime M String 开始时间\n格式:yyyyMMdd\nendTime M String 终止时间\n格式:yyyyMMdd\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoReportCustomerLocati\nonFees\nO InfoReportCustomerLocati\nonFee []\n账户地区消费明细记录\nInfoReportCustomerLocationFee 格式\n参数名称 必须 类型 描述信息\nbeginTime M long 起始时间（UTC 1970-01-01 至今的\n毫秒数 ）\nendTime M long 终止时间（UTC 1970-01-01 至今的\n毫秒数 ）\nareaCode M String 地区前缀\nareaName M String 地区名称\naccount M String 账户号码\naccountName M String 账户名称\nagentAccount M String 代理商账号\ncdrCount M long 话单总计\ntotalFee M double 费用总计\n参数名称 必须 类型 描述信息\ntotalTime M long 计费时长总计（秒）\ntotalSuiteFee M double 套餐费用总计\ntotalSuiteFeeTime M long 套餐赠送时长总计（秒）"
  },
  {
    "no": "3.51",
    "title": "外部计费",
    "slug": "s-3-51",
    "level": 2,
    "sourcePage": 150,
    "endPage": 151,
    "endpoint": "/external/server/CreateCdr",
    "pages": [
      {
        "number": 150,
        "html": "./assets/html-pages/page-150.html",
        "label": "PDF 第 150 页"
      },
      {
        "number": 151,
        "html": "./assets/html-pages/page-151.html",
        "label": "PDF 第 151 页"
      }
    ],
    "searchText": "3.51 外部计费 接口地址/external/server/CreateCdr\n请求格式\n参数名称 必须 类型 描述信息\nbillingMode M int 计费模式\n0:根据 callerE164 对应话机所在账\n户计费\n1:根据 callerGatewayId 对应对接网\n关所在账户计费\n2:根据 callerE164 对应绑定号码所\n在账户计费\n3:根据 callerE164 对应在用电话卡\n所在账户计费\naccount O String 计费账户\n不设置:系统将根据 billingMode 计\n算出对应的账户\ncallerE164 O String 主叫号码\ncalleeE164 O String 被叫号码\ncallerIp O String 主叫 IP\ncallerGatewayId O String 主叫经由网关\ncallerProductId O String 主叫设备名称\ncallerToGatewayE164 O String 呼出主叫\ncalleeIp O String 被叫 IP\ncalleeGatewayId O String 被叫经由网关\ncalleeProductId O String 被叫设备名称\ncalleeToGatewayE164 O String 呼出被叫\nstartTime O Long 起始时间（UTC 1970-01-01 至今的\n毫秒数 ）\n不设置:使用服务器当前时间\nstopTime O Long 终止时间（UTC 1970-01-01 至今的\n毫秒数 ）\n不设置:使用 startTime\nbillingTime M int 通话时长（通过 calleeE164 对应费\n率的计费周期计算出计费时长）\n参数名称 必须 类型 描述信息\nendDirection O Integer 挂断方\n0:主叫\n1:被叫\n2:服务器\nendReason O Integer 终止原因:请参考《终止原因》说明\nflowNo O Long -1:由系统自动产生\n>=0:直接使用此值作为话单主键，\n当该值与已经记录的 Cdr 发生冲突\n时不进行记录与扣费。\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.52",
    "title": "查询账户电话簿",
    "slug": "s-3-52",
    "level": 2,
    "sourcePage": 152,
    "endPage": 153,
    "endpoint": "/external/server/GetCustomerPhoneBook",
    "pages": [
      {
        "number": 152,
        "html": "./assets/html-pages/page-152.html",
        "label": "PDF 第 152 页"
      },
      {
        "number": 153,
        "html": "./assets/html-pages/page-153.html",
        "label": "PDF 第 153 页"
      }
    ],
    "searchText": "3.52 查询账户电话簿 接口地址/external/server/GetCustomerPhoneBook\n请求格式\n参数名称 必须 类型 描述信息\naccount O String 账户号码\ne164 O String 电话号码\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoCustomerPhoneBooks O InfoCustomerPhoneBook\n[]\n电话簿信息\nInfoCustomerPhoneBook 格式\n参数名称 必须 类型 描述信息\ne164 M String 电话号码\nshortE164s M String[] 短号列表\nname M String 姓名\ndepartment M String 部门\ndeviceType M int 设备类型\n0:无\n1:移动电话\n2:固定电话\n3:IP 电话\naddressType M int 地址类型\n0:无\n1:办公电话\n2:家庭电话\ntype M int 创建类型\n0:用户创建\n1:自动记忆\nlastUpdateTime M long 最 后 一 次 更 新 时 间 （ UTC\n1970-01-01 至今的毫秒数）\n参数名称 必须 类型 描述信息\nmemo M String 备注"
  },
  {
    "no": "3.53",
    "title": "创建账户电话簿",
    "slug": "s-3-53",
    "level": 2,
    "sourcePage": 154,
    "endPage": 155,
    "endpoint": "/external/server/CreateCustomerPhoneBook",
    "pages": [
      {
        "number": 154,
        "html": "./assets/html-pages/page-154.html",
        "label": "PDF 第 154 页"
      },
      {
        "number": 155,
        "html": "./assets/html-pages/page-155.html",
        "label": "PDF 第 155 页"
      }
    ],
    "searchText": "3.53 创建账户电话簿 接口地址/external/server/CreateCustomerPhoneBook\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码\ne164 O String 电 话 号 码 ， 当\ninfoCustomerPhoneBookOverWrite\n未设置时 ， 此 选 项 必 选 ， 当\ninfoCustomerPhoneBookOverWrite\n设置时，若此项设置，表示需要更\n新的电话号码\ninfoCustomerPhoneBookO\nverWrite\nO InfoCustomerPhoneBookO\nverWrite\n采用覆盖模式创建或替换电话簿，\n注意若非替换原有电话簿内容，则\n电话号码是必须存在的\nshortE164s O String[] 短号列表\nname O String 姓名\ndepartment O String 部门\ndeviceType O Integer 设备类型\n0:无（默认）\n1:移动电话\n2:固定电话\n3:IP 电话\naddressType O Integer 地址类型\n0:无（默认）\n1:办公电话\n2:家庭电话\ntype O Integer 创建类型\n0:用户创建（默认）\n1:自动记忆\nmemo O String 备注\nInfoCustomerPhoneBookOverWrite 格式\n参数名称 必须 类型 描述信息\ne164 O int 采用电话号码查找可能覆盖的原有\n电话簿信息， 不可与shortE164 同时\n设置\n参数名称 必须 类型 描述信息\nshortE164 O int 采用短号查找可能覆盖的原有电话\n簿信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.54",
    "title": "修改账户电话簿",
    "slug": "s-3-54",
    "level": 2,
    "sourcePage": 156,
    "endPage": 156,
    "endpoint": "/external/server/ModifyCustomerPhoneBook",
    "pages": [
      {
        "number": 156,
        "html": "./assets/html-pages/page-156.html",
        "label": "PDF 第 156 页"
      }
    ],
    "searchText": "3.54 修改账户电话簿 接口地址/external/server/ModifyCustomerPhoneBook\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码\ne164 M String 电话号码\nnewE164 O String 新电话号码\nshortE164s O String[] 短号列表\nname O String 姓名\ndepartment O String 部门\ndeviceType O Integer 设备类型\n0:无（默认）\n1:移动电话\n2:固定电话\n3:IP 电话\naddressType O Integer 地址类型\n0:无（默认）\n1:办公电话\n2:家庭电话\ntype O Integer 创建类型\n0:用户创建（默认）\n1:自动记忆\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.55",
    "title": "删除账户电话簿",
    "slug": "s-3-55",
    "level": 2,
    "sourcePage": 157,
    "endPage": 157,
    "endpoint": "/external/server/DeleteCustomerPhoneBook",
    "pages": [
      {
        "number": 157,
        "html": "./assets/html-pages/page-157.html",
        "label": "PDF 第 157 页"
      }
    ],
    "searchText": "3.55 删除账户电话簿 接口地址/external/server/DeleteCustomerPhoneBook\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码\ne164s M String[] 电话号码列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.56",
    "title": "查询软交换",
    "slug": "s-3-56",
    "level": 2,
    "sourcePage": 158,
    "endPage": 158,
    "endpoint": "/external/server/GetSoftSwitch",
    "pages": [
      {
        "number": 158,
        "html": "./assets/html-pages/page-158.html",
        "label": "PDF 第 158 页"
      }
    ],
    "searchText": "3.56 查询软交换 接口地址/external/server/GetSoftSwitch\n请求格式\n参数名称 必须 类型 描述信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoSoftSwitches O InfoSoftSwitch [] 软交换信息\nInfoSoftSwitch 格式\n参数名称 必须 类型 描述信息\nname M String 软交换接入名称\nidentification M String 软交换标识\ncreateTime M long 创建时间（UTC 1970-01-01 至今的\n毫秒数 ）\naccessTime O Long 接入时间（UTC 1970-01-01 至今的\n毫秒数 ）\naccessAddress O String 接入地址\nmemo M String 备注"
  },
  {
    "no": "3.57",
    "title": "查询性能",
    "slug": "s-3-57",
    "level": 2,
    "sourcePage": 159,
    "endPage": 159,
    "endpoint": "/external/server/GetPerformance",
    "pages": [
      {
        "number": 159,
        "html": "./assets/html-pages/page-159.html",
        "label": "PDF 第 159 页"
      }
    ],
    "searchText": "3.57 查询性能 接口地址/external/server/GetPerformance\n请求格式\n参数名称 必须 类型 描述信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoPerformance O InfoPerformance 性能信息\nInfoPerformance 格式\n参数名称 必须 类型 描述信息\ncallSize M int 并发数量\ncdrQueueSize M int 话单队列长度"
  },
  {
    "no": "3.58",
    "title": "电话卡充值",
    "slug": "s-3-58",
    "level": 2,
    "sourcePage": 160,
    "endPage": 160,
    "endpoint": "/external/server/PayByPhoneCard",
    "pages": [
      {
        "number": 160,
        "html": "./assets/html-pages/page-160.html",
        "label": "PDF 第 160 页"
      }
    ],
    "searchText": "3.58 电话卡充值 接口地址/external/server/PayByPhoneCard\n请求格式\n参数名称 必须 类型 描述信息\nownerName M String 充值对象名称\nownerType M int 充值对象名称类型\n2:账户\n6:平台话机\n11:在用电话卡卡号\n25:绑定号码\n44:对接网关\npin M String 电话卡卡号\npassword O String 电话卡密码\n注意:当不设置时仅校验卡号\nmemo O String 充值备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoPay O InfoPay 缴费历史记录"
  },
  {
    "no": "3.59",
    "title": "电话卡激活",
    "slug": "s-3-59",
    "level": 2,
    "sourcePage": 161,
    "endPage": 161,
    "endpoint": "/external/server/PhoneCardActive",
    "pages": [
      {
        "number": 161,
        "html": "./assets/html-pages/page-161.html",
        "label": "PDF 第 161 页"
      }
    ],
    "searchText": "3.59 电话卡激活 接口地址/external/server/PhoneCardActive\n请求格式\n参数名称 必须 类型 描述信息\npin M String 充值卡卡号\npassword O String 充值卡密码\n注意:当不设置时仅校验卡号\nbindedE164 O String 绑定号码\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.60",
    "title": "回拨",
    "slug": "s-3-60",
    "level": 2,
    "sourcePage": 162,
    "endPage": 163,
    "endpoint": "/external/server/CallBack",
    "pages": [
      {
        "number": 162,
        "html": "./assets/html-pages/page-162.html",
        "label": "PDF 第 162 页"
      },
      {
        "number": 163,
        "html": "./assets/html-pages/page-163.html",
        "label": "PDF 第 163 页"
      }
    ],
    "searchText": "3.60 回拨 接口地址/external/server/CallBack\n请求格式\n参数名称 必须 类型 描述信息\ncallerE164 M String 主叫（由用户在 Web 上输入）\ncallerDisplayNumber O String 主叫去电显示号码\n不设置，表示采用系统默认方式\ncalleeE164s M String 被叫（平台根据企业要求设置，可\n设置多个用,分隔）\naccessE164 M String 接入号码（流程所在话机号码）\naccessE164Password M String 接入号码密码 （流程所在话机密码）\ncallbackBillingE164 O String 回 拨 计 费 号 码 ， 不 设 置 时 使 用\ncallerE164 参数值\ncallbackBillingPassword O String 回拨计费密码\ncalloutBillingE164 O String 外 呼 计 费 号 码 ， 不 设 置 时 使 用\ncallerE164 参数值\ncalloutBillingPassword O String 外呼计费密码\ncalloutDisplayInFrom O String 外呼 Invite 内设置的 Display 号码\ntransactionId O String 提交识别码，用于本次 请求与后续\n状态通知、话单的对应\n字符取值范围\nA 至 Z，a 至 z，0 至 9，以及-、_\n补充说明\n回拨业务根据 accessE164 确定使用的语音业务， 在使用回拨业务前需正确配置 accessE164 对应话机\n的语音业务。当接入密码、回拨计费密码、外呼计费密码被设置时，则需校验对应号码的密码是否\n正确。请不要将此接口直接面向终端用户开放，终端用户直接提交此接口会造成密码在网络上明文\n传输，从而引发安全问题。\n⚫ 语音业务回拨计费方式\n时， 回拨使用accessE164 对应话机的账\n户进行计费\n时，计费账户查找顺序如下\n◆ callbackBillingE164 对应绑定号码的账户\n◆ callbackBillingE164 对应在用电话卡卡号的账户\n◆ callbackBillingE164 对应平台话机的账户\n◆ accessE164 对应平台话机的账户\n◼\n时，计费账户查找顺序如下\n◆ callbackBillingE164 对应绑定号码的账户\n◆ callbackBillingE164 对应在用电话卡卡号的账户\n◼\n时，回拨使用\ncallbackBillingE164 对应话机的账户进行计费\n⚫ 语音业务第二路方式\n◼\n时，回拨使用 accessE164 对应话机的账户进行计费\n◼\n时，计费账户查找顺序如下\n◆ calloutBillingE164 对应绑定号码的账户\n◆ calloutBillingE164 对应在用电话卡卡号的账户\n◼\n时，回拨使用 calloutBillingE164 对应话机的账户进行计费\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ntransactionId O String 与请求相同\n与 CallStateReport 的 transactionId\n一致\ncallIdentifier O String A 路呼叫唯一标识\n与 CallStateReport 的 callIdentifier\n一致\nB 路与 A 路前缀相同，仅后续尾数\n递增"
  },
  {
    "no": "3.61",
    "title": "播放语音",
    "slug": "s-3-61",
    "level": 2,
    "sourcePage": 164,
    "endPage": 165,
    "endpoint": "/external/server/PlayAudio",
    "pages": [
      {
        "number": 164,
        "html": "./assets/html-pages/page-164.html",
        "label": "PDF 第 164 页"
      },
      {
        "number": 165,
        "html": "./assets/html-pages/page-165.html",
        "label": "PDF 第 165 页"
      }
    ],
    "searchText": "3.61 播放语音 接口地址/external/server/PlayAudio\n请求格式\n参数名称 必须 类型 描述信息\naudioes M String 语音文件名称列表（使用逗号分隔\n多个文件名称）\nlanguage O String 默认使用 accessE164 对应语音流程\n的语言\ncallerDisplayNumber O String 主叫去电显示号码\n不设置，表示采用系统默认方式\ncallee M String 被叫号码\naccessE164 M String 接入号码（流程所在话机号码）\naccessE164Password M String 接入号码密码 （流程所在话机密码）\nbillingNumber O String 计费号码\nbillingNumberType O Integer 计费号码类型\n0:根据 billingNumber 对应话机所在\n账户计费\n2:根据 billingNumber 对应绑定号码\n所在账户计费\n3:根据 billingNumber 对应在用电话\n卡所在账户计费\ntransactionId O String 提交识别码，用于本次请求与后续\n状态通知、话单的对应\n字符取值范围\nA 至 Z，a 至 z，0 至 9，以及-、_\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ntransactionId O String 与请求相同\n与 CallStateReport 的 transactionId\n一致\n参数名称 必须 类型 描述信息\ncallIdentifier O String 呼叫唯一标识\n与 CallStateReport 的 callIdentifier\n一致"
  },
  {
    "no": "3.62",
    "title": "获取可用通话时长",
    "slug": "s-3-62",
    "level": 2,
    "sourcePage": 166,
    "endPage": 167,
    "endpoint": "/external/server/GetAvailableTime",
    "pages": [
      {
        "number": 166,
        "html": "./assets/html-pages/page-166.html",
        "label": "PDF 第 166 页"
      },
      {
        "number": 167,
        "html": "./assets/html-pages/page-167.html",
        "label": "PDF 第 167 页"
      }
    ],
    "searchText": "3.62 获取可用通话时长 接口地址/external/server/GetAvailableTime\n请求格式\n参数名称 必须 类型 描述信息\nbillingName M String 计费主叫名称\nbillingMode M int 计费主叫类型\n0:平台话机\n1:对接网关\n2:绑定号码\n3:电话卡卡号\n4:优先根据电话卡卡号找账户，其\n次根据对接网关找账户\ncalleeE164 M String 被叫号码\ncalleeEndpointType O Integer 被叫号码送达的设备\n0:平台话机\n1:落地网关\n(当为平台话机时， 可对被叫号码判\n断是否在特服号内，从而免计费)\nroutingGateway O String 落地网关名称\ncalleeToGatewayE164 O String 落地网关拨号规则后的号码\n（配合 routingGateway 一并使用，\n当落地网关需要校验结算账户余额\n时参数有效）\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\nInfoAvailableTime O InfoAvailableTime 可用时长信息\nInfoAvailableTime格式\n参数名称 必须 类型 描述信息\naccount O String 账户账号\naccountName O String 账户名称\n参数名称 必须 类型 描述信息\naccountMoney O Double 账户余额（不包括套餐内的赠送金\n额）\ntimeRemain M int >0:表示可通话的秒数\n<0:不可通话的原因， 请参考终止原\n因文档\ntimeRemainRoutingGatew\nay\nO Integer >0:表示落地网关可通话的秒数\n<0:落地网关不可通话的原因， 请参\n考终止原因文档"
  },
  {
    "no": "3.63",
    "title": "获取 Ivr 第二路可用通话时长",
    "slug": "s-3-63",
    "level": 2,
    "sourcePage": 168,
    "endPage": 169,
    "endpoint": "/external/server/GetIvrSecondAvailableTime",
    "pages": [
      {
        "number": 168,
        "html": "./assets/html-pages/page-168.html",
        "label": "PDF 第 168 页"
      },
      {
        "number": 169,
        "html": "./assets/html-pages/page-169.html",
        "label": "PDF 第 169 页"
      }
    ],
    "searchText": "3.63 获取 Ivr 第二路可用通话时长 接口地址/external/server/GetIvrSecondAvailableTime\n请求格式\n参数名称 必须 类型 描述信息\nbillingNumber M String 计费主叫号码\nbillingType M int 计费主叫类型\n0:接入号对应话机\n1:在用电话卡\n2:自动，匹配顺序为绑定号码、电\n话卡卡号、平台话机号码\n3:主叫号对应话机\ncalleeE164 M String 被叫号码\naccessE164 O String 接入号\n当设置此值时要求主叫账户与接入\n号账户存在共同的按照流量计费的\n代理商账户或各自代理商账户均无\n流量计费模式。\nmergeBillingType O Integer 叠加计费方式\n0:不叠加\n1:叠加接入号到第二路\n2:叠加主叫号到第二路\nmergeE164 O String 需叠加的计费号码\nfirstE164 M String 第一路的被叫号码\nfirstConnectTime long 第 一 路 接 通 的 时 间 （ UTC\n1970-01-01 至今的毫秒数）\nfirstStopTime long 第一路需计算的已经结束的时间\n（UTC 1970-01-01 至今的毫秒数）\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoIvrSecondAvailableTi\nme\nO InfoIvrSecondAvailableTi\nme\n可用时长信息\nInfoIvrSecondAvailableTime格式\n参数名称 必须 类型 描述信息\naccount O String 账户账号\naccountName O String 账户名称\naccountMoney O Double 账户余额（不包括套餐内 的赠送金\n额）\ntimeRemain M int >0:表示可通话的秒数\n<0:不可通话的原因， 请参考终止原\n因文档"
  },
  {
    "no": "3.64",
    "title": "查询其他收入记录",
    "slug": "s-3-64",
    "level": 2,
    "sourcePage": 170,
    "endPage": 170,
    "endpoint": "/external/server/GetConsumption",
    "pages": [
      {
        "number": 170,
        "html": "./assets/html-pages/page-170.html",
        "label": "PDF 第 170 页"
      }
    ],
    "searchText": "3.64 查询其他收入记录 接口地址/external/server/GetConsumption\n请求格式\n参数名称 必须 类型 描述信息\naccount O String 账户号码（当 agentAccount 不设置\n时，此参数必须设置）\nagentAccount O String 代理商账户号码 （当account 不设置\n时，此参数必须设置）\nbeginTime M String 开始时间\n格式:yyyyMMddHHmmss\nendTime M String 终止时间\n格式:yyyyMMddHHmmss\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoConsumptions O InfoConsumption [] 其他收入记录\nInfoConsumption 格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码\nmoney M double 消费金额\ncustomerMoney M double 账户余额\ntype M int 类型\n0:套餐租金\n1:话机月租\n2:话机最低消费不足\n3:套餐最低消费不足\nconsumptionName M int 消费来源\ntime M long 时间（UTC 1970-01-01 至今的毫秒\n数 ）"
  },
  {
    "no": "3.65",
    "title": "获取所有账户账号",
    "slug": "s-3-65",
    "level": 2,
    "sourcePage": 171,
    "endPage": 171,
    "endpoint": "/external/server/GetAllCustomers",
    "pages": [
      {
        "number": 171,
        "html": "./assets/html-pages/page-171.html",
        "label": "PDF 第 171 页"
      }
    ],
    "searchText": "3.65 获取所有账户账号 接口地址/external/server/GetAllCustomers\n请求格式\n参数名称 必须 类型 描述信息\ntype O int 获取内容方式，不设置与设置 0 相\n同\n0:获取 accounts\n1:获取 infoCustomerBriefs\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\naccounts O String [] 账户账号列表\ninfoCustomerBriefs O InfoCustomerBrief[] 账户简要信息列表\nInfoCustomerBrief 格式\n参数名称 必须 类型 描述信息\naccount M String 账户名称\nmoney M double 账户余额\nlimitMoney M double 透支限额"
  },
  {
    "no": "3.66",
    "title": "半直拨预约被叫号码",
    "slug": "s-3-66",
    "level": 2,
    "sourcePage": 172,
    "endPage": 172,
    "endpoint": "/external/server/ReserveCalleeE164",
    "pages": [
      {
        "number": 172,
        "html": "./assets/html-pages/page-172.html",
        "label": "PDF 第 172 页"
      }
    ],
    "searchText": "3.66 半直拨预约被叫号码 接口地址/external/server/ReserveCalleeE164\n请求格式\n参数名称 必须 类型 描述信息\ncallerE164 M String 主叫号码\ncalleeE164 M String 被叫被叫号码\naccessE164 M String 接入号码（流程所在话机号码）\naccessE164Password M String 接入号码密码 （流程所在话机密码）\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.67",
    "title": "创建号码群组",
    "slug": "s-3-67",
    "level": 2,
    "sourcePage": 173,
    "endPage": 173,
    "endpoint": "/external/server/CreateLimitE164Group",
    "pages": [
      {
        "number": 173,
        "html": "./assets/html-pages/page-173.html",
        "label": "PDF 第 173 页"
      }
    ],
    "searchText": "3.67 创建号码群组 接口地址/external/server/CreateLimitE164Group\n请求格式\n参数名称 必须 类型 描述信息\nname M String 号码群组名称（具备唯一性的可显\n标识）\nmemo O String 备注信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.68",
    "title": "修改号码群组",
    "slug": "s-3-68",
    "level": 2,
    "sourcePage": 174,
    "endPage": 174,
    "endpoint": "/external/server/ModifyLimitE164Group",
    "pages": [
      {
        "number": 174,
        "html": "./assets/html-pages/page-174.html",
        "label": "PDF 第 174 页"
      }
    ],
    "searchText": "3.68 修改号码群组 接口地址 /external/server/ModifyLimitE164Group\n请求格式\n参数名称 必须 类型 描述信息\nname M String 号码群组名称（具备唯一性的可显\n标识）\nmemo O String 备注信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.69",
    "title": "删除号码群组",
    "slug": "s-3-69",
    "level": 2,
    "sourcePage": 175,
    "endPage": 175,
    "endpoint": "/external/server/DeleteLimitE164Group",
    "pages": [
      {
        "number": 175,
        "html": "./assets/html-pages/page-175.html",
        "label": "PDF 第 175 页"
      }
    ],
    "searchText": "3.69 删除号码群组 接口地址/external/server/DeleteLimitE164Group\n请求格式\n参数名称 必须 类型 描述信息\nname M String 号码群组名称（具备唯一性的可显\n标识）\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.70",
    "title": "查询号码群组",
    "slug": "s-3-70",
    "level": 2,
    "sourcePage": 176,
    "endPage": 176,
    "endpoint": "/external/server/GetLimitE164Group",
    "pages": [
      {
        "number": 176,
        "html": "./assets/html-pages/page-176.html",
        "label": "PDF 第 176 页"
      }
    ],
    "searchText": "3.70 查询号码群组 接口地址/external/server/GetLimitE164Group\n请求格式\n参数名称 必须 类型 描述信息\nnames O String[] 号码群组列表；支持多个，逗号分\n隔\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\ninfoLimitE164Groups O infoLimitE164Group[] 号码群组信息\ninfoLimitE164Group 格式\n参数名称 必须 类型 描述信息\nname O String 号码群组名称\nmemo O String 号码群组备注信息"
  },
  {
    "no": "3.71",
    "title": "创建号码群组号码",
    "slug": "s-3-71",
    "level": 2,
    "sourcePage": 177,
    "endPage": 177,
    "endpoint": "/external/server/CreateLimitE164",
    "pages": [
      {
        "number": 177,
        "html": "./assets/html-pages/page-177.html",
        "label": "PDF 第 177 页"
      }
    ],
    "searchText": "3.71 创建号码群组号码 接口地址/external/server/CreateLimitE164\n请求格式\n参数名称 必须 类型 描述信息\nlimitE164GroupName M String 号码组名称\ninfoLimitE164s M InfoLimitE164 [] 号码组号码列表\nInfoLimitE164 格式\n参数名称 必须 类型 描述信息\ne164 M String 号码\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.72",
    "title": "删除号码群组号码",
    "slug": "s-3-72",
    "level": 2,
    "sourcePage": 178,
    "endPage": 178,
    "endpoint": "/external/server/DeleteLimitE164",
    "pages": [
      {
        "number": 178,
        "html": "./assets/html-pages/page-178.html",
        "label": "PDF 第 178 页"
      }
    ],
    "searchText": "3.72 删除号码群组号码 接口地址/external/server/DeleteLimitE164\n请求格式\n参数名称 必须 类型 描述信息\nlimitE164GroupName M String 号码组名称\ne164s M String [] 号码组号码列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.73",
    "title": "查询号码群组号码",
    "slug": "s-3-73",
    "level": 2,
    "sourcePage": 179,
    "endPage": 179,
    "endpoint": "/external/server/GetLimitE164",
    "pages": [
      {
        "number": 179,
        "html": "./assets/html-pages/page-179.html",
        "label": "PDF 第 179 页"
      }
    ],
    "searchText": "3.73 查询号码群组号码 接口地址/external/server/GetLimitE164\n请求格式\n参数名称 必须 类型 描述信息\nlimitE164GroupName M String 号码群组名称（具备唯一性的可显\n标识）\ne164 O String 号码；支持多个，逗号分隔\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoLimitE164s O infoLimitE164[] 号码群组下的具体信息\ninfoLimitE164 格式\n参数名称 必须 类型 描述信息\ne164 O String 号码\nmemo O String 备注信息"
  },
  {
    "no": "3.74",
    "title": "创建 Ivr 语音",
    "slug": "s-3-74",
    "level": 2,
    "sourcePage": 180,
    "endPage": 180,
    "endpoint": "/external/server/CreateIvrAudio",
    "pages": [
      {
        "number": 180,
        "html": "./assets/html-pages/page-180.html",
        "label": "PDF 第 180 页"
      }
    ],
    "searchText": "3.74 创建 Ivr 语音 接口地址/external/server/CreateIvrAudio\n请求格式\n参数名称 必须 类型 描述信息\ntype M int 语音类型\n0:公共语音\n1:内置语音\n2:彩铃语音\n3:企业总机语音\n4:回拨直拨语音\n5:增值业务语音\n6:告警语音\n7:语音信箱语音\nname M String 语音名称\nlanguage O String 语言\nivrServiceName O String 所属流程名称\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\nid O Integer 语音标识"
  },
  {
    "no": "3.75",
    "title": "修改 Ivr 语音",
    "slug": "s-3-75",
    "level": 2,
    "sourcePage": 181,
    "endPage": 181,
    "endpoint": "/external/server/ModifyIvrAudio",
    "pages": [
      {
        "number": 181,
        "html": "./assets/html-pages/page-181.html",
        "label": "PDF 第 181 页"
      }
    ],
    "searchText": "3.75 修改 Ivr 语音 接口地址/external/server/ModifyIvrAudio\n请求格式\n参数名称 必须 类型 描述信息\nid M int 语音标识\nlanguage O String 语言\nivrServiceName O String 所属流程名称\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.76",
    "title": "删除 Ivr 语音",
    "slug": "s-3-76",
    "level": 2,
    "sourcePage": 182,
    "endPage": 182,
    "endpoint": "/external/server/DeleteIvrAudio",
    "pages": [
      {
        "number": 182,
        "html": "./assets/html-pages/page-182.html",
        "label": "PDF 第 182 页"
      }
    ],
    "searchText": "3.76 删除 Ivr 语音 接口地址/external/server/DeleteIvrAudio\n请求格式\n参数名称 必须 类型 描述信息\nid M int 语音标识\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.77",
    "title": "获取 Ivr 语音",
    "slug": "s-3-77",
    "level": 2,
    "sourcePage": 183,
    "endPage": 184,
    "endpoint": "/external/server/GetIvrAudio",
    "pages": [
      {
        "number": 183,
        "html": "./assets/html-pages/page-183.html",
        "label": "PDF 第 183 页"
      },
      {
        "number": 184,
        "html": "./assets/html-pages/page-184.html",
        "label": "PDF 第 184 页"
      }
    ],
    "searchText": "3.77 获取 Ivr 语音 接口地址/external/server/GetIvrAudio\n请求格式\n参数名称 必须 类型 描述信息\ntype O Integer 语音类型（与 ids 二选其一）\n0:公共语音\n1:内置语音\n2:彩铃语音\n3:企业总机语音\n4:回拨直拨语音\n5:增值业务语音\n6:告警语音\n7:语音信箱语音\nids O int [] 语音标识列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoIvrAudios O InfoIvrAudio [] 语音信息列表\nInfoIvrAudio 格式\n参数名称 必须 类型 描述信息\nid M int 语音标识\ntype M int 语音类型\n0:公共语音\n1:内置语音\n2:彩铃语音\n3:企业总机语音\n4:回拨直拨语音\n5:增值业务语音\n6:告警语音\n7:语音信箱语音\nname M String 语音名称\n参数名称 必须 类型 描述信息\nlanguage M String 语言\nivrServiceName M String 所属流程名称\nsize M int 语音存储大小\nmemo M String 备注"
  },
  {
    "no": "3.78",
    "title": "修改 Ivr 语音数据",
    "slug": "s-3-78",
    "level": 2,
    "sourcePage": 185,
    "endPage": 185,
    "endpoint": "/external/server/ModifyIvrAudioData",
    "pages": [
      {
        "number": 185,
        "html": "./assets/html-pages/page-185.html",
        "label": "PDF 第 185 页"
      }
    ],
    "searchText": "3.78 修改 Ivr 语音数据 接口地址/external/server/ModifyIvrAudioData\n请求格式\n参数名称 必须 类型 描述信息\nid M int 语音标识\ndata M String wav 文件信息，需将 byte 流转换为\n16 进制字符串 （如byte 值 128 对应\n字 符 串”80” byte 值 0 对 应 字 符\n串”00”,byte 值 255 对应字符串”FF”\n文件格式:\nPCM_SIGNED 8000.0 Hz, 16 bit,\nmono, 2 bytes/frame, little-endian\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.79",
    "title": "创建号码变换表",
    "slug": "s-3-79",
    "level": 2,
    "sourcePage": 186,
    "endPage": 186,
    "endpoint": "/external/server/CreateE164Convert",
    "pages": [
      {
        "number": 186,
        "html": "./assets/html-pages/page-186.html",
        "label": "PDF 第 186 页"
      }
    ],
    "searchText": "3.79 创建号码变换表 接口地址/external/server/CreateE164Convert\n请求格式\n参数名称 必须 类型 描述信息\nmappingGatewayCallerE1\nM String 对接网关呼入主叫号码\ne164 M String 电话号码\nroutingGatewayCalleeE16\nM String 落地网关呼出被叫号码\nmemo M String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\nid O Integer 唯一标识"
  },
  {
    "no": "3.80",
    "title": "修改号码变换表",
    "slug": "s-3-80",
    "level": 2,
    "sourcePage": 187,
    "endPage": 187,
    "endpoint": "/external/server/ModifyE164Convert",
    "pages": [
      {
        "number": 187,
        "html": "./assets/html-pages/page-187.html",
        "label": "PDF 第 187 页"
      }
    ],
    "searchText": "3.80 修改号码变换表 接口地址/external/server/ModifyE164Convert\n请求格式\n参数名称 必须 类型 描述信息\nid M int 唯一标识\nmappingGatewayCallerE1\nO String 对接网关呼入主叫号码\nroutingGatewayCalleeE16\nO String 落地网关呼出被叫号码\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.81",
    "title": "删除号码变换表",
    "slug": "s-3-81",
    "level": 2,
    "sourcePage": 188,
    "endPage": 188,
    "endpoint": "/external/server/DeleteE164Convert",
    "pages": [
      {
        "number": 188,
        "html": "./assets/html-pages/page-188.html",
        "label": "PDF 第 188 页"
      }
    ],
    "searchText": "3.81 删除号码变换表 接口地址/external/server/DeleteE164Convert\n请求格式\n参数名称 必须 类型 描述信息\nid M int 唯一标识\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.82",
    "title": "中断通话",
    "slug": "s-3-82",
    "level": 2,
    "sourcePage": 189,
    "endPage": 189,
    "endpoint": "/external/server/DisconnectCurrentCall",
    "pages": [
      {
        "number": 189,
        "html": "./assets/html-pages/page-189.html",
        "label": "PDF 第 189 页"
      }
    ],
    "searchText": "3.82 中断通话 接口地址/external/server/DisconnectCurrentCall\n请求格式\n参数名称 必须 类型 描述信息\ncallIds M int [] 呼叫在软交换中的唯一标识列表。\n请参考查询当前通返回的 callId\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.83",
    "title": "获取所有在线话机",
    "slug": "s-3-83",
    "level": 2,
    "sourcePage": 190,
    "endPage": 190,
    "endpoint": "/external/server/GetAllPhoneOnline",
    "pages": [
      {
        "number": 190,
        "html": "./assets/html-pages/page-190.html",
        "label": "PDF 第 190 页"
      }
    ],
    "searchText": "3.83 获取所有在线话机 接口地址/external/server/GetAllPhoneOnline\n请求格式\n参数名称 必须 类型 描述信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ne164s O String[] 所有在线的话机的电话号码"
  },
  {
    "no": "3.84",
    "title": "查询电话卡",
    "slug": "s-3-84",
    "level": 2,
    "sourcePage": 191,
    "endPage": 192,
    "endpoint": "/external/server/GetPhoneCard",
    "pages": [
      {
        "number": 191,
        "html": "./assets/html-pages/page-191.html",
        "label": "PDF 第 191 页"
      },
      {
        "number": 192,
        "html": "./assets/html-pages/page-192.html",
        "label": "PDF 第 192 页"
      }
    ],
    "searchText": "3.84 查询电话卡 接口地址/external/server/GetPhoneCard\n请求格式\n参数名称 必须 类型 描述信息\npin M String 卡号\npassword O String 密码\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoPhoneCard O InfoPhoneCard 电话卡信息\nInfoPhoneCard 格式\n参数名称 必须 类型 描述信息\nmoney M double 起始时间（UTC 1970-01-01 至今的\n毫秒数 ）\nlimitMoney M double 透支限额\nbitsOfConfig M int 卡功能类型\n1<<1:允许用于开户\n1<<2:开户创建在用电话卡\n1<<3:开户创建平台话机\n1<<4:允许用于充值\n1<<5:充值时替换账户费率\n1<<6:充值时套餐加入账户订单\n1<<7:卡面值充入账户余额\nfeeRateGroup M String 费率组名称\nexpireTime M long 过期时间（UTC 1970-01-01 至今的\n毫秒数 ）\nusedTime O Long 已使用时间（UTC 1970-01-01 至今\n的毫秒数 ）\n不设置:表示未使用\nusedAccount O String 已使用账户\nagentAccount M String 代理商账户\n参数名称 必须 类型 描述信息\nsuiteNames M String [] 套餐名称列表\nmemo M String 备注信息"
  },
  {
    "no": "3.85",
    "title": "创建告警",
    "slug": "s-3-85",
    "level": 2,
    "sourcePage": 193,
    "endPage": 193,
    "endpoint": "/external/server/CreateAlarm",
    "pages": [
      {
        "number": 193,
        "html": "./assets/html-pages/page-193.html",
        "label": "PDF 第 193 页"
      }
    ],
    "searchText": "3.85 创建告警 接口地址/external/server/CreateAlarm\n请求格式\n参数名称 必须 类型 描述信息\nname M String 告警名称\nlevel int 告警级别\n0:一般\n1:次要\n2:主要\n3:紧急\nvalue O Double 默认值:0x7fffffff（32 位整形）\nalarmInfo O String 告警信息\nstartTime O Long 告警发生时间（UTC 1970-01-01 至\n今的毫秒数 ）\nstopTime O Long 告警结束时间（UTC 1970-01-01 至\n今的毫秒数 ）\nupper O Double 阈值上限\n取值范围:\n0x80000000～0x7fffffff（32 位整形）\nlower O Double 阈值下限:\n0x80000000～0x7fffffff（32 位整形）\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.86",
    "title": "创建地理围栏",
    "slug": "s-3-86",
    "level": 2,
    "sourcePage": 194,
    "endPage": 194,
    "endpoint": "/external/server/CreateIpLimit",
    "pages": [
      {
        "number": 194,
        "html": "./assets/html-pages/page-194.html",
        "label": "PDF 第 194 页"
      }
    ],
    "searchText": "3.86 创建地理围栏 接口地址/external/server/CreateIpLimit\n请求格式\n参数名称 必须 类型 描述信息\narea O String 地区名称\nip M String 起始 IP 地址 （请符合ipv4 格式。 如\n1.1.1.1）\ncount O int 从起始 IP 起的 IP 段总数\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.87",
    "title": "删除地理围栏",
    "slug": "s-3-87",
    "level": 2,
    "sourcePage": 195,
    "endPage": 195,
    "endpoint": "/external/server/Delete",
    "pages": [
      {
        "number": 195,
        "html": "./assets/html-pages/page-195.html",
        "label": "PDF 第 195 页"
      }
    ],
    "searchText": "3.87 删除地理围栏 接口地址/external/server/Delete IpLimit\n请求格式\n参数名称 必须 类型 描述信息\nips M String 删除对应起始 IP 的 IP 段\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.88",
    "title": "获取当前告警",
    "slug": "s-3-88",
    "level": 2,
    "sourcePage": 196,
    "endPage": 198,
    "endpoint": "/external/server/GetAlarmCurrent",
    "pages": [
      {
        "number": 196,
        "html": "./assets/html-pages/page-196.html",
        "label": "PDF 第 196 页"
      },
      {
        "number": 197,
        "html": "./assets/html-pages/page-197.html",
        "label": "PDF 第 197 页"
      },
      {
        "number": 198,
        "html": "./assets/html-pages/page-198.html",
        "label": "PDF 第 198 页"
      }
    ],
    "searchText": "3.88 获取当前告警 接口地址/external/server/GetAlarmCurrent\n请求格式\n参数名称 必须 类型 描述信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoAlarmCurrents O InfoAlarmCurrent 当前告警列表\nInfoAlarmCurrent 格式\n参数名称 必须 类型 描述信息\nid M int 告警唯一标识\n参数名称 必须 类型 描述信息\ntype M int 告警类型\n20000:落地网关 ASR\n20001:落地网关 ACD\n20002:落地网关并发下降\n20003:CPU 利用率\n20004:内存占用率\n20005:硬盘\n20006:待处理 CDR\n20007:账户余额\n20009:接收包速率\n20010:接收数据流量\n20011:发送包速率\n20012:发送数据流量\n20013:对接网关 ASR\n20014:对接网关 ACD\n20015:对接网关并发下降\n20016:通话时长\n20017:数据库\n20018:进程终止\n20019:备机启用\n20020:非法呼叫\n20021:时钟偏差\n20022:落地网关并发上升\n20023:对接网关并发上升\n20026:登录 MAC 受限\n20027:主机数据库服务\n20028:备机数据库服务\nlevel M int 告警级别\n0:一般\n1:次要\n2:主要\n3:紧急\nname M String 告警名称\nstartTime M long 告警开始时间\n（UTC 1970-01-01 至今的毫秒数）\nstopTime O Long 告警结束时间\n（UTC 1970-01-01 至今的毫秒数）\n参数名称 必须 类型 描述信息\nvalue M double 告警值\nupper O Double 告警阈值上限\nlower O Double 告警阈值下限\nconfirmUser O String 告警确认用户\nconfirmTime O Long 告警确认时间\n（UTC 1970-01-01 至今的毫秒数）\nmemo M String 告警备注"
  },
  {
    "no": "3.89",
    "title": "IVR 中断通话",
    "slug": "s-3-89",
    "level": 2,
    "sourcePage": 199,
    "endPage": 199,
    "endpoint": "/external/server/DisconnectIvrCall",
    "pages": [
      {
        "number": 199,
        "html": "./assets/html-pages/page-199.html",
        "label": "PDF 第 199 页"
      }
    ],
    "searchText": "3.89 IVR 中断通话 接口地址/external/server/DisconnectIvrCall\n请求格式\n参数名称 必须 类型 描述信息\ncallIdentifiers M String [] IVR 的呼叫 ID 列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.90",
    "title": "创建手机地区",
    "slug": "s-3-90",
    "level": 2,
    "sourcePage": 200,
    "endPage": 200,
    "endpoint": "/external/server/CreateMobileArea",
    "pages": [
      {
        "number": 200,
        "html": "./assets/html-pages/page-200.html",
        "label": "PDF 第 200 页"
      }
    ],
    "searchText": "3.90 创建手机地区 接口地址/external/server/CreateMobileArea\n当 mobilePrefix 与存在的信息冲突时，系统将使用当前数据覆盖原有数据\n请求格式\n参数名称 必须 类型 描述信息\ninfoMobileAreas M InfoMobileArea [] 手机地区信息列表\nInfoMobileArea 格式\n参数名称 必须 类型 描述信息\nmobilePrefix M String 手机前缀（必须为 7 位数字）\n样例:1300000\nareaCode M String 地区区号\n北京区号样例:10\nareaName O String 地区名称\nmemo O String 备注\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.91",
    "title": "删除手机地区",
    "slug": "s-3-91",
    "level": 2,
    "sourcePage": 201,
    "endPage": 201,
    "endpoint": "/external/server/DeleteMobileArea",
    "pages": [
      {
        "number": 201,
        "html": "./assets/html-pages/page-201.html",
        "label": "PDF 第 201 页"
      }
    ],
    "searchText": "3.91 删除手机地区 接口地址/external/server/DeleteMobileArea\n请求格式\n参数名称 必须 类型 描述信息\nmobilePrefixes M String [] 手机前缀列表\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因"
  },
  {
    "no": "3.92",
    "title": "获取手机地区",
    "slug": "s-3-92",
    "level": 2,
    "sourcePage": 202,
    "endPage": 202,
    "endpoint": "/external/server/GetMobileArea",
    "pages": [
      {
        "number": 202,
        "html": "./assets/html-pages/page-202.html",
        "label": "PDF 第 202 页"
      }
    ],
    "searchText": "3.92 获取手机地区 接口地址/external/server/GetMobileArea\n请求格式\n参数名称 必须 类型 描述信息\nmobilePrefix O String 手机前缀\n不设置:获取所有手机地区\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ninfoMobileAreas O InfoMobileArea [] 手机地区信息， 参见 创建手机地区"
  },
  {
    "no": "4",
    "title": "对外请求",
    "slug": "s-4",
    "level": 1,
    "sourcePage": 203,
    "endPage": 204,
    "endpoint": "",
    "pages": [
      {
        "number": 203,
        "html": "./assets/html-pages/page-203.html",
        "label": "PDF 第 203 页"
      },
      {
        "number": 204,
        "html": "./assets/html-pages/page-204.html",
        "label": "PDF 第 204 页"
      }
    ],
    "searchText": "4 对外请求 系统对外请求采用 HTTP+JSON 方式，可配置对外请求提交的地址以及接口页面的后缀名称"
  },
  {
    "no": "4.1",
    "title": "对外请求配置",
    "slug": "s-4-1",
    "level": 2,
    "sourcePage": 203,
    "endPage": 204,
    "endpoint": "",
    "pages": [
      {
        "number": 203,
        "html": "./assets/html-pages/page-203.html",
        "label": "PDF 第 203 页"
      },
      {
        "number": 204,
        "html": "./assets/html-pages/page-204.html",
        "label": "PDF 第 204 页"
      }
    ],
    "searchText": "4.1 对外请求配置 步骤 1 /home/kunshi/vos3000/etc/server.conf 中填写推送地址参数\nOUT_POST_URL\n步骤 2 重新加载配置\nvos3000d reload\n步骤 3 开启功能"
  },
  {
    "no": "4.2",
    "title": "IVR 请求外部数据控制语音流程",
    "slug": "s-4-2",
    "level": 2,
    "sourcePage": 203,
    "endPage": 204,
    "endpoint": "",
    "pages": [
      {
        "number": 203,
        "html": "./assets/html-pages/page-203.html",
        "label": "PDF 第 203 页"
      },
      {
        "number": 204,
        "html": "./assets/html-pages/page-204.html",
        "label": "PDF 第 204 页"
      }
    ],
    "searchText": "4.2 IVR 请求外部数据控制语音流程 接口页面:PushDtmfInfo\n请求格式\n参数名称 必须 类型 描述信息\nflowNo M long 本呼叫唯一标识\ncallerE164 M String 主叫号码\ncalleeE164 M String 被叫号码\naccessE164 M String 接入号\nmenuName M String 菜单名称\n参数名称 必须 类型 描述信息\ndtmf M String 客户按键信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码（由外部系统定义，系统根\n据返回码执行后续流程，若为收到\n返回信息或无指定后续流程则执行\n默认流程）\nexception O String 错误原因\naudioNames O String [] 语音参数列表"
  },
  {
    "no": "4.3",
    "title": "IVR 请求外部数据控制语音流程 2",
    "slug": "s-4-3",
    "level": 2,
    "sourcePage": 205,
    "endPage": 205,
    "endpoint": "",
    "pages": [
      {
        "number": 205,
        "html": "./assets/html-pages/page-205.html",
        "label": "PDF 第 205 页"
      }
    ],
    "searchText": "4.3 IVR 请求外部数据控制语音流程 2 接口页面:PushDtmfInfos\n请求格式\n参数名称 必须 类型 描述信息\nflowNo M long 本呼叫唯一标识\ncallerE164 M String 主叫号码\ncalleeE164 M String 被叫号码\naccessE164 M String 接入号\ninfoDtmfs M InfoDtmf [] 菜单按键信息\nInfoDtmf 格式\n参数名称 必须 类型 描述信息\nmenuName M String 菜单名称\ndtmf M String 客户按键信息\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码（由外部系统定义，系统根\n据返回码执行后续流程，若为收到\n返回信息或无指定后续流程则执行\n默认流程）\nexception O String 错误原因\naudioNames O String [] 语音参数列表"
  },
  {
    "no": "4.4",
    "title": "平台话机上下线通知",
    "slug": "s-4-4",
    "level": 2,
    "sourcePage": 206,
    "endPage": 206,
    "endpoint": "",
    "pages": [
      {
        "number": 206,
        "html": "./assets/html-pages/page-206.html",
        "label": "PDF 第 206 页"
      }
    ],
    "searchText": "4.4 平台话机上下线通知 接口页面:PhoneOnline\n请求格式\n参数名称 必须 类型 描述信息\ne164 M String 话机号码\ndids M String[] 一机多号列表\nonline M boolean true:话机上线\nfalse:话机离线\neventTime M long 事件产生时间\n（UTC 1970-01-01 至今的毫秒数）\nlocalIp M String 服务器本地 IP\nlocalPort M int 服务器本地端口\nremoteIp M String 远端 IP\nproductId M String 设备名称\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码"
  },
  {
    "no": "4.5",
    "title": "呼叫状态通知",
    "slug": "s-4-5",
    "level": 2,
    "sourcePage": 207,
    "endPage": 208,
    "endpoint": "",
    "pages": [
      {
        "number": 207,
        "html": "./assets/html-pages/page-207.html",
        "label": "PDF 第 207 页"
      },
      {
        "number": 208,
        "html": "./assets/html-pages/page-208.html",
        "label": "PDF 第 208 页"
      }
    ],
    "searchText": "4.5 呼叫状态通知 接口页面:CallStateReport\n请求格式\n参数名称 必须 类型 描述信息\ncallId M int 呼叫唯一标识\ncallState M int 呼叫状态\n-1:呼叫初始化(Setup)\n-2:呼叫接续中(CallProceeding)\n-3: 呼叫接续中\n(CallProceeding(RTP))\n-4:呼叫接续中(Progress)\n-5:振铃(Alerting)\n-6:接通(Connet)\n-7:呼叫初始化(Invite)\n-8:呼叫接续中(Trying)\n-9:呼叫接续中(SessionProgress)\n-10: 呼 叫 接 续 中\n(SessionProgress(SDP))\n-11:振铃(Ringing)\n-12:接通(Ok)\n-13:挂断(Release)\n-18:呼叫鉴权中， 即还未发送至被叫\n方。\neventTime M long 事件产生时间\n（UTC 1970-01-01 至今的毫秒数）\ncallerE164 M String 主叫号码\ncalleeE164 M String 被叫号码\ncallerGatewayId O String 主叫网关名称\ncalleeGatewayId O String 被叫网关名称\ncallerIp M String 主叫 IP\ncalleeIp M String 被叫 IP\ncallerLocalIp M String 主叫接入的本地 IP\ncalleeLocalIp M String 被叫发起的本地 IP\ntransactionId O String\n参数名称 必须 类型 描述信息\ncallIdentifier M String 主叫 SIP 头域 Call-ID\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码"
  },
  {
    "no": "4.6",
    "title": "账户余额变化",
    "slug": "s-4-6",
    "level": 2,
    "sourcePage": 209,
    "endPage": 209,
    "endpoint": "",
    "pages": [
      {
        "number": 209,
        "html": "./assets/html-pages/page-209.html",
        "label": "PDF 第 209 页"
      }
    ],
    "searchText": "4.6 账户余额变化 仅当账户充值与非话单类扣费触发\n接口页面:CustomerMoneyChange\n请求格式\n参数名称 必须 类型 描述信息\naccount M String 账户号码\nmoney M double 账户当前余额\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码"
  },
  {
    "no": "4.7",
    "title": "当前告警通知",
    "slug": "s-4-7",
    "level": 2,
    "sourcePage": 210,
    "endPage": 210,
    "endpoint": "",
    "pages": [
      {
        "number": 210,
        "html": "./assets/html-pages/page-210.html",
        "label": "PDF 第 210 页"
      }
    ],
    "searchText": "4.7 当前告警通知 接口页面:AlarmCurrentReport\n请求格式\n参数名称 必须 类型 描述信息\ninfoAlarmCurrents M InfoAlarmCurrent [] 当前告警列表，结构定义参见“获\n取当前告警”\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\n5 额外选配接口"
  },
  {
    "no": "5.1",
    "title": "播放语音",
    "slug": "s-5-1",
    "level": 2,
    "sourcePage": 211,
    "endPage": 212,
    "endpoint": "/external/server/PlayAudio",
    "pages": [
      {
        "number": 211,
        "html": "./assets/html-pages/page-211.html",
        "label": "PDF 第 211 页"
      },
      {
        "number": 212,
        "html": "./assets/html-pages/page-212.html",
        "label": "PDF 第 212 页"
      }
    ],
    "searchText": "5.1 播放语音 接口地址/external/server/PlayAudio\n请求格式\n参数名称 必须 类型 描述信息\naudioes M String 语音文件名称列表（使用逗号分隔\n多个文件名称）\nlanguage O String 默认使用 accessE164 对应语音流程\n的语言\ncallerDisplayNumber O String 主叫去电显示号码\n不设置，表示采用系统默认方式\ncallee M String 被叫号码\naccessE164 M String 接入号码（流程所在话机号码）\naccessE164Password M String 接入号码密码 （流程所在话机密码）\nbillingNumber O String 计费号码\nbillingNumberType O Integer 计费号码类型\n0：根据 billingNumber 对应话机所\n在账户计费\n2：根据 billingNumber 对应绑定号\n码所在账户计费\n3：根据 billingNumber 对应在用电\n话卡所在账户计费\ntransactionId O String 提交识别码，用于本次请求与后续\n状态通知、话单的对应\n字符取值范围\nA 至 Z，a 至 z，0 至 9，以及-、_\n返回格式\n参数名称 必须 类型 描述信息\nretCode M int 返回码\nexception O String 错误原因\ntransactionId O String 与请求相同\n与 CallStateReport 的 transactionId\n一致\ncallIdentifier O String 呼叫唯一标识\n与 CallStateReport 的 callIdentifier\n一致"
  }
];
