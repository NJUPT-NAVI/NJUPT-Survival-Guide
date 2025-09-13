export interface ShuttleStop {
    name: string;
    eta?: string;          // 预计到达，可选
}

export interface ShuttleTrip {
    id: string;
    color: 'red' | 'blue' | 'orange' | 'green';
    departure: string;      // 发车时间
    arrival?: string;       // 预计到达时间，可选
    start: string;
    end: string;
    days: string;           // 适用日期描述
    stops: ShuttleStop[];   // 途经站（不含起终点）
}

export interface ShuttleDirection {
    id: string;
    label: string;          // Tab 上显示，如 “往仙林”
    from: string;
    to: string;
    updated: string;        // 更新时间
    gradient?: string;      // 背景渐变
    trips: ShuttleTrip[];
}

export const shuttleDirections: ShuttleDirection[] = [
    {
        id: 'to-xianlin',
        label: '往仙林',
        from: '三牌楼',
        to: '仙林',
        updated: '2025-09-03',
        gradient: 'linear-gradient(135deg,#6ee7b7,#3b82f6)',
        trips: [
            {
                id: '0650',
                color: 'red',
                departure: '06:50',
                arrival: '07:30', 
                start: '三牌楼图书馆',
                end: '学科楼转盘',
                days: '周一至周五',
                stops: [
                    { name: '锁金村', eta: '07:05' },
                    { name: '新庄' },
                    { name: '聚宝山华孚加气站' },
                    { name: '仙林校内各站点' }
                ]
            },
            {
                id: '0735',
                color: 'blue',
                departure: '07:35',
                arrival: '08:15', 
                start: '三牌楼东门内',
                end: '学科楼转盘',
                days: '周一至周五',
                stops: [{ name: '锁金村' },
                { name: '新庄' },
                { name: '聚宝山华孚加气站' },
                { name: '仙林校内各站点' }]
            },
            {
                id: '1230',
                color: 'orange',
                departure: '12:30',
                arrival: '13:20', 
                start: '三牌楼图书馆',
                end: '学科楼转盘',
                days: '周一至周五',
                stops: [{ name: '新庄' },
                { name: '聚宝山华孚加气站' },
                { name: '仙林校内各站点' }]
            },
            {
                id: '1720',
                color: 'green',
                departure: '17:20',
                arrival: '18:00', 
                start: '三牌楼图书馆',
                end: '学科楼转盘',
                days: '周一至周五',
                stops: [{ name: '新庄' },
                { name: '聚宝山华孚加气站' },
                { name: '仙林校内各站点' }]
            }
        ]
    },
    {
        id: 'to-city',
        label: '往三牌楼',
        from: '仙林',
        to: '三牌楼',
        updated: '2025-09-03',
        gradient: 'linear-gradient(135deg,#93c5fd,#fcd34d)',
        trips: [
            {
                id: '0650',
                color: 'green',
                departure: '06:50',
                arrival: '07:30', 
                start: '青教公寓',
                end: '三牌楼东门内',
                days: '周一至周五',
                stops: [
                    { name: '鸿雁名局（西）' },
                    { name: '聚宝山华孚加气站' },
                    { name: '新庄' },
                    { name: '三牌楼东门内' }
                ]
            },
               {
                id: '1000',
                color: 'orange',
                departure: '10:00',
                arrival: '10:40', 
                start: '青教公寓',
                end: '三牌楼东门内',
                days: '周一至周五',
                stops: [
                    { name: '仙林内各站点' },
                    { name: '聚宝山公交站' },
                    { name: '新庄' }
                    
                ]
            },
            {
                id: '1230',
                color: 'blue',
                departure: '12:30',
                arrival: '13:10', 
                start: '学科楼转盘',
                end: '三牌楼图书馆',
                days: '周一至周五',
                stops: [
                    { name: '仙林内各站点' },
                    { name: '聚宝山公交站' },
                    { name: '新庄' }
                   
                ]
            },
            {
                id: '1720',
                color: 'red',
                departure: '17:20',
                arrival: '18:00', 
                start: '学科楼转盘',
                end: '三牌楼图书馆',
                days: '周一至周五',
                stops: [
                    { name: '仙林内各站点' },
                    { name: '聚宝山公交站' },
                    { name: '新庄' }
                   
                ]
            },
        ]
    }
];