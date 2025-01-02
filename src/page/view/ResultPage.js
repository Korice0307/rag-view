import React from "react";
import TreeChartComponent from '../../EChart/TreeChart';

function ResultPage() {
    
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
            <TreeChartComponent data={data} />
        </div>
    );
}

export default ResultPage;
