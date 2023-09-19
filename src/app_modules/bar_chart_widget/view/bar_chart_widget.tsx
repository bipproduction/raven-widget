'use client'
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
Chart.register(CategoryScale, {
    id: "1",
    afterDraw: function (chart) {
        if (chart?.config?.options) {
            var ctx = chart.ctx;

        }
    }
});


// type DATA = {
//     "id": string,
//     "date": string,
//     "time": string,
//     "createdAt": string,
//     "updatedAt": string,
//     "cityId": number,
//     "persen": number,
//     "candidate1": {
//         "id": number,
//         "name": string,
//         "img": string
//     },
//     "candidate2": {
//         "id": number,
//         "name": string,
//         "img": string
//     }
// }

// const data = [120, 200, 150, 80, 70, 110, 130]
// const data2 = [
//     {
//         name: "2000",
//         value: 40
//     },
//     {
//         name: "2000",
//         value: 40
//     },
//     {
//         name: "2000",
//         value: 40
//     },
//     {
//         name: "2000",
//         value: 40
//     },
//     {
//         name: "2000",
//         value: 40
//     },
//     {
//         name: "2000",
//         value: 40
//     },
//     {
//         name: "2000",
//         value: 40
//     }
// ]

function fambar(url: string) {
    try {
        fetch(url)
        return url
    } catch (error) {
        return "https://avenuesrecruiting.com/wp-content/uploads/2016/12/candidate-icon-300x300.png"
    }
}

const option: (dataNya: any[], test: boolean) => EChartsOption = (dataNya: any[], test: boolean) => {

    return {
        xAxis: {
            type: 'value',
            show: true
        },
        yAxis: {
            type: 'category',
            data: dataNya.map((v) => ({
                value: v.candidate1.name + "\n" + v.candidate2.name
            })),
            splitLine: {
                show: true
            }
        },
        series: [
            {
                data: dataNya.map((v) => ({
                    value: v.persen,
                    label: {
                        align: "right",
                        offset: [-50,0],
                        backgroundColor: {
                            image: !test ? v.candidate1.img : "https://avenuesrecruiting.com/wp-content/uploads/2016/12/candidate-icon-300x300.png",
                        },
                        height: 50,
                        width: 50,
                        show: true,
                        position: 'right',
                        formatter: function (a: any) {
                            return "{b|}"
                        },
                        rich: {
                            b: {
                                // backgroundColor: 'https://cdn-icons-png.flaticon.com/512/5363/5363451.png',
                                verticalAlign: "bottom",
                                baseline: "bottom",
                                color: '#fff',
                                fontSize: 42,
                                fontWeight: "bold",
                                align: "right",
                            },
                        }
                    }
                })),
                type: 'bar',
                stack: "a",
                itemStyle: {
                    color: {
                        image: "https://static.vecteezy.com/system/resources/thumbnails/008/854/270/original/abstract-colorful-gradient-animation-background-free-video.jpg"
                    }
                }
            },
            {
                name: "apa",
                type: "bar",
                data: dataNya.map((v) => ({
                    name: "2",
                    value: 2,
                    label: {
                        offset: [-75, 0],
                        height: 50,
                        width: 50,
                        show: true,
                        position: 'right',
                        backgroundColor: {
                            image: !test ? v.candidate2.img : "https://avenuesrecruiting.com/wp-content/uploads/2016/12/candidate-icon-300x300.png",
                        },
                        formatter: function (a) {
                            return ""
                        }
                    }
                })),
                stack: "a",
                color: "white",
                itemStyle: {
                }, emphasis: {
                    disabled: true
                }
            },
            {
                name: "apa",
                type: "bar",
                data: dataNya.map((v) => ({
                    name: v.persen,
                    value: 15,
                    label: {
                        fontWeight: "bold",
                        show: true,
                        fontSize: 24,
                        color: "green",
                        formatter: function (a: any) {
                            return a.name + " %"
                        }
                    }
                })),
                stack: "a",
                color: "white",

                itemStyle: {
                    // opacity: 0
                }, emphasis: {
                    disabled: true
                }
            }
        ]
    }
}



export default function WidgetBarchart({ data, test }: { data: any[], test: boolean }) {

    return <>
        <EChartsReact style={{
            height: 500
        }} option={option(data, test)} />
    </>;

}

