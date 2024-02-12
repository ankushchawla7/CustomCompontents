import React, { useState } from 'react'

const CustomNavTabs = () => {
    const [showTab, setShowTab] = useState("tab1");
    const tabChange = (id) => {
        setShowTab(id)
    }
    return (
        <>
            <section>
                <div>
                    <button className={showTab === "tab1" ? "focus" : ""} onClick={() => tabChange("tab1")}>Tab-1</button>
                    <button className={showTab === "tab2" ? "focus" : ""} onClick={() => tabChange("tab2")}>Tab-2</button>
                    <button className={showTab === "tab3" ? "focus" : ""} onClick={() => tabChange("tab3")}>Tab-3</button>
                </div>
                <div className='content-area'>
                    <div className={showTab === "tab1" ? "d-block" : "d-none"}>tab-1 content <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore accusamus mollitia laudantium hic aliquid autem itaque accusantium dolores perferendis provident, ut facere voluptatem suscipit debitis quaerat illum sequi esse magnam!</div>
                    <div className={showTab === "tab2" ? "d-block" : "d-none"}>tab-2 content <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit nemo, excepturi adipisci sapiente architecto optio necessitatibus consequuntur provident. Molestias necessitatibus, velit laborum quibusdam accusamus deserunt aliquid assumenda perferendis tempora!</div>
                    <div className={showTab === "tab3" ? "d-block" : "d-none"}>tab-3 content <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam aliquam nam quo ex repellendus laboriosam optio corporis nobis inventore nulla totam quisquam incidunt rerum, debitis obcaecati animi quaerat dignissimos.</div>

                </div>
            </section>
        </>
    )
}

export default CustomNavTabs