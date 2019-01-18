const prodData = {
  MALLP001: {
    resultList: [{
      serial_no: '', // 流水序号
      subsys_no: '', // 子系统编号
      adv_location: '', // 广告位位置
      description: '', // 广告位详细描述
      image_no: '', // 图片编号
      image_url: '../../static/images/home-banner.png', // 图片URL地址
      image_order: '', // 图片序号
      link_target: '', // 连接打开方式
      link_url: 'prod?template_id=10007&product_no=100000', // 连接URL
      status: '', // 状态
      publish_datetime: '', // 发布日期
      memo: '', // 备注
      branch_no: '', // 分支机构
      main_img: '', // 详情图片
      topic_no: '' // 栏目编号
    }]
  },
  MALLP012: {
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '1000000', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '1.0010', // 业绩计提基准
        min_tendtendered_sum: '50000', // 最低认购金额
        product_status: '4', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '10001', // 分类编号
        buy_end_date: '20180319', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10002', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '1.2883', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '500.0000', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '12', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划', // 产品业务分类名称
        enable_quota: '1000000000.0000', // 可用额度 元 ,
        used_quota: '220000000.0000', // 已使用额度 元
        total_quota: '300000000.0000', // 总额度 元
        tag_show_flag: '1' // 是否显示角标
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '1000000', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '50000', // 最低认购金额
        product_status: '3', // 产品状态数据
        product_state: '3', // 产品状态数据
        category_id: '10006', // 分类编号
        buy_end_date: '20180502', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '20', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10001', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '', // 近一年涨跌幅
        unit_net_value: '1.2321', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '0.0000', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '6', // 管理期限描述
        raise_begin_date: '20180329', // 募集开始日期
        category_name: '资管计划', // 产品业务分类名称
        enable_quota: '1000000000', // 可用额度 元 ,
        used_quota: '220000000', // 已使用额度 元
        total_quota: '300000000', // 总额度 元
        tag_show_flag: '1' // 是否显示角标
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '1000000', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '50000', // 最低认购金额
        product_status: '3', // 产品状态数据
        product_state: '12', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '20180502', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '5.3454', // 近一年涨跌幅
        unit_net_value: '1.2312', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '10000.0000', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180325', // 募集开始日期
        category_name: '资管计划', // 产品业务分类名称
        enable_quota: '1000000000', // 可用额度 元 ,
        used_quota: '220000000', // 已使用额度 元
        total_quota: '300000000', // 总额度 元
        tag_show_flag: '1' // 是否显示角标
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富2号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '4', // 产品状态数据
        product_state: '2', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '20181010', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10002', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '1000000.0000', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划', // 产品业务分类名称
        enable_quota: '1000000000', // 可用额度 元 ,
        used_quota: '220000000', // 已使用额度 元
        total_quota: '30000000', // 已使用额度 元
        tag_show_flag: '1' // 是否显示角标
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富3号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '4', // 产品状态数据
        product_state: '1', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '20180310', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '0.0000', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划', // 产品业务分类名称
        tag_show_flag: '1' // 是否显示角标
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富5号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '4', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '20181010', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10001', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '0.0000', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划', // 产品业务分类名称
        tag_show_flag: '1' // 是否显示角标
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富6号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '4', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '20181010', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10001', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '0.0000', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划', // 产品业务分类名称
        tag_show_flag: '1' // 是否显示角标
      }
    ]
  },
  MALLP022m1001: { // 财富一号
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '9.00', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10002', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180310', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      }
    ]
  },
  MALLP022m1002: { // 热销产品
    resultMap: {
      topic_no: '', // 栏目编号
      topic_name: '热销产品', // 主题名
      topic_des: '', // 栏目简述
      description: '', // 详细描述
      order_num: '', // 菜单排序信息
      status: '', // 状态
      topic_img_url: '', // 栏目列表图片
      topic_main_url: '', // 栏目详情图片
      topic_style: '', // 栏目名称样式
      parent_topic_no: '', // 父栏目编号
      tag_names: '' // 标签名称串
    },
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '50000', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '3', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '18', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '100', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '抢购中', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富2号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10001', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '10', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      }
    ]
  },
  MALLP022m1003: {
    resultMap: {
      topic_no: '', // 栏目编号
      topic_name: '基金精品', // 主题名
      topic_des: '', // 栏目简述
      description: '', // 详细描述
      order_num: '', // 菜单排序信息
      status: '', // 状态
      topic_img_url: '', // 栏目列表图片
      topic_main_url: '', // 栏目详情图片
      topic_style: '', // 栏目名称样式
      parent_topic_no: '', // 父栏目编号
      tag_names: '' // 标签名称串
    },
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10002', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富2号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10003', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '-2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富3号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10004', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '30', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富4号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10005', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '10', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      }
    ]
  },
  MALLP022m1004: { // 定期理财
    resultMap: {
      topic_no: '', // 栏目编号
      topic_name: '定期理财', // 主题名
      topic_des: '', // 栏目简述
      description: '', // 详细描述
      order_num: '', // 菜单排序信息
      status: '', // 状态
      topic_img_url: '', // 栏目列表图片
      topic_main_url: '', // 栏目详情图片
      topic_style: '', // 栏目名称样式
      parent_topic_no: '', // 父栏目编号
      tag_names: '' // 标签名称串
    },
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10006', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富2号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '10', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      }
    ]
  },
  MALLP022m1005: { // 高端理财
    resultMap: {
      topic_no: '', // 栏目编号
      topic_name: '高端理财', // 主题名
      topic_des: '', // 栏目简述
      description: '', // 详细描述
      order_num: '', // 菜单排序信息
      status: '', // 状态
      topic_img_url: '', // 栏目列表图片
      topic_main_url: '', // 栏目详情图片
      topic_style: '', // 栏目名称样式
      parent_topic_no: '', // 父栏目编号
      tag_names: '' // 标签名称串
    },
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富2号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '10', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      }
    ]
  },
  MALLP022m1006: { // 最佳表现基金栏目
    resultMap: {
      topic_no: '', // 栏目编号
      topic_name: '最佳表现基金（近一年）', // 主题名
      topic_des: '', // 栏目简述
      description: '', // 详细描述
      order_num: '', // 菜单排序信息
      status: '', // 状态
      topic_img_url: '', // 栏目列表图片
      topic_main_url: '', // 栏目详情图片
      topic_style: '', // 栏目名称样式
      parent_topic_no: '', // 父栏目编号
      tag_names: '' // 标签名称串
    },
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10001', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富2号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10002', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '-2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富3号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10004', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '30', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富4号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '10', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      }
    ]
  },
  MALLP022m1007: { // 高端理财
    resultMap: {
      topic_no: '', // 栏目编号
      topic_name: '精选基金', // 主题名
      topic_des: '', // 栏目简述
      description: '', // 详细描述
      order_num: '', // 菜单排序信息
      status: '', // 状态
      topic_img_url: '', // 栏目列表图片
      topic_main_url: '', // 栏目详情图片
      topic_style: '', // 栏目名称样式
      parent_topic_no: '', // 父栏目编号
      tag_names: '' // 标签名称串
    },
    resultList: [
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富1号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '2', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      },
      {
        product_no: '', // 品种序号
        product_code: '', // 产品代码
        product_name: '财富一号', // 产品名称
        product_short_name: '财富2号', // 产品简称
        prod_type_ifs: '5', // 柜台产品分类
        sale_mode: '', // 销售模式（0为认购；1为申购
        fund_code: '', // TA代码
        single_sub_uplimit: '', // 单笔限购额度
        prod_term: '30', // 产品期限
        reward_ratio: '', // 业绩计提基准
        min_tendtendered_sum: '5', // 最低认购金额
        product_status: '', // 产品状态数据
        product_state: '4', // 产品状态数据
        category_id: '18', // 分类编号
        buy_end_date: '', // 购买截止日期
        prod_begin_date: '', // 产品成立日
        cat_varieties: '', // 产品品种
        fund_risk_level: '', // 产品风险等级
        template_id: '10000', // 产品模板ID
        is_order: '', // 是否可预约
        is_trans: '', // 是否允许转让
        is_raise: '', // 是否募集
        is_purchase: '', // 是否可申购
        expire_date_str: '',
        month_ratio: '', // 近一月涨跌幅
        month3_ratio: '', // 近三月涨跌幅
        month6_ratio: '', // 近半年涨跌幅
        total_ratio: '', // 成立以来涨跌幅
        income_type: '', // 收益类型，取值参照 收益类型字典接口
        annual_rate: '7', // 参考年化收益率
        year_ratio: '10', // 近一年涨跌幅
        unit_net_value: '', // 单位净值（无单位，保留4位小数）
        mfund_year_rate: '', // 七日年化收益率
        income_unit: '', // 万份收益 （无单位，保留4位小数）
        surplus_buy_quota: '', // 产品剩余购买额度
        prodpurch_rate: '', // 原申购费率
        prodsub_rate: '', // 原认购费率
        rebate_rate: '', // 购买费率
        dividend_mode_desc: '',
        open_date_str: '',
        cat_varieties_name: '', // 产品品种描述
        product_status_desc: '', // 产品状态描述
        fund_risk_level_name: '低', // 产品风险等级描述
        manage_term: '', // 管理期限描述
        raise_begin_date: '20180110', // 募集开始日期
        category_name: '资管计划' // 产品业务分类名称
      }
    ]
  },
  MALLB021mall_index: { // 根据位置查询导航列表 商城首页
    resultList: [{
      nav_id: '10000', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '定期理财', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'finance', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }, {
      nav_id: '10001', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '公募基金', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'fund', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }, {
      nav_id: '10002', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '高端理财', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'finance/high-end', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }, {
      nav_id: '10003', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '理财资产', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'holdings', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }]
  },
  MALLB021regular: { // 根据位置查询导航列表 定期理财
    resultList: [{
      nav_id: '10004', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '定期理财', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'finance/regular', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }, {
      nav_id: '10005', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '高端理财', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'finance/regular-high-end', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }]
  },
  MALLB021fund: { // 根据位置查询导航列表 公募基金
    resultList: [{
      nav_id: '10006', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '业绩排行', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'fund/ranking', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }, {
      nav_id: '10007', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '基金套餐', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'fund/package', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }, {
      nav_id: '10008', // 流水序号
      subsys_no: '', // 子系统编号
      nav_location: '', // 导航位位置
      nav_title: '新发基金', // 导航位详细描述
      icon: '', // 图片编号
      icon_url: '', // 图片URL地址
      link_target: '', // 连接打开方式
      link_url: 'fund/new', // 连接URL
      apps_scope: '', // 使用范围
      status: '' // 状态
    }]
  },
  MALL0001: {
    resultList: [{
      entry_name: '产品风格',
      subentry: '0',
      memo: '',
      access_leverl: '',
      status: '8',
      dict_prompt: '股票型',
      dict_entry: '11515',
      order_no: '1'
    }, {
      entry_name: '产品风格',
      subentry: '1',
      memo: '',
      access_leverl: '',
      status: '8',
      dict_prompt: '混合型',
      dict_entry: '11515',
      order_no: '2'
    }, {
      entry_name: '产品风格',
      subentry: '2',
      memo: '',
      access_leverl: '',
      status: '8',
      dict_prompt: '债券型',
      dict_entry: '11515',
      order_no: '3'
    }, {
      entry_name: '产品风格',
      subentry: '3',
      memo: '',
      access_leverl: '',
      status: '8',
      dict_prompt: '货币型',
      dict_entry: '11515',
      order_no: '4'
    }]
  },
 
  MALLP081: { // 首页套餐查询
    resultList: [
      {
        package_id: '100001', // 套餐id
        package_name: '基金套餐', // 套餐名称
        product_name: '财富宝n号 ', // 产品名称
        contain_type: '0',
        year_rate: '7', // 近一年收益率
        tag_list: [ // 标签列表
          {
            tag_id: '', // 标签id
            tag_name: '专业机构精选', // 标签名称
            tag_color: '#F0374E' // 标签颜色
          }, {
            tag_id: '', // 标签id
            tag_name: '稳健理财专选', // 标签名称
            tag_color: '#F58F29' // 标签颜色
          }
        ]
      }, {
        package_id: '100001', // 套餐id
        package_name: '基金套餐', // 套餐名称
        product_name: '财富宝n号 ', // 产品名称
        contain_type: '1',
        year_rate: '7', // 近一年收益率
        tag_list: [ // 标签列表
          {
            tag_id: '', // 标签id
            tag_name: '专业机构精选', // 标签名称
            tag_color: '#F0374E' // 标签颜色
          }, {
            tag_id: '', // 标签id
            tag_name: '稳健理财专选', // 标签名称
            tag_color: '#F58F29' // 标签颜色
          }
        ]
      }
    ]
  },
  MALLP082: {
    resultMap: {
      package_id: '', // 套餐id
      package_name: '', // 套餐名称
      description: '整体来看，7月份市场投资风格并未发生改变，消费、周期、蓝筹等依然是投资大方向，' +
      '而业绩突出、估值具有吸引力的成长板块，预计有望成为下 ......', // 套餐说明
      recom_reason: '', // 推荐理由
      detail_content: '', // 详情内容
      product_name: '', // 产品名称
      year_rate: '', // 近一年收益率
      update_datetime: '', // 更新时间
      tag_list: [] // 标签列表
    },
    resultList: [ // 子套餐列表
      {
        package_id: '10001', // 套餐id
        package_name: '安享回报套餐', // 套餐名称
        description: '南方策略优化股票型', // 套餐说明
        recom_reason: '中低风险能力客户首选', // 推荐理由
        detail_content: '', // 详情内容
        product_name: '南方策略优化股票型', // 产品名称
        year_rate: '-7', // 近一年收益率
        update_datetime: '', // 更新时间
        tag_list: [ // 标签列表
          {
            tag_id: '', // 标签id
            tag_name: '1000元起购', // 标签名称
            tag_color: '#F0374E' // 标签颜色
          }, {
            tag_id: '', // 标签id
            tag_name: '中低风险', // 标签名称
            tag_color: '#F58F29' // 标签颜色
          }
        ]
      },
      {
        package_id: '10002', // 套餐id
        package_name: '安享回报套餐', // 套餐名称
        description: '南方策略优化股票型', // 套餐说明
        recom_reason: '中低风险能力客户首选', // 推荐理由
        detail_content: '', // 详情内容
        product_name: '南方策略优化股票型', // 产品名称
        year_rate: '-7', // 近一年收益率
        update_datetime: '', // 更新时间
        tag_list: [ // 标签列表
          {
            tag_id: '', // 标签id
            tag_name: '1000元起购', // 标签名称
            tag_color: '#F0374E' // 标签颜色
          }, {
            tag_id: '', // 标签id
            tag_name: '中低风险', // 标签名称
            tag_color: '#F58F29' // 标签颜色
          }
        ]
      }
    ]
  },
  MALLP083: { // 耳机套餐
    resultMap: {
      package_id: '', // 套餐id
      package_name: '南方策略优化', // 套餐名称
      description: '该套餐风险偏好属于偏低型，适合想获取稳健收益，但又不愿承担较大风险的人群。', // 套餐说明
      recom_reason: '', // 推荐理由
      detail_content: '', // 详情内容
      product_name: '', // 产品名称
      year_rate: '7', // 近一年收益率
      update_datetime: '20110101', // 更新时间
      tag_list: [] // 标签列表
    },
    resultList: []
  },
  MALLP084: { // 套餐详情查询
    resultMap: {
      package_id: '', // 套餐id
      detail_type: '1', // 套餐详情类型，1：文本 2：pdf
      detail_title: '稳健配制，寻找下一个风格', // 套餐详情标题
      detail_child_title: '', // 套餐详情副标题
      detail_content: 'abcd', // 套餐详情内容
      update_datetime: '2170101010101', // 套餐详情更新时间
      detail_url: '' // 套餐详情路径
    }
  },
  MALLP076: {
    resultMap: {
      total: '6'
    },
    resultList: [{
      begin_date: '20180101',
      end_date: '20180901',
      perf_compare_standard: '4.4'
    }, {
      begin_date: '20180201',
      end_date: '201801001',
      perf_compare_standard: '5.4'
    }, {
      begin_date: '20180301',
      end_date: '20180901',
      perf_compare_standard: '6.4'
    }, {
      begin_date: '20180401',
      end_date: '201801001',
      perf_compare_standard: '7.4'
    }, {
      begin_date: '20180501',
      end_date: '20180901',
      perf_compare_standard: '8.4'
    }, {
      begin_date: '20180601',
      end_date: '201801001',
      perf_compare_standard: '9.4'
    }]
  }
};

module.exports = prodData;
