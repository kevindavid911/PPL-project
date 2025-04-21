import React from "react"
import { Chart } from "./Chart"
import { Element3 } from "./Element3"
import { Folder2 } from "./Folder2"
import { Login } from "./Login"
import { Send } from "./Send"
import { Setting2 } from "./Setting2"
import calendarEdit from "./calendar-edit.svg"
import group from "./group.png"
import image from "./image.svg"
import logo from "./logo.png"
import vector2 from "./vector-2.png"
import vector3 from "./vector-3.png"
import "./styles.css"

const Chatbot = () => {
    return (
        <div classname="chatbot">
            <div classname="overlap">
                <div classname="overlap-group1">
                <img 
                classname="vuesax-linear" 
                src={calendarEdit} 
                alt="Vuesax linear" 
                />

                <div classname="text-wrapper">Chatbot</div>
            </div>

            <Folder2 classname="vuesax-linear-folder" />
            <div classname="vuesax-linear-wrapper">
                <Setting2 classname="setting-2" color="white" />
            </div>
            <div classname="div">Overview</div>
            <div classname="text-wrapper-2">Courses</div>
            <div classname="overlap-2">
                <div classname="text-wrapper-3">Statistic</div>
                <div classname="text">{""}</div>
            </div>
            <div classname="text-wrapper-4">Settings</div>
            <Chart classname="vuesax-linear-chart" />
            <Login classname="vuesax-linear-login" />
            <div classname="text-wrapper-5">Log Out</div>
            <Element3 classname="vuesax-bold-element" />
            <div classname="frame">
                <div classname="overlap-group-wrapper">
                    <div classname="overlap-group">
                        <img classmane="img" src={vector2} alt="Vector" />
                        <img classname="vector-2" src={vector3} alt="Vector" />
                        <img classname="group" src={group} alt="Group" />
                    </div>
                </div>

                <div classname="vidhalaya">ABCourse</div>
            </div>

            <div classname="chat-bot-UI">
                <div classname="overlap-3">
                    <div classname="div-wrapper">
                        <div classname="overlap-group-3">
                            <div classname="ellipse" />

                            <div classname="ellipse-2" />
                        </div>
                    </div>
                    <div classname="frame-2">
                        <p classname="p">What can i ask you to do?</p>
                    </div>
                    <div classname="frame-3">
                        <p classname="text-wrapper-6">
                            Ask anything about your project?
                        </p>

                        <Send classname="send-instance" />
                    </div>
                    <div classname="frame-4" >
                        <p classname="p">
                            Which one of my project is performing the best?
                        </p>
                    </div>

                    <div classname="frame-5">
                        <p classname="text-wrapper-7">
                            What project should I be concerned about right now?
                        </p>
                    </div>

                    <p classname="text-wrapper-8">Suggestions on what to ask Our AI</p>
                </div>
                
                <div classname="frame-6">
                    <img classname="logo" src={logo} alt="Logo" />

                    <div classname="text-wrapper-9">Ask our AI anything</div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Chatbot;