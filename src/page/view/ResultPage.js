import React from "react";
// import TreeChartComponent from '../../common/TreeChart';
import ChartObj from '../../common/kg-chart';
import TableComponent from "../../common/Table";

function ResultPage() {

    const tableData = [
        { id: 203, name: '***', score: 90 },
        { id: 204, name: '***', score: 85 },
        { id: 304, name: '***', score: 92 },
    ]

    const data = {
        name: 'ESG 永續發展',
        children: [
            {
                name: '環境',
                level: 'high',
                children: [
                    {
                        name: '能源效率', level: 'medium', children:
                            [{ name: '203', level: 'low' }, { name: '204', level: 'low' }]
                    },
                    {
                        name: '水資源管理', level: 'medium', children:
                            [{ name: '205', level: 'low' }]
                    },
                ],
            },
            {
                name: '社會',
                level: 'high',
                children: [
                    {
                        name: '員工福利', level: 'medium', children:
                            [{ name: '301', level: 'low' }, { name: '302', level: 'low' }]
                    },
                    {
                        name: '社區餐與', level: 'medium', children:
                            [{ name: '303', level: 'low' }]
                    },
                ],
            },
        ],
    };

    return (
        <div>
            <TableComponent data={tableData} />
            <ChartObj data={data} />
        </div>
    );
}

export default ResultPage;
