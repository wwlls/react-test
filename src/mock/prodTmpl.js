const prodTmplData = {
  MALLP031: { // 产品详情
    resultMap: {
      product_no: '10000', // 产品号码 ,
      product_code: '000012', // 产品代码 ,
      product_name: '财富理财月月盈', // 产品名称 ,
      product_short_name: '财富理财月月盈', // 产品简称 ,
      prod_des: '业绩计提基准：指管理人对本集合计划计提业绩报酬的比较基准。本集合计划每个封闭周期的业绩计提基准会有所不同', // i点击后描述 ,
      product_status: '2',
      product_state: '3', // 产品状态 0 立即购买灰色即按钮不能点击 1 预约 2 已预约 3 距抢购时间 4 立即购买可点击 5 已抢光 ,
      original_product_status: '', // 产品原始状态 新发基金需要 ,
      is_order: '', // 是否可预约 0 不可以 1 可以 ,
      fund_risk_level: '1', // 风险等级 ,
      fund_risk_level_name: '中低风险', // 风险等级 ,
      min_tendtendered_sum: '1000', // 起购金额 元 ,
      first_flag: '1', // 判断是否是首次购买 0不是，1是
      append_balance: '100', // 追加金额
      dividend_way: '1',
      prod_term: '30', // 期限 天 ,
      prod_begin_date: '20170101', // 产品成立日 yyyymmdd ,
      order_date_str: '20180410', // 认购日 yyyymmdd ,
      end_transtime: '20180201', // 结束日 yyyymmdd ,
      interest_date_str: '20180301', // 起息日 yyyymmdd ,
      expire_date_str: '20180401', // 到期日 yyyymmdd ,
      pre_paydate_desc: '20180501', // 预计到账日 yyyymmdd ,
      recom_reason: '价值和成长好属于偏低型，适合想获取稳健收益，但又不愿承担较大风险的人群。', // 推荐理由 ,
      cat_varieties: '偏债型', // 产品类型/风格(产品概况后的标注要展示文字) ,
      // cat_varieties: 'QDII型', // 产品类型/风格(产品概况后的标注要展示文字) ,
      category_name: '银行理财', // 二级分类名称
      distance_time: '', // 距离开抢时间 ,
      button_words: '', // 按钮文字 ,
      reward_ratio: '9.00', // 业绩计提基准 ,
      exchange_desc: '产品预计到期日2017年12月23日，到期需手动卖出，若不卖出，则自动展期，展期收益计算规则和现有产品保持一致。', // 交易说明 ,
      is_ration: '', // 是否可定投 0 否 1是 ,
      prodpurch_rate: '0.5000', // 购买费率 括号内 ,
      rebate_rate: ' ', // 折扣费率 括号外 ,
      sale_rule_str: '每位客户现参与一次，5万元起购，1万元递增，限购10万元。90天内开户的新客户均可购买(开户时间以最早开通股票账户或理财账户为准，小于等于90天为新客户，大于90天为老客户）。', // 购买规则 ,
      is_collect: '', // 是否已经收藏该产品 0 否 1 是 未登录状态未0 ,
      raise_begin_date: '20180603', // 募集开始时间 yyyymmdd ,
      raise_end_date: '20180610', // 募集结束时间 yyyymmdd ,
      enable_quota: '8000000', // 可用额度 元 ,
      used_quota: '22000000', // 已使用额度 元,
      total_quota: '30000000', // 总额度 元,
      open_date_str: '20180201', // 开放日
      sale_mode: '1', // 1认购，2申购
      suit_match_flag: '1', // 适当性匹配标识,0:不匹配;1:匹配
      elig_confirm_type: '2', // 0:适当性匹配提示已确认;1适当性不匹配警示已确认;2未做适当性测评警示已确认
      prod_type_ifs: '4', // 产品类型
      min_fsub_balance: '100', // 首次购买最低金额
      category_id: '10011', // 产品分类
      template_id: '10006' // 模板类型
    }
  },
  MALLP034: { // 产品动态信息
    resultMap: {
      product_no: '', // 产品号码 ,
      unit_net_value: '1.2321', // 单位净值 ,
      total_net_value: '', // 累积净值 ,
      income_unit: '1.3851', // 万份收益 ,
      mfund_year_rate: '5.4632', // 七日年化收益率 ,
      init_date: '20180403', // 交易日期 yyyMMdd ,
      nav_ratio: '4.5494', // 日涨跌幅 ,
      week_ratio: '12', // 周涨幅 ,
      month_ratio: '-12', // 1个月涨幅 ,
      month3_ratio: '', // 3个月涨幅 ,
      year_ratio: '', // 年涨幅 ,
      this_year_ratio: '23', // 今年来涨幅 ,
      total_ratio: '', // 总涨幅 ,
      annual_rate: '6.7412', // 预期年化收益
      upp_annual_rate: '9.1232', // 预期年化收益大值
      ruleList: '[{"rate_value":"1.0000","rate_type":"17000","end_div_stand":"0","rate_unit":"%","product_no":"107844","start_div_stand":"1","div_stand_unit":"万元","rebate_rate":"0"},{"rate_value":"2.0000","rate_type":"17000","end_div_stand":"1","rate_unit":"%","product_no":"107844","start_div_stand":"2","div_stand_unit":"万元","rebate_rate":"0"},{"rate_value":"3.0000","rate_type":"17000","end_div_stand":"2","rate_unit":"%","product_no":"107844","start_div_stand":"4","div_stand_unit":"万元","rebate_rate":"0"},{"rate_value":"4.0000","rate_type":"17000","end_div_stand":"4","rate_unit":"%","product_no":"107844","start_div_stand":"-1","div_stand_unit":"万元","rebate_rate":"0"}]'
    }
  },
  MALLP037: {
    resultMap: {
      product_no: '', //  产品编号
      product_code: '0000', //  产品代码
      product_name: '南方避险理财货币A基金', //  产品名称
      product_short_name: '南方避险(300903)', //  产品简称
      dividend_mode_desc: '红利再投', //  分红方式
      en_change_code: '', //  基金转换
      invest_scope: '本基金的投资对象是具有良好流动性的金融工具，包括国内依法发行上。', //  投资范围
      perf_compare_standard: '标普高盛原油商品指数收益率', //  业绩比较基准
      prod_begin_date: '2017-12-09', //  基金成立日期 yyyymmdd
      found_scale: '20亿元', //  基金成立规模 亿元
      latest_scale: '129.1亿元', //  基金最新规模 亿元
      organ_prodmana_name: '南方基金', //  管理人
      organ_prodtrustee_name: '工商银行', //  托管人
      fund_type_name: '', //  基金类型名称
      fund_risk_level: '中低风险', //  风险等级
      min_tendtendered_sum: '', //  起购金额 元
      append_balance: '', //  追加金额 元
      raise_begin_date: '', //  募集开始时间 yyyymmdd
      raise_end_date: '', //  募集结束时间 yyyymmdd
      min_ipo_amount: '', //  募集金额 亿元
      invest_strategy_desc: '', //  投资策略
      interest_date_str: '', //  起息日
      expire_date_str: '', //  到期日
      pre_paydate_desc: '' //  预计到账日
    }
  },
  MALLP061: { // 公告
    resultList: [
      {
        product_no: '', // 产品编号
        extend_id: '1', // 公告主键
        article_title: '汇添富基金管理股份有限公司关于合作伙伴邮储银行电子银行升级的公告电子银行升级的公告...', // 公告标题
        update_datetime: '' // 公告更新时间 yyyyMMddHHmm
      }, {
        product_no: '', // 产品编号
        extend_id: '2', // 公告主键
        article_title: '汇添富基金管理股份有限公司关于合作伙伴邮储银行电子银行升级的公告电子银行升级的公告...', // 公告标题
        update_datetime: '' // 公告更新时间 yyyyMMddHHmm
      }, {
        product_no: '', // 产品编号
        extend_id: '3', // 公告主键
        article_title: '汇添富基金管理股份有限公司关于合作伙伴邮储银行电子银行升级的公告电子银行升级的公告...', // 公告标题
        update_datetime: '' // 公告更新时间 yyyyMMddHHmm
      }
    ]
  },
  MALLP041: { // 历史行情
    resultList: [
      {
        product_code: '', // 产品编号
        init_date: '20171111', // 交易日期 yyyymmdd
        income_unit: '0.111', // 万份收益
        income_ratio: '1.4', // 日涨跌幅
        unit_net_value: '2', // 单位净值
        total_net_value: '0', // 累积净值
        seven_income_ratio: '4' // 七日年化收益
      }, {
        product_code: '', // 产品编号
        init_date: '20171112', // 交易日期 yyyymmdd
        income_unit: '0.211', // 万份收益
        income_ratio: '1.2', // 日涨跌幅
        unit_net_value: '1', // 单位净值
        total_net_value: '1', // 累积净值
        seven_income_ratio: '5' // 七日年化收益
      }, {
        product_code: '', // 产品编号
        init_date: '20171113', // 交易日期 yyyymmdd
        income_unit: '0.011', // 万份收益
        income_ratio: '3', // 日涨跌幅
        unit_net_value: '4', // 单位净值
        total_net_value: '3', // 累积净值
        seven_income_ratio: '2' // 七日年化收益
      }
    ]
  },
  MALLP042: { // 沪深300行情
    resultMap: {
      hs300rate: '2.5'
    },
    resultList: [
      {
        init_date: '20171111', // 交易日期 yyyymmdd
        nav_ratio: '2' // 日涨跌幅
      }, {
        init_date: '20171112', // 交易日期 yyyymmdd
        nav_ratio: '3' // 日涨跌幅
      }, {
        init_date: '20171113', // 交易日期 yyyymmdd
        nav_ratio: '4' // 日涨跌幅
      }
    ]
  },
  MALLP051: { // 基金经理列表
    resultList: [
      {
        manager_id: '', // 基金经理主键id
        manager_no: '', // 基金经理代码
        manager_name: '陈建波', // 基金经理名称
        begin_datetime: '2012-09-09', // 上任日期,格式：yyyy-MM-dd
        return_ratio: '16.56', // 回报率
        description_bkgd: '陈剑波：2000年9月起先后任职于无锡盛科信息技术有限公司、' +
        '深圳市赢时胜信息技术有限公司,从事系统开发及产品研发相关工作;' +
        '2006年1月加入招商基金管理有限公司信息技术部,从事软件开发工作。' +
        '陈剑波：2000年9月起先后任职于无锡盛科信息技术有限公司、' +
        '深圳市赢时胜信息技术有限公司,从事系统开发及产品研发相关工作;' +
        '2006年1月加入招商基金管理有限公司信息技术部,从事软件开发工作.。', // 背景介绍
        cycle: '1000', // 任期 /周期 天
        hs300_ratio: '12.89' // 沪深300率
      }, { // 基金经理
        manager_id: '', // 基金经理主键id
        manager_no: '', // 基金经理代码
        manager_name: '陈波', // 基金经理名称
        begin_datetime: '2012-09-09', // 上任日期,格式：yyyy-MM-dd
        return_ratio: '6.56', // 回报率
        description_bkgd: '陈剑波：2000年9月起先后任职于无锡盛科信息技术有限公司、' +
        '深圳市赢时胜信息技术有限公司,从事系统开发及产品研发相关工作;' +
        '2006年1月加入招商基金管理有限公司信息技术部,从事软件开发工作。' +
        '陈剑波：2000年9月起先后任职于无锡盛科信息技术有限公司、' +
        '深圳市赢时胜信息技术有限公司,从事系统开发及产品研发相关工作;' +
        '2006年1月加入招商基金管理有限公司信息技术部,从事软件开发工作.。', // 背景介绍
        cycle: '1000', // 任期 /周期 天
        hs300_ratio: '-2.89' // 沪深300率
      }
    ]
  },
  MALLP036: {// 持仓
    resultMap: {
      bond: '10', // 债券占比
      stock: '20', // 股票占比
      cash: '30', // 现金占比
      other: '40' // 其他占比
    },
    resultList: [ // 行业、股票、债券等
      {
        stock_name: '制造业', // 名称
        sipf_stock_code: '000651', // 代码
        market_value: '2322222', // 行业市值
        ratio_innv: '34', // 占净值比例
        latest_price: '534.2', // 最新价格
        nav_ratio: '-4.3' // 涨跌幅
      }, {
        stock_name: '金融业', // 名称
        sipf_stock_code: '000651', // 代码
        market_value: '33333', // 行业市值
        ratio_innv: '33', // 占净值比例
        latest_price: '534.2', // 最新价格
        nav_ratio: '4.3' // 涨跌幅
      }, {
        stock_name: '文化、体育和娱乐产业', // 名称
        sipf_stock_code: '000651', // 代码
        market_value: '343343', // 行业市值
        ratio_innv: '34', // 占净值比例
        latest_price: '534.2', // 最新价格
        nav_ratio: '4.33' // 涨跌幅
      }
    ]
  },
  MALLP071: { // 申购费率
    resultList: [
      {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '5', // 范围上限
        end_div_stand: '', // 范围下限
        div_stand_unit: '万', // 范围单位
        rate_value: '1.0000', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '20', // 范围上限
        end_div_stand: '5', // 范围下限
        div_stand_unit: '万', // 范围单位
        rate_value: '6.8400', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '', // 范围上限
        end_div_stand: '20', // 范围下限
        div_stand_unit: '万', // 范围单位
        rate_value: '6.8400', // 费率
        rebate_rate: '', // 折扣费率
        rate_unit: '%' // 费率单位
      }
    ]
  },
  MALLP072: { // 赎回费率
    resultList: [
      {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '7', // 范围上限
        end_div_stand: '', // 范围下限
        div_stand_unit: '天', // 范围单位
        rate_value: '1.0000', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '30', // 范围上限
        end_div_stand: '7', // 范围下限
        div_stand_unit: '天', // 范围单位
        rate_value: '0.0000', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '', // 范围上限
        end_div_stand: '30', // 范围下限
        div_stand_unit: '天', // 范围单位
        rate_value: '6.8400', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }
    ]
  },
  MALLP073: {
    resultList: [ // 运作费率
      {
        product_no: '', // 产品号码
        rate_type: '15000', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 16000 --托管费率
        start_div_stand: '30', // 范围上限
        end_div_stand: '7', // 范围下限
        div_stand_unit: '天', // 范围单位
        rate_value: '0.6000', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '16000', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 16000 --托管费率
        start_div_stand: '', // 范围上限
        end_div_stand: '30', // 范围下限
        div_stand_unit: '天', // 范围单位
        rate_value: '0.1000', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '19000', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 16000 --托管费率
        start_div_stand: '', // 范围上限
        end_div_stand: '30', // 范围下限
        div_stand_unit: '天', // 范围单位
        rate_value: '0.1000', // 费率
        rebate_rate: '1.0', // 折扣费率
        rate_unit: '%' // 费率单位
      }
    ]
  },
  MALLP075: { // 认购费率
    resultList: [
      {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '5', // 范围上限
        end_div_stand: '', // 范围下限
        div_stand_unit: '万', // 范围单位
        rate_value: '1.0000', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '20', // 范围上限
        end_div_stand: '5', // 范围下限
        div_stand_unit: '万', // 范围单位
        rate_value: '6.8400', // 费率
        rebate_rate: '1.5', // 折扣费率
        rate_unit: '%' // 费率单位
      }, {
        product_no: '', // 产品号码
        rate_type: '', // 费率号码 申购费率 :11210 12200--赎回费率 15000 --管理费率 1600 --托管费率
        start_div_stand: '', // 范围上限
        end_div_stand: '20', // 范围下限
        div_stand_unit: '万', // 范围单位
        rate_value: '6.8400', // 费率
        rebate_rate: '', // 折扣费率
        rate_unit: '%' // 费率单位
      }
    ]
  },
  MALLP039: {
    resultMap: {
      product_no: '', // 产品编号
      open_date_note: '本集合计划封闭期为自计划成立之日起3个月期间，' +
      '封闭期后每月7日开放，如遇节假日则顺延至最近一个工作日', // 开放说明
      min_tendtendered_sum: '100', // 起购金额 元
      append_balance: '10', // 追加金额 元
      unit_share: '1', // 单位份额面值 元
      prodsub_rate: '0.00', // 认购费率
      join_rate: '0.00', // 参与费率
      quit_rate: '0.00', // 退出费率
      trustee_rate: '0.00', // 托管费率
      manage_rate: '0.00', // 管理费率
      description1: '管理人按如下方式确定分配收益的金额、时间：本集合计划收益核算日为计划终止日，' +
      '计划份额期末份额本金及业绩基准收益=1元*(1+该份额的年化业绩比较基准*核算期实际天数/365)' // 收益分配
    }
  }
};

module.exports = prodTmplData;
