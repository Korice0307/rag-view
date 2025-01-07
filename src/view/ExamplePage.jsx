import React from "react";
import EChartComponent from "./../hooks/ExampleEChart";
import Sidebar from '../component/Sidebar/index';
import TableComponent from "../component/Table";

export default function ExamplePage() {
    return (
        <div className="app">
            {/* Sidebar 旁邊的內容區域 */}
            <div className="page-container">
                <div className="h1">永續報告介紹</div>
                <div className="vertical-layout">
                    {/* 這裡可以放置表格或其他內容 */}
                    <p>永續報告書（Sustainability Report）是一份展示企業、組織或機構在經濟、環境和社會領域的表現及承諾的文件。它不僅有助於企業了解其對環境的影響，還能增強透明度、提高信任度，並讓利益相關者了解其對可持續發展的貢獻。</p>
                    <p>現代的永續報告書不僅包括環境指標，如碳排放量、水資源使用量和廢棄物處理，還涵蓋了社會責任和治理結構。許多國際標準和框架，如全球報告倡議（GRI）和碳揭露專案（CDP），都有助於指導企業如何撰寫這樣的報告。</p>
                    <p>以下是幾個永續報告的關鍵要素：</p>
                    <ul>
                        <li><strong>碳足跡：</strong>分析企業的碳排放量並制定減排計劃。</li>
                        <li><strong>水資源管理：</strong>關注水資源的使用情況並提出節水方案。</li>
                        <li><strong>社會責任：</strong>包括員工福祉、社會公益項目及社會影響。</li>
                        <li><strong>透明度與報告：</strong>公開企業的運營及財務狀況，強調負責任的治理。</li>
                    </ul>
                    <p>企業通過定期發佈永續報告，可以建立對內外部利益相關者的信任，並展示其在永續發展領域的承諾。這不僅是企業責任的一部分，也能提高品牌價值和市場競爭力。</p>
                </div>
                <TableComponent />
            </div>
        </div>
    );
}
