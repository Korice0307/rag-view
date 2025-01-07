import React from "react";
import EChartComponent from "./../hooks/ExampleEChart";

export default function ExamplePage2() {
    return (
        <div className="app">
            <div className="page-container">
                {/* 引言部分 */}
                <section className="section">
                    <h2 className="section-title">引言</h2>
                    <p>
                        本報告展示了公司在可持續發展領域的努力，包括環境、社會責任、公司治理等方面。
                        我們致力於推動長期發展和全球氣候目標的實現。
                    </p>
                </section>

                {/* 新增的「此業可使用」部分 */}
                <section className="usage-container">
                    <h2>此業可使用</h2>
                    <p>
                        我們的系統和技術已經成功應用於多個領域，為各行各業提供了長期的價值。以下是部分應用場景：
                    </p>
                    <div className="usage-item">
                        <span className="usage-item-icon">🌍</span>
                        <span className="usage-item-text">環境保護：減少碳足跡，推動可再生能源的應用。</span>
                    </div>
                    <div className="usage-item">
                        <span className="usage-item-icon">💼</span>
                        <span className="usage-item-text">企業管理：提高運營效率，減少資源浪費。</span>
                    </div>
                    <div className="usage-item">
                        <span className="usage-item-icon">🏢</span>
                        <span className="usage-item-text">社會責任：關注員工福利和社會公益活動。</span>
                    </div>
                </section>

                {/* 公司概況與戰略 */}
                <section className="section">
                    <h2 className="section-title">公司概況與戰略</h2>
                    <p>
                        本公司在全球範圍內推行可持續發展戰略，致力於減低碳排放、增加綠色產品比例，並推動員工福利與職業發展。
                    </p>
                </section>

                {/* 環境部分 */}
                <section className="section">
                    <h2 className="section-title">環境</h2>
                    <p>
                        公司實施溫室氣體減排項目，並大力推進能源效率和可再生能源使用。此外，我們還關注廢棄物管理、污染防治及生態保護。
                    </p>
                </section>

                {/* 社會責任 */}
                <section className="section">
                    <h2 className="section-title">社會責任</h2>
                    <p>
                        我們在各個社會責任領域積極採取行動，包括提升員工福祉、推動多元化與包容性、以及參與社會公益事業。
                    </p>
                    <p>
                        我們堅持對社會負責的態度，並致力於創造有益於社會的可持續價值，努力提高公司在全球社會中的貢獻。
                    </p>
                </section>

                {/* 公司治理 */}
                <section className="section">
                    <h2 className="section-title">公司治理</h2>
                    <p>
                        公司推行良好的治理結構，確保公司運營符合最高的道德和法規標準。我們強調透明度、問責制和對股東的承諾。
                    </p>
                    <p>
                        我們持續進行治理結構的優化，保障股東利益，並促進公司各項業務的可持續增長。
                    </p>
                </section>

                {/* 未來展望 */}
                <section className="section">
                    <h2 className="section-title">未來展望</h2>
                    <p>
                        公司將繼續專注於創新與可持續發展，並積極探索新的技術和解決方案，提升環境、社會與治理表現。我們將不斷調整與優化策略，實現企業、社會和環境的三贏局面。
                    </p>
                    <p>
                        我們的目標是成為全球領先的可持續發展企業，並在所有業務領域實現長期的正面影響。
                    </p>
                </section>

                {/* 結論 */}
                <section className="section">
                    <h2 className="section-title">結論</h2>
                    <p>
                        本報告所展示的各項成就與未來計劃，彰顯了公司在可持續發展領域的承諾與努力。我們將持續追求卓越，為打造更綠色、更繁榮的未來不懈努力。
                    </p>
                    <p>
                        我們相信，通過全體員工和利益相關者的共同努力，我們將為世界的可持續發展做出積極貢獻。
                    </p>
                </section>
            </div>
        </div>
    );
}
