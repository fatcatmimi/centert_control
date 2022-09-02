

export default {
    BaseStore: 'base',    //获取资源名称和部门列表
    CardStore: 'card',              //上方小面板的store
    TurnOverStore: 'turnOver',         //实时开户人数store
    TableStore: 'table',             //所有表格数据
    LineStore: 'line'               //所有线图表格
}


export const ModelIdConfig = {
    course: 4,    //听课
    A0: 6, //累计A0成单
    buy_after_course: 23,   //课后自助购买
    accumulated_sales: 18,   //累计销售额
    daily_sales: 19,//每日销售额
    daily_collection: 25,   //每日收钱
    accumulated_collection: 24  //累计收钱   
    //收钱（按小时累计）  29
    //收钱(按小时)  28

}
